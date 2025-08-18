import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-enterprise text-enterprise-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">RCOM Gateway</span>
            </div>
            <p className="text-enterprise-foreground/70 mb-6 text-sm leading-relaxed">
              Bridging the gap between physical devices and digital systems with 
              enterprise-grade IoT integration platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-enterprise-foreground">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/product" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link to="/product#features" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold mb-4 text-enterprise-foreground">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/solutions/logistics" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Logistics & Supply Chain
                </Link>
              </li>
              <li>
                <Link to="/solutions/healthcare" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/solutions/manufacturing" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/solutions/smart-infrastructure" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Smart Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-enterprise-foreground">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-enterprise-foreground/70">
                <Mail className="w-4 h-4" />
                <span>info@rcomgateway.com</span>
              </li>
              <li className="flex items-center space-x-2 text-enterprise-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-enterprise-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Innovation Drive<br />Tech Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-enterprise-muted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-enterprise-foreground/70 text-sm">
            © 2024 RCOM Gateway. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-enterprise-foreground/70 hover:text-primary-glow text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-enterprise-foreground/70 hover:text-primary-glow text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;