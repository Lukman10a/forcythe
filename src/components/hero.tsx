import { PartnersSlider } from "./partnerSlide";
import global from "../../public/assets/svg/global.svg";
import starks from "../../public/assets/svg/starks.svg";
import factor from "../../public/assets/svg/factor.svg";
import unlock from "../../public/assets/svg/unlock.svg";
import phone from "../../public/assets/svg/phone.svg";
import Link from "next/link";
import Typewriter from "./ui/animated/typewriter";

export default function HeroSection() {
  const partners = [global, starks, factor, unlock, phone];
  return (
    <section className="bg-[#080414] ">
      <div className="flex flex-col items-center bg-[url('/assets/svg/map.svg')] bg-top bg-no-repeat justify-center h-screen overflow-hidden">
        {/* Content */}
        <div className="flex flex-col items-start w-[1200px] sm:w-[350px] h-[350px] sm:h-[550px] border-2 rounded-[50px] py-8 sm:py-8 px-20 sm:px-10 mt-10 sm:mt-16 sm:mx-10 mb-16 bg-opacity-10 bg-white border-none">
          <div className="text-6xl sm:text-5xl font-bold text-white leading-snug">
            <span className="">
              <Typewriter text="We build" delay={100} />
            </span>{" "}
            <span className="text-blue-500 typewriter">
              <Typewriter text=" products" delay={100} />
            </span>
            <span className=" typewriter">
              <Typewriter text=" that shape a better future" delay={100} />
            </span>
          </div>

          <h1></h1>
          <div className="mt-4 text-lg text-gray-400">
            <Typewriter
              text="We’re the architects of digital excellence across industries. We
            redefine business with cutting-edge digital strategies that invoke
            sector-wide transformation."
              delay={10}
            />
          </div>
          <div className="mt-8">
            <Link
              href="#"
              className="px-6 py-3 text-black font-bold text-lg bg-white border-2 border-dashed border-white rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Book a Call
            </Link>
          </div>
        </div>
        <p className="text-white text-center text-5xl sm:text-4xl">
          <Typewriter
            text="Success in Motion - Our clients’ journey"
            delay={100}
          />
        </p>
      </div>

      <div className="py-4">
        <div className="mx-auto mt-4 overflow-hidden">
          <PartnersSlider images={partners} />
          <PartnersSlider images={partners} reverse />
        </div>
      </div>
    </section>
  );
}
