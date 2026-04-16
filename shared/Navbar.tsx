import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/Components/ui/sheet";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
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

          <li>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition font-medium cursor-pointer shadow-sm hover:shadow-md">
              Start Interview
            </button>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-7 h-full">
          <button className="cursor-pointer border border-blue-500 p-2 font-semibold tracking-wider transition duration-300 hover:bg-blue-500 hover:text-white rounded-lg h-full">
            Login
          </button>
          <button className="cursor-pointer bg-blue-500 p-2 h-full font-semibold text-white tracking-wider transition duration-400 hover:bg-blue-600 rounded-lg">
            Signup
          </button>
        </div>
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
