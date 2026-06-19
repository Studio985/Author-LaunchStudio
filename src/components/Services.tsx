import React, { useState } from "react";
import { motion } from "motion/react";
import { BookMarked, Settings, Palette, FileSpreadsheet, Compass, Sparkles, CircleCheck, Check, ArrowUpRight } from "lucide-react";

const serviceList = [
  {
    id: "beta",
    title: "Beta Reading",
    icon: Compass,
    color: "from-blue-600/20 via-blue-900/10 to-transparent",
    border: "group-hover:border-blue-400/40",
    shadow: "hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]",
    badgeColor: "text-blue-400 bg-blue-500/10",
    bullets: [
      "Objective reader response reports",
      "Plot consistency & pacing review",
      "Character multi-dimensional analysis",
      "Initial reader engagement assessment"
    ]
  },
  {
    id: "editing",
    title: "Book Editing",
    icon: Settings,
    color: "from-rose/20 via-orange-950/10 to-transparent",
    border: "group-hover:border-rose/40",
    shadow: "hover:shadow-[0_0_30px_rgba(216,165,155,0.25)]",
    badgeColor: "text-rose bg-rose/10",
    bullets: [
      "Rigorous developmental editing",
      "Structural line editing & tension curves",
      "Granular copy editing",
      "Final flawless proofreading checks"
    ]
  },
  {
    id: "formatting",
    title: "Book Formatting",
    icon: FileSpreadsheet,
    color: "from-amber-600/20 via-yellow-950/10 to-transparent",
    border: "group-hover:border-amber-400/40",
    shadow: "hover:shadow-[0_0_30px_rgba(217,119,6,0.15)]",
    badgeColor: "text-gold bg-gold/10",
    bullets: [
      "Responsive Kindle reflowable layouts",
      "Bespoke physical paperback typesetting",
      "Premium hardcover layout configurations",
      "Standard EPUB validation certifications"
    ]
  },
  {
    id: "cover",
    title: "Cover & Jacket Design",
    icon: Palette,
    color: "from-purple-600/20 via-purple-950/10 to-transparent",
    border: "group-hover:border-purple-400/40",
    shadow: "hover:shadow-[0_0_30px_rgba(147,51,234,0.15)]",
    badgeColor: "text-purple-400 bg-purple-500/10",
    bullets: [
      "Aesthetic custom cover concepts",
      "Genre-specific thematic visual assets",
      "Striking majestic gold/foil typography",
      "Conversion & marketing optimization"
    ]
  },
  {
    id: "support",
    title: "Self-Publishing Support",
    icon: BookMarked,
    color: "from-emerald-600/20 via-emerald-950/10 to-transparent",
    border: "group-hover:border-emerald-400/40",
    shadow: "hover:shadow-[0_0_30px_rgba(5,150,105,0.15)]",
    badgeColor: "text-emerald-400 bg-emerald-500/10",
    bullets: [
      "Seamless Amazon KDP account setups",
      "ISBN & copyright law registration guides",
      "Direct catalog upload assistance",
      "Keywords & categories metadata validation"
    ]
  }
];

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const toggleServiceExpand = (id: string) => {
    setSelectedService(selectedService === id ? null : id);
  };

  return (
    <section
      id="services"
      className={`py-24 relative overflow-hidden theme-transition ${
        darkMode ? "bg-navy text-cream" : "bg-cream text-navy"
      }`}
    >
      <div className="absolute top-[10%] left-[-10%] w-[35%] h-[35%] bg-rose/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 w-max">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] tracking-[0.2em] font-semibold text-gold uppercase">
              Publishing Services
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Our Luxury Studio Services
          </h2>
          <p className={`text-sm font-light ${darkMode ? "text-cream/70" : "text-navy/70"}`}>
            We deliver exquisite attention to detail for independent authors looking to construct a professional, industry-dominating publication presence.
          </p>
        </div>

        {/* Dynamic Service Deck list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = selectedService === service.id;
            
            return (
              <div
                key={service.id}
                onClick={() => toggleServiceExpand(service.id)}
                className={`group cursor-pointer rounded-2xl border bg-white/3 border-white/5 p-8 transition-all duration-300 relative flex flex-col justify-between ${service.shadow} ${service.border} ${
                  isExpanded ? "ring-2 ring-gold/40 bg-navy-light text-white shadow-xl scale-102" : "hover:scale-101 hover:-translate-y-1"
                }`}
              >
                {/* Visual gradient gloss */}
                <div className={`absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.color}`} />

                <div className="relative z-10">
                  {/* Top header row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gold/10 text-gold border border-gold/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className={`text-[9px] font-mono tracking-widest font-bold px-3 py-1 rounded-full uppercase ${service.badgeColor}`}>
                      Premium Craft
                    </span>
                  </div>

                  {/* Title & brief teaser info */}
                  <h3 className="font-serif text-2xl font-bold tracking-wide mt-2 mb-4 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  {/* Bullets lists */}
                  <div className="space-y-3 mt-6">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-left">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 border border-gold/30 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-gold" />
                        </div>
                        <span className={`text-xs ${darkMode ? "text-cream/80" : "text-navy/80"} group-hover:text-cream/90 transition-colors`}>
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer status trigger actions */}
                <div className="relative z-10 flex items-center justify-between pointer-events-none mt-8 pt-4 border-t border-white/5">
                  <span className="text-[10px] uppercase tracking-widest font-mono text-gold-light font-bold">
                    Learn More Support
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Expandable Global Helper summary block */}
        <div className="mt-12 text-center p-6 bg-white/5 border border-gold/15 rounded-2xl flex flex-wrap justify-center items-center gap-4 max-w-3xl mx-auto">
          <CircleCheck className="w-5 h-5 text-gold shrink-0" />
          <span className={`text-xs md:text-sm font-light ${darkMode ? "text-cream/80" : "text-navy/80"}`}>
            Have an atypical publication project? Our editorial staff configures bespoke pipelines on a custom evaluation basis.
          </span>
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest font-bold text-gold hover:text-white transition-colors border-b border-gold"
          >
            Request custom proposal &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
