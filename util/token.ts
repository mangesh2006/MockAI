import { redis } from "./redis.ts";
import jwt from "jsonwebtoken";

export async function createVerificationToken(email: string) {
  const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {
    expiresIn: "10m",
  });

  await redis.set(`verify:${token}`, email, "EX", 600);

  return token;
}
