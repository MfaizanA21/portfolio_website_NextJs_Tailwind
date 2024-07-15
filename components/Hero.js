import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <section className="bg-gray-900 relative overflow-hidden">
      <div className="relative bg-black w-full lg:py-12 overflow-hidden">
        <div className="absolute right-[-2%] top-[-25%] bg-black h-[155%] w-[55%] rotate-6 z-10"></div>
        <div className="absolute bg-gray-300 left-0 top-0 h-full w-1/2"></div>
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-4 xl:gap-0 lg:py-18 lg:grid-cols-12 relative z-20">
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className="max-w-2xl mb-3 text-lg font-medium text-gray-700 lg:text-gray-700 text-gray-400 tracking-wider">
              Hi, I am
            </p>
            <h1 className="max-w-2xl mb-4 text-4xl font-bold leading-none md:text-4xl xl:text-4xl tracking-wider lg:text-black text-gray-100">
              Muhammad Faizan Asghar
            </h1>
            <p className="max-w-2xl mb-6 font-medium lg:text-gray-800 text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
              Software Engineer
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-3 mb-3 mr-3 rounded-xl bg-gray-400 hover:bg-gray-600 shadow-2xl"
            >
              <FaGithub size="18px" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-3 mb-3 mr-3 rounded-xl bg-gray-400 hover:bg-gray-600 shadow-2xl"
            >
              <FaLinkedin size="18px" />
            </a>
          </div>
          <div className="hidden lg:col-span-5 lg:flex">
            <img src="iam.png" alt="mockup" className="rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
