"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const HeroSection = () => {
    const aiMessage =
        "Tell me about a React project where you improved performance."

    const userMessage =
        "I optimized a React app by reducing unnecessary re-renders using memoization."

    const [typedText, setTypedText] = useState("")
    const [showUser, setShowUser] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [isTypingDone, setIsTypingDone] = useState(false)

    useEffect(() => {
        let typingInterval: string | number | NodeJS.Timeout | undefined
        let restartTimeout: string | number | NodeJS.Timeout | undefined

        function startAnimation() {
            let i = 0

            setTypedText("")
            setShowUser(false)
            setFadeOut(false)
            setIsTypingDone(false)

            typingInterval = setInterval(() => {
                setTypedText(aiMessage.slice(0, i))
                i++

                if (i > aiMessage.length) {
                    clearInterval(typingInterval)
                    setIsTypingDone(true)

                    setTimeout(() => {
                        setShowUser(true)

                        setTimeout(() => {
                            setFadeOut(true)

                            restartTimeout = setTimeout(() => {
                                startAnimation()
                            }, 400)

                        }, 2000)

                    }, 500)
                }
            }, 30)
        }

        startAnimation()

        return () => {
            clearInterval(typingInterval)
            clearTimeout(restartTimeout)
        }
    }, [])

    return (
        <section className='p-10 bg-linear-to-b from-white to-blue-50'>
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-10">
                <div className="flex flex-col gap-8 justify-center items-center">
                    <h2 className='text-4xl font-bold text-center'>Mock
                        <span className='text-blue-500'>AI</span> -
                        Practice Real Interviews with AI
                    </h2>

                    <p className='text-xl text-center max-w-2xl text-[#4A5565]'>
                        Get real-time feedback, improve confidence, and crack your dream job
                        practice with AI mock interviews and land to your dream job.
                    </p>

                    <div className='flex items-center gap-3 mt-6'>
                        <button className='cursor-pointer px-4 py-2 rounded-xl transition-all duration-200 text-white bg-blue-500 font-semibold text-xl hover:bg-blue-600'>Start Interview</button>
                        <a href="#howitworks">
                            <button className='cursor-pointer rounded-xl transition-all duration-200 font-semibold text-xl border px-4 py-2 text-gray-700 hover:border-blue-500 hover:text-blue-500'>See How it works</button>
                        </a>
                    </div>
                </div>

                <div
                    className={`w-full max-w-md bg-white shadow-lg rounded-2xl p-4 
      transition-all duration-300 ${fadeOut ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                        }`}
                >
                    <div className="flex flex-col gap-3">

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="self-start bg-gray-100 px-4 py-2 rounded-xl max-w-[80%]"
                        >
                            <p className="text-xs text-gray-500 mb-1">AI Interviewer</p>

                            <p className="text-sm text-gray-800">
                                {typedText}
                                {!isTypingDone && (
                                    <span className="animate-pulse">|</span>
                                )}
                            </p>
                        </motion.div>

                        {showUser && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="self-end bg-blue-500 text-white px-4 py-2 rounded-xl max-w-[80%]"
                            >
                                <p className="text-xs opacity-80 mb-1">You</p>
                                <p className="text-sm">{userMessage}</p>
                            </motion.div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection