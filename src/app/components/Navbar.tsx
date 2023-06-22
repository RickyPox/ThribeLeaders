"use client";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
const navigation = [
    {
    name: "Our Goal",
    href: "#OurGoal",
    },
    {
    name: "Manifesto",
    href: "#Manifesto",
    },
    {
    name: "Why You",
    href: "#WhyYou",
    },
    {
    name: "Book Call",
    href: "#BookCall",
    },
];

const { scrollYProgress } = useScroll();
const [scrollY, setScrollY] = useState(0);

const [pageEnd, setPageEnd] = useState(false);

useEffect(() => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    if(scrollY >= height){ // verifies if the page reches the end
        setPageEnd(true)
    }else{
        setPageEnd(false)
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, [pageEnd, scrollY]);

return (
    <div className="border-b-[1px] border-white absolute w-full left-0 lg:h-[120px] md:h-[80px] h-[40px] flex flex-col justify-center">
    <motion.div
        className="progress-bar lg:h-[120px] md:h-[80px] h-[40px] lg:ml-[120px] md:ml-[80px] "
        style={{ scaleX: scrollYProgress }}
    />
    <nav>
        <div className="hidden lg:flex w-full lg:space-x-[30px] xl:space-x-[100px] text-[22px] DmSans text-center justify-center absolute top-[50%] -translate-y-[50%] z-10">
        {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
            <p>{item.name}</p>
            </Link>
        ))}
        </div>
    </nav>
    <div className={`flex items-center justify-center absolute right-0 top-0 h-full md:w-[200px] w-[120px] rounded-tr-[8px] transition-all duration-250 
    ${pageEnd == true ? "opacity-1 scale-100":"opacity-0 scale-50"}` }>
        <div className="primary_font md:text-[26px] text-[18px]">Your In</div>
    </div>
    </div>
);
}
