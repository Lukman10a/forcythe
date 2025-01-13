import { useState, useEffect } from "react";

// Define the props for the Typewriter component
interface TypewriterProps {
  text: string; // The full text to type out
  delay: number; // Delay between each character in milliseconds
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState<string>(""); // Current visible text
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Current index in the text string

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout); // Cleanup timeout on unmount or dependencies change
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
