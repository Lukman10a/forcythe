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
        <div className="flex flex-col items-start max-w-4xl border-2 rounded-[50px] py-4 sm:py-8 px-20 sm:px-10 mt-10 sm:mt-16 sm:mx-4 mb-16 bg-opacity-10 bg-white border-none">
          <h1 className="text-6xl sm:text-5xl font-bold text-white leading-snug relative">
            <span className="text-blue-500 ">
              <Typewriter text="We build" delay={100} />
            </span>{" "}
            <span className="text-blue-500 typewriter">
              <Typewriter
                text=" products that shape a better future"
                delay={100}
              />
            </span>
          </h1>

          <h1></h1>
          <p className="mt-4 text-lg text-gray-400">
            <Typewriter
              text="We’re the architects of digital excellence across industries. We
            redefine business with cutting-edge digital strategies that invoke
            sector-wide transformation."
              delay={100}
            />
          </p>
          <div className="mt-8">
            <Link
              href="#"
              className="px-6 py-3 text-black font-bold text-lg bg-white border-2 border-dashed border-white rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Book a Call
            </Link>
          </div>
        </div>
        <p className="text-white text-center text-5xl">
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
