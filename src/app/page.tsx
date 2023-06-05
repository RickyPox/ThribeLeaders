import BookCall from "./components/BookCall";
import Manifesto from "./components/Manifesto";
import Navbar from "./components/Navbar";
import OurGoal from "./components/OurGoal";
import WeAre from "./components/WeAre";
import WhyYou from "./components/WhyYou";


export default function Home() {


  return (
    <div>
      <h1 className="uppercase primary_font text-center mt-[60px] text-[26px] mb-[50px]">CONGRATULATIONS ON YOUR INVITE !</h1>
      <div className="border-white mx-[100px] border-[1px] h-[786px] pl-[120px] pr-[50px] relative">
        <Navbar></Navbar>
        <div className="h-full border-l-[1px] pl-[80px] pt-[120px]">
          <WeAre></WeAre>
          <OurGoal></OurGoal>
          <Manifesto></Manifesto>
          <WhyYou></WhyYou>
          <BookCall></BookCall>
        </div>
        
      </div>
    </div>
  )
}
