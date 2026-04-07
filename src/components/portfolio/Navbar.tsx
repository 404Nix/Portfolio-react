import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: "home", label: "00.Home" },
  { id: "about", label: "01.About" },
  { id: "github", label: "02.GitHub" },
  { id: "skills", label: "03.Skills" },
  { id: "projects", label: "04.Work" },
  { id: "contact", label: "05.Contact" },
];

export const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", window.location.pathname);
    } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${sectionId}`);
        }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold font-['Space_Grotesk'] tracking-wider flex items-center gap-2 text-white cursor-pointer" onClick={() => scrollToSection("home")}>
            <Terminal className="text-primary w-6 h-6" />
            NIX<span className="text-primary animate-pulse">_</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2 font-mono text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-4 py-2 rounded-md transition-all duration-300 hover:text-primary relative group",
                    activeSection === item.id || (activeSection === "" && item.id === "home")
                      ? "text-primary bg-primary/5"
                      : "text-gray-400"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary blur-[1px]"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-primary p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#111] rounded-lg mt-2 border border-white/10 shadow-2xl font-mono text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "block px-3 py-3 rounded-md w-full text-left transition-all duration-300",
                    activeSection === item.id
                      ? "text-primary bg-primary/10 border-l-2 border-primary"
                      : "text-gray-400 hover:text-primary hover:bg-white/5 border-l-2 border-transparent"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
