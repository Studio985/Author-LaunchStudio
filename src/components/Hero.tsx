import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Bookmark, Feather, Eye, RefreshCw } from "lucide-react";

// Image imports matching generated assets
const bookCovers = [
  {
    title: "The Last Dragon Heir",
    src: "/src/assets/images/the_last_dragon_heir_1781875072875.jpg",
    accent: "shadow-cyan-500/20",
    glow: "rgba(6, 182, 212, 0.3)"
  },
  {
    title: "When Autumn Stayed",
    src: "/src/assets/images/when_autumn_stayed_1781875091174.jpg",
    accent: "shadow-amber-500/20",
    glow: "rgba(245, 158, 11, 0.3)"
  },
  {
    title: "The Silent Witness",
    src: "/src/assets/images/the_silent_witness_1781875106657.jpg",
    accent: "shadow-red-500/20",
    glow: "rgba(239, 68, 68, 0.3)"
  },
  {
    title: "Lead Beyond Limits",
    src: "/src/assets/images/lead_beyond_limits_1781875121902.jpg",
    accent: "shadow-yellow-500/20",
    glow: "rgba(234, 179, 8, 0.3)"
  },
];

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [activeCoverIdx, setActiveCoverIdx] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Sparkly particle positions generated once
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    // Generate beautiful random golden sparkles on the screen
    const items = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      scale: 0.5 + Math.random() * 0.8,
    }));
    setSparkles(items);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const handleRotate = () => {
    setActiveCoverIdx((prev) => (prev + 1) % bookCovers.length);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen py-24 flex items-center justify-center overflow-hidden theme-transition ${
        darkMode ? "bg-navy text-cream" : "bg-cream text-navy"
      }`}
    >
      {/* 1. Golden gradient particle backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft moving gradients */}
        <div
          className={`absolute -top-[40%] -left-[30%] w-[80%] h-[80%] rounded-full opacity-30 blur-[120px] transition-all duration-1000 ${
            darkMode ? "bg-gradient-to-tr from-gold/40 to-transparent" : "bg-gradient-to-tr from-gold/20 to-transparent"
          }`}
          style={{
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          }}
        />
        <div
          className={`absolute -bottom-[40%] -right-[30%] w-[80%] h-[80%] rounded-full opacity-20 blur-[120px] transition-all duration-1000 ${
            darkMode ? "bg-gradient-to-bl from-rose/30 to-transparent" : "bg-gradient-to-bl from-rose/10 to-transparent"
          }`}
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
          }}
        />

        {/* Real-time moving grid */}
        <div
          className={`absolute inset-0 opacity-[0.03] transition-all duration-500 ${
            darkMode ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,rgba(7,27,59,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(7,27,59,0.1)_1px,transparent_1px)]"
          } bg-[size:4rem_4rem]`}
        />

        {/* Sparkles */}
        {sparkles.map((sp) => (
          <div
            key={sp.id}
            className="absolute rounded-full pointer-events-none animate-sparkle bg-gold/80"
            style={{
              left: `${sp.x}%`,
              top: `${sp.y}%`,
              width: `${sp.scale * 6}px`,
              height: `${sp.scale * 6}px`,
              animationDelay: `${sp.delay}s`,
              boxShadow: "0 0 8px #C9A36A",
            }}
          />
        ))}

        {/* Floating Manuscripts */}
        <div className="absolute top-24 left-[8%] opacity-35 hover:opacity-70 transition-opacity duration-300 pointer-events-auto hidden lg:block">
          <div className="p-4 bg-white/5 border border-white/10 dark:border-white/5 rounded-lg shadow-2xl backdrop-blur-md transform -rotate-12 w-44 animate-float">
            <div className="flex gap-1.5 mb-2.5">
              <Bookmark className="w-3.5 h-3.5 text-gold" />
              <span className="text-[9px] font-mono tracking-widest text-gold uppercase">MANUSCRIPT v2.1</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-1 bg-gold/40 rounded w-full" />
              <div className="h-1 bg-white/20 rounded w-11/12" />
              <div className="h-1 bg-white/20 rounded w-10/12" />
              <div className="h-1 bg-gold/20 rounded w-9/12" />
              <div className="h-1 bg-white/20 rounded w-8/12" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Feather className="w-4 h-4 text-rose animate-pulse" />
              <span className="text-[8px] font-mono text-cream/40">Page 117</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-28 left-[14%] opacity-25 hover:opacity-60 transition-opacity duration-300 pointer-events-auto hidden lg:block" style={{ animationDelay: "2s" }}>
          <div className="p-4 bg-white/5 border border-white/10 dark:border-white/5 rounded-lg shadow-2xl backdrop-blur-md transform rotate-6 w-40 animate-float">
            <div className="space-y-1.5">
              <div className="h-1 bg-white/20 rounded w-10/12" />
              <div className="h-1 bg-white/20 rounded w-full" />
              <div className="h-1 bg-white/20 rounded w-8/12" />
              <div className="h-1 bg-gold/40 rounded w-10/12" />
              <div className="h-1 bg-white/20 rounded w-9/12" />
            </div>
            <div className="mt-3 text-[7px] font-mono text-right text-rose/75">CHAPTER 1 SUMMARY</div>
          </div>
        </div>
      </div>

      {/* 2. Content Layout Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Left Side: Brand headlines */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 w-max">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-gold">
              Elite Publishing Services
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              Launch Your Book{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-gold via-rose to-gold-light bg-clip-text text-transparent italic font-serif">
                  With Confidence
                </span>
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-gold/50 via-rose to-transparent rounded-full" />
              </span>
            </h1>
            <p className={`text-base sm:text-lg max-w-2xl leading-relaxed font-light ${darkMode ? "text-cream/80" : "text-navy/80"}`}>
              Professional Beta Reading, Developmental Editing, Formatting, Award-Winning Cover Design, and Self-Publishing Services For Authors Ready To Publish.
            </p>
          </div>

          {/* Interactive statistics badge inline */}
          <div className="grid grid-cols-3 gap-4 border-l-2 border-gold/40 pl-5 py-2.5">
            <div>
              <p className="font-serif text-2xl font-bold text-gold">350+</p>
              <p className={`text-[10px] uppercase font-mono tracking-widest ${darkMode ? "text-cream/50" : "text-navy/50"}`}>Books Published</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-rose">98%</p>
              <p className={`text-[10px] uppercase font-mono tracking-widest ${darkMode ? "text-cream/50" : "text-navy/50"}`}>5-Star Ratings</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-gold">4.9/5</p>
              <p className={`text-[10px] uppercase font-mono tracking-widest ${darkMode ? "text-cream/50" : "text-navy/50"}`}>Overall Score</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-rose text-navy font-bold text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(201,163,106,0.35)] hover:shadow-[0_4px_25px_rgba(216,165,155,0.5)] transform hover:-translate-y-0.5 transition-all text-center"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all ${
                darkMode
                  ? "border-white/10 hover:border-gold hover:bg-white/5 text-cream"
                  : "border-navy/10 hover:border-gold hover:bg-navy/5 text-navy"
              }`}
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Right Side: Immersive 3D tilting Book Mockup Showcase */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-10 lg:mt-0">
          
          <div className="relative w-full max-w-[360px] aspect-[3/4] perspective-1000">
            {/* Soft decorative shadow below book */}
            <div className="absolute -bottom-8 left-[10%] right-[10%] h-8 bg-black/40 dark:bg-black/80 rounded-full blur-xl pointer-events-none transform scale-95" />

            {/* Glowing gold backplane ring */}
            <div
              className="absolute -inset-4 rounded-[40px] blur-3xl opacity-30 z-0 transition-colors duration-1000"
              style={{
                background: `radial-gradient(circle, ${bookCovers[activeCoverIdx].glow} 0%, transparent 70%)`
              }}
            />

            {/* Inner Interactive Book Container */}
            <motion.div
              className="w-full h-full preserve-3d relative cursor-pointer"
              style={{
                transform: `rotateY(${(mousePosition.x * 25) + 15}deg) rotateX(${(mousePosition.y * -25) - 5}deg)`,
              }}
              onClick={handleRotate}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* BOOK SPINE - 3D depth illusion */}
              <div className="absolute left-0 top-0 bottom-0 w-[24px] bg-sky-950/90 origin-left border-y border-l border-gold/20 flex flex-col justify-between py-8 items-center text-[8px] tracking-[0.2em] font-mono text-gold/60 uppercase select-none"
                   style={{
                     transform: "rotateY(-90deg) translateZ(12px)",
                     boxShadow: "inset -5px 0 15px rgba(0,0,0,0.8)"
                   }}
              >
                <div className="rotate-90 origin-center translate-y-8 w-40 text-center font-bold">
                  AUTHORLAUNCH STUDIO
                </div>
                <Bookmark className="w-2.5 h-2.5 text-gold/40 rotate-180" />
              </div>

              {/* BOOK COVER (Front) */}
              <div
                className={`w-full h-full rounded-r-lg overflow-hidden border border-gold/15 shadow-[12px_24px_38px_rgba(0,0,0,0.5)] justify-center relative flex ${bookCovers[activeCoverIdx].accent}`}
                style={{
                  transform: "translateZ(12px)"
                }}
              >
                <img
                  src={bookCovers[activeCoverIdx].src}
                  alt={bookCovers[activeCoverIdx].title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle glare reflection sweep */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-60 pointer-events-none transition-transform duration-1000"
                  style={{
                    transform: `translateX(${mousePosition.x * 200}px) translateY(${mousePosition.y * 200}px)`
                  }}
                />

                {/* Active Indicator Overlays */}
                <span className="absolute top-4 right-4 bg-navy/80 backdrop-blur-md border border-gold/30 px-2.5 py-1 rounded text-[8px] font-mono uppercase tracking-widest text-gold text-center">
                  Published
                </span>
              </div>

              {/* BOOK PAGE ACCENT (Right-edge pages representation) */}
              <div className="absolute top-0 bottom-0 right-0 w-[24px] bg-stone-100 origin-right flex flex-col justify-around py-4"
                   style={{
                     transform: "rotateY(90deg) translateZ(0px)",
                     backgroundImage: "linear-gradient(to right, #ddd 1px, transparent 1px)",
                     backgroundSize: "2px 100%"
                   }}
              />
            </motion.div>
          </div>

          {/* Book Controller Helpers */}
          <div className="flex items-center gap-3 mt-12 bg-white/5 border border-white/10 rounded-full px-4.5 py-2">
            <span className={`text-[11px] font-mono tracking-widest ${darkMode ? "text-cream/60" : "text-navy/60"}`}>
              Showing Mockup {activeCoverIdx + 1}/{bookCovers.length}
            </span>
            <span className="h-4 w-[1px] bg-white/10" />
            <button
              onClick={handleRotate}
              className="text-gold hover:text-rose transition-colors flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest"
            >
              <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
              Rotate Cover
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
