import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog'

const Login = () => {
    return (
        <Dialog>
            <DialogTrigger className={"cursor-pointer border border-blue-500 p-2 font-semibold tracking-wider transition duration-300 hover:bg-blue-500 hover:text-white rounded-lg"}>
                Login
            </DialogTrigger>

            <DialogContent className={"bg-white text-black"}>
                <DialogHeader>
                    <DialogTitle className={"text-2xl font-bold"}>Login</DialogTitle>
                </DialogHeader>

                <div className='p-2 flex flex-col w-full gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='font-semibold'>Enter your email</label>
                        <input type="email" name="email" id="email" className='p-2 rounded-lg border' placeholder='Enter your email' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password" className='font-semibold'>Enter your password</label>
                        <input type="password" name="password" id="password" className='p-2 rounded-lg border' placeholder='Enter your password' />
                    </div>
                </div>

                <DialogFooter className='border-none'>
                    <button className="cursor-pointer bg-blue-500 p-2 h-full font-semibold text-white tracking-wider transition duration-400 hover:bg-blue-600 rounded-lg w-full">
                        Login
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Login