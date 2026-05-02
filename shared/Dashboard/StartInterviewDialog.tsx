"use client";

import { useState } from "react";
import RoleSelector from "./RoleSelector";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/app/components/ui/dialog";
import { apiFetch } from "@/lib/apiFetch";
import toast from "react-hot-toast";
import { routeModule } from "next/dist/build/templates/pages";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function StartInterviewDialog({
    Open,
    setOpen,
}: {
    Open: boolean;
    setOpen: (val: boolean) => void;
}) {
    const [role, setRole] = useState("");
    const [duration, setDuration] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const router = useRouter()
    const [Loading, setLoading] = useState(false)

    const handleStartInterview = async () => {
        if (!file) {
            toast.error("Please upload pdf file")
            return
        };

        setLoading(true)

        const formData = new FormData()

        formData.append("file", file)
        formData.append("role", role)
        formData.append("duration", duration)

        try {
            const api = await apiFetch("/api/v1/interview/start", {
                method: "POST",
                body: formData,
            })

            const res = await api.json()

            if (api.ok) {
                router.push(`/interview/${res.sessionId}`)
            } else {
                toast.error(res.error)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={Open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Start Interview</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Select your role</label>

                        <RoleSelector
                            onSelect={setRole}
                            selectedRole={role}
                        />

                        <p className="text-sm text-gray-500">
                            Selected: {role || "None"}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Interview duration</label>
                        <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="border border-gray-400 p-2 rounded-lg"
                        >
                            <option value="">Select duration</option>
                            <option value="15">15 Minutes</option>
                            <option value="30">30 Minutes</option>
                            <option value="45">45 Minutes</option>
                            <option value="60">60 Minutes</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Upload your resume</label>
                        <input
                            type="file"
                            onChange={(e) =>
                                setFile(e.target.files?.[0] || null)
                            }
                            accept="application/pdf"
                            className="border p-2 border-gray-400 rounded-lg cursor-pointer"
                        />
                    </div>

                    <button
                        disabled={!role || !duration}
                        onClick={handleStartInterview}
                        className={`p-2 rounded-lg transition flex items-center justify-center
              ${role && duration
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {Loading ? <Loader2 className="animate-spin" /> : "Start Interview"}
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}