import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, CircleCheck, Plus, Minus, Check, LockOpen } from "lucide-react";

const checklistItems = [
  {
    id: "manuscript",
    title: "Final Manuscript",
    description: "Your raw written content. Must be completely fleshed out, structurally unified, and locked in terms of storyline details before proceeding to downstream formatting.",
    benefit: "Prevents high formatting redo costs.",
    timelineStage: "Pre-production (Month 1-3)"
  },
  {
    id: "editing",
    title: "Professional Editing",
    description: "The line editing, developmental reading, and final copy proofreading to weed out linguistic errors, pacing gaps, plot holes, and typos.",
    benefit: "Establishes institutional literary quality and authority.",
    timelineStage: "Evaluation phase (Month 5)"
  },
  {
    id: "cover",
    title: "Cover Design",
    description: "A genre-tailored, eye-catching, high-resolution visual jacket fitting Kindle, paperback, or hardcover templates.",
    benefit: "Instantly hooks target readers on the retail storefront.",
    timelineStage: "Design Phase (Month 6)"
  },
  {
    id: "formatting",
    title: "Interior Formatting",
    description: "The custom typography, running headers, section templates, and dropcap assets applied to print PDFs or digital reflowable EPUBs.",
    benefit: "Guarantees a premium reading experience across devices.",
    timelineStage: "Design Phase (Month 7)"
  },
  {
    id: "isbn",
    title: "ISBN",
    description: "International Standard Book Numbers. Unique identifiers required by physical distribution systems and global library catalogues.",
    benefit: "Provides independent legal classification and distribution viability.",
    timelineStage: "Distribution setup (Month 8)"
  },
  {
    id: "description",
    title: "Book Description",
    description: "The retail sales blurb or back jacket summary crafted to immediately entice target buyers, integrating search-optimized terms.",
    benefit: "Boosts store page visits to checkout carts conversion.",
    timelineStage: "Metadata Stage (Month 8)"
  },
  {
    id: "keywords",
    title: "Keywords",
    description: "Seven strategic search phrases plugged into Amazon KDP's backend that help readers discover your book under search queries.",
    benefit: "Drives consistent organic search traffic to your title.",
    timelineStage: "Metadata Stage (Month 8)"
  },
  {
    id: "categories",
    title: "Categories",
    description: "The genre classifications assigned in direct digital catalogs (e.g., 'Historical Thrillers', 'Epic High Fantasy').",
    benefit: "Improves your ability to climb specialized best-seller lists.",
    timelineStage: "Metadata Stage (Month 8)"
  },
  {
    id: "bio",
    title: "Author Bio",
    description: "A concise professional profile highlighting your background, genre passion, and previous literary publications.",
    benefit: "Connects with readers and establishes personal authority.",
    timelineStage: "Author Setup (Month 8)"
  },
  {
    id: "kdp",
    title: "Amazon KDP Account",
    description: "Your direct administrative backend for uploading metadata files, monitoring real-time royalties, and organizing sales channels.",
    benefit: "Allows 100% control over pricing and layout adjustments.",
    timelineStage: "Upload Setup (Month 8)"
  },
  {
    id: "marketing",
    title: "Marketing Assets",
    description: "Sleek promotional graphics, 3D rotating book mockups, banners, and ready-made social copy templates.",
    benefit: "Coordinates and drives hype during release launches.",
    timelineStage: "Launch prep (Month 8-9)"
  },
  {
    id: "launch",
    title: "Launch Plan",
    description: "A comprehensive roadmap scheduling review pushes, discount periods, email announcements, and signing days.",
    benefit: "Secures high visibility rank on the first critical release week.",
    timelineStage: "Launch prep (Month 9)"
  }
];

interface ChecklistProps {
  darkMode: boolean;
}

export default function Checklist({ darkMode }: ChecklistProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="checklist"
      className={`py-24 relative overflow-hidden theme-transition ${
        darkMode ? "bg-navy-light text-cream" : "bg-white text-navy"
      }`}
    >
      <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] bg-rose/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 w-max">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] tracking-[0.2em] font-semibold text-gold uppercase">PUBLISHING CHECKLIST</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Everything You Need To Publish
          </h2>
          <p className={`text-sm font-light ${darkMode ? "text-cream/70" : "text-navy/70"}`}>
            Ensure your self-publishing preparation is flawlessly aligned. Click on any criteria to unlock structural descriptions, critical benefits, and timing notes.
          </p>
        </div>

        {/* 12 Expandable checklist cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklistItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className={`cursor-pointer rounded-xl border p-6 transition-all duration-300 relative text-left ${
                  isExpanded
                    ? "bg-navy text-white border-gold shadow-lg"
                    : darkMode
                    ? "bg-white/3 border-white/5 hover:border-gold/30 text-cream/80 hover:bg-white/5"
                    : "bg-cream/40 border-navy/5 hover:border-gold/30 text-navy/90 hover:bg-cream/20"
                }`}
              >
                {/* Glare gradient border shadow */}
                {isExpanded && (
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold via-rose to-gold-light rounded-t-xl" />
                )}

                {/* Top Heading */}
                <div className="flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                      isExpanded ? "border-gold bg-gold text-navy" : "border-gold/30 text-gold"
                    }`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-serif font-bold text-base tracking-wide group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  {isExpanded ? (
                    <Minus className="w-4.5 h-4.5 text-gold" />
                  ) : (
                    <Plus className="w-4.5 h-4.5 text-gold/60" />
                  )}
                </div>

                {/* Expanded Drawer Details (Beautiful Framer motion AnimatePresence) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden mt-4 pt-4 border-t border-white/10 space-y-4"
                    >
                      <p className="text-xs leading-relaxed text-cream/90 font-light">
                        {item.description}
                      </p>

                      <div className="space-y-2 bg-white/5 p-3 rounded-lg border border-white/5 text-[11px]">
                        <div>
                          <span className="text-gold font-bold uppercase tracking-wider block">Strategic Benefit:</span>
                          <span className="text-cream/80">{item.benefit}</span>
                        </div>
                        <div className="pt-2 border-t border-white/5">
                          <span className="text-rose font-bold uppercase tracking-wider block">Recommended Timing:</span>
                          <span className="text-cream/80">{item.timelineStage}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Preview caption helper on close */}
                {!isExpanded && (
                  <p className={`text-[11px] font-mono tracking-wide uppercase text-right mt-3 text-gold-light pointer-events-none`}>
                    View Strategic notes &rarr;
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Global indicator bottom */}
        <div className="mt-12 text-center">
          <p className={`text-xs ${darkMode ? "text-cream/60" : "text-navy/60"}`}>
            Ready to secure these details? We draft, layout, optimize, and organize all 12 criteria for clients automatically.
          </p>
        </div>

      </div>
    </section>
  );
}
