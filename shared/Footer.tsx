import { LuGithub, LuLinkedin } from "react-icons/lu"

const Footer = () => {
    return (
        <footer className="border-t border-gray-300 mt-20 px-6 py-12">
            <div className="mx-auto grid md:grid-cols-3 gap-8 max-w-6xl">
                <div>
                    <h2 className="text-lg font-bold">
                        Mock<span className="text-blue-500">AI</span>
                    </h2>
                    <p className="mt-3 text-gray-600 text-sm">
                        Practice real interviews with AI and improve your skills.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold">Links</h3>
                    <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                        <a href="/"><li className="hover:text-blue-500 cursor-pointer">Home</li></a>
                        <a href="#howitworks"><li className="hover:text-blue-500 cursor-pointer">How it Works</li></a>
                        <a href="#features"><li className="hover:text-blue-500 cursor-pointer">Features</li></a>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold">Connect</h3>

                    <div className="mt-3 flex gap-4">
                        <a href="https://github.com/mangesh2006" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition">
                            <LuGithub className="w-5 h-5" />
                        </a>

                        <a href="https://www.linkedin.com/in/mangesh-deo-72b469248/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition">
                            <LuLinkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-500 text-sm">
                &copy; 2026 MockAI. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer