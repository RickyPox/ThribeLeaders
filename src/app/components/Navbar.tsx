"use client"
import Link from "next/link"
import { motion, useScroll } from "framer-motion";

export default function Navbar(){
    const navigation =[
        {
            name: "Our Goal", href:"#"
        },
        {
            name: "Manifesto", href:"#"
        },
        {
            name: "Why You", href:"#"
        },
        {
            name: "Book Call", href:"#"
        },
    ]

    const { scrollYProgress } = useScroll();

    return(
        <div className="border-b-[1px] border-white absolute w-full left-0 h-[120px] flex flex-col justify-center">
            <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}/>
            <nav>
                <div className="flex w-full  space-x-[100px] text-[22px] DmSans text-center justify-center absolute top-[50%] -translate-y-[50%] z-10">
                    {navigation.map ((item) =>(
                        <Link
                        key={item.name}
                        href={item.href}>
                            <p>{item.name}</p>
                        </Link>
                    ))}
                </div>
            </nav>
            <div className="bg-[#8870BB] flex items-center justify-center absolute right-0 top-0 h-full px-[70px]">
                <div className="primary_font text-[26px]">
                    Your In
                </div>
            </div>
        </div>
    )
}