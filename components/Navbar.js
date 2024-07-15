export default function Navbar() {
  return (
      <nav className="fixed top-0 w-full bg-transparent z-50">
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-end h-12 gap-x-2 sm:gap-x-4 lg:gap-x-8">
                  <button className="text-white bg-transparent hover:bg-white hover:text-black focus:outline-none font-bold rounded-full text-sm px-3 py-1 sm:px-4 sm:py-2 text-center">
                      About me
                  </button>
                  <button className="text-white bg-transparent hover:bg-white hover:text-black focus:outline-none font-bold rounded-full text-sm px-3 py-1 sm:px-4 sm:py-2 text-center">
                      Skills
                  </button>
                  <button className="text-white bg-transparent hover:bg-white hover:text-black focus:outline-none font-bold rounded-full text-sm px-3 py-1 sm:px-4 sm:py-2 text-center">
                      Portfolio
                  </button>
                  <button className="text-white bg-transparent hover:bg-white hover:text-black focus:outline-none font-bold rounded-full text-sm px-3 py-1 sm:px-4 sm:py-2 text-center">
                      Contact me
                  </button>
              </div>
          </div>
      </nav>
  );
}
