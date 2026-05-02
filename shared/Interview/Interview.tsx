import { Phone } from "lucide-react"

const Interview = ({ id }: { id: string }) => {
    return (
        <main className="h-screen w-screen bg-accent flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-8 bg-white h-[90%] w-[70%] rounded-2xl p-4">
                <div className="flex items-center justify-between w-full">
                    <h2 className="font-bold text-3xl text-center">Frontend Developer Interview</h2>

                    <button className="p-2 bg-red-500 rounded-lg text-lg flex items-center justify-center gap-2 transition duration-300 hover:bg-red-600 text-white cursor-pointer"><Phone /> End Interview</button>
                </div>

                <div className="flex items-center h-full w-full gap-6">
                    <div className="flex flex-col items-center justify-center gap-6 h-full w-[50%]">
                        <div className="shadow-md border border-gray-300 p-4 flex items-center justify-center rounded-2xl w-[90%] h-[60%] bg-white">
                            <div className="rounded-full border p-2 w-40 h-40 flex items-center justify-center">
                                <span className="text-7xl font-bold text-blue-500">AI</span>
                            </div>
                        </div>

                        <div className="shadow-md border border-gray-300 p-4 flex gap-6 items-center justify-center rounded-2xl w-[90%] h-[60%] bg-white">
                            <div className="rounded-full border p-2 w-40 h-40 flex items-center justify-center">
                                <span className="text-7xl font-bold text-green-600">M</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 rounded-lg flex flex-col w-xl h-full bg-white border border-gray-300 overflow-y-auto">
                        <span className="text-gray-500 text-lg mb-4">Live transcipt</span>
                        <div className="bg-blue-500/10 rounded-lg px-4 py-2 w-fit flex flex-col gap-1">
                            <span className="font-bold text-gray-500">AI</span>
                            <p>Hii, Can u tell me about yourself</p>
                        </div>

                        <div className="flex justify-end">
                            <div className="bg-accent rounded-lg px-4 py-2 w-fit mt-4 order-2">
                                <span className="font-bold text-gray-500">You</span>
                                <p className="text-right">Hii, My name is Mangesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Interview