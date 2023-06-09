import { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import { Reveal } from "./Reveal";

export default function OurGoal() {
    return (
        <div className="flex flex-col justify-center space-y-[20px]">
            <Reveal>
                <h2 className=" uppercase stroke_text text-white primary_font lg:text-[26px] text-[18px]">
                whats the point?
                </h2>
            </Reveal>
            <Reveal>
                <h1 className=" uppercase primary_font text-white 2xl:text-[72px] xl:text-[60px] lg:text-[46px] md:text-[30px] text-[22px] 2xl:leading-[50px] xl:leading-[42px] lg:leading-[32px] md:leading-[24px] leading-[20px] break-words">
                <span className="purple">Trailblazing</span> Leaders and Propel Your journey</h1>
            </Reveal>
            <div className="text-[#A8A8A8] mt-[50px]">
                <Reveal>
                    <p className="  xl:text-[26px] lg:text-[22px] text-[18px] lg:w-[600px]">
                        Bring together industry leaders in the aim to help pushing
                        innovation, education and collaboration across Web3.
                    </p>
                </Reveal>
                <ul className=" xl:text-[22px] lg:text-[18px] text-[14px] mt-[50px]">
                    <Reveal>
                        <li>We Learn together.</li>
                    </Reveal>
                    <Reveal>
                        <li>We support eachother.</li>
                    </Reveal>
                    <Reveal>
                        <li>We grow together.</li>
                    </Reveal>
                </ul>
            </div>
        </div>
    );
}
