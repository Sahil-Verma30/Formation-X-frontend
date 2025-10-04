import { Button } from "@/components/ui/button";
import { Menu, User, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

const Header = () => {
  const { user, logout } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  //   console.log("User from localStorage:", storedUser);
  // }, []);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
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

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-4 relative">
            {!user ? (
              <>
                <Link to="/login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="default">Get Started</Button>
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-2"
                >
                  <User className="h-5 w-5 text-gray-700" />
                  <span className="text-gray-800 font-medium">
                    {user.username || "User"}
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg border p-2">
                    {/* <Link
                      to="/profile"
                      className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link> */}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded"
                    >
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
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

            {!user ? (
              <div className="flex flex-col gap-2 pt-2">
                <Link to="/login">
                  <Button variant="ghost" className="w-full">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="default" className="w-full">Get Started</Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <Link to="/profile">
                  <Button variant="ghost" className="w-full">Profile</Button>
                </Link>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
