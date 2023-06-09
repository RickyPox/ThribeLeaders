"use client";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
const navigation = [
    {
    name: "Our Goal",
    href: "#",
    },
    {
    name: "Manifesto",
    href: "#",
    },
    {
    name: "Why You",
    href: "#",
    },
    {
    name: "Book Call",
    href: "#",
    },
];

const { scrollYProgress } = useScroll();

return (
    <div className="border-b-[1px] border-white absolute w-full left-0 lg:h-[120px] md:h-[80px] h-[40px] flex flex-col justify-center">
    <motion.div
        className="progress-bar lg:h-[120px] md:h-[80px] h-[40px] lg:ml-[120px] md:ml-[80px] ml-[40px] md:mr-[200px] mr-[120px]"
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
    <div className="bg-[#8870BB] flex items-center justify-center absolute right-0 top-0 h-full md:w-[200px] w-[120px]">
        <div className="primary_font md:text-[26px] text-[18px]">Your In</div>
    </div>
    </div>
);
}
