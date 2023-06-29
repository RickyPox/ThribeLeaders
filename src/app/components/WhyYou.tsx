import { Reveal } from "./Reveal";

export default function WhyYou (){

    return(
        <div className="flex flex-col justify-center space-y-[20px]">
            <Reveal>
                <h2 className="uppercase stroke_text text-white primary_font lg:text-[26px] text-[18px]">You're making noise</h2>
            </Reveal>
            <Reveal>
                <h1 className="uppercase primary_font text-white 2xl:text-[72px] xl:text-[60px] lg:text-[46px] md:text-[30px] text-[22px] 2xl:leading-[50px] xl:leading-[42px] lg:leading-[32px] md:leading-[24px] leading-[20px]">
                Handpicked <span className="purple">Mavericks</span> Shaping the Future of Web3 </h1>
            </Reveal>
            <div className="text-[#A8A8A8] flex flex-col md:flex-row md:space-x-[25px] space-y-[25px] md:space-y-[0px] mt-[50px]">
            
                <p className="xl:text-[22px] lg:text-[18px] text-[14px] w-auto md:w-1/2">
                <Reveal>
                    Our selection process is rigorous, guided by a commitment to curating a community of trailblazers who possess the vision and determination to 
                    shape the future of decentralized technologies.</Reveal>
                    <Reveal> We seek those who have demonstrated exceptional achievements in their respective fields, 
                    showcasing a proven track record of driving innovation.</Reveal>
                </p>
                <p className="xl:text-[22px] lg:text-[18px] text-[14px] w-auto md:w-1/2">
                    <Reveal>Our community is more than just a network; it is a tribe of visionaries, committed to propelling the industry forward. </Reveal>
                    <Reveal> We believe that the power of collaboration is the catalyst for exponential growth and lasting impact.</Reveal>
                </p>
            </div>
        </div>
    )
}