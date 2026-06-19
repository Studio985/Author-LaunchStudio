import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, BookOpen, Sparkles } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
}

export default function Header({ darkMode, setDarkMode, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Checklist", href: "#checklist" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? "bg-navy/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5 py-4"
            : "bg-cream/90 backdrop-blur-md shadow-[0_4px_30px_rgba(199,163,106,0.1)] border-b border-gold/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gold to-rose p-[1px]">
            <img
              src="/src/assets/images/author_launch_logo_1781876592782.jpg"
              alt="AuthorLaunch Studio Logo"
              className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-gold animate-bounce" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-tight text-gold">
              AuthorLaunchStudio
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-rose font-medium">
              Where Plots Are Published
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1.5 ${
                  isActive
                    ? "text-gold"
                    : darkMode
                    ? "text-cream/80 hover:text-gold"
                    : "text-navy/80 hover:text-gold"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-gold to-rose rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header Actions (Theme + Button + Burger) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-full border transition-all duration-300 relative group overflow-hidden ${
              darkMode
                ? "border-white/10 hover:border-gold/50 hover:bg-white/5 text-gold"
                : "border-navy/10 hover:border-gold/50 hover:bg-navy/5 text-navy-light"
            }`}
            aria-label="Toggle theme mode"
          >
            {darkMode ? (
              <Sun className="w-4.5 h-4.5 group-hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-4.5 h-4.5 group-hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* Consultation Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full border border-gold text-xs uppercase tracking-widest font-semibold text-gold bg-transparent hover:bg-gold hover:text-navy transition-all duration-300 scale-100 active:scale-95 shadow-[0_0_15px_rgba(201,163,106,0.1)] hover:shadow-[0_0_20px_rgba(201,163,106,0.3)]"
          >
            Consultation
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              darkMode ? "text-cream hover:bg-white/5" : "text-navy hover:bg-navy/5"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Panel Menu */}
      <div
        className={`fixed inset-0 top-[72px] z-40 lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-full h-full p-8 flex flex-col justify-between ${
            darkMode ? "bg-navy/95 backdrop-blur-lg" : "bg-cream/95 backdrop-blur-lg"
          }`}
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xl font-serif tracking-wide py-1 border-b transition-colors ${
                    isActive
                      ? "text-gold border-gold/40"
                      : darkMode
                      ? "text-cream/90 border-white/5 hover:text-gold"
                      : "text-navy/90 border-navy/5 hover:text-gold"
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 pt-8 border-t border-gold/10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-center w-full py-3.5 bg-gradient-to-r from-gold to-rose text-navy font-semibold rounded-lg uppercase tracking-wider text-xs shadow-md transition-all active:scale-95"
            >
              Get Free Consultation
            </a>
            <p className={`text-center text-[11px] font-mono tracking-widest ${darkMode ? "text-cream/50" : "text-navy/50"}`}>
              AUTHORLAUNCHSTUDIO © 2026
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
