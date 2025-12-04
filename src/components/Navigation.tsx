import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/logo.svg"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSolutionsActive = location.pathname === "/solutions-gateway" || location.pathname === "/solutions-agents";


  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <img src={Logo} alt="RCOM LOGO" />
            </div>
            <span className="text-xl font-bold text-foreground">RCOM Gateway</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/platform"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/platform") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Platform
            </Link>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsHovered(true)}
              onMouseLeave={() => setIsSolutionsHovered(false)}
            >
              <div
                className={`text-sm font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  isSolutionsActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsHovered ? 'rotate-180' : ''}`} />
              </div>
              
              {isSolutionsHovered && (
                <div className="absolute top-full left-0 pt-2 w-48 z-50">
                  <div className="bg-popover border border-border rounded-md shadow-lg overflow-hidden">
                    <Link
                      to="/solutions-gateway"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setIsSolutionsHovered(false)}
                    >
                      RCOM Gateway
                    </Link>
                    <Link
                      to="/solutions-agents"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setIsSolutionsHovered(false)}
                    >
                      RCOM Agents
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/pricing") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/contact">
              <Button variant="outline" size="sm">
                Contact
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/product"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Product
              </Link>
              <div className="pl-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/solutions-gateway"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    RCOM Gateway
                  </Link>
                  <Link
                    to="/solutions-agents"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    RCOM Agents
                  </Link>
                </div>
              </div>
              
              <Link
                to="/pricing"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero" className="w-full">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;