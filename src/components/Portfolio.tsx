import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, ArrowLeft, Layers, Palette, Eye, CircleCheck, RefreshCw, FileText } from "lucide-react";

// Cover designs mapping
const bookCovers = [
  {
    id: "fantasy",
    title: "The Last Dragon Heir",
    author: "Eleanor Vance",
    genre: "Epic Fantasy",
    description: "Epic fantasy featuring an intricate dual-color golden embossed title alongside dynamic dark fantasy scales. High-contrast magical blue fire and dragon silhouettes.",
    src: "/src/assets/images/the_last_dragon_heir_1781875072875.jpg",
    accent: "from-cyan-600/30 via-cyan-950/20 to-transparent",
    rating: "★★★★★",
    stats: "Bestseller in Teen & Young Adult Fantasy"
  },
  {
    id: "romance",
    title: "When Autumn Stayed",
    author: "Julian Thorne",
    genre: "Elegant Romance",
    description: "Heartwarming cozy romance jacket reflecting warm nostalgic sepia filters with delicate gold leaf typography and hand-drawn autumn maple leaf canopy elements.",
    src: "/src/assets/images/when_autumn_stayed_1781875091174.jpg",
    accent: "from-amber-600/30 via-amber-950/20 to-transparent",
    rating: "★★★★★",
    stats: "Top 10 New Release in Contemporary Romance"
  },
  {
    id: "thriller",
    title: "The Silent Witness",
    author: "S. J. Blackwood",
    genre: "Cinematic Thriller",
    description: "Grim dark suspense fiction jacket featuring a mysterious silhouette emerging from deep fog with neon deep crimson and chilling ice-blue high-octane contrast title font.",
    src: "/src/assets/images/the_silent_witness_1781875106657.jpg",
    accent: "from-red-600/30 via-red-950/20 to-transparent",
    rating: "★★★★★",
    stats: "Publisher's Weekly Bestseller List"
  },
  {
    id: "business",
    title: "Lead Beyond Limits",
    author: "Richard V. Reynolds",
    genre: "Business / Non-fiction",
    description: "A gorgeous, authoritative minimalist business bestseller. Sleek metallic lines over royal navy velvet with clean crisp professional layout guidelines.",
    src: "/src/assets/images/lead_beyond_limits_1781875121902.jpg",
    accent: "from-yellow-600/30 via-yellow-950/20 to-transparent",
    rating: "★★★★★",
    stats: "Wall Street Journal Best Business Book"
  },
];

// Interior page spreads
const formattingSpreads = [
  {
    id: "novel",
    title: "Novel (Fiction) Layout",
    description: "Clean classic formatting optimized for narrative flow, pacing density, and atmospheric typography.",
    layoutName: "Standard Novel Spread",
    pages: {
      leftTopic: "THE LAST DRAGON HEIR",
      leftText: "The obsidian sky cracked wide, revealing a jagged streak of cobalt lightning that illuminated the ancient spires. Marcus clutched the hilt of his father's broadsword, feeling the rhythmic, pulsing magical heat emanating from the metallic core. Generations had guarded the caldera, waiting for the dark silhouette to split the heavens. Now, as the blue flames roared over the outer wall, the prophecy was no longer a whispered myth. It was an immediate death sentence.",
      rightTopic: "CHAPTER ONE",
      rightText: "O", // drop cap letter
      rightRemText: "nce, before the dragonlords vanished into the deep mist-covered waters of the Sapphire Sea, gold coins were minted with the image of a dragon's wing. It was a symbol of absolute celestial protection. Now, we trade in bone silver, begging the sky not to burn our harvest. Marcus watched the blue flame draw closer, outlining the colossal scales of the beast."
    }
  },
  {
    id: "nonfiction",
    title: "Nonfiction (Business/Self-Help) Layout",
    description: "Structured layouts integrating tables, callouts, and clean section headers to aid instructional absorption.",
    layoutName: "Management Standard Spread",
    pages: {
      leftTopic: "SECTION 3: METRIC ANALYSIS",
      leftText: "To lead effectively, you must balance quantitative velocity with qualitative team morale. Below is our industry standard quadrant metric matrix describing growth alignment vs execution capacity.",
      rightTopic: "3.2 CAPACITY MATRIX",
      rightText: "T",
      rightRemText: "he key lies in balancing resources. True leadership takes bold risks while implementing structural feedback loops. Let's inspect the capacity outcomes across modern startup departments:"
    }
  },
  {
    id: "workbook",
    title: "Workbook & Journal Layout",
    description: "Interactive spreads with structured worksheets, checkboxes, response forms, and creative exercises.",
    layoutName: "Strategic Growth Planner",
    pages: {
      leftTopic: "MY WEEKLY PRIORITIES MAP",
      leftText: "Use this reflection workspace to map out core publishing milestones. Keep entries clear, measurable, and highly aligned to your target timeline. What is your chief publication breakthrough for the next 7 days?",
      rightTopic: "DAILY PROGRESS CHECKLIST",
      rightText: "W",
      rightRemText: "rite your answers to spark continuous accountability. This keeps the authorial trajectory clean."
    }
  }
];

interface PortfolioProps {
  darkMode: boolean;
}

export default function Portfolio({ darkMode }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<"covers" | "formatting">("covers");
  const [selectedCover, setSelectedCover] = useState(0);

  // Formatting variables
  const [selectedSpread, setSelectedSpread] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Interactive checklist state for workbook demo
  const [workbookChecks, setWorkbookChecks] = useState({
    manuscript: false,
    outline: false,
    formatting: false,
  });

  // Interactive user text responses in the workbook spread
  const [workbookInput, setWorkbookInput] = useState("");

  const handlePageFlip = (spreadIdx: number) => {
    setIsFlipped(true);
    setTimeout(() => {
      setSelectedSpread(spreadIdx);
      setIsFlipped(false);
    }, 450);
  };

  return (
    <section
      id="portfolio"
      className={`py-24 relative overflow-hidden theme-transition ${
        darkMode ? "bg-navy-light text-cream" : "bg-white text-navy"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]">
        <div className="absolute top-1/2 left-10 w-[700px] h-[700px] rounded-full border border-gold" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-widest uppercase text-gold font-bold">
              ESTEEMED MANUSCRIPTS & JACKETS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
              Our Publishing Portfolio
            </h2>
            <div className="w-20 h-[3px] bg-gradient-to-r from-gold to-rose rounded-full mt-1.5" />
          </div>

          {/* Navigation Tab Toggles */}
          <div className="flex bg-white/5 border border-gold/10 p-1.5 rounded-full w-max">
            <button
              onClick={() => setActiveTab("covers")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                activeTab === "covers"
                  ? "bg-gold text-navy shadow-md"
                  : darkMode
                  ? "text-cream hover:bg-white/5"
                  : "text-navy hover:bg-navy/5"
              }`}
            >
              <Palette className="w-4 h-4" />
              Book Covers
            </button>
            <button
              onClick={() => setActiveTab("formatting")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                activeTab === "formatting"
                  ? "bg-gold text-navy shadow-md"
                  : darkMode
                  ? "text-cream hover:bg-white/5"
                  : "text-navy hover:bg-navy/5"
              }`}
            >
              <Layers className="w-4 h-4" />
              Interior Formatting
            </button>
          </div>
        </div>

        {/* Tab 1: Book Covers Showcase */}
        {activeTab === "covers" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side cover menu list */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className={`text-[10px] font-mono tracking-widest uppercase ${darkMode ? "text-cream/50" : "text-navy/50"}`}>
                Browse Cover Jacket Catalog &rarr;
              </span>
              <div className="flex flex-col gap-3">
                {bookCovers.map((cover, idx) => (
                  <button
                    key={cover.id}
                    onClick={() => setSelectedCover(idx)}
                    className={`w-full text-left p-5 rounded-xl border flex items-center gap-4 transition-all duration-300 group/item ${
                      selectedCover === idx
                        ? "bg-navy text-white border-gold shadow-lg"
                        : darkMode
                        ? "bg-white/3 border-white/5 hover:border-gold/30 text-cream/70 hover:text-white"
                        : "bg-cream/40 border-navy/5 hover:border-gold/30 text-navy/80 hover:text-navy"
                    }`}
                  >
                    <div className="w-10 h-12 rounded overflow-hidden shrink-0 shadow border border-white/10 group-hover/item:scale-105 transition-transform">
                      <img src={cover.src} alt={cover.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-serif font-bold text-sm truncate group-hover/item:text-gold transition-colors">
                        {cover.title}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#D8A59B] mt-0.5">
                        {cover.genre}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Middle right centered: Massive Immersive Book preview */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/3 border border-gold/15 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

              {/* Cover Art in 3D frame */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="w-full max-w-[240px] aspect-[3/4] relative perspective-1000 group">
                  <div className="absolute -bottom-5 left-[10%] right-[10%] h-5 bg-black/30 dark:bg-black/70 rounded-full blur-lg pointer-events-none group-hover:scale-110 transition-transform" />
                  
                  {/* Rotating 3D card */}
                  <div
                    className="w-full h-full rounded-r-lg overflow-hidden border border-gold/15 shadow-2xl transition-all duration-500 relative cursor-pointer hover:rotate-y-12 preserve-3d"
                    style={{
                      boxShadow: "10px 15px 30px rgba(0,0,0,0.4)"
                    }}
                  >
                    <img
                      src={bookCovers[selectedCover].src}
                      alt={bookCovers[selectedCover].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Gloss sweeping reflex light */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-12 duration-1000 transform scale-125 transition-all pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Cover specifications details */}
              <div className="md:col-span-7 flex flex-col justify-center space-y-5 text-left">
                <span className="text-[10px] font-mono tracking-widest text-gold text-left bg-gold/10 border border-gold/20 px-3 py-0.5 rounded w-max uppercase">
                  {bookCovers[selectedCover].genre} Style Case
                </span>
                
                <div className="space-y-1.5">
                  <h3 className="font-serif text-3xl font-bold tracking-wide">
                    {bookCovers[selectedCover].title}
                  </h3>
                  <p className={`text-xs font-mono tracking-wider ${darkMode ? "text-cream/50" : "text-navy/50"}`}>
                    Written by {bookCovers[selectedCover].author} &bull; Design Format: Print Hardback
                  </p>
                </div>

                <div className="flex gap-1 text-gold text-sm font-bold">
                  {bookCovers[selectedCover].rating} (Five Stars)
                </div>

                <p className={`text-sm font-light leading-relaxed ${darkMode ? "text-cream/80" : "text-navy/80"}`}>
                  {bookCovers[selectedCover].description}
                </p>

                {/* Best Seller ribbon banner */}
                <div className="p-4 rounded-xl bg-gold/10 border border-gold/25 inline-flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider font-bold text-gold uppercase">
                    {bookCovers[selectedCover].stats}
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Book Formatting Spreads with page-flip animation */}
        {activeTab === "formatting" && (
          <div className="space-y-10">
            {/* Formatting selectors horizontal list */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {formattingSpreads.map((spread, idx) => (
                <button
                  key={spread.id}
                  onClick={() => handlePageFlip(idx)}
                  className={`px-6 py-3 rounded-full border text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                    selectedSpread === idx
                      ? "bg-navy text-gold border-gold shadow-md"
                      : darkMode
                      ? "bg-white/3 border-white/5 text-cream/70 hover:text-white hover:border-gold/30"
                      : "bg-cream/40 border-navy/5 text-navy/80 hover:text-navy hover:border-gold/30"
                  }`}
                >
                  {spread.title}
                </button>
              ))}
            </div>

            {/* BOOK IMMERSIVE OPEN PAGE ASSEMBLY */}
            <div className={`relative max-w-4xl mx-auto py-10 px-4 transition-all duration-500 overflow-hidden ${
              isFlipped ? "rotate-y-12 opacity-50 scale-98" : "rotate-y-0 opacity-100 scale-100"
            }`}>
              
              {/* Inner Desk container */}
              <div className="relative bg-[#eee0cb] p-6 sm:p-10 rounded-2xl shadow-[0_22px_45px_rgba(0,0,0,0.35)] border border-[#c4b395] overflow-hidden text-amber-950 font-serif min-h-[420px] select-none mx-auto flex flex-col md:flex-row gap-0">
                {/* Spine shadows center dividing */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[3px] bg-gradient-to-r from-black/25 via-black/40 to-transparent -translate-x-1/2 z-20 hidden md:block" />
                <div className="absolute top-0 bottom-0 left-1/2 w-[30px] bg-gradient-to-r from-black/5 via-black/15 to-transparent -translate-x-1/2 z-10 hidden md:block" />

                {/* Left Side Page */}
                <div className="flex-1 md:pr-10 border-b md:border-b-0 md:border-r border-[#beaf95] pb-8 md:pb-0 font-serif flex flex-col justify-between pr-2 text-left">
                  <div className="space-y-6">
                    {/* Header line */}
                    <div className="flex justify-between items-center pb-2.5 border-b border-black/10 text-[10px] tracking-widest uppercase text-amber-900 font-bold">
                      <span>{formattingSpreads[selectedSpread].pages.leftTopic}</span>
                      <span>PAGE 12</span>
                    </div>

                    {/* Left prose content */}
                    <p className="text-sm leading-relaxed text-amber-950/90 font-light italic">
                      &ldquo;{formattingSpreads[selectedSpread].pages.leftText}&rdquo;
                    </p>

                    {/* Nonfiction specific: quadrant table layout if active */}
                    {formattingSpreads[selectedSpread].id === "nonfiction" && (
                      <div className="mt-4 border border-amber-900/15 rounded bg-amber-950/5 p-3 font-sans space-y-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-amber-900 block border-b border-amber-900/10 pb-1">Quadrant Activity</span>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <div className="p-1 border-r border-[#beaf95]"><strong>Q1: Strategic</strong> - Critical High morable</div>
                          <div className="p-1"><strong>Q2: Dynamic</strong> - Fast scale ups</div>
                          <div className="p-1 border-t border-[#beaf95] border-r"><strong>Q3: Standard</strong> - Maintenance</div>
                          <div className="p-1 border-t border-[#beaf95]"><strong>Q4: Delegated</strong> - Auto streams</div>
                        </div>
                      </div>
                    )}

                    {/* Workbook specific reflection field */}
                    {formattingSpreads[selectedSpread].id === "workbook" && (
                      <div className="mt-6 bg-orange-950/5 border border-amber-900/15 p-4 rounded-xl font-sans space-y-3">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-[#C9A36A]">Writer Reflection Space</label>
                        <textarea
                          placeholder="Type your manuscript theme or plot thoughts here..."
                          value={workbookInput}
                          onChange={(e) => setWorkbookInput(e.target.value)}
                          className="w-full text-xs p-2.5 rounded bg-cream border border-amber-900/20 text-stone-900 focus:outline-none focus:ring-1 focus:ring-gold"
                          rows={3}
                        />
                        <p className="text-[9px] text-[#A56B5C] text-right">Interactive worksheet mockup. Feel free to draft thoughts.</p>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] tracking-wider uppercase font-mono text-[#74573b] mt-8 block">
                    AuthorLaunchStudio &bull; Interior Spreads
                  </span>
                </div>

                {/* Right Side Page */}
                <div className="flex-1 md:pl-10 pt-8 md:pt-0 font-serif flex flex-col justify-between pl-2 text-left">
                  <div className="space-y-6">
                    {/* Header line */}
                    <div className="flex justify-between items-center pb-2.5 border-b border-black/10 text-[10px] tracking-widest uppercase text-amber-900 font-bold">
                      <span>PAGE 13</span>
                      <span>{formattingSpreads[selectedSpread].pages.rightTopic}</span>
                    </div>

                    {/* Prose layout with dynamic dropcap letters */}
                    <div className="flex items-start gap-1">
                      <span className="text-4xl sm:text-5xl font-bold font-serif leading-[0.8] text-amber-900 shrink-0 mt-0.5">
                        {formattingSpreads[selectedSpread].pages.rightText}
                      </span>
                      <p className="text-sm leading-relaxed text-amber-950/90 font-light">
                        {formattingSpreads[selectedSpread].pages.rightRemText}
                      </p>
                    </div>

                    {/* Novel chapter specific callout block */}
                    {formattingSpreads[selectedSpread].id === "novel" && (
                      <p className="text-sm leading-relaxed text-amber-950/90 font-light mt-4">
                        Across the sapphire plains, ancient bells tolled twice, signaling the arrival of the dragon lords. Those below scrambled for shelter, locking oak steel bolted trapdoors. But for Marcus, running was simply no longer a strategic option.
                      </p>
                    )}

                    {/* Nonfiction checklist item or callout box if active */}
                    {formattingSpreads[selectedSpread].id === "nonfiction" && (
                      <div className="p-4 bg-orange-950/5 border-l-4 border-amber-800 rounded-r-lg font-sans space-y-1 mt-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#A56B5C]">Key Takeaway Block</p>
                        <p className="text-xs text-amber-950">
                          Delegated actions ensure rapid horizontal operational scaling. Prioritize training key staff immediately to handle production metadata tasks before launching.
                        </p>
                      </div>
                    )}

                    {/* Workbook specific interactive checkboxes */}
                    {formattingSpreads[selectedSpread].id === "workbook" && (
                      <div className="space-y-3 mt-4 font-sans bg-amber-950/5 p-4 rounded-xl border border-amber-900/10">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#A56B5C] block mb-1">Checklist Exercises</span>
                        <label className="flex items-center gap-3.5 cursor-pointer text-xs group text-amber-950">
                          <input
                            type="checkbox"
                            checked={workbookChecks.manuscript}
                            onChange={(e) => setWorkbookChecks({ ...workbookChecks, manuscript: e.target.checked })}
                            className="accent-[#C9A36A] w-4.5 h-4.5 rounded cursor-pointer"
                          />
                          <span className={workbookChecks.manuscript ? "line-through text-stone-500" : ""}>
                            Refine and outline Draft chapters fully
                          </span>
                        </label>
                        <label className="flex items-center gap-3.5 cursor-pointer text-xs group text-amber-950">
                          <input
                            type="checkbox"
                            checked={workbookChecks.outline}
                            onChange={(e) => setWorkbookChecks({ ...workbookChecks, outline: e.target.checked })}
                            className="accent-[#C9A36A] w-4.5 h-4.5 rounded cursor-pointer"
                          />
                          <span className={workbookChecks.outline ? "line-through text-stone-500" : ""}>
                            Gather initial beta reader review forms
                          </span>
                        </label>
                        <label className="flex items-center gap-3.5 cursor-pointer text-xs group text-amber-950">
                          <input
                            type="checkbox"
                            checked={workbookChecks.formatting}
                            onChange={(e) => setWorkbookChecks({ ...workbookChecks, formatting: e.target.checked })}
                            className="accent-[#C9A36A] w-4.5 h-4.5 rounded cursor-pointer"
                          />
                          <span className={workbookChecks.formatting ? "line-through text-stone-500" : ""}>
                            Confirm physical paperback page margings
                          </span>
                        </label>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center text-[10px] tracking-widest uppercase text-amber-900 font-bold border-t border-black/10 pt-2.5 mt-8">
                    <span>{formattingSpreads[selectedSpread].layoutName}</span>
                    <span className="text-amber-800">Chapter 1 &bull; Spread View</span>
                  </div>
                </div>

              </div>

              {/* Informative description below book spreading */}
              <div className="mt-8 text-center max-w-xl mx-auto">
                <p className={`text-xs ${darkMode ? "text-cream/70" : "text-navy/70"}`}>
                  <span className="font-bold text-gold uppercase tracking-wider">Interactive layout display:</span>{" "}
                  {formattingSpreads[selectedSpread].description} Built with proportional text blocks conforming to Amazon Paperback templates.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
