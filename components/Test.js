export default function Test(){
    
    return(
        <div className="relative bg-red-400 screen-w-lg lg:py-16 overflow-hidden">
            <p>Relative parent</p>
            <div className="absolute right-[-2%] top-[-25%] bg-gray-700 h-[155%] w-[55%] rotate-6 z-10">
            </div>
            <div className="absolute bg-green-400 left-0 top-0 h-full w-1/2">
            </div>
        </div>
    )
}