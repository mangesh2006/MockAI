import type { Metadata } from "next";
import Dashboard from "../components/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard | MockAI - Practice Real Interviews with AI",
  description: "This is a dashboard of MockAI",
};

const page = () => {
  return (
    <Dashboard />
  )
}

export default page