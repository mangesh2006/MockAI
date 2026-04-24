"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import { apiFetch } from "@/lib/apiFetch"
import { ChevronDown, Lock, LogOutIcon, Mail } from "lucide-react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const Dropdown = () => {
    const router = useRouter()
    const handleLogout = async () => {
        try {
            const api = await apiFetch("/api/v1/auth/logout")
            const result = await api.json()

            if (api.ok) {
                toast.success(result.message)
                router.push("/")
            } else {
                toast.error(result.error)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ChevronDown className="cursor-pointer" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className={"w-full mt-4"}>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem><Mail /> Change Email</DropdownMenuItem>
                    <DropdownMenuItem><Lock /> Reset Password</DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem variant="destructive" onClick={handleLogout}><LogOutIcon /> Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown