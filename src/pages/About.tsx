import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Award, MapPin, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PartnersPage from "./Partner";

const About = () => {
  const CountUp = ({ end, duration = 1500, decimals = 0, suffix = "", prefix = "" }: { end: number; duration?: number; decimals?: number; suffix?: string; prefix?: string; }) => {
    const [value, setValue] = useState(0);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
      let rafId: number;

      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(parseFloat((end * eased).toFixed(decimals)));
        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        }
      };

      rafId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(rafId);
    }, [end, duration, decimals]);

    return (
      <div className="text-3xl font-bold text-primary mb-2">{prefix}{value.toFixed(decimals)}{suffix}</div>
    );
  };

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously pushing the boundaries of IoT integration technology."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success – we're committed to your outcomes."
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Enterprise-grade solutions you can depend on for mission-critical operations."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder", 
      description: "20+ years in logistics technology, former VP at IBM IoT Division",
      image: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      description: "IoT systems architect, published author in RFID standards, ex-Microsoft",
      image: "MC"
    },
    {
      name: "David Rodriguez",
      role: "VP of Engineering",
      description: "15+ years building enterprise integration platforms, former Oracle",
      image: "DR"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "RCOM established with initial version of RCOM Gateway for RFID integration"
    },
    {
      year: "2020", 
      title: "Healthcare Breakthrough",
      description: "Major hospital system deploys RCOM for asset tracking across 12 facilities"
    },
    {
      year: "2022",
      title: "Platform Evolution",
      description: "RCOM Gateway 3.0 launched with IoT sensors and digital twin capabilities"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Partnerships established, serving enterprise clients across 15 countries"
    }
  ];

  return (
    <div className="min-h-screen">
      <PartnersPage/>
      {/* Hero Section */}
      <section className="py-24 bg-slate-900 text-white inset-0 bg-slate-950/90 p-4 shadow-[0_0_80px_rgba(56,189,248,0.35)] backdrop-blur ">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-glow border-primary/30">
              About RCOM Gateway
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission: Bridge Every 
              <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent"> Physical and Digital Gap</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              At RCOM, we believe every tag, sensor, and device has a story to tell – and our mission is to help 
              businesses hear those stories in real time. We're passionate about turning operational data into actionable intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2018, RCOM (Real-time Communications) is a team of IoT and Auto-ID enthusiasts 
                headquartered in Silicon Valley. With decades of combined experience in supply chain technology 
                and software engineering, we developed RCOM Gateway to solve the integration challenges we saw 
                first-hand in warehouses, hospitals, and factories.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, our platform powers automated operations for clients worldwide, from single-facility 
                deployments to global enterprise networks. We've made it our mission to eliminate the barriers 
                between physical operations and digital systems.
              </p>
              <Link to="/contact">
                <Button variant="default" size="lg">
                  Join Our Mission
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Card className="bg-gradient-card border-border/50 shadow-xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <CountUp end={50} suffix="+" />
                      <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                    </div>
                    <div>
                      <CountUp end={15} suffix="M+" />
                      <div className="text-sm text-muted-foreground">Events Processed Daily</div>
                    </div>
                    <div>
                      <CountUp end={99.9} decimals={1} suffix="%" />
                      <div className="text-sm text-muted-foreground">Platform Uptime</div>
                    </div>
                    <div>
                      <CountUp end={15} />
                      <div className="text-sm text-muted-foreground">Countries Served</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced team behind RCOM Gateway
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our mission to connect the physical and digital worlds
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 mr-8 relative">
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 w-0.5 h-16 bg-primary/30 transform -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-slate-900 text-white inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 ">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Learn More?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Connect with our team to discover how RCOM Gateway can transform your operations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-8 h-8 text-primary-glow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300">
                    123 Innovation Drive<br />
                    Tech Valley, CA 94025
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Mail className="w-8 h-8 text-primary-glow mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
                  <p className="text-gray-300">
                    info@rcomgateway.com<br />
                    +1 (555) 123-4567
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;