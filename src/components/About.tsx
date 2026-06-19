import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, Milestone, Award, CircleCheck, Check, Lightbulb, FileText, Settings, Palette, Eye, BookMarked, Globe } from "lucide-react";

// Statistical metrics
const systemStats = [
  { id: "edited", endValue: 240, suffix: "+", label: "Books Edited", color: "text-gold" },
  { id: "covers", endValue: 180, suffix: "+", label: "Covers Designed", color: "text-rose" },
  { id: "authors", endValue: 310, suffix: "+", label: "Authors Supported", color: "text-gold" },
  { id: "projects", endValue: 420, suffix: "+", label: "Projects Completed", color: "text-rose" },
];

// Timeline journey steps
const journeySteps = [
  { step: 1, label: "Idea", desc: "Formulate your concept, plot draft summaries & genres.", icon: Lightbulb, color: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
  { step: 2, label: "Manuscript", desc: "Write or draft your book chapters fully.", icon: FileText, color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
  { step: 3, label: "Editing", desc: "Line, developmental, copy editing & professional proofing.", icon: Settings, color: "text-rose bg-rose/10 border-rose/30" },
  { step: 4, label: "Design", desc: "Bespoke high-end custom cover creation.", icon: Palette, color: "text-purple-400 bg-purple-500/10 border-purple-500/30" },
  { step: 5, label: "Formatting", desc: "EPUB/PDF conversion for Kindle & print layouts.", icon: Eye, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30" },
  { step: 6, label: "Publishing", desc: "KDP configuration, metadata inputs & ISBN registration.", icon: BookMarked, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
  { step: 7, label: "Published Author", desc: "Live publication, global distribution & reader sales!", icon: Globe, color: "text-gold bg-gold/10 border-gold/30" }
];

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const [counts, setCounts] = useState({ edited: 0, covers: 0, authors: 0, projects: 0 });
  const [activeJourneyStep, setActiveJourneyStep] = useState(2); // default highlighting Manuscript or Editing

  useEffect(() => {
    // Quick tick animation for numbers up to their endValue
    const duration = 2000;
    const intervalTime = 30;
    const ticks = duration / intervalTime;
    let currentTick = 0;

    const timer = setInterval(() => {
      currentTick++;
      setCounts({
        edited: Math.min(Math.round((240 / ticks) * currentTick), 240),
        covers: Math.min(Math.round((180 / ticks) * currentTick), 180),
        authors: Math.min(Math.round((310 / ticks) * currentTick), 310),
        projects: Math.min(Math.round((420 / ticks) * currentTick), 420),
      });

      if (currentTick >= ticks) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden theme-transition ${
        darkMode ? "bg-navy-light text-cream" : "bg-white text-navy"
      }`}
    >
      {/* Decorative vectors */}
      <div className="absolute right-0 top-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none select-none">
        <span className="font-serif text-[18rem] italic text-gold font-bold">Launch</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Main Header */}
        <div className="mb-12 flex flex-col space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-gold font-bold">
            THE BRAND BEHIND THE BOOK
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Meet AuthorLaunchStudio
          </h2>
          <div className="w-24 h-[2.5px] bg-gradient-to-r from-gold to-rose rounded-full mt-1" />
        </div>

        {/* About Intros */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          <div className="lg:col-span-12 space-y-5">
            <p className="font-serif italic text-xl sm:text-2xl text-gold leading-relaxed">
              &ldquo;We guide authors from manuscript to marketplace.&rdquo;
            </p>
            <p className={`text-base font-light leading-relaxed ${darkMode ? "text-cream/80" : "text-navy/80"}`}>
              Writing the book is only half the battle. Presenting your masterpiece to the world in a way that rivals traditional Big Five publishing houses requires multidisciplinary craft. AuthorLaunchStudio brings together premium beta reading, developmental line editing, gorgeous formatting, bestselling custom jacket art, and robust metadata blueprint guidance. We honor your voice while maximizing your market compatibility.
            </p>
          </div>
        </div>

        {/* 1. Animated Stats Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 lg:p-10 rounded-2xl bg-white/5 border border-gold/15 shadow-[0_8px_32px_rgba(0,0,0,0.15)] mb-20">
          {systemStats.map((stat) => (
            <div key={stat.id} className="text-center flex flex-col items-center p-3">
              <span className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-2.5 ${stat.color}`}>
                {stat.id === "edited" && counts.edited}
                {stat.id === "covers" && counts.covers}
                {stat.id === "authors" && counts.authors}
                {stat.id === "projects" && counts.projects}
                {stat.suffix}
              </span>
              <span className={`text-[11px] uppercase tracking-widest font-mono text-center max-w-[150px] ${darkMode ? "text-cream/60" : "text-navy/60"}`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* 2. Visual Journey: Horizontal/Vertical Timeline */}
        <div className="space-y-8 mt-12 bg-white/3 p-6 md:p-10 rounded-2xl border border-white/5 shadow-inner">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-rose font-medium">AUTHOR LIFECYCLE</span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mt-1">Our Seamless Vertical Journey</h3>
            </div>
            <p className={`text-xs md:text-sm max-w-md ${darkMode ? "text-cream/60" : "text-navy/60"}`}>
              Click on each milestone below to discover how we coordinate your work at each strategic stage.
            </p>
          </div>

          {/* Timeline Nodes Panel (Highly Responsive Web Flow) */}
          <div className="relative pt-6 pb-4">
            {/* Horizontal timeline connector bar on desktops */}
            <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-gold/10 via-gold/50 to-gold/10 -translate-y-12 hidden lg:block" />

            {/* List block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-5 relative z-10">
              {journeySteps.map((step) => {
                const Icon = step.icon;
                const isActive = activeJourneyStep === step.step;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveJourneyStep(step.step)}
                    className={`cursor-pointer group flex flex-col p-4.5 rounded-xl border transition-all duration-300 relative ${
                      isActive
                        ? "bg-navy border-gold shadow-[0_6px_22px_rgba(201,163,106,0.15)] ring-2 ring-gold/10 text-cream scale-102"
                        : darkMode
                        ? "bg-white/3 border-white/5 text-cream/70 hover:bg-white/5 hover:border-gold/30 hover:scale-101"
                        : "bg-cream/40 border-navy/5 text-navy hover:bg-cream/20 hover:border-gold/30 hover:scale-101"
                    }`}
                  >
                    {/* Node marker top/center */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className={`text-[10px] font-mono font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                        isActive ? "bg-gold text-navy" : "bg-gold/15 text-gold"
                      }`}>
                        0{step.step}
                      </span>
                      {isActive && <Check className="w-3.5 h-3.5 text-gold" />}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-1.5 rounded ${step.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-bold text-sm tracking-wide">
                        {step.label}
                      </h4>
                    </div>

                    <p className={`text-[11px] leading-relaxed line-clamp-3 ${isActive ? "text-cream/90" : "text-gray-400 group-hover:text-amber-500"}`}>
                      {step.desc}
                    </p>

                    {/* Desktop Hover Highlight Ring */}
                    {isActive && (
                      <span className="absolute -inset-1 rounded-xl border border-rose/30 pointer-events-none animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive detail card for the active journey node */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-navy to-navy-light border border-gold/30 text-white min-h-[120px] transition-all duration-300 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-y-12 translate-x-12 opacity-5">
              <Milestone className="w-48 h-48 text-gold" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-gold tracking-widest bg-gold/10 border border-gold/20 px-2.5 py-0.5 rounded">
                  ACTIVATED STAGE {activeJourneyStep}/7
                </span>
                <h4 className="font-serif text-2xl font-bold text-cream mt-2 flex items-center gap-2">
                  {journeySteps[activeJourneyStep - 1].label} Strategy Formulation
                </h4>
              </div>
              <p className="text-xs md:text-sm text-cream/70 max-w-xl leading-relaxed">
                During the <span className="text-gold font-semibold">{journeySteps[activeJourneyStep - 1].label}</span> phase, our primary focus is minimizing frictional risk. We align core design aspects like layout consistency and typesetting flow to prepare and validate manuscripts for global Amazon KDP compatibility.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
