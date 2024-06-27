export default function About() {
    return(
        <div className="bg-gray-300 flex flex-col space-between w-full items-center px-4 py-6 mr-auto pt-16">
            <button className = "border-4 p-6 border-black text-black px-6 py-2 text-lg font-bold tracking-widest">ABOUT ME</button>
            <p className="text-gray-700 p-14 text-center text-sm w-[65%]">I am a Software Engineer based in Pakistan. I have major in Computer Science, I make Mobile Apps in Kotlin and Flutter, Web Apps in NextJs, .NetBlazor. In my free time i practice leet code and complete courses.</p>
            <button className = "border-2 p-6 border-black border-transparent border-l-black border-r-black text-black px-6 py-1 text-md font-semibold tracking-widest">Explore</button>
            <div className = "pt-16 pb-12">
                <img src= "Divider-Transparent.png" alt="Divider" className = "w-32 "></img>
            </div>
            
            <div className = "grid justify-items-center px-4 py-4 w-[75%] grid-cols-2">
                <div className = "flex-col justify-start">
                    <p className = "text-lg font-bold text-black pt-4 pb-2 tracking-widest">Development</p>
                    <p className = "text-sm text-gray-700 w-[80%]">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                </div>
                <div className = "flex-col justify-start">
                    <p className = "text-lg font-bold text-black pt-4 pb-2 tracking-widest">Deployment</p>
                    <p className = "text-sm text-gray-700 w-[80%]">I can Deploy the App based on your preference and give suggestions to use the best deployment service.</p>
                </div>
                <div className = "flex-col pt-4 mx-auto">
                    <p className = "text-lg font-bold text-black pt-4 pb-2 tracking-widest">Maintainance</p>
                    <p className = "text-sm text-gray-700 w-[80%]">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                </div>
            </div>
        </div>
    )
} 