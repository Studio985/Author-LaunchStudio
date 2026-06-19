import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

const faqList = [
  {
    id: "faq1",
    question: "How does beta reading work?",
    answer: "Beta reading occurs once your manuscript is structurally complete. We distribute copies of your draft to a select group of target-genre readers who critically evaluate your plot's emotional pacing, character consistency, and engagement density. We compile these responses into a comprehensive editorial action report."
  },
  {
    id: "faq2",
    question: "What editing services do I need?",
    answer: "This is based on your current draft's maturity. First-time drafts generally require Developmental Editing (which tackles character building, structural plot holes, and tension curves). Subsequent rewrites require Line Editing or Copy Editing (which focuses on prose rhythm, sentence structure, and terminology) before concluding with precise proofreading."
  },
  {
    id: "faq3",
    question: "Can you publish my book on Amazon?",
    answer: "Yes, absolutely! We handle the complete mechanical blueprint of Amazon KDP: setting up your administrative dashboard, validating EPUB and PDF document tolerances, optimizing backend keywords, registering unique ISBN classifications, and submitting distribution prices."
  },
  {
    id: "faq4",
    question: "Do you design book covers?",
    answer: "Yes! Visual jacket design is our crowning speciality. We produce bespoke front covers, matching spines, and back jacket summaries tailored precisely to your book's genre conventions (like metallic medieval gold engravings for Epic Fantasy, or modern corporate abstracts for Business bestsellers)."
  },
  {
    id: "faq5",
    question: "How long does formatting take?",
    answer: "Standard typesetting and formatting projects take between 7 to 14 business days, depending on book length and complexity. We supply and validate both digitally flowing reflowable EPUB files for mobile screens and locked PDF page templates with gutter clearances for physical printing."
  },
  {
    id: "faq6",
    question: "What genres do you work with?",
    answer: "Our expert editorial staff supports a wide variety of fiction and non-fiction categories, including: Epic Fantasy, Mystery & Thrillers, Contemporary Romance, Biographical Memoirs, Business Guides, Self-Help Strategy planners, and specialized workbook exercise manuals."
  }
];

interface FAQProps {
  darkMode: boolean;
}

export default function FAQ({ darkMode }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("faq1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className={`py-24 relative overflow-hidden theme-transition ${
        darkMode ? "bg-navy-light text-cream" : "bg-white text-navy"
      }`}
    >
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 w-max">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] tracking-[0.2em] font-semibold text-gold uppercase font-mono">
              COMMON INQUIRIES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className={`text-sm font-light max-w-xl mx-auto ${darkMode ? "text-cream/70" : "text-navy/70"}`}>
            Discover essential clarifications about beta reports, manuscript editing tiers, cover jacket resolutions, and Amazon publishing setup.
          </p>
        </div>

        {/* Accordions Assembly List */}
        <div className="space-y-4 text-left">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-navy text-white border-gold shadow-lg"
                    : darkMode
                    ? "bg-white/3 border-white/5 hover:border-gold/30 text-cream/90 hover:bg-white/5"
                    : "bg-cream/40 border-navy/5 hover:border-gold/30 text-navy/90 hover:bg-cream/20"
                }`}
              >
                {/* Header clickable bar trigger */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-6 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4.5 pr-4 text-left">
                    <HelpCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-serif font-bold text-base md:text-lg tracking-wide leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-x-180" : "rotate-x-0"
                    }`}
                  />
                </button>

                {/* Answer Content Drawer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-60 opacity-100 border-t border-white/10" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="p-6 md:p-8 text-sm leading-relaxed text-cream/80 font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA reminder */}
        <div className="mt-12 text-center">
          <p className={`text-xs ${darkMode ? "text-cream/50" : "text-navy/50"}`}>
            Have other specific publishing or formatting questions? Ask our support staff using our direct links.
          </p>
        </div>

      </div>
    </section>
  );
}
