import Link from "next/link";

export default function BookCall (){

    return(
        <div className="flex flex-col mt-[326px] py-[50px] border-t-[1px] border-b-[1px] border-white ">
            <p className="DMSans text-[26px]">so...</p>
            <div className="flex justify-between">
            <p className="uppercase primary_font text-white text-[57px] ">Ready to your tribe? </p>
                <div className="flex items-center px-[40px] text-[13px] DmSans bg-[#8870BB] rounded-[8px]">
                    <a>
                        Submite Details
                    </a>
                </div>
            </div>
        </div>
    )
}