export default function Navbar() {
    return (
      <nav class = "fixed top-0 w-full bg-transparent z-50">
        <div class = "mx-auto max-w-8xl px-2 sm: px-6 lg: px-8">
          <div class = "relative flex items-center justify-end h-12 flex-1 gap-x-8">
              <button class = "text-white bg-transparent hover:bg-white hover:text-black focus:outline-none font-bold rounded-full text-sm px-5 py-2 text-center">About me</button>
              <button class = "text-white bg-transparent hover:bg-white hover:text-black focus:outline-none font-bold rounded-full text-sm px-5 py-2 text-center">Skills</button>
              <button class = "text-white bg-transparent hover:bg-white hover:text-black focus:outline-none font-bold rounded-full text-sm px-5 py-2 text-center">Portfolio</button>
              <button class = "text-white bg-transparent hover:bg-white hover:text-black focus:outline-none font-bold rounded-full text-sm px-5 py-2 text-center">Contact me</button>
            </div>
        </div>
      </nav>
    );
}