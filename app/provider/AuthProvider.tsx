"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter()
    useEffect(() => {
        let isRefreshing = false;

        const refresh = async () => {
            if (
                document.visibilityState !== "visible" ||
                isRefreshing
            ) return;

            isRefreshing = true;

            try {
                const res = await fetch("/api/v1/auth/refresh", {
                    method: "POST",
                    credentials: "include",
                });

                if (res.status === 401 && window.location.pathname !== "/") {
                    toast.error("Session expired please login again.")
                    router.push("/")
                }
            } catch { } finally { isRefreshing = false; }
        };

        refresh();

        const interval = setInterval(
            refresh,
            13 * 60 * 1000
        );

        document.addEventListener(
            "visibilitychange",
            refresh
        );

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