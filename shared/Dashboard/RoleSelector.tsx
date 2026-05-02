"use client";

import { useState } from "react";

const roles = {
    "Software Development": [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Software Engineer",
    ],
    "Data & AI": [
        "Data Analyst",
        "Data Scientist",
        "Machine Learning Engineer",
        "AI Engineer",
    ],
    "DevOps & Cloud": [
        "DevOps Engineer",
        "Cloud Engineer",
        "SRE",
    ],
};

export default function RoleSelector({
    onSelect,
    selectedRole,
}: {
    onSelect: (role: string) => void;
    selectedRole: string | null;
}) {
    const [search, setSearch] = useState("");
    const [customRole, setCustomRole] = useState("");

    const filterRole = (role: string) =>
        role.toLowerCase().includes(search.toLowerCase());

    return (
        <div className="space-y-6">
            <input
                type="text"
                placeholder="Search roles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500"
            />

            {Object.entries(roles).map(([category, items]) => {
                const filtered = items.filter(filterRole);
                if (filtered.length === 0) return null;

                return (
                    <div key={category}>
                        <h3 className="text-sm font-semibold text-gray-500 mb-2">
                            {category}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {filtered.map((role) => (
                                <button
                                    key={role}
                                    onClick={() => onSelect(role)}
                                    className={`px-4 py-2 rounded-lg border text-sm transition
                    ${selectedRole === role
                                            ? "bg-blue-500 text-white border-blue-500"
                                            : "bg-white hover:bg-blue-50 hover:border-blue-500"
                                        }`}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            })}

            <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    Custom Role
                </h3>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter custom role..."
                        value={customRole}
                        onChange={(e) => setCustomRole(e.target.value)}
                        className="flex-1 p-2 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={() => {
                            if (customRole.trim()) {
                                onSelect(customRole);
                                setCustomRole("");
                            }
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}