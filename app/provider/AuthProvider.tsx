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

        refresh(); 

        const interval = setInterval(refresh, 13 * 60 * 1000);

        document.addEventListener("visibilitychange", refresh);

        return () => {
            clearInterval(interval);
            document.removeEventListener(
                "visibilitychange",
                refresh
            );
        };
    }, []);

    return <>{children}</>;
}