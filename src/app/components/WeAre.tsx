import { Reveal } from "./Reveal";

export default function WeAre(){
    return(
        <div className="h-[70vh] flex flex-col justify-center space-y-[20px]">
            <Reveal>
                <h2  className=" uppercase stroke_text text-white primary_font lg:text-[26px] text-[18px]">HI, WE ARE..</h2>
            </Reveal>
            <Reveal>
            <h1 className=" uppercase primary_font text-white 2xl:text-[72px] xl:text-[60px] lg:text-[46px] md:text-[30px] text-[22px] 2xl:leading-[50px] xl:leading-[42px] lg:leading-[32px] md:leading-[24px] leading-[20px]">
                forward-thinking leaders. a <span className="purple">curated </span> 
                community of <span className="purple">SELECTED</span> individuals </h1>
            </Reveal>
        </div>
)
}