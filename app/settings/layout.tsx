import SettingsSidebar from "@/shared/Settings/SettingsSidebar";
import { Settings2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Settings",
    description: "This is a settings page of MockAI",
};

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="h-screen w-screen bg-accent flex items-center justify-center">
            <div className="flex flex-col bg-white rounded-xl shadow h-1/2 w-1/2 overflow-hidden">

                <h2 className="w-full text-lg p-2 flex items-center gap-1">
                    <Settings2 size={20} />
                    Settings
                </h2>

                <hr />

                <div className="flex h-full">
                    <SettingsSidebar />

                    <div className="flex-1 p-6 overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}