import HomePage from "@/components/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MockAI - Practice Real Interviews with AI",
  description: "This is a home page of MockAI",
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
