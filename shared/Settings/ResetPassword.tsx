"use client"

import { apiFetch } from "@/lib/apiFetch"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"

const ResetPassword = () => {
    const [password, setPassword] = useState("")
    const [Newpassword, setNewPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [Loading, setLoading] = useState(false)
    const lowercase = /[a-z]/
    const uppercase = /[A-Z]/
    const specialchar = /[@#$%^&*()!]/
    const number = /[0-9]/

    const handleResetPassword = async () => {
        if(!lowercase.test(Newpassword)) {
            toast.error("Password must contain 1 lowercase")
            return
        }

        if(!uppercase.test(Newpassword)) {
            toast.error("Password must contain 1 uppercase")
            return
        }

        if(!specialchar.test(Newpassword)) {
            toast.error("Password must contain 1 special character")
            return
        }

        if(!number.test(Newpassword)) {
            toast.error("Password must contain 1 number")
            return
        }

        if(Newpassword.length < 8) {
            toast.error("Password length must be 8 characters")
            return
        }

        if (Newpassword !== ConfirmPassword) {
            toast.error("Passwords do not match")
            return;
        }

        setLoading(true)

        try {
            const api = await apiFetch("/api/v1/account/reset-password", {
                method: "POST",
                body: JSON.stringify({ password, newpassword: Newpassword }),
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
                <label htmlFor="password" className="font-semibold">Enter your new password</label>
                <input type="password" name="password" id="password" className="border border-gray-300 rounded-lg p-2 w-2/3" value={Newpassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2 p-2 bg-blue-400/10 ring-2 ring-blue-500 w-2/3 rounded-lg">
                <span className="text-blue-600 font-bold">Note: </span>
                <span>Password must be 8 characters long</span>
                <span>Password must contain atleast 1 number</span>
                <span>Password must contain atleast 1 special character</span>
                <span>Password must contain atleast 1 lowercase</span>
                <span>Password must contain atleast 1 uppercase</span>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-semibold">Confirm new password</label>
                <input type="password" name="password" id="password" className="border border-gray-300 rounded-lg p-2 w-2/3" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <button className="border border-blue-500 w-2/3 p-2 rounded-lg text-lg cursor-pointer transition duration-150 hover:bg-blue-500 hover:text-white flex items-center justify-center" onClick={handleResetPassword}>
                {Loading ? <Loader2 className="animate-spin" /> : "Reset Password"}
            </button>
        </div>
    )
}

export default ResetPassword