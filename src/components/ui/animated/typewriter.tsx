import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  text: string; // Text to type out
  delay: number; // Delay between typing each character
  onTypingComplete?: () => void; // Optional callback when typing completes
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay,
  onTypingComplete,
}) => {
  const [currentText, setCurrentText] = useState<string>(""); // Text currently being typed
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Current index of typing
  const [startTyping, setStartTyping] = useState<boolean>(false); // Flag to start typing
  const typewriterRef = useRef<HTMLDivElement>(null); // Reference to the container

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setStartTyping(true); // Start typing when the component is in view
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    const currentRef = typewriterRef.current; // Copy the ref value to a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stored value for cleanup
      }
    };
  }, []);

  useEffect(() => {
    if (startTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && onTypingComplete) {
      onTypingComplete(); // Notify when typing is complete
    }
  }, [currentIndex, delay, text, startTyping, onTypingComplete]);

  return <span ref={typewriterRef}>{currentText}</span>;
};

export default Typewriter;
