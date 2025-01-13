import Footer from "@/components/footer";
import { NavBar } from "@/components/navBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lexend_Deca } from "next/font/google";

export const lexend = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-lexend",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${lexend.className}`}>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
