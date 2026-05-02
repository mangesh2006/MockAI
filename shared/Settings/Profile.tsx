"use client"

import { apiFetch } from "@/lib/apiFetch"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

interface IUser {
  username: string,
  email: string,
  createdAt: Date
}

const Profile = () => {
  const [User, setUser] = useState<IUser>({
    username: "",
    email: "",
    createdAt: new Date()
  })

  const formattedDate = new Date(User.createdAt).toLocaleDateString();
  const formattedTime = new Date(User.createdAt).toLocaleTimeString();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const api = await apiFetch("/api/v1/account/profile")
        const res = await api.json()

        if (api.ok) {
          setUser(res.user)
        } else {
          toast.error(res.error)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchUser()
  }, [])

  return (
    <div className="flex flex-col gap-10 items-center">
      {User.username ? (<div className="p-2 flex items-center justify-center bg-blue-500/60 ring-3 ring-blue-600 rounded-full h-20 w-20 font-bold text-4xl text-white text-shadow-2xs">
        {User.username.charAt(0).toUpperCase()}
      </div>) : (<Loader2 className="animate-spin" />)}

      <div className="flex flex-col gap-8 p-2 w-full items-center">
        <div className="flex items-center justify-between p-2 w-full">
          <span className="font-semibold text-lg">Username</span>
          {User.username ? (<span className="text-lg">{User.username}</span>) : <Loader2 className="animate-spin" />}
        </div>

        <div className="flex items-center justify-between p-2 w-full">
          <span className="font-semibold text-lg">Email</span>
          {User.email ? (<span className="text-lg">{User.email}</span>) : <Loader2 className="animate-spin" />}
        </div>

        <div className="flex items-center justify-between p-2 w-full">
          <span className="font-semibold text-lg">Created At</span>
          {User.createdAt ? (<span className="text-lg" suppressHydrationWarning>{formattedDate}, {formattedTime}</span>) : <Loader2 className="animate-spin" />}
        </div>
      </div>
    </div>
  )
}

export default Profile