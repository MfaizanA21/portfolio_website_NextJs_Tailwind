import { FaReact, FaAndroid, FaPython } from "react-icons/fa";
import { SiFlutter, SiScikitlearn } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiDotnet } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

export default function Skills() {
  return (
    <div className="bg-gray-300 flex flex-col items-center px-4 py-6 w-full">
      <div className="pt-6 pb-12">
        <img src="Divider-Transparent.png" alt="Divider" className="w-24 md:w-32" />
      </div>
      <button className="border-4 p-2 md:p-4 lg:p-6 pr-4 md:pr-8 lg:pr-10 pl-4 md:pl-8 lg:pl-10 border-black text-black text-lg md:text-xl font-bold tracking-widest mb-6">
        SKILLS
      </button>
      <div className="flex flex-col w-full md:w-3/4 px-2 md:px-6 py-4 md:py-6">
        <p className="font-semibold text-lg md:text-xl tracking-wide text-black pt-4 w-full">
          Using Now:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
          <div className="flex flex-col items-center text-center pt-4 pb-4">
            <FaAndroid size="2em" color="black" />
            <p className="text-black">Android</p>
          </div>
          <div className="flex flex-col items-center text-center pt-4 pb-4">
            <SiFlutter size="2em" color="black" />
            <p className="text-black">Flutter</p>
          </div>
          <div className="flex flex-col items-center text-center pt-4 pb-4">
            <FaPython size="2em" color="black" />
            <p className="text-black">Python Dev</p>
          </div>
          <div className="flex flex-col items-center text-center pt-4 pb-4">
            <IoLogoFirebase size="2em" color="black" />
            <p className="text-black">Firebase</p>
          </div>
        </div>

        <p className="font-semibold text-lg md:text-xl tracking-wide text-black pt-4 w-full">
          Learning:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
          <div className="flex flex-col items-center text-center pt-4 pb-4">
            <SiScikitlearn size="2em" color="black" />
            <p className="text-black">ML</p>
          </div>
          <div className="flex flex-col items-center text-center pt-4 pb-4">
            <DiDotnet size="2em" color="black" />
            <p className="text-black">.Net</p>
          </div>
          <div className="flex flex-col items-center text-center pt-4 pb-4">
            <RiNextjsFill size="2em" color="black" />
            <p className="text-black">NextJS</p>
          </div>
          <div className="flex flex-col items-center text-center pt-4 pb-4">
            <FaReact size="2em" color="black" />
            <p className="text-black">React</p>
          </div>
        </div>
      </div>
    </div>
  );
}
