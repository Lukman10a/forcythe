import React, { useState } from "react";
import BookCallButton from "./bookCallButton";
import idea from "../../public/assets/svg/idea.svg";
import planlaunch from "../../public/assets/svg/plan-launch.svg";
import plandevelop from "../../public/assets/svg/plan-develop.svg";
import plandesign from "../../public/assets/svg/plan-design.svg";
import Image from "next/image";
import Typewriter from "./ui/animated/typewriter";

type Step = {
  image: string;
  title: string;
  description: string;
};

export default function Step() {
  // State to manage the currently displayed image
  const [currentStep, setCurrentStep] = useState("Design");

  // Map to associate steps with images and text content
  const steps: { [key: string]: Step } = {
    Idea: {
      image: idea,
      title: "Your vision is unique.",
      description:
        "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
    },
    Design: {
      image: plandesign,
      title: "Crafting the blueprint for success",
      description:
        "Design is more than aesthetics; it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
    },
    Develop: {
      image: plandevelop,
      title: "Turning blueprints into reality.",
      description:
        "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
    },
    Launch: {
      image: planlaunch,
      title: "Your launchpad to the market.",
      description:
        "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
    },
  };

  return (
    <div className="bg-[#080414] text-white p-20 sm:p-6">
      <h1 className="text-5xl mb-8 sm:text-3xl">
        From{" "}
        <span className="text-[#62a8ea]">
          <Typewriter text="Spark" delay={100} />
        </span>{" "}
        to{" "}
        <span className="text-[#62a8ea]">
          <Typewriter text="Spotlight" delay={100} />
        </span>
        <Typewriter text=" : we take you" delay={100} />
        <br />{" "}
        <Typewriter text=" every step of the way to success." delay={100} />
      </h1>

      <div className="grid grid-cols-2 gap-10 items-center sm:grid-cols-1">
        {/* Left Section */}
        <section className="space-y-8 flex flex-col">
          {/* Navigation Bar */}
          <div className="rounded-full p-4 mt-8 border-2 border-[#b8d4f4] grid gap-4 grid-cols-4">
            {Object.keys(steps).map((step) => (
              <p
                key={step}
                onClick={() => setCurrentStep(step)}
                className={`overflow-hidden px-2 py-3 sm:p-2 rounded-full text-center text-base sm:text-sm font-medium cursor-pointer transition-all duration-300 ${
                  currentStep === step
                    ? "bg-[#b8d4f4] text-[#080414]"
                    : "bg-transparent text-white"
                }`}
              >
                {step}
              </p>
            ))}
          </div>

          {/* Dynamic Content */}
          <h2 className="text-3xl">{steps[currentStep].title}</h2>
          <p>{steps[currentStep].description}</p>
          <div className="self-start">
            <BookCallButton />
          </div>
        </section>

        {/* Right Section */}
        <section className="flex justify-center">
          <Image
            width={100}
            height={100}
            src={steps[currentStep].image}
            alt={currentStep}
            className="h-[350px] w-full"
          />
        </section>
      </div>
    </div>
  );
}
