"use client"
import { useScroll, motion } from "framer-motion";
import BookCall from "./components/BookCall";
import Manifesto from "./components/Manifesto";
import Navbar from "./components/Navbar";
import OurGoal from "./components/OurGoal";
import WeAre from "./components/WeAre";
import WhyYou from "./components/WhyYou";
import { useEffect, useState } from "react";

export default function Home() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="mt-[60px]">
      <div className="fixed">
        <h1 className="uppercase primary_font text-center text-[26px] h-[100px]">
          CONGRATULATIONS ON YOUR INVITE !
        </h1>
        <div className="w-screen flex justify-center box_container">
          <div className="box_container_inside border-white border-[1px] outline-[50px] h-[786px] w-[90vw] pl-[120px] pr-[50px] relative ">
            <Navbar></Navbar>
            <div className="h-full border-l-[1px] pl-[80px] pt-[120px] " />
          </div>
        </div>
      </div>

      <section className="flex justify-center w-screen sections_content">
        <div className="h-[786px] w-[90vw] pl-[120px] pr-[50px] pt-[120px] mt-[100px] ">
          <p></p>
          <div className="h-full ml-[80px]"
          style={{ clipPath: `inset(${scrollY}px 0px -${scrollY}px 0px)` }} >
            <WeAre></WeAre>
            <OurGoal></OurGoal>
          </div>
        </div>
      </section>
    </div>
  );
}
