"use client";

import Typewriter from "./ui/animated/typewriter";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "50+", label: "Clients" },
  { value: "120+", label: "Projects" },
  { value: "10+", label: "Team Leads" },
  { value: "10+", label: "Glorious Years" },
];

export default function StatsSection() {
  return (
    <div className="bg-[#102444] overflow-hidden text-white px-52 sm:px-0">
      {/* Content */}
      <div className="pt-52 sm:pt-14 rounded-t-full border-2 border-b-0 text-center space-y-20 sm:space-y-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-xl font-bold text-white leading-tight">
          <span className="block">
            <Typewriter text="We build solutions that help" delay={100} />
          </span>
          <span className="text-blue-400">
            <Typewriter text="businesses of all sizes to" delay={100} />
          </span>
          <span className="text-blue-400">
            <Typewriter text="scale" delay={100} />
          </span>
        </h2>

        {/* Stats */}
        <div className="flex justify-center gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
