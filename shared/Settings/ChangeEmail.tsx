"use client"

import { apiFetch } from "@/lib/apiFetch"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"

const ChangeEmail = () => {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [Loading, setLoading] = useState(false)

  const handleChangeEmail = async () => {
    try {
      setLoading(true)
      const api = await apiFetch("/api/v1/account/change-email", {
        method: "POST",
        body: JSON.stringify({
          password,
          email
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const res = await api.json()

      if (api.ok) {
        toast.success(res.message)
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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-semibold">Enter your current password</label>
        <input type="password" name="password" id="password" className="border border-gray-300 rounded-lg p-2 w-2/3" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold">Enter your new email</label>
        <input type="email" name="email" id="email" className="border border-gray-300 rounded-lg p-2 w-2/3" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p className="text-muted-foreground">Verification link will be sent on your email.</p>
      </div>

      <button className="border border-blue-500 w-2/3 p-2 rounded-lg text-lg cursor-pointer transition duration-150 hover:bg-blue-500 hover:text-white flex items-center justify-center" onClick={handleChangeEmail}>
        {Loading ? <Loader2 className="animate-spin" /> : "Verify Email"}
      </button>
    </div>
  )
}

export default ChangeEmail