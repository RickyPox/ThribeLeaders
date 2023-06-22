import Link from "next/link";
import { Reveal } from "./Reveal";

export default function BookCall (){

    return(
        <div className="flex flex-col h-full justify-center" id="BookCall">
            <div className=" mt-[320px] py-[50px] border-t-[1px] border-white">
                <Reveal>
                    <p className="DMSans lg:text-[26px] text-[18px]">so...</p>
                </Reveal>
                <div className="flex flex-col md:flex-row justify-between space-y-[25px] md:space-y-0">
                <Reveal>
                    <h1 className="uppercase primary_font text-white 2xl:text-[57px] xl:text-[48px] lg:text-[42px] text-[20px] break-words w-3/4">Ready to join thribe? </h1>
                </Reveal>
                <Reveal>
                    <div className="flex items-center ">
                        <a className="text-center p-[15px] lg:p-[30px] xl:text-[22px] lg:text-[18px] text-[14px] DmSans bg-[#8870BB] rounded-[8px]">
                            Submit Details
                        </a>
                    </div>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}