"use client"

import { apiFetch } from "@/lib/apiFetch"
import Dropdown from "@/shared/Dashboard/Dropdown"
import ScoreChart from "@/shared/Dashboard/ScoreChart"
import StartInterviewDialog from "@/shared/Dashboard/StartInterviewDialog"
import Stats from "@/shared/Dashboard/Stats"
import Welcome from "@/shared/Dashboard/Welcome"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const Dashboard = () => {
  const [username, setUsername] = useState("")
  const [Open, setOpen] = useState(false)

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const api = await apiFetch("/api/v1/auth/me")
        const result = await api.json()

        if (api.ok) {
          setUsername(result.username)
        } else {
          toast.error(result.error)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchUsername()
  }, [])

  return (
    <main className="flex flex-col items-center bg-accent h-screen w-screen overflow-x-hidden">
      <nav className="w-full p-3 flex items-center justify-between bg-blue-300/10">
        <div className="flex items-center gap-10">
          <h2 className="font-bold text-3xl">Mock<span className="text-blue-500">AI</span></h2>
          <ul className="flex items-center gap-8 text-lg">
            <li>
              Home
            </li>
            <li>
              Reports
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="p-2 rounded-full h-12 w-12 bg-blue-500/20 text-xl flex items-center justify-center font-bold">
            {username.charAt(0).toUpperCase()}
          </div>
          <Dropdown />
        </div>
      </nav>

      <Welcome username={username} OpenDialog={() => setOpen(true)} />

      <Stats OpenDialog={() => setOpen(true)} />

      <ScoreChart />

      <StartInterviewDialog Open={Open} setOpen={setOpen} />
    </main>
  )
}

export default Dashboard