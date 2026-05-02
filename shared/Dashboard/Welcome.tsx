const Welcome = ({ username, OpenDialog }: { username: string, OpenDialog: () => void }) => {
    return (
        <div className="w-1/2 mx-auto mt-8">
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-8 md:p-10 shadow-lg transition duration-300">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

                <div className="relative z-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Welcome back,{" "}
                        <span className="font-bold">{username}</span> 👋
                    </h2>

                    <p className="mt-2 text-blue-100">
                        Ready for your next interview?
                    </p>

                    <div className="flex items-center justify-center gap-5">
                        <button className="mt-5 bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transition cursor-pointer" onClick={OpenDialog}>
                            Start Interview
                        </button>
                        <button className="mt-5 bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transition cursor-pointer">
                            View Reports
                        </button>
                    </div>

                    <p className="mt-2 text-xs text-blue-200">
                        Takes only 5–10 minutes
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome