import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              {/* <img src={"logoImg.png"} alt="Formation X Logo" className="h-16 w-16 rounded-lg" /> */}
              <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Formation X
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/hackathons" className="text-foreground/80 hover:text-foreground transition-colors">
              Hackathons
            </Link>
            <Link to="/feed" className="text-foreground/80 hover:text-foreground transition-colors">
              Feeds
            </Link>
            <a href="/#spaces" className="text-foreground/80 hover:text-foreground transition-colors">
              Spaces
            </a>
            <a href="/#sponsors" className="text-foreground/80 hover:text-foreground transition-colors">
              Sponsors
            </a>
            <a href="/#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="default">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/feed" className="block text-foreground/80 hover:text-foreground transition-colors">
              Hackathons
            </Link>
            <a href="#spaces" className="block text-foreground/80 hover:text-foreground transition-colors">
              Spaces
            </a>
            <a href="#sponsors" className="block text-foreground/80 hover:text-foreground transition-colors">
              Sponsors
            </a>
            <a href="#about" className="block text-foreground/80 hover:text-foreground transition-colors">
              About
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/login">
                <Button variant="ghost" className="w-full">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button variant="default" className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
