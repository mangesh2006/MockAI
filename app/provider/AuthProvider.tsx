"use client";

import { useEffect } from "react";

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const refresh = async () => {
            if (document.visibilityState !== "visible") return;

            await fetch("/api/v1/auth/refresh", {
                method: "POST",
                credentials: "include",
            });
        };

        const interval = setInterval(
            refresh,
            13 * 60 * 1000
        );

        return () => clearInterval(interval);
    }, []);

    return <>{children}</>;
}