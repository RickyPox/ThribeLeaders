import Link from "next/link"

export default function Manifesto(){


    return(
            <div className="flex flex-col h-full justify-center">
                <h1 className="uppercase stroke_text text-white primary_font text-[26px]">what we stand for</h1>
                <p className="uppercase primary_font text-white text-[57px]">
                <span className="purple">Transformative</span> Collaboration, Growth, and Possibilities </p>
                <div className="text-[#A8A8A8] flex space-x-[25px] mt-[50px]">
                <p className="text-[22px] w-1/2">
                    We empower individuals within our community to unleash their true potential, fostering an environment of inclusivity, 
                    support, and shared learning. Guided by the principles of transparency, fairness, and ethical stewardship, 
                    we pave the way for a Web3 ecosystem that champions empowerment, values authenticity, and drives positive change.
                </p>
                <p className="text-[22px] w-1/2">
                    We recognize that our actions extend beyond ourselves, resonating with the world at large. 
                    Our endeavors are fueled by a deep-rooted desire to make a lasting impact, transcending borders, and bridging divides. 
                    Through education, we equip ourselves and others with the knowledge and tools to navigate this rapidly evolving landscape, 
                    unlocking opportunities for collective prosperity.
                </p>
                </div>
            </div>
    )
}