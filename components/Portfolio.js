export default function Portfolio() {
    return(
        <div className = "screen-w-full flex flex-col justify-center items-center">
            <div className = "w-full relative flex flex-col justify-center items-center pt-6 bg-gray-300">
                <img src = "portfolio.PNG" className = "w-full stretch h-60"></img>

            <div className = " absolute">
                <button className = "border-4 p-6 pr-10 pl-10 border-black text-black px-6 py-2 text-lg font-bold tracking-widest ">Portfolio</button>
            </div>
            </div>
            <div className = "grid grid-cols-3 w-full">
                <div className = "flex relative group">
                    <img src = "mob.PNG" className = "w-full stretch group-hover:opacity-75"></img>
                    <div className = "opacity-0 group-hover:opacity-100 absolute inset-x-0 bottom-0 top-0 flex justify-center items-center flex-col bg-transparent m-2">
                        <p className = "text-black font-light text-sm tracking-widest">Kotlin & Compose</p>
                        <p className = "text-black font-bold text-xl tracking-widest">SaudaSalaf</p>
                        <p className = "text-black font-normal text-sm tracking-widest">Android application for buying Groceries</p>
                        <div className = " flex row p-2 ">
                            <button className = "border-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest mr-4">Code</button>
                            <button className = "border-2 pl-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest">Demo</button>

                        </div>

                    </div>
                </div>
                <div className = "flex relative group">
                    <img src = "mobile.PNG" className = "w-full stretch group-hover:opacity-75"></img>
                    <div className = "opacity-0 group-hover:opacity-100 absolute inset-x-0 bottom-0 top-0 flex justify-center items-center flex-col bg-transparent m-2">
                        <p className = "text-black font-light text-sm tracking-widest">Flutter & Dart</p>
                        <p className = "text-black font-bold text-xl tracking-widest">Mechanify</p>
                        <p className = "text-black font-normal text-sm tracking-widest">Mobile application for booking nearby mechanics</p>
                        <div className = " flex row p-2 ">
                            <button className = "border-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest mr-4">Code</button>
                            <button className = "border-2 pl-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest">Demo</button>

                        </div>

                    </div>
                </div>
                <div className = "flex relative group">
                    <img src = "mob.PNG" className = "w-full stretch group-hover:opacity-75"></img>
                    <div className = "opacity-0 group-hover:opacity-100 absolute inset-x-0 bottom-0 top-0 flex justify-center items-center flex-col bg-transparent m-2">
                        <p className = "text-black font-light text-sm tracking-widest">Kotlin</p>
                        <p className = "text-black font-bold text-xl tracking-widest">Nitters</p>
                        <p className = "text-black font-normal text-sm tracking-widest">Android application for taking notes</p>
                        <div className = " flex row p-2 ">
                            <button className = "border-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest mr-4">Code</button>
                            <button className = "border-2 pl-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest">Demo</button>

                        </div>

                    </div>
                </div>
                <div className = "flex relative group">
                    <img src = "mobile.PNG" className = "w-full stretch group-hover:opacity-75"></img>
                    <div className = "opacity-0 group-hover:opacity-100 absolute inset-x-0 bottom-0 top-0 flex justify-center items-center flex-col bg-transparent m-2">
                        <p className = "text-black font-light text-sm tracking-widest">Flutter & Dart</p>
                        <p className = "text-black font-bold text-xl tracking-widest">MLSA Air</p>
                        <p className = "text-black font-normal text-sm tracking-widest">Mobile application for Air University's Society</p>
                        <div className = " flex row p-2 ">
                            <button className = "border-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest mr-4">Code</button>
                            <button className = "border-2 pl-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest">Demo</button>

                        </div>

                    </div>
                </div>
                <div className = "flex relative group">
                    <img src = "web.PNG" className = "w-full stretch group-hover:opacity-75"></img>
                    <div className = "opacity-0 group-hover:opacity-100 absolute inset-x-0 bottom-0 top-0 flex justify-center items-center flex-col bg-transparent m-2">
                        <p className = "text-black font-light text-sm tracking-widest">.NetBlazor & SQLServer</p>
                        <p className = "text-black font-bold text-xl tracking-widest">Bidder</p>
                        <p className = "text-black font-normal text-sm tracking-widest">Web application for bidding Antique items</p>
                        <div className = " flex row p-2 ">
                            <button className = "border-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest mr-4">Code</button>
                            <button className = "border-2 pl-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest">Demo</button>

                        </div>

                    </div>
                </div>
                <div className = "flex relative group">
                    <img src = "website.PNG" className = "w-full stretch group-hover:opacity-75"></img>
                    <div className = "opacity-0 group-hover:opacity-100 absolute inset-x-0 bottom-0 top-0 flex justify-center items-center flex-col bg-transparent m-2">
                        <p className = "text-black font-light text-sm tracking-widest">Js & PHP</p>
                        <p className = "text-black font-bold text-xl tracking-widest">Makaan</p>
                        <p className = "text-black font-normal text-sm tracking-widest">Web application for buying and selling of properties</p>
                        <div className = " flex row p-2 ">
                            <button className = "border-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest mr-4">Code</button>
                            <button className = "border-2 pl-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest">Demo</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}