export default function About() {
    return (
      <div className="bg-gray-300 flex flex-col items-center px-4 py-6 pt-16 w-full">
        <button className="border-4 p-2 md:p-4 border-black text-black text-lg md:text-xl font-bold tracking-widest mb-6">
          ABOUT ME
        </button>
        <p className="text-gray-700 px-4 py-2 md:p-14 text-center text-sm md:text-base w-full md:w-3/5">
          I am a Software Engineer based in Pakistan. I have major in Computer Science, I make Mobile Apps in Kotlin and Flutter, Web Apps in NextJs, .NetBlazor, I also teach Machines. I solve coding problems in my free time.
        </p>
        <button className="border-2 p-2 md:p-6 border-transparent border-l-black border-r-black text-black text-md font-semibold tracking-widest mb-6">
          Explore
        </button>
        <div className="pt-8 md:pt-16 pb-12">
          <img src="Divider-Transparent.png" alt="Divider" className="w-24 md:w-32" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-4 w-full md:w-3/4">
          <div className="flex flex-col items-start text-center md:text-left">
            <p className="text-lg font-bold text-black pt-4 pb-2 tracking-widest">
              Development
            </p>
            <p className="text-sm text-gray-700 w-full md:w-4/5 mx-auto md:mx-0">
              I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="flex flex-col items-start text-center md:text-left">
            <p className="text-lg font-bold text-black pt-4 pb-2 tracking-widest">
              Deployment
            </p>
            <p className="text-sm text-gray-700 w-full md:w-4/5 mx-auto md:mx-0">
              I can Deploy the App based on your preference and give suggestions to use the best deployment service.
            </p>
          </div>
          <div className="flex flex-col items-start text-center md:text-left md:col-span-2">
            <p className="text-lg font-bold text-black pt-4 pb-2 tracking-widest">
              Maintenance
            </p>
            <p className="text-sm text-gray-700 w-full md:w-4/5 mx-auto md:mx-0">
              With Development & Deployment, I also provide maintenance services as well.
            </p>
          </div>
        </div>
      </div>
    );
  }
  