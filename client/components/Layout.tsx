import { Link } from "react-router-dom";
import { Zap, Moon, Sun } from "lucide-react";
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
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container flex h-20 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl hover:scale-105 transition-transform duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-all duration-300 hover:shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PROMPTATHON
          </span>
          <span className="sm:hidden bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-lg">
            PROM
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#events">Events</NavLink>
          <NavLink href="/#workshop">Workshop</NavLink>
          <NavLink href="/#participant-instructions">
            Participant Instructions
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-lg hover:bg-muted transition-all duration-300 transform hover:scale-110 hover:shadow-md"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300 rotate-0 group-hover:rotate-180" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600 transition-transform duration-300" />
            )}
          </button>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium transition-all duration-300 hover:text-primary relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-muted py-12 mt-20 transition-all duration-300">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PROMPTATHON
            </h3>
            <p className="text-sm text-muted-foreground">
              Spread awareness about AI prompting and prompt engineering across
              campus.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Events</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#events"
                  className="hover:text-primary transition-all duration-300 relative group inline-block"
                >
                  See It Say It Get It
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-primary transition-all duration-300 relative group inline-block"
                >
                  Codesmith&apos;s Arena
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#workshop"
                  className="hover:text-primary transition-all duration-300 relative group inline-block"
                >
                  AI Workshop
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">College</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://srmvalliammai.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-all duration-300 relative group inline-block"
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
                  className="hover:text-primary transition-all duration-300 relative group inline-block"
                >
                  Department of ECE
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              <a
                href="tel:+918015885707"
                className="hover:text-primary transition-all duration-300 relative group inline-block"
              >
                +91-8015885707
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
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

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024 PROMPTATHON -{" "}
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
