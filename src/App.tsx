import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Roadmap from "./components/Roadmap";
import Checklist from "./components/Checklist";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MessageSquare, Sparkles, BookOpen } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Custom cursor position
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // 1. Detect if touch-only screen to prevent mouse trail glitched circles on mobile
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();

    // 2. Track window scrolling heights for progress indicator
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check current visible sections
      const sections = ["hero", "about", "services", "portfolio", "roadmap", "checklist", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    // 3. Track cursor positions for luxury follow-ring
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Dynamic tag hover hooks for magnetic expansion effects
    const interactiveElements = document.querySelectorAll("a, button, select, input, textarea, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <div className={`min-h-screen relative font-sans select-none overflow-x-hidden ${
      darkMode ? "bg-navy text-cream dark" : "bg-cream text-navy"
    } theme-transition`}>
      
      {/* A. Top Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-gold via-rose to-gold-light z-[100] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* B. Safe Custom Cursor Ring (Hidden on screens with touch dynamics) */}
      {!isTouchDevice && (
        <div
          className="custom-cursor hidden md:block"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            width: isHovered ? "40px" : "24px",
            height: isHovered ? "40px" : "24px",
            backgroundColor: isHovered ? "rgba(201, 163, 106, 0.15)" : "transparent",
            borderColor: isHovered ? "#D8A59B" : "#C9A36A"
          }}
        />
      )}

      {/* C. Persistent Sticky Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      {/* D. Main Sections Hierarchy */}
      <main className="relative z-10 w-full overflow-hidden">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <Roadmap darkMode={darkMode} />
        <Checklist darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <FAQ darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      {/* E. Premium Footer CTA block */}
      <Footer darkMode={darkMode} />

      {/* F. Persistent Floating Consultation Action Button */}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-tr from-gold to-rose text-navy shadow-2xl hover:scale-105 active:scale-95 transition-transform group flex items-center gap-2"
        aria-label="Direct Consultation Booking"
      >
        <MessageSquare className="w-5.5 h-5.5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-28 transition-all duration-300 font-sans text-xs uppercase tracking-widest font-bold whitespace-nowrap">
          Consult Now
        </span>
      </a>

    </div>
  );
}
