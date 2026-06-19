import React, { useState } from "react";
import { Mail, Facebook, Twitter, Instagram, Bookmark, Sparkles, Send, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";

// Specific requested social mappings
const socialLinks = [
  {
    name: "Email Studio Direct",
    icon: Mail,
    url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
    desc: "authorlaunchstudio@gmail.com",
    label: "Draft Inquiry Letter",
    glowColor: "group-hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]",
    borderColor: "hover:border-red-400/40"
  },
  {
    name: "Facebook Portal",
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=61590832567296",
    desc: "Join our Facebook writer hub",
    label: "Follow page",
    glowColor: "group-hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]",
    borderColor: "hover:border-blue-400/40"
  },
  {
    name: "X (formerly Twitter)",
    icon: Twitter,
    url: "https://x.com/PlotToPublish",
    desc: "@PlotToPublish - Writing Tips",
    label: "Follow stream",
    glowColor: "group-hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]",
    borderColor: "hover:border-gray-300/40"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/explore/",
    desc: "Cozy visual publishing aesthetics",
    label: "Explore gallery",
    glowColor: "group-hover:shadow-[0_0_25px_rgba(236,72,153,0.25)]",
    borderColor: "hover:border-pink-400/40"
  },
  {
    name: "Threads Feed",
    icon: MessageSquare,
    url: "https://www.threads.com/@plottopublish19?hl=en",
    desc: "@plottopublish19 conversations",
    label: "Start conversation",
    glowColor: "group-hover:shadow-[0_0_25px_rgba(201,163,106,0.25)]",
    borderColor: "hover:border-amber-400/40"
  }
];

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    genre: "fantasy",
    pageCount: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-end backend ledger entry
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", genre: "fantasy", pageCount: "", notes: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden theme-transition ${
        darkMode ? "bg-navy text-cream" : "bg-cream text-navy"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute -bottom-10 right-10 w-80 h-80 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 w-max">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] tracking-[0.2em] font-semibold text-gold uppercase font-mono">
              COLLBORATIVE RESERVATION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Start Your Publishing Journey
          </h2>
          <p className={`text-base font-light ${darkMode ? "text-cream/70" : "text-navy/70"}`}>
            Ready to turn your manuscript into a published book? Connect with AuthorLaunchStudio instantly or submit your synopsis blueprint.
          </p>
        </div>

        {/* Contact Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
          
          {/* Left Column: Specific Requested Premium Clickable Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#D8A59B] uppercase font-bold">
                Direct Channels
              </span>
              <h3 className="font-serif text-2xl font-bold tracking-wide mt-1 mb-4">
                Instant Social Connections
              </h3>
            </div>

            {/* List and generate cards */}
            <div className="space-y-4">
              {socialLinks.map((channel, idx) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={idx}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-full p-5 rounded-xl border bg-white/3 border-white/5 flex items-center justify-between transition-all duration-300 hover:scale-101 hover:-translate-y-0.5 shadow-md ${channel.borderColor} ${channel.glowColor}`}
                  >
                    <div className="flex items-center gap-4.5 overflow-hidden">
                      <div className="w-11 h-11 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0 border border-gold/15 group-hover:bg-gold group-hover:text-navy transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-left overflow-hidden">
                        <span className="font-serif font-bold text-sm tracking-wide group-hover:text-gold transition-colors">
                          {channel.name}
                        </span>
                        <span className={`text-[11px] font-light truncate ${darkMode ? "text-cream/60" : "text-navy/60"}`}>
                          {channel.desc}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0 text-[10px] uppercase font-mono tracking-wider text-rose font-bold group-hover:text-gold transition-colors">
                      <span>{channel.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Premium Inquiry Intake Form */}
          <div className="lg:col-span-7 bg-white/5 border border-gold/15 p-8 md:p-10 rounded-2xl relative shadow-2xl text-left">
            <div className="absolute right-0 bottom-0 translate-y-12 translate-x-12 opacity-[0.02]">
              <Bookmark className="w-48 h-48 text-gold" style={{ transform: "rotate(35deg)" }} />
            </div>

            <div className="mb-8 border-b border-white/10 pb-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#D8A59B] block">Synposis Entry Ledger</span>
              <h3 className="font-serif text-2xl font-bold mt-1">Book Project Reservation</h3>
            </div>

            {isSuccess ? (
              <div className="py-16 text-center space-y-4 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold text-gold flex items-center justify-center mb-2 animate-bounce">
                  <CheckCircle2 className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-gold">Project Entry Saved!</h4>
                <p className={`text-sm font-light max-w-sm ${darkMode ? "text-cream/70" : "text-navy/70"}`}>
                  Our executive editors have secured your genre coordinates. Expect a draft proposal email review in 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-xs font-mono tracking-widest uppercase rounded-lg border border-white/10 transition-colors"
                >
                  Draft Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold">Author Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold">Primary Email</label>
                    <input
                      type="email"
                      required
                      placeholder="authorlaunchstudio@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold">Project Genre Category</label>
                    <select
                      value={formData.genre}
                      onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl bg-[#071B3B] border border-white/10 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-white"
                    >
                      <option value="fantasy">Epic Fantasy / Sci-Fi</option>
                      <option value="romance">Cozy Romance Novel</option>
                      <option value="thriller">Cinematic Thriller</option>
                      <option value="business">Business / Strategic Non-fiction</option>
                      <option value="workbook">Workbook / Checklist manual</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold">Project Current Length</label>
                    <input
                      type="text"
                      placeholder="e.g. 55,000 words"
                      value={formData.pageCount}
                      onChange={(e) => setFormData({ ...formData, pageCount: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold">Brief Book Synopsis / Spacing Notes</label>
                  <textarea
                    placeholder="Provide a concise description of your main plot goals, target timeline, or services needed (Beta, formatting, copy critique)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-sm px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold text-white"
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-rose text-navy font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? (
                    <span>Registering Coordinates...</span>
                  ) : (
                    <>
                      <span>Secure Free Consultation Draft</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
