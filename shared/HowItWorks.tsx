import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
    return (
        <section id='howitworks' className='flex flex-col p-2 items-center mt-12 gap-6'>
            <h2 className='text-center text-4xl text-blue-500 font-bold'>How <span className='text-black'>Mock</span>AI Helps You Crack Interviews</h2>
            <p className='text-center w-1/3 text-gray-500 text-lg mb-12'>Follow these simple steps to start your AI-powered mock interview.</p>
            <div className='bg-[#F9FAFB] border border-gray-100 p-5 rounded-3xl w-full flex md:flex-row flex-col justify-between hover:shadow-md transition'>
                <div className='flex flex-col p-2 gap-3'>
                    <h2 className='text-blue-500 font-bold text-3xl'>01. Select Role</h2>
                    <p className='text-md text-gray-500'>Choose the role you want to prepare for, such as Software Developer, Data Analyst, or more.</p>
                </div>

                <div className='overflow-hidden rounded-2xl bg-white ring-white ring-2 max-w-2xl my-auto w-full aspect-video'>
                    <Image src={"/Role Selection.png"} alt='Image' width={300} height={250} className='w-170 h-auto object-contain' unoptimized loading='eager' />
                </div>
            </div>

            <div className='flex flex-col gap-6 w-full'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
                    <div className='flex p-4 bg-[#F9FAFB] border border-gray-100 rounded-3xl flex-col md:col-span-3 gap-6 hover:shadow-md transition'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-blue-500 font-bold text-3xl'>02. Upload Your Resume</h2>
                            <p className='text-md text-gray-500'>Upload your resume so the AI can tailor questions based on your experience and skills.</p>
                        </div>

                        <div className='overflow-hidden max-w-2xl mx-auto w-full aspect-video rounded-2xl bg-white ring-white ring-2'>
                            <Image src={"/Upload resume.png"} alt='Image' width={300} height={250} className='w-180 h-auto object-contain' unoptimized />
                        </div>
                    </div>

                    <div className='flex p-4 gap-3 bg-[#F9FAFB] border border-gray-100 rounded-3xl flex-col md:col-span-2 hover:shadow-md transition'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-blue-500 font-bold text-3xl'>03. Choose Interview Duration</h2>
                            <p className='text-md text-gray-500'>Choose how long you want your interview to be, based on your availability and preparation level.</p>
                        </div>

                        <div className='overflow-hidden max-w-2xl mx-auto w-full aspect-video rounded-2xl bg-white ring-white ring-2'>
                            <Image src={"/Interview duration.png"} alt='Image' width={300} height={250} className='w-180 h-auto object-contain' unoptimized />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
                    <div className='flex p-4 bg-[#F9FAFB] border border-gray-100 rounded-3xl flex-col md:col-span-2 gap-6 hover:shadow-md transition'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-blue-500 font-bold text-3xl'>04. Start Interview</h2>
                            <p className='text-md text-gray-500'>Start your mock interview with AI.</p>
                        </div>

                        <div className='overflow-hidden max-w-2xl mx-auto w-full aspect-video rounded-2xl bg-white ring-white ring-2'>
                            <Image src={"/Start interview.png"} alt='Image' width={300} height={250} className='w-180 h-auto object-contain' unoptimized />
                        </div>
                    </div>

                    <div className='flex p-4 gap-3 bg-[#F9FAFB] border border-gray-100 rounded-3xl flex-col md:col-span-3 hover:shadow-md transition'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-blue-500 font-bold text-3xl'>05. Get Feedback</h2>
                            <p className='text-md text-gray-500'>Receive detailed feedback on your performance, confidence, and answers.</p>
                        </div>

                        <div className='overflow-hidden max-w-2xl mx-auto w-full aspect-video rounded-2xl bg-white ring-white ring-2'>
                            <Image src={"/Interview report.png"} alt='Image' width={300} height={250} className='w-180 h-auto object-contain' unoptimized />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks