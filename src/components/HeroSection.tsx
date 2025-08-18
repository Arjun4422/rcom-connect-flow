import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Enterprise IoT Integration Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Connect Every Device.{" "}
              <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
                Automate Any Process.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              RCOM Gateway is a high-throughput IoT integration platform that bridges Auto-ID devices 
              and enterprise systems in real time. Transform floods of RFID, sensor, and barcode data 
              into actionable insights and automated workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/product">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Play className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 opacity-80">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-glow" />
                <span className="text-sm text-gray-300">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary-glow" />
                <span className="text-sm text-gray-300">Global Scale</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-glow" />
                <span className="text-sm text-gray-300">Real-Time Processing</span>
              </div>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-2xl p-8 shadow-2xl border border-white/10">
              {/* Dashboard Preview */}
              <div className="bg-enterprise rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-enterprise-foreground">Live Operations Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-enterprise-foreground/70">Real-time</span>
                  </div>
                </div>
                
                {/* Mock Data Visualization */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-enterprise-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-glow mb-1">1,247</div>
                    <div className="text-xs text-enterprise-foreground/70">Active Devices</div>
                  </div>
                  <div className="bg-enterprise-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-glow mb-1">99.8%</div>
                    <div className="text-xs text-enterprise-foreground/70">Uptime</div>
                  </div>
                  <div className="bg-enterprise-muted rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-glow mb-1">15.2M</div>
                    <div className="text-xs text-enterprise-foreground/70">Events/Hour</div>
                  </div>
                </div>
                
                {/* Activity Stream */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-enterprise-foreground/70">Warehouse A - Gate 3</span>
                    <span className="text-green-400">✓ Pallet scanned</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-enterprise-foreground/70">Hospital B - Zone 2</span>
                    <span className="text-blue-400">📍 Asset located</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-enterprise-foreground/70">Factory C - Line 1</span>
                    <span className="text-yellow-400">⚡ Workflow triggered</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary rounded-lg p-3 shadow-lg">
                <div className="text-xs text-primary-foreground font-medium">RFID Event</div>
                <div className="text-xl font-bold text-primary-foreground">Live</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-primary rounded-lg p-3 shadow-lg">
                <div className="text-xs text-primary-foreground font-medium">Processing</div>
                <div className="text-xl font-bold text-primary-foreground">&lt;1ms</div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;