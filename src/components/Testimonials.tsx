import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles, BookOpen } from "lucide-react";

const testimonials = [
  {
    id: "review1",
    name: "Eleanor Vance",
    role: "Fantasy Author",
    bookTitle: "The Last Dragon Heir",
    text: "The jacket cover created by AuthorLaunchStudio gained 10,000 views in the first 24 hours of KDP listing! They structured my final layout flawlessly. The formatting was gorgeous, and the book description optimization drove my novel directly to #1 under Teen High Fantasy.",
    rating: 5,
    avatar: "EV",
    salesHighlight: "#1 Amazon Bestseller"
  },
  {
    id: "review2",
    name: "Julian Thorne",
    role: "Contemporary Romance Author",
    bookTitle: "When Autumn Stayed",
    text: "I was extremely anxious about my first self-publishing project, but the team's meticulous developmental proofreading and exquisite Romance cover formatting dissolved all my fear. The layout was classic and stunning. I sold over 4,500 copies during the launch week!",
    rating: 5,
    avatar: "JT",
    salesHighlight: "4,500+ Launch Week Sales"
  },
  {
    id: "review3",
    name: "Richard V. Reynolds",
    role: "Business Consultant",
    bookTitle: "Lead Beyond Limits",
    text: "Outstanding end-to-end self-publishing support! AuthorLaunchStudio handled everything from structural line editing to the modern bestselling jacket canvas. They registered my ISBN, optimized backend keyword descriptors, and mapped out a marketing blueprint that hit the Wall Street Journal list.",
    rating: 5,
    avatar: "RR",
    salesHighlight: "Wall Street Journal List"
  },
  {
    id: "review4",
    name: "S. J. Blackwood",
    role: "Cinematic Thriller Creator",
    bookTitle: "The Silent Witness",
    text: "Meticulous typesetting, superb developmental proofing, and a cover design that literally jumps off the screen. Their formatting allowed my thriller chapters to flow elegantly under reflowable Kindle guidelines. Unparalleled luxury publishing support.",
    rating: 5,
    avatar: "SB",
    salesHighlight: "Publisher Weekly Highlight"
  }
];

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className={`py-24 relative overflow-hidden theme-transition ${
        darkMode ? "bg-navy text-cream" : "bg-cream text-navy"
      }`}
    >
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 w-max">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] tracking-[0.2em] font-semibold text-gold uppercase font-mono">AUTHORS OUTCOMES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Client Success Stories
          </h2>
          <p className={`text-sm font-light ${darkMode ? "text-cream/70" : "text-navy/70"}`}>
            Nothing speaks louder than the concrete sales breakthroughs and glorious feedback letters of independent writers who trusted us with their publishing launch.
          </p>
        </div>

        {/* Testimonials Slider Box */}
        <div className="max-w-4xl mx-auto">
          
          <div className="relative min-h-[380px] md:min-h-[300px] flex items-center justify-center bg-white/3 border border-gold/15 p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden text-left">
            {/* Visual quotes marker asset */}
            <div className="absolute right-6 top-6 opacity-5 dark:opacity-10 pointer-events-none">
              <Quote className="w-32 h-32 text-gold" />
            </div>

            {/* Inner responsive layout card */}
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              
              {/* Profile Avatar Block */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-gold to-rose p-[1.5px] shadow-lg mb-4">
                  <div className="w-full h-full rounded-full bg-navy flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-gold">
                      {testimonials[currentIdx].avatar}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase bg-gold/15 border border-gold/25 text-gold font-bold px-3 py-0.5 rounded-full text-center">
                  {testimonials[currentIdx].salesHighlight}
                </span>
              </div>

              {/* Review detailed paragraph text */}
              <div className="space-y-4 flex-1">
                {/* Gold Stars */}
                <div className="flex gap-1.5 text-gold">
                  {Array.from({ length: testimonials[currentIdx].rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-gold stroke-none" />
                  ))}
                </div>

                <p className="font-serif italic text-base sm:text-lg md:text-xl leading-relaxed text-balance">
                  &ldquo;{testimonials[currentIdx].text}&rdquo;
                </p>

                {/* Author Credentials */}
                <div className="pt-2 border-t border-white/5">
                  <h4 className="font-serif font-bold text-lg text-gold">
                    {testimonials[currentIdx].name}
                  </h4>
                  <p className={`text-xs font-mono tracking-wider flex items-center gap-2 ${darkMode ? "text-cream/50" : "text-navy/50"}`}>
                    <span>{testimonials[currentIdx].role}</span>
                    <span>&bull;</span>
                    <span className="italic flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-rose inline" />
                      &ldquo;{testimonials[currentIdx].bookTitle}&rdquo;
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Testimonials controls */}
          <div className="flex items-center justify-between mt-8.5 max-w-[150px] mx-auto">
            <button
              onClick={prevSlide}
              className={`p-3 rounded-full border transition-transform duration-300 ${
                darkMode
                  ? "border-white/10 hover:border-gold hover:bg-white/5 text-cream"
                  : "border-navy/10 hover:border-gold hover:bg-navy/5 text-navy"
              }`}
              aria-label="Previous story slide"
            >
              <ChevronLeft className="w-5 h-5 text-gold" />
            </button>

            <span className={`text-xs font-mono tracking-wide ${darkMode ? "text-cream/55" : "text-navy/55"}`}>
              0{currentIdx + 1} / 0{testimonials.length}
            </span>

            <button
              onClick={nextSlide}
              className={`p-3 rounded-full border transition-transform duration-300 ${
                darkMode
                  ? "border-white/10 hover:border-gold hover:bg-white/5 text-cream"
                  : "border-navy/10 hover:border-gold hover:bg-navy/5 text-navy"
              }`}
              aria-label="Next story slide"
            >
              <ChevronRight className="w-5 h-5 text-gold" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
