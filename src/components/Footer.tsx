import React from "react";
import { Sparkles, BookOpen, Heart, ArrowUp, Feather } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer-closing"
      className={`py-24 border-t relative overflow-hidden theme-transition ${
        darkMode ? "bg-navy border-white/5 text-cream" : "bg-cream border-navy/5 text-navy"
      }`}
    >
      {/* Sparkles Ambient */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Animated Open Book revealing golden light */}
        <div className="relative mb-12 flex flex-col items-center justify-center">
          
          {/* Glowing Aura backplane */}
          <div className="absolute w-52 h-52 bg-gold/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />

          {/* Golden emission light vectors */}
          <div className="absolute -top-12 h-14 w-[1.5px] bg-gradient-to-t from-gold via-rose to-transparent animate-bounce" style={{ animationDuration: "3s" }} />
          <div className="absolute -top-12 -left-6 h-12 w-[1px] bg-gradient-to-t from-gold/50 to-transparent rotate-12 animate-bounce" style={{ animationDuration: "4s" }} />
          <div className="absolute -top-12 -right-6 h-12 w-[1px] bg-gradient-to-t from-rose/50 to-transparent -rotate-12 animate-bounce" style={{ animationDuration: "2.5s" }} />

          {/* Custom logo replaces book graphic assembly */}
          <div className="relative w-36 h-36 rounded-full border border-gold/45 shadow-[0_8px_30px_rgba(201,163,106,0.25)] p-0.5 bg-cream/5">
            <img
              src="/src/assets/images/author_launch_logo_1781876592782.jpg"
              alt="AuthorLaunch Studio Logo"
              className="w-full h-full rounded-full object-cover animate-spin-slow"
              style={{ animationDuration: "20s" }}
              referrerPolicy="no-referrer"
            />
          </div>

          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold mt-6 block font-bold">
            MARBLE DECK COMPATIBLE
          </span>
        </div>

        {/* Closing Title Block */}
        <div className="max-w-2xl space-y-6 mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Your Story Deserves To Be Published
          </h2>
          <p className={`text-sm sm:text-base font-light leading-relaxed ${darkMode ? "text-cream/80" : "text-navy/80"}`}>
            Don't leave your manuscript hidden in desktop directories. Let AuthorLaunchStudio align your beta evaluations, core developmental proofreading, gorgeous interior layouts, and bestselling jacket designs to launch your work directly onto global shelves.
          </p>
        </div>

        {/* Core Quick Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4.5 mb-16">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="px-8 py-3.5 bg-gradient-to-r from-gold to-rose hover:from-rose hover:to-gold text-navy text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            Contact Us
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleLinkClick(e, "#portfolio")}
            className={`px-8 py-3.5 border rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
              darkMode
                ? "border-white/10 hover:border-gold hover:bg-white/5 text-cream"
                : "border-navy/10 hover:border-gold hover:bg-navy/5 text-navy"
            }`}
          >
            View Portfolio
          </a>
        </div>

        {/* Top return arrow */}
        <button
          onClick={handleScrollTop}
          className="p-3.5 rounded-full border border-gold/20 hover:border-gold bg-white/5 text-gold hover:-translate-y-1 transition-all mb-12"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-gold animate-bounce" />
        </button>

        {/* Footer info line */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono tracking-wide">
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/images/author_launch_logo_1781876592782.jpg"
              alt="AuthorLaunch Studio Logo"
              className="w-5 h-5 rounded-full object-cover border border-gold/30"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif font-bold text-sm tracking-tight text-gold">AuthorLaunchStudio</span>
          </div>

          <p className={`${darkMode ? "text-cream/50" : "text-navy/50"}`}>
            &copy; 2026 AuthorLaunchStudio. All rights reserved. &bull; Where Plots Are Published.
          </p>

          <p className="flex items-center gap-1.5 text-[11px] text-rose">
            <span>Crafted for Authors</span>
            <Feather className="w-3.5 h-3.5 text-rose" />
          </p>
        </div>

      </div>
    </footer>
  );
}
