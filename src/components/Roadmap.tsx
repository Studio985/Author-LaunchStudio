import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, BookOpen, Search, Code, Palette, Settings, Key, Upload, Lightbulb, CheckCircle } from "lucide-react";

const roadmapSteps = [
  {
    step: 1,
    title: "Complete Manuscript",
    icon: BookOpen,
    desc: "Polish your final draft text files completely and perform high-level spelling sweeps.",
    details: [
      "Ensure text body is structurally complete",
      "Organize chapter breaks logically",
      "Draft standard dedicated copyright & dedication pages"
    ],
    time: "Month 1-3"
  },
  {
    step: 2,
    title: "Beta Reading",
    icon: Search,
    desc: "Gather target reader responses to assess plot twists, pacing consistency, and character likability.",
    details: [
      "Distribute copies to 5-10 target readers",
      "Acquire structured feedback questionnaire responses",
      "Evaluate reader metric scores for plot gaps"
    ],
    time: "Month 4"
  },
  {
    step: 3,
    title: "Editing Stage",
    icon: Settings,
    desc: "Refine language structure, syntax voice, flow transitions, and proofing accuracy with experts.",
    details: [
      "Perform developmental overview analysis",
      "Refine line transitions and vocabulary",
      "Run final professional spelling and grammar checks"
    ],
    time: "Month 5"
  },
  {
    step: 4,
    title: "Cover Design",
    icon: Palette,
    desc: "Formulate breathtaking, genre-specific, marketing-ready spine and cover layouts.",
    details: [
      "Develop custom front jacket art",
      "Formulate spinal and back text jacket flaps",
      "Conform layout sizes to Amazon KDP template constraints"
    ],
    time: "Month 6"
  },
  {
    step: 5,
    title: "Book Formatting",
    icon: Code,
    desc: "Typeset chapter pages, drop caps, headers, and spacing for digital and print formats.",
    details: [
      "Formulate EPUB files for Kindle devices",
      "Typeset PDF pages for paperback and hardcovers",
      "Verify gutter margins and font line heights"
    ],
    time: "Month 7"
  },
  {
    step: 6,
    title: "ISBN & Metadata",
    icon: Key,
    desc: "Register unique identifiers and strategically select search keywords and browse categories.",
    details: [
      "Register unique ISBNs for all design formats",
      "Select high-volume search backend keywords",
      "Optimize descriptive backend categories lists"
    ],
    time: "Month 8"
  },
  {
    step: 7,
    title: "KDP Upload",
    icon: Upload,
    desc: "Secure upload files under Kindle Direct Publishing platforms and configure page margins.",
    details: [
      "Configure your official author backend portal",
      "Upload formatted interior files and cover jackets",
      "Set distribution prices and royalty tiers"
    ],
    time: "Month 8"
  },
  {
    step: 8,
    title: "Book Launch",
    icon: Lightbulb,
    desc: "Initiate digital sales, run promotional pushes, and establish your bestselling presence.",
    details: [
      "Distribute ARC (Advance Review Copies) to peers",
      "Launch Kindle promotion discount windows",
      "Host virtual or physical paperback signing parties"
    ],
    time: "Month 9+"
  }
];

interface RoadmapProps {
  darkMode: boolean;
}

export default function Roadmap({ darkMode }: RoadmapProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="roadmap"
      className={`py-24 relative overflow-hidden theme-transition ${
        darkMode ? "bg-navy text-cream" : "bg-cream text-navy"
      }`}
    >
      <div className="absolute top-[15%] right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 w-max">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] tracking-[0.2em] font-semibold text-gold uppercase">PUBLISHING BLUEPRINT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Your Journey To Publication
          </h2>
          <p className={`text-sm font-light ${darkMode ? "text-cream/70" : "text-navy/70"}`}>
            A comprehensive, coordinate blueprint guiding independent manuscript development from raw initial copy straight onto global marketplace bookshelves.
          </p>
        </div>

        {/* Roadmap interactive visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Left: Milestones items list */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <span className={`text-[11px] font-mono tracking-widest uppercase ${darkMode ? "text-cream/50" : "text-navy/50"}`}>
                Select Step to active blueprint details:
              </span>
              <span className="text-xs font-bold text-rose">8 Milestones</span>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3.5">
              {roadmapSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 group ${
                      isActive
                        ? "bg-navy border-gold shadow-lg text-cream scale-102"
                        : darkMode
                        ? "bg-white/3 border-white/5 text-cream/70 hover:bg-white/5 hover:border-gold/30 hover:scale-101"
                        : "bg-cream/40 border-navy/5 text-navy hover:bg-cream/20 hover:border-gold/30 hover:scale-101"
                    }`}
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <span className={`text-[9px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center mb-2 leading-none ${
                        isActive ? "bg-gold text-navy" : "bg-gold/15 text-gold"
                      }`}>
                        {step.step}
                      </span>
                      <Icon className="w-5 h-5 text-gold-light group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="space-y-1 overflow-hidden">
                      <p className="font-serif font-bold text-sm tracking-wide truncate group-hover:text-gold transition-colors">
                        {step.title}
                      </p>
                      <p className={`text-[10px] font-mono uppercase tracking-[0.1em] ${darkMode ? "text-cream/40" : "text-navy/40"}`}>
                        {step.time}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected step detailed spec panel */}
          <div className="lg:col-span-6 bg-white/5 border border-gold/15 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between text-left min-h-[460px] shadow-2xl">
            {/* Gloss light accent */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

            {/* Active Content Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono bg-gold text-navy font-bold px-2.5 py-0.5 rounded uppercase">
                    Step 0{roadmapSteps[activeStep].step}
                  </span>
                  <span className={`text-[10px] font-mono tracking-widest ${darkMode ? "text-cream/40" : "text-navy/40"}`}>
                    Active Milestone Checklist
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-gold">Target: {roadmapSteps[activeStep].time}</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-3xl font-bold tracking-wide">
                  {roadmapSteps[activeStep].title}
                </h3>
                <p className={`text-sm font-light leading-relaxed ${darkMode ? "text-cream/70" : "text-navy/70"}`}>
                  {roadmapSteps[activeStep].desc}
                </p>
              </div>

              {/* Sub-checkpoints items lists */}
              <div className="space-y-3.5 pt-4">
                <p className={`text-[11px] uppercase tracking-widest font-mono font-bold ${darkMode ? "text-rose/80" : "text-[#74573b]"}`}>
                  Critical Actions Required:
                </p>
                {roadmapSteps[activeStep].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className={`text-xs ${darkMode ? "text-cream/80" : "text-navy/80"}`}>
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className={`text-[10px] font-mono uppercase tracking-widest ${darkMode ? "text-cream/50" : "text-navy/50"}`}>
                Need guidance with Step 0{roadmapSteps[activeStep].step}?
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors"
              >
                Get Help
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
