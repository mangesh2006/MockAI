"use client"

import { ChartNoAxesCombined } from "lucide-react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts"

const data = [
    { date: "Apr 1", score: 60 },
    { date: "Apr 5", score: 75 },
    { date: "Apr 10", score: 82 },
    { date: "Apr 15", score: 78 },
    { date: "Apr 20", score: 90 },
]

export default function ScoreChart() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm mt-12 mb-5 w-1/2">
            <h3 className="font-semibold mb-4 flex items-center gap-1"><ChartNoAxesCombined /> Performance Over Time</h3>

            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="10 10" />

                    <XAxis dataKey="date" />
                    <YAxis domain={[10, 100]} />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}