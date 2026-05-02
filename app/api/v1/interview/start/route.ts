import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { extractText } from "unpdf";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { redis } from "@/util/redis";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0.7,
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const role = formData.get("role") as string;
    const duration = formData.get("duration") as string;

    if (!file || !role || !duration) {
      return NextResponse.json({ error: "No data found" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const sessionId = uuid();

    const { text } = await extractText(new Uint8Array(buffer));

    const prompt = `
      Extract key details from resume:
      - Skills
      - Projects
      - Experience
    `;

    try {
      const ResumeSummary = ChatPromptTemplate.fromMessages([
        ["system", prompt],
        ["human", "{resume}"],
      ]);

      const chain = ResumeSummary.pipe(model);

      const summary = await chain.invoke({
        resume: text,
      });

      const questionPrompt = ChatPromptTemplate.fromMessages([
        [
          "system",
          `You are an interviewer for ${role}.
  Ask the first interview question based on resume and role.`,
        ],
        ["human", "{resumeSummary}"],
      ]);

      const questionChain = questionPrompt.pipe(model);

      const firstQuestion = await questionChain.invoke({
        resumeSummary: summary.content as string,
      });

      await redis.set(
        sessionId,
        JSON.stringify({
          role,
          duration,
          history: [],
          resumeSummary: summary.content,
          currentQuestion: firstQuestion.content,
        }),
        "EX",
        60 * 60,
      );
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { error: "Failed to process resume" },
        { status: 500 },
      );
    }

    return NextResponse.json({ sessionId, success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
