"use client"

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import toast from "react-hot-toast"
import * as z from "zod"
import { useRouter } from 'next/navigation'

export const User = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be 8 characters long")
        .regex(/[0-9]/, "Password must contain atleast one number")
        .regex(/[A-Z]/, "Password must contain atleast one Uppercase")
        .regex(/[a-z]/, "Password must contain atleast one Lowercase")
        .regex(/[!@#$%^&*]/, "Password must contain atleast one special character")
})

export type UserSchema = z.infer<typeof User>

const Login = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<UserSchema>({
        resolver: zodResolver(User)
    })
    const route = useRouter()

    const handleLogin = async (data: UserSchema) => {
        try {
            const api = await fetch("/api/v1/auth/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const result = await api.json()

            if (api.ok) {
                toast.success(result.message)
                route.push("/dashboard")
            } else {
                toast.error(result.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog>
            <DialogTrigger className={"cursor-pointer border border-blue-500 p-2 font-semibold tracking-wider transition duration-300 hover:bg-blue-500 hover:text-white rounded-lg"}>
                Login
            </DialogTrigger>

            <DialogContent className={"bg-white text-black"}>
                <DialogHeader>
                    <DialogTitle className={"text-2xl font-bold"}>Login</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(handleLogin)} className='p-2 flex flex-col w-full gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='font-semibold'>Enter your email</label>
                        <input type="email" className='p-2 rounded-lg border' placeholder='Enter your email' {...register("email")} />
                    </div>
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password" className='font-semibold'>Enter your password</label>
                        <input type="password" className='p-2 rounded-lg border' placeholder='Enter your password' {...register("password")} />
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                    <button className="cursor-pointer bg-blue-500 p-2 h-full font-semibold text-white tracking-wider transition duration-400 hover:bg-blue-600 rounded-lg w-full flex items-center justify-center" disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="animate-spin" /> : "Login"}
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Login