import Interview from "@/shared/Interview/Interview";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Interview",
    description: "This is a interview page of MockAI",
};

const page = async({ params }: { params: { id: string } }) => {
    const { id } = await params
    return (
        <Interview id={id} />
    )
}

export default page