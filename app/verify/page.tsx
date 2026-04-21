import VerifyPage from '@/shared/Auth/Verify'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Verify",
    description: "This is a verification page of MockAI",
};

const page = () => {
    return (
        <VerifyPage />
    )
}

export default page