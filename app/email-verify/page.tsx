import VerifyEmail from '@/shared/Auth/VerifyEmail'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Verify Email",
    description: "This is a verification page of MockAI",
};

const page = () => {
    return (
        <VerifyEmail />
    )
}

export default page