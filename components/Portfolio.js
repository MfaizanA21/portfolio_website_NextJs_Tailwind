export default function Portfolio() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full relative flex flex-col justify-center items-center pt-6 bg-gray-300">
                <img src="portfolio.PNG" className="w-full h-40 sm:h-60 object-cover" alt="Portfolio" />
                <div className="absolute">
                    <button className="border-4 p-2 md:p-4 lg:p-6 border-black text-black px-6 py-2 text-lg md:text-xl font-bold tracking-widest">
                        Portfolio
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4">
                <div className="relative group">
                    <img src="gowr.PNG" className="w-full object-cover h-40 sm:h-60 group-hover:opacity-65" alt="Project 1" />
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center flex-col bg-opacity-65">
                        <p className="text-black font-light text-sm tracking-widest">Kotlin & Compose</p>
                        <p className="text-black font-bold text-xl tracking-widest">SaudaSalaf</p>
                        <p className="text-black font-normal text-sm tracking-widest text-center">Android application for buying Groceries</p>
                        <div className="flex space-x-4 mt-2">
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Code</button>
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Demo</button>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img src="uc.PNG" className="w-full object-cover h-40 sm:h-60 group-hover:opacity-65" alt="Project 2" />
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center flex-col bg-opacity-65">
                        <p className="text-black font-light text-sm tracking-widest">Flutter & Dart</p>
                        <p className="text-black font-bold text-xl tracking-widest">Mechanify</p>
                        <p className="text-black font-normal text-sm tracking-widest text-center">Mobile application for booking nearby mechanics</p>
                        <div className="flex space-x-4 mt-2">
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Code</button>
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Demo</button>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img src="rdr.PNG" className="w-full object-cover h-40 sm:h-60 group-hover:opacity-65" alt="Project 3" />
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center flex-col bg-opacity-765">
                        <p className="text-black font-light text-sm tracking-widest">Kotlin</p>
                        <p className="text-black font-bold text-xl tracking-widest">Nitters</p>
                        <p className="text-black font-normal text-sm tracking-widest text-center">Android application for taking notes</p>
                        <div className="flex space-x-4 mt-2">
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Code</button>
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Demo</button>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img src="gott.PNG" className="w-full object-cover h-40 sm:h-60 group-hover:opacity-65" alt="Project 4" />
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center flex-col bg-opacity-65">
                        <p className="text-black font-light text-sm tracking-widest">Flutter & Dart</p>
                        <p className="text-black font-bold text-xl tracking-widest">MLSA Air</p>
                        <p className="text-black font-normal text-sm tracking-widest text-center">Mobile application for Air University's Society</p>
                        <div className="flex space-x-4 mt-2">
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Code</button>
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Demo</button>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img src="lou.PNG" className="w-full object-cover h-40 sm:h-60 group-hover:opacity-65" alt="Project 5" />
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center flex-col bg-opacity-65">
                        <p className="text-black font-light text-sm tracking-widest">.NetBlazor & SQL</p>
                        <p className="text-black font-bold text-xl tracking-widest">Bidder</p>
                        <p className="text-black font-normal text-sm tracking-widest text-center">Web application for bidding Antique items</p>
                        <div className="flex space-x-4 mt-2">
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Code</button>
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Demo</button>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <img src="iss.PNG" className="w-full object-cover h-40 sm:h-60 group-hover:opacity-65" alt="Project 6" />
                    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center flex-col bg-opacity-65">
                        <p className="text-black font-light text-sm tracking-widest">Kotlin</p>
                        <p className="text-black font-bold text-xl tracking-widest">LittleLemon</p>
                        <p className="text-black font-normal text-sm tracking-widest text-center">Android application for Restaurant's menu</p>
                        <div className="flex space-x-4 mt-2">
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Code</button>
                            <button className="border-2 px-4 py-1 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest">Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
