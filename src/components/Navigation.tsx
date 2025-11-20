import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const shellStyles = isScrolled
    ? "border-slate-200 bg-white/85 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.65)] dark:border-white/10 dark:bg-slate-950/75"
    : "border-white/30 bg-white/40 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)] dark:border-white/10 dark:bg-slate-900/40";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-500">
      <div className="mx-auto max-w-6xl">
        <div
          className={`flex items-center justify-between gap-4 rounded-full border px-4 py-2 sm:px-6 sm:py-3 backdrop-blur-2xl transition-all ${shellStyles}`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 shadow-inner transition-transform duration-300 group-hover:-translate-y-0.5 dark:bg-white/80">
              <img src="/HAWI LOGO.ico" alt="Hawi Software Logo" className="h-9 w-9 object-contain" />
            </div>
            <span className="hidden text-base font-semibold uppercase tracking-[0.2em] text-foreground/80 group-hover:text-foreground sm:block">
              Hawi Software
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-[#DD3333]/10 text-[#DD3333]"
                    : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-3 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/70 transition hover:text-[#DD3333]"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <Button
              asChild
              className="ml-2 rounded-full bg-gradient-to-r from-[#DD3333] via-[#f25c54] to-[#DD3333] px-6 text-sm font-semibold shadow-[0_20px_50px_-20px_rgba(221,51,51,0.8)] transition hover:-translate-y-0.5"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/80 transition hover:text-[#DD3333]"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 rounded-3xl border border-white/20 bg-white/80 p-4 text-sm text-foreground shadow-lg backdrop-blur-2xl animate-fade-in dark:border-white/10 dark:bg-slate-950/80 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 font-semibold transition-all ${
                    location.pathname === link.path
                      ? "bg-[#DD3333]/10 text-[#DD3333]"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 rounded-2xl bg-gradient-to-r from-[#DD3333] via-[#f25c54] to-[#DD3333]"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
