import { Link } from "react-router-dom";
import { Zap, Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header isDark={isDark} onToggleDarkMode={toggleDarkMode} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Header({
  isDark,
  onToggleDarkMode,
}: {
  isDark: boolean;
  onToggleDarkMode: () => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container flex h-14 sm:h-16 md:h-20 items-center justify-between px-2 sm:px-3 md:px-4 gap-1.5 sm:gap-2 md:gap-3">
          <Link
            to="/"
            className="flex items-center gap-1 sm:gap-1.5 md:gap-2 font-bold text-lg sm:text-xl md:text-2xl hover:scale-105 transition-transform duration-300 flex-shrink-0"
            onClick={closeMenu}
          >
            <div className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-all duration-300 hover:shadow-lg">
              <Zap className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-nowrap text-sm sm:text-base md:text-lg">
              PROMPTATHON
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 text-xs md:text-sm flex-1 justify-center">
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#events">Events</NavLink>
            <NavLink href="/#workshop">Workshop</NavLink>
            <NavLink href="/#participant-instructions">
              Participant Instructions
            </NavLink>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-shrink-0">
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-all duration-300 transform hover:scale-110 hover:shadow-md"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500 transition-transform duration-300 rotate-0 group-hover:rotate-180" />
              ) : (
                <Moon className="w-4 sm:w-5 h-4 sm:h-5 text-slate-600 transition-transform duration-300" />
              )}
            </button>
            <Link
              to="/register"
              className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-[10px] sm:text-xs md:text-sm whitespace-nowrap"
              onClick={closeMenu}
            >
              Register
            </Link>
            <button
              onClick={toggleMenu}
              className="lg:hidden p-1.5 rounded-lg hover:bg-muted transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border bg-background/95">
            <div className="container px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 space-y-2 sm:space-y-2.5">
              <MobileNavLink href="/#about" onClick={closeMenu}>
                About
              </MobileNavLink>
              <MobileNavLink href="/#events" onClick={closeMenu}>
                Events
              </MobileNavLink>
              <MobileNavLink href="/#workshop" onClick={closeMenu}>
                Workshop
              </MobileNavLink>
              <MobileNavLink href="/#participant-instructions" onClick={closeMenu}>
                Participant Instructions
              </MobileNavLink>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-muted hover:text-primary"
    >
      {children}
    </a>
  );
}

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`text-xs md:text-sm font-medium transition-all duration-300 hover:text-primary relative group ${className || ""}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-muted py-6 sm:py-8 md:py-10 lg:py-12 mt-12 sm:mt-14 md:mt-16 lg:mt-20 transition-all duration-300">
      <div className="container px-2 sm:px-3 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div>
            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PROMPTATHON
            </h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
              Spread awareness about AI prompting and prompt engineering across
              campus.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">Events</h4>
            <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              <li>
                <a
                  href="#events"
                  className="hover:text-primary transition-all duration-300 relative group inline-block break-words"
                >
                  See It Say It Get It
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-primary transition-all duration-300 relative group inline-block break-words"
                >
                  Codesmith&apos;s Arena
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#workshop"
                  className="hover:text-primary transition-all duration-300 relative group inline-block break-words"
                >
                  AI Workshop
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">College</h4>
            <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              <li>
                <a
                  href="https://srmvalliammai.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-all duration-300 relative group inline-block break-words"
                >
                  SRM Valliammai Engineering College
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://srmvalliammai.ac.in/be-electronics-and-communications-engineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-all duration-300 relative group inline-block break-words"
                >
                  Department of ECE
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">Contact</h4>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
              <a
                href="tel:+918015885707"
                className="hover:text-primary transition-all duration-300 relative group inline-block break-words"
              >
                +91-8015885707
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1.5 sm:mt-2 break-words">
              <a
                href="mailto:mohamedhaarith239@gmail.com"
                className="hover:text-primary transition-all duration-300 relative group inline-block"
              >
                mohamedhaarith239@gmail.com
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-4 sm:pt-5 md:pt-6 lg:pt-8 text-center text-[10px] sm:text-xs md:text-sm text-muted-foreground">
          <p className="break-words">
            &copy; 2025 PROMPTATHON -{" "}
            <a
              href="https://srmvalliammai.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all duration-300 font-semibold relative group inline-block"
            >
              SRM Valliammai Engineering College
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
