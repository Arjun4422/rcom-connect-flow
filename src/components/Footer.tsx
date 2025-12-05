import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter,Globe } from "lucide-react";

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
              <span className="text-xl font-bold">RCOM Gateway Suite</span>
            </div>
            <p className="text-enterprise-foreground/70 mb-6 text-sm leading-relaxed">
            Bridging the gap between physical devices and digital systems with an enterprise-grade Auto-ID and IoT integration platform.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-enterprise-foreground">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/platform" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Platform Overview
                </Link>
              </li>
             
              <li>
                <Link to="/pricing" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="https://docs.rcom-gateway.com/" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold mb-4 text-enterprise-foreground">Documenation</h3>
            <ul className="space-y-3 text-sm">
            <li>
                <a href="https://docs.rcom-gateway.com/" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
            <h3 className="font-semibold mb-4 text-enterprise-foreground mt-3">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/solutions-gateway" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  RCOM Gateway
                </Link>
              </li>
              <li>
                <Link to="/solutions-agents" className="text-enterprise-foreground/70 hover:text-primary-glow transition-colors">
                  RCOM Agent
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-enterprise-foreground">Contact</h3>
            <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2 text-enterprise-foreground/70">
                <Globe className="w-4 h-4" />
               <a href="https://data-elektronik.de"> <span>data-elektronik.de</span></a>
              </li>
              
              <li className="flex items-center space-x-2 text-enterprise-foreground/70">
                <Mail className="w-4 h-4" />
                <span>info@data-elektronik.de</span>
              </li>
              <li className="flex items-center space-x-2 text-enterprise-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+49 621 41080</span>
              </li>
              <li className="flex items-start space-x-2 text-enterprise-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Edisonstraße 10-12,<br/> 68309 Mannheim, Germany</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-enterprise-muted mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-enterprise-foreground/70 text-sm">
            © 2025 RCOM Gateway. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            
            {/* <Link to="/privacy" className="text-enterprise-foreground/70 hover:text-primary-glow text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-enterprise-foreground/70 hover:text-primary-glow text-sm transition-colors">
              Terms of Service
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;