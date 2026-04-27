"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircle2 } from "lucide-react";

const SettingsSidebar = () => {
    const pathname = usePathname();

    const linkClass = (href: string) =>
        `p-2 rounded-lg transition duration-150 cursor-pointer ${pathname === href
            ? "bg-black text-white"
            : "hover:bg-accent text-black"
        }`;

    return (
        <div className="flex flex-col w-1/4 border-r p-2 gap-4">
            <h3 className="text-gray-500 flex items-center gap-1 text-sm p-1">
                <UserCircle2 size={17} />
                MY ACCOUNT
            </h3>

            <div className="gap-2 flex flex-col p-1 border-l-2 ml-2.5">
                <Link href="/settings/profile" className={linkClass("/settings/profile")}>
                    Profile
                </Link>

                <Link
                    href="/settings/change-email"
                    className={linkClass("/settings/change-email")}
                >
                    Change Email
                </Link>

                <Link
                    href="/settings/reset-password"
                    className={linkClass("/settings/reset-password")}
                >
                    Reset Password
                </Link>
            </div>
        </div>
    );
};

export default SettingsSidebar;