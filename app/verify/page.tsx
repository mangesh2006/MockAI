"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

function VerifyContent() {
    const params = useSearchParams();
    const token = params.get("token");

    useEffect(() => {
        if (!token) return;

        fetch(`/api/v1/auth/verify?token=${token}`)
            .then(async (res) => {
                const data = await res.json();
                if (res.ok) {
                    toast.success("Verification complete");
                } else {
                    toast.error(data.error || "Verification failed");
                }
            })
            .catch(() => toast.error("Something went wrong"));
    }, [token]);

    if (!token) {
        return <div>Invalid link</div>;
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center bg-white gap-6">
            <h2 className="text-4xl text-green-600">Verification complete</h2>
            <p className="text-xl">
                You can close this window now and{" "}
                <a href="https://mock-ai-sandy-seven.vercel.app" className="underline text-blue-500">
                    click here
                </a>{" "}
                to go back and login
            </p>
        </div>
    );
}

export default function VerifyPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerifyContent />
        </Suspense>
    );
}