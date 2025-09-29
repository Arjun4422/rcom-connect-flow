import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RCOMGatewayWorkflow from "@/components/home/workflow";
import WhyChooseRCOM from "@/components/home/whyRcom";
import TestimonialsSection from "@/components/home/Testimonials";
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
      
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <span className="uppercase text-xs tracking-widest text-muted-foreground font-semibold">
              Trusted by leading organizations
            </span>
          </div>
          <div className="relative flex justify-center">
            <div
              className="overflow-hidden w-1/2 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <div
                className="flex items-center gap-12 animate-infinite-marquee"
                style={{
                  animation: "infinite-marquee 18s linear infinite",
                  minWidth: "max-content",
                }}
              >
                {/* 5 Brands, repeated for seamless infinite scroll */}
                {[
                  {
                    svg: (
                      <svg className="w-12 h-12 text-primary" fill="none">
                        <rect width="100%" height="100%" rx="8" fill="currentColor" opacity="0.08" />
                        <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ),
                    name: "PlusCorp",
                  },
                  {
                    svg: (
                      <svg className="w-12 h-12 text-primary" fill="none">
                        <rect width="100%" height="100%" rx="8" fill="currentColor" opacity="0.08" />
                        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    ),
                    name: "CircleOne",
                  },
                  {
                    svg: (
                      <svg className="w-12 h-12 text-primary" fill="none">
                        <rect width="100%" height="100%" rx="8" fill="currentColor" opacity="0.08" />
                        <rect x="7" y="7" width="10" height="10" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    ),
                    name: "SquareNet",
                  },
                  {
                    svg: (
                      <svg className="w-12 h-12 text-primary" fill="none">
                        <rect width="100%" height="100%" rx="8" fill="currentColor" opacity="0.08" />
                        <polygon points="12,6 18,18 6,18" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    ),
                    name: "Triad",
                  },
                  {
                    svg: (
                      <svg className="w-12 h-12 text-primary" fill="none">
                        <rect width="100%" height="100%" rx="8" fill="currentColor" opacity="0.08" />
                        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    ),
                    name: "Xeno",
                  },
                ].concat([
                  {
                    svg: (
                      <svg className="w-12 h-12 text-primary" fill="none">
                        <rect width="100%" height="100%" rx="8" fill="currentColor" opacity="0.08" />
                        <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ),
                    name: "PlusCorp",
                  },
                  {
                    svg: (
                      <svg className="w-12 h-12 text-primary" fill="none">
                        <rect width="100%" height="100%" rx="8" fill="currentColor" opacity="0.08" />
                        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    ),
                    name: "CircleOne",
                  },
                  {
                    svg: (
                      <svg className="w-12 h-12 text-primary" fill="none">
                        <rect width="100%" height="100%" rx="8" fill="currentColor" opacity="0.08" />
                        <rect x="7" y="7" width="10" height="10" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    ),
                    name: "SquareNet",
                  },
                  {
                    svg: (
                      <svg className="w-12 h-12 text-primary" fill="none">
                        <rect width="100%" height="100%" rx="8" fill="currentColor" opacity="0.08" />
                        <polygon points="12,6 18,18 6,18" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    ),
                    name: "Triad",
                  },
                  {
                    svg: (
                      <svg className="w-12 h-12 text-primary" fill="none">
                        <rect width="100%" height="100%" rx="8" fill="currentColor" opacity="0.08" />
                        <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    ),
                    name: "Xeno",
                  },
                ]).map((brand, idx) => (
                  <div className="flex flex-col items-center" key={idx}>
                    {brand.svg}
                    <span className="text-xs mt-2 text-muted-foreground">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Infinity marquee animation */}
            <style>
              {`
                @keyframes infinite-marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-infinite-marquee {
                  animation: infinite-marquee 18s linear infinite;
                  will-change: transform;
                }
              `}
            </style>
          </div>
        </div>
      </section>

    
      
      {/* Key Benefits */}
      <WhyChooseRCOM />
      {/* <section className="py-24 bg-gradient-subtle">
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
      </section> */}

      {/* Industry Solutions */}
      <section className="py-10 bg-background">
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
                        {/* <Button variant="outline" size="sm" className="group-hover:shadow-md transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button> */}
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl mx-10 my-10 p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2 text-center">
              <div className="text-4xl font-bold text-blue-400">500+</div>
              <div className="text-slate-300">Companies</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-4xl font-bold text-emerald-400">99.9%</div>
              <div className="text-slate-300">Uptime</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-4xl font-bold text-orange-400">50M+</div>
              <div className="text-slate-300">Devices Connected</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-4xl font-bold text-purple-400">24/7</div>
              <div className="text-slate-300">Support</div>
            </div>
          </div>
        </div>
      </section>
      {/* <IndustrySolutions /> */}
      <RCOMGatewayWorkflow />
      <TestimonialsSection />

      

      {/* Social Proof & CTA */}
      <section className="py-24 bg-slate-900 text-white inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
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
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
