"use client"
import BookCall from "./components/BookCall";
import Manifesto from "./components/Manifesto";
import Navbar from "./components/Navbar";
import OurGoal from "./components/OurGoal";
import WeAre from "./components/WeAre";
import WhyYou from "./components/WhyYou";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import {gsap} from "gsap"

export default function Home() {

  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState (0);
  const clipRef = useRef<HTMLDivElement | null>(null);
  const [clipHeight, setClipHeight] = useState(0);
  
  useEffect(() => {
    if(containerRef.current){
    const height = containerRef.current.offsetHeight;
    setContainerHeight(height);
  }
  if(clipRef.current){
    const clipRefComputedStyle = window.getComputedStyle(clipRef.current, null)
    let clipRefHeight = clipRef.current.clientHeight;
    clipRefHeight -=
      parseFloat(clipRefComputedStyle.paddingTop) +
      parseFloat(clipRefComputedStyle.paddingBottom)
      setClipHeight(clipRefHeight)
  }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  if(intersection){
    const fadeIn = (element: gsap.TweenTarget) => {
    gsap.to(element,{
      y: -60,
      opacity: 1,
      ease: "power4.out",
      stagger:{
        amount: 0.3 
      }
    })
  } 
  const fadeOut = (element: gsap.TweenTarget) => {
    gsap.to(element,{
      y: -20,
      opacity: 0,
      ease: "power4.out",
    })
  } 

  intersection && intersection.intersectionRatio < 0.5 ?
  fadeOut(".fadeIn") : fadeIn(".fadeIn")
}
  

  return (
    <div className="pt-[5vh] h-screen">
      <div className="fixed">
        <h1 className="uppercase primary_font text-center md:text-[26px] text-[18px] h-[10vh] w-[90vw] mx-auto">
          CONGRATULATIONS ON YOUR INVITE !
        </h1>
        <div className="w-screen flex justify-center border_box">
          <div className="border_box_inside border-white border-[1px] rounded-[8px] outline-[50px] h-[80vh] w-[90vw] lg:pl-[120px] md:pl-[80px] pl-[40px] md:pr-[50px] pr-[10px] relative ">
            <Navbar></Navbar>
            <div className="h-full md:border-l-[1px]" />
          </div>
        </div>
      </div>

      <section className="flex justify-center w-screen h-full mt-[10vh]">
        <div ref={clipRef} className="h-[80vh] w-[90vw] lg:pl-[120px] md:pl-[80px] pl-[10px] md:pl:[40px] md:pr-[50px] pr-[10px] lg:pt-[120px] md:pt-[80px] pt-[40px]">
          <div ref={containerRef} className="lg:ml-[80px] space-y-[250px] mb-[150px] bg-yellow-300"
            style={{ clipPath: `inset(${scrollY}px 0px ${containerHeight - clipHeight - scrollY }px 0px)` }} >
              <WeAre></WeAre>
              <div ref={sectionRef} className="fadeIn">
                <OurGoal></OurGoal>
              </div>
              <Manifesto></Manifesto>
              <WhyYou></WhyYou>
              <BookCall></BookCall>
          </div>
        </div>
      </section>
    </div>
  );
}
