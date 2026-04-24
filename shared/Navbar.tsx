"use client"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/app/components/ui/sheet";
import { LuMenu } from "react-icons/lu";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Dropdown from "./Dashboard/Dropdown";

const Navbar = () => {
  const [username, setUsername] = useState("")
  const [Loading, setLoading] = useState(false)
  const route = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const api = await fetch("/api/v1/auth/me", {
          credentials: "include"
        })
        const result = await api.json()

        if (api.ok) {
          setUsername(result.username)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])
  return (
    <>
      <nav className="backdrop-blur-lg top-0 z-10 sticky hidden md:flex justify-between items-center shadow-sm px-3 py-3 border-b border-gray-300 bg-transparent">
        <div className="flex items-center cursor-pointer">
          <span className="text-2xl font-semibold">Mock<span className="text-blue-500 font-bold">AI</span></span>
        </div>

        <ul className="flex items-center gap-12">
          <a href="#features">
            <li className="text-gray-600 hover:text-blue-500 cursor-pointer">
              Features
            </li>
          </a>

          <a href="#howitworks">
            <li className="text-gray-600 hover:text-blue-500 cursor-pointer">
              How it Works
            </li>
          </a>

          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition font-medium cursor-pointer shadow-sm hover:shadow-md" onClick={() => route.push("/dashboard")}>
            Start Interview
          </button>
        </ul>

        {Loading ? <Loader2 className="animate-spin" /> : <> {username ? (<div className="flex items-center">
          <div className="p-2 rounded-full flex items-center justify-center w-10 h-10 font-bold text-lg bg-blue-100/80">
            {username.charAt(0).toUpperCase()}
          </div>
          <Dropdown />
        </div>) : <div className="flex items-center justify-center gap-7 h-full">
          <Login />
          <Signup />
        </div>}</>}
      </nav>

      <nav className="md:hidden px-3 py-3 bg-transparent backdrop-blur-lg top-0 z-10 sticky flex items-center justify-between border-b border-gray-300">
        <span className="text-2xl font-semibold">Mock<span className="text-blue-500 font-bold">AI</span></span>

        <Sheet>
          <SheetTrigger>
            <div className="border border-gray-300 rounded-full text-center p-2 w-fit">
              <LuMenu size={20} />
            </div>
          </SheetTrigger>

          <SheetContent className={"bg-white text-black"}>
            <SheetTitle className={"p-2"}>
              <span className="text-2xl font-semibold text-black">Mock<span className="text-blue-500 font-bold">AI</span></span>
            </SheetTitle>

            <div className="flex flex-col items-center p-2 gap-6 h-full text-lg">
              <ul className="gap-6 flex flex-col items-center">
                <a href="#features">
                  <li className="text-gray-600 hover:text-blue-500 cursor-pointer">
                    Features
                  </li>
                </a>

                <a href="#howitworks">
                  <li className="text-gray-600 hover:text-blue-500 cursor-pointer">
                    How it Works
                  </li>
                </a>

                <li>
                  <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition font-medium cursor-pointer shadow-sm hover:shadow-md">
                    Start Interview
                  </button>
                </li>

                <button className="cursor-pointer border border-blue-500 p-2 font-semibold tracking-wider transition duration-300 hover:bg-blue-500 hover:text-white rounded-lg text-black">
                  Login
                </button>

                <button className="cursor-pointer bg-blue-500 p-2 h-full font-semibold text-white tracking-wider transition duration-400 hover:bg-blue-600 rounded-lg">
                  Signup
                </button>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default Navbar;
