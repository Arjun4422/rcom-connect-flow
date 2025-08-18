import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Eye, 
  Cog, 
  Database, 
  ArrowRight, 
  CheckCircle,
  Factory,
  Building2,
  Truck,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Real-Time Visibility",
      description: "Live dashboards and alerts for instant insight into operations."
    },
    {
      icon: Cog,
      title: "Flexible Automation", 
      description: "No-code workflows adapt to your processes, from warehouse to hospital."
    },
    {
      icon: Database,
      title: "Unified Data Integration",
      description: "Consolidate RFID, barcode, and sensor data into your enterprise systems seamlessly."
    },
    {
      icon: Zap,
      title: "Scalable & Secure",
      description: "Enterprise-grade platform that grows with you – scale from one site to global operations securely."
    }
  ];

  const industries = [
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Optimize every move – from dock door RFID reads to ERP updates. RCOM automates tracking of pallets, shipments, and inventory across the globe.",
      link: "/solutions/logistics",
      color: "text-blue-500"
    },
    {
      icon: Heart,
      title: "Healthcare", 
      description: "Real-time asset and patient tracking for smarter, safer hospitals. Connect medical devices and ID tags to your EMR and alert systems instantly.",
      link: "/solutions/healthcare",
      color: "text-green-500"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Drive Industry 4.0 on your shop floor. Monitor production flow with sensors and RFID, and trigger automated actions without manual intervention.",
      link: "/solutions/manufacturing", 
      color: "text-orange-500"
    },
    {
      icon: Building2,
      title: "Smart Infrastructure",
      description: "Unify building or city-wide sensor networks. Whether it's smart building management or intelligent transport systems, RCOM orchestrates devices and data.",
      link: "/solutions/smart-infrastructure",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Key Benefits */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RCOM Gateway?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your IoT data into automated business processes with our comprehensive integration platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions for your industry's unique challenges and requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${industry.color} bg-current/10`}>
                      <industry.icon className={`w-6 h-6 ${industry.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {industry.description}
                      </p>
                      <Link to={industry.link}>
                        <Button variant="outline" size="sm" className="group-hover:shadow-md transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How RCOM Gateway Works
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              A device scan or sensor reading flows into RCOM Gateway, which processes it through 
              visual workflows, then updates your systems in milliseconds. No custom code needed.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Device Event</h4>
                <p className="text-sm text-muted-foreground">Scan, read, or sensor signal</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Gateway</h4>
                <p className="text-sm text-muted-foreground">Captures & processes event</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Workflow</h4>
                <p className="text-sm text-muted-foreground">Visual automation rules</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  4
                </div>
                <h4 className="font-semibold mb-2">Your System</h4>
                <p className="text-sm text-muted-foreground">Updates ERP, alerts, actions</p>
              </div>
            </div>
            
            <Link to="/product">
              <Button variant="default" size="lg">
                See Detailed Platform Overview
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof & CTA */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Take a product tour or schedule a personalized demo to see RCOM Gateway in action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/product">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Explore Platform
                </Button>
              </Link>
            </div>
            
            {/* Testimonial Placeholder */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <blockquote className="text-lg italic mb-4">
                  "RCOM Gateway enabled us to automate our warehouse scanning process end-to-end. 
                  We saw a 30% efficiency gain in three months."
                </blockquote>
                <footer className="text-primary-glow font-medium">
                  — John Doe, Logistics Director at ACME Corp
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
