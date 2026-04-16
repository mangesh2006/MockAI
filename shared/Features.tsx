import { LuSquareActivity, LuSparkles, LuFileText, LuClock12, LuMessageSquare, LuChartBar } from "react-icons/lu";

const Features = () => {
    return (
        <section id='features' className='flex flex-col items-center p-10 mt-12 gap-6'>
            <h2 className='text-4xl text-center text-blue-500 font-bold mb-12'>Everything You Need to Crack Interviews</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="flex flex-col p-4 h-full bg-white rounded-3xl shadow border border-gray-200 hover:border-blue-500 hover:shadow-md transition cursor-pointer duration-300 ease-out hover:scale-[1.02]">
                    <LuMessageSquare size={60} color={"blue"} className="mb-5 p-2 text-center bg-linear-to-b bg-blue-100/80 rounded-full" />
                    <h3 className="font-bold text-2xl">Real-Time AI Questions</h3>
                    <p className="text-md text-gray-600">Practice with dynamic, role-specific questions that adapt based on your answers.</p>
                </div>

                <div className="flex flex-col p-4 h-full bg-white rounded-3xl shadow border border-gray-200 hover:border-blue-500 hover:shadow-md transition cursor-pointer duration-300 ease-out hover:scale-[1.02]">
                    <LuChartBar size={60} color={"blue"} className="mb-5 p-2 text-center bg-linear-to-b bg-blue-100/80 rounded-full" />
                    <h3 className="font-bold text-2xl">Detailed Performance Report</h3>
                    <p className="text-md text-gray-600">Get a complete breakdown of your interview with scores for communication, confidence, and technical understanding.</p>
                </div>

                <div className="flex flex-col p-4 h-full bg-white rounded-3xl shadow border border-gray-200 hover:border-blue-500 hover:shadow-md transition cursor-pointer duration-300 ease-out hover:scale-[1.02]">
                    <LuSquareActivity size={60} color={"blue"} className="mb-5 p-2 text-center bg-blue-100/80 rounded-full" />
                    <h3 className="font-bold text-2xl">Confidence Analysis</h3>
                    <p className="text-md text-gray-600">Understand how confident you sound with AI-powered voice and speech analysis.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="flex flex-col p-4 h-full bg-white rounded-3xl shadow border border-gray-200 hover:border-blue-500 hover:shadow-md transition cursor-pointer duration-300 ease-out hover:scale-[1.02]">
                    <LuSparkles size={60} color={"blue"} className="mb-5 p-2 text-center bg-blue-100/80 rounded-full" />
                    <h3 className="font-bold text-2xl">Personalized Feedback</h3>
                    <p className="text-md text-gray-600">Receive suggestions to improve your answers and communication skills.</p>
                </div>

                <div className="flex flex-col p-4  h-full bg-white rounded-3xl shadow border border-gray-200 hover:border-blue-500 hover:shadow-md transition cursor-pointer duration-300 ease-out hover:scale-[1.02]">
                    <LuFileText size={60} color={"blue"} className="mb-5 p-2 text-center bg-blue-100/80 rounded-full" />
                    <h3 className="font-bold text-2xl">Resume-Based Questions</h3>
                    <p className="text-md text-gray-600">AI generates questions tailored to your resume and experience.</p>
                </div>

                <div className="flex flex-col p-4 h-full bg-white rounded-3xl shadow border border-gray-200 hover:border-blue-500 hover:shadow-md transition cursor-pointer duration-300 ease-out hover:scale-[1.02]">
                    <LuClock12 size={60} color={"blue"} className="mb-5 p-2 text-center bg-blue-100/80 rounded-full" />
                    <h3 className="font-bold text-2xl">Practice Anytime</h3>
                    <p className="text-md text-gray-600">Take mock interviews anytime, anywhere - no scheduling required.</p>
                </div>
            </div>
        </section>
    )
}

export default Features