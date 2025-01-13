// import { Geist, Geist_Mono } from "next/font/google";

import BlogList from "@/components/blogList";
import Discover from "@/components/discover";
import Features from "@/components/features";
import HeroSection from "@/components/hero";
import StatsSection from "@/components/stats";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Discover />
      <Features />
      <StatsSection />
      <BlogList />
    </div>
  );
}
