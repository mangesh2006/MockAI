import { Client } from "@upstash/qstash";

export async function sendEmailJob(email: string, link: string) {
  const client = new Client({
    baseUrl: `${process.env.QSTASH_URL}`,
    token: `${process.env.QSTASH_TOKEN}`,
  });

  await client.publish({
    url: "https://mock-ai-sandy-seven.vercel.app/api/v1/auth/email-worker",
    body: JSON.stringify({
      email,
      link,
    }),
  });
}
