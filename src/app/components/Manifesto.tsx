import Link from "next/link"

export default function Manifesto(){


    return(
            <div className="flex flex-col h-full justify-center space-y-[20px]">
                <h1 className="uppercase stroke_text text-white primary_font lg:text-[26px] text-[18px]">what we stand for</h1>
                <p className="uppercase primary_font text-white 2xl:text-[57px] xl:text-[48px] lg:text-[42px] text-[22px] break-words">
                <span className="purple">Transformative</span> Collaboration, Growth, and Possibilities </p>
                <div className="text-[#A8A8A8] flex flex-col md:flex-row md:space-x-[25px] space-y-[25px] md:space-y-[0px] mt-[50px]">
                <p className="xl:text-[22px] lg:text-[18px] text-[14px] w-auto md:w-1/2">
                    We empower individuals within our community to unleash their true potential, fostering an environment of inclusivity, 
                    support, and shared learning. Guided by the principles of transparency, fairness, and ethical stewardship, 
                    we pave the way for a Web3 ecosystem that champions empowerment, values authenticity, and drives positive change.
                </p>
                <p className="xl:text-[22px] lg:text-[18px] text-[14px] w-auto md:w-1/2">
                    We recognize that our actions extend beyond ourselves, resonating with the world at large. 
                    Our endeavors are fueled by a deep-rooted desire to make a lasting impact, transcending borders, and bridging divides. 
                    Through education, we equip ourselves and others with the knowledge and tools to navigate this rapidly evolving landscape, 
                    unlocking opportunities for collective prosperity.
                </p>
                </div>
            </div>
    )
}