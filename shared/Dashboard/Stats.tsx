"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { Gauge, History, RefreshCcw, BarChart3, TrendingUp, Trophy } from "lucide-react"

const Stats = ({ OpenDialog }: { OpenDialog: () => void }) => {
  return (
    <div className="mt-12 grid md:grid-cols-1 grid-cols-2 w-1/2 gap-5">
      <div className="shadow-lg border rounded-lg p-6 flex flex-col gap-5 bg-white hover:scale-[1.05] transition duration-200 cursor-pointer col-span-2">
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm flex items-center gap-1"><Gauge size={20} /> Performance Overview</p>
          <button className="border border-blue-500 text-blue-500 rounded-lg p-2 transition duration-300 hover:bg-blue-500 hover:text-white cursor-pointer" onClick={OpenDialog}>Start New Interview</button>
        </div>

        <div className="flex items-center gap-6 mt-5">
          <div className="flex flex-col items-center justify-between w-full border-r border-gray-300">
            <span>10</span>
            <span className="flex items-center gap-1"><BarChart3 /> Total Interviews</span>
          </div>

          <div className="flex flex-col items-center justify-between w-full text-green-600 border-r border-gray-300">
            <span>75</span>
            <span className="flex items-center gap-1"><TrendingUp /> Average Score</span>
          </div>

          <div className="flex flex-col items-center justify-between w-full text-blue-600">
            <span>90</span>
            <span className="flex items-center gap-1"><Trophy /> Best Score</span>
          </div>
        </div>
      </div>

      <div className="shadow-lg border rounded-lg p-6 flex flex-col gap-5 bg-white hover:scale-[1.05] transition duration-200 cursor-pointer">
        <p className="text-gray-500 text-sm flex items-center gap-1"><History size={20} /> Recent Interviews</p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1/1/26</TableCell>
              <TableCell>Frontend developer</TableCell>
              <TableCell>60</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1/1/26</TableCell>
              <TableCell>Backend developer</TableCell>
              <TableCell>90</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1/1/26</TableCell>
              <TableCell>Data Analyst</TableCell>
              <TableCell>75</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="shadow-lg border rounded-lg p-6 flex flex-col gap-5 bg-white hover:scale-[1.05] transition duration-200 cursor-pointer">
        <p className="text-gray-500 text-sm flex items-center gap-1"><RefreshCcw size={20} /> Last Interview</p>

        <h3 className="text-lg font-semibold mt-1">
          Frontend Developer
        </h3>

        <p className="text-sm text-gray-400">
          2 days ago
        </p>

        <p className="text-blue-500 font-medium mt-1">
          Score: 82
        </p>
      </div>
    </div>
  )
}

export default Stats