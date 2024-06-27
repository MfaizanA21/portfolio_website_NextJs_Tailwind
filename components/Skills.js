export default function Skills () {
    return(
        <div className = "bg-gray-300 flex flex-col space-between w-full items-center px-4 py-2 mr-auto">
            <div className = "pt-6 pb-12">
                <img src= "Divider-Transparent.png" alt="Divider" className = "w-32 "></img>
            </div>
            <button className = "border-4 p-6 pr-10 pl-10 border-black text-black px-6 py-2 text-lg font-bold tracking-widest">SKILLS</button>
            <div className="flex w-[75%] px-6 py-6 flex-col">
                <p className="font-semibold text-lg tracking-wide text-black pt-4 w-full">Using Now:</p>
                <div className = "grid w-full grid-cols-4 justify-items-center">
                    <div className="flex-col pt-4 pb-4">
                        <p className = "text-black">imgTag</p>
                        <p className = "text-black ">Android</p>
                    </div>
                    <div className="flex-col pt-4 pb-4">
                        <p className = "text-black">imgTag</p>
                        <p className = "text-black ">Flutter</p>
                    </div>
                    <div className="flex-col pt-4 pb-4">
                        <p className = "text-black">imgTag</p>
                        <p className = "text-black ">NextJS</p>
                    </div>
                    <div className="flex-col pt-4 pb-4">
                        <p className = "text-black">imgTag</p>
                        <p className = "text-black ">React</p>
                    </div>
                    <div className="flex-col pt-4 pb-4">
                        <p className = "text-black">imgTag</p>
                        <p className = "text-black ">Git</p>
                    </div>
                </div>

                <p className="font-semibold text-lg tracking-wide text-black pt-4 w-full">Learning:</p>
                <div className = "grid w-full grid-cols-4 justify-items-center">
                    <div className="flex-col pt-4 pb-4">
                        <p className = "text-black">imgTag</p>
                        <p className = "text-black ">ML</p>
                    </div>
                    <div className="flex-col pt-4 pb-4">
                        <p className = "text-black">imgTag</p>
                        <p className = "text-black ">.NetBlazor</p>
                    </div>
                    <div className="flex-col pt-4 pb-4">
                        <p className = "text-black">imgTag</p>
                        <p className = "text-black ">Django</p>
                    </div>
                    <div className="flex-col pt-4 pb-4">
                        <p className = "text-black">imgTag</p>
                        <p className = "text-black ">Pandas</p>
                    </div>
                    <div className="flex-col pt-4 pb-4">
                        <p className = "text-black">imgTag</p>
                        <p className = "text-black ">.NetCore</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}