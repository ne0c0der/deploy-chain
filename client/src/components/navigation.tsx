import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Brain, Menu } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Investors", id: "investors" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-temporal-border dark:bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center animate-glow">
              <Brain className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-temporal-primary dark:text-temporal-primary">Temporal AI</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-temporal-text dark:text-temporal-text hover:text-temporal-secondary dark:hover:text-temporal-secondary transition-all duration-200 relative focus-ring rounded-md px-2 py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-temporal-secondary after:transition-all after:duration-300 hover:after:w-full"
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <Button 
              className="bg-temporal-secondary hover:bg-temporal-secondary/90 text-white button-glow focus-ring"
              data-testid="button-partner-portal"
            >
              Partner Portal
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="focus-ring" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg text-temporal-text dark:text-temporal-text hover:text-temporal-secondary dark:hover:text-temporal-secondary transition-colors duration-200 py-2 focus-ring rounded-md"
                      data-testid={`mobile-nav-link-${item.id}`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    className="bg-temporal-secondary hover:bg-temporal-secondary/90 text-white mt-4 w-full button-glow focus-ring"
                    data-testid="mobile-button-partner-portal"
                  >
                    Partner Portal
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
