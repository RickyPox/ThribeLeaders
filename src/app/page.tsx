"use client"
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
        <h1 className="uppercase primary_font text-center md:text-[26px] text-[18px] h-[100px] w-[90vw] mx-auto">
          CONGRATULATIONS ON YOUR INVITE !
        </h1>
        <div className="w-screen flex justify-center box_container">
          <div className="box_container_inside border-white border-[1px] outline-[50px] h-[80vh] w-[90vw] lg:pl-[120px] md:pl-[80px] pl-[40px] md:pr-[50px] pr-[10px] relative ">
            <Navbar></Navbar>
            <div className="h-full border-l-[1px]" />
          </div>
        </div>
      </div>

      <section className="flex justify-center w-screen sections_content">
        <div className="h-[80vh] w-[90vw] lg:pl-[120px] md:pl-[80px] pl-[40px] md:pr-[50px] pr-[10px] lg:pt-[120px] md:pt-[80px] pt-[40px] mt-[100px] ">
          <p></p>
          <div className="h-full lg:ml-[80px] ml-[20px]"
          style={{ clipPath: `inset(${scrollY}px 0px -${scrollY}px 0px)` }} >
          <WeAre></WeAre>
          <OurGoal></OurGoal>
          <Manifesto></Manifesto>
          <WhyYou></WhyYou>
          <BookCall></BookCall>
          </div>
        </div>
      </section>
    </div>
  );
}
