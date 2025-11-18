import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RCOMGatewayWorkflow from "@/components/home/workflow";
import WhyChooseRCOM from "@/components/home/whyRcom";
import RCOMStory from "@/components/home/StoryTabs";
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
  Heart,
  Cpu,
  Workflow as WorkflowIcon
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
      <section className="py-16 bg-slate-950 border-b border-slate-900/60 text-slate-100">
<div className="container mx-auto px-6">
<div className="max-w-5xl mx-auto text-center mb-12">
<span className="inline-flex items-center gap-2 bg-slate-800/70 border border-slate-700/70 rounded-full px-4 py-1.5 text-sm font-semibold text-primary">
<CheckCircle className="w-4 h-4" />
Two Ways to Use RCOM Agents
</span>
<h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
Flexible Edge Processing for Any Architecture
</h2>
<p className="text-lg text-slate-300 leading-relaxed">
RCOM Agents can work hand‑in‑hand with RCOM Gateway for end‑to‑end automation, or operate independently by streaming device data directly to any external system you choose.
</p>
</div>


<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
{/* Method 1 */}
<div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
<Cpu className="w-6 h-6 text-white" />
</div>
<div>
<h3 className="text-xl font-semibold text-white">Method 1: Paired with RCOM Gateway</h3>
<p className="text-sm text-slate-300 mt-2">
Agents capture, filter, buffer, and normalize raw device data, then forward clean events to RCOM Gateway where workflows, digital twins, routing logic, and integrations take over.
</p>
<div className="flex flex-wrap gap-2 mt-4 text-xs text-slate-400">
<span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Advanced automation</span>
<span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Workflow‑driven logic</span>
<span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Digital twins & reporting</span>
</div>
<div className="mt-5">
<Link to="/solutions" className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
View Gateway Features
<ArrowRight className="w-4 h-4 ml-2" />
</Link>
</div>
</div>
</div>
</div>


{/* Method 2 */}
<div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
<Cpu className="w-6 h-6 text-white" />
</div>
<div>
<h3 className="text-xl font-semibold text-white">Method 2: Direct to Any System</h3>
<p className="text-sm text-slate-300 mt-2">
Agents can bypass the Gateway entirely and push structured tag reads or sensor events straight into REST APIs, MQTT topics, or custom middleware of your choice.
</p>
<div className="flex flex-wrap gap-2 mt-4 text-xs text-slate-400">
<span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Vendor‑agnostic</span>
<span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Flexible integrations</span>
<span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Lightweight edge layer</span>
</div>
<div className="mt-5">
<Link to="/solutions-agents" className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
Explore Agent Use Cases
<ArrowRight className="w-4 h-4 ml-2" />
</Link>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
      <section className="py-16 bg-slate-950 border-b border-slate-900/60 text-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-slate-800/70 border border-slate-700/70 rounded-full px-4 py-1.5 text-sm font-semibold text-primary">
              <CheckCircle className="w-4 h-4" />
              Unified Suite, Two Specialized Layers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
              RCOM Gateway Suite: Edge to Enterprise in Sync
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Deploy one platform to capture, clean, and act on Auto-ID and IoT events. RCOM Agents sit with your devices to normalize signals, while RCOM Gateway orchestrates workflows, twins, and integrations for enterprise outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">RCOM Agents</h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Device Edge Layer — install near readers, scanners, and sensors to filter noise, buffer during outages, and stream structured events upstream.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 text-xs text-slate-400">
                    <span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Vendor-neutral-system</span>
                    <span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Store-and-forward</span>
                    <span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Local validation and preprocessing </span>
                  </div>
                  <div className="mt-5">
                    <Link to="/solutions-agents" className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                      Explore Agents
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                  <WorkflowIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">RCOM Gateway</h3>
                  <p className="text-sm text-slate-300 mt-2">
                    Logic Control Layer — design workflows, digital twins, and integrations to push cleansed edge events into ERP, WMS, MES, analytics, or custom dashboards.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 text-xs text-slate-400">
                    <span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Low-code workflows</span>
                    <span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Real-time automation</span>
                    <span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/60">Enterprise integrations</span>
                  </div>
                  <div className="mt-5">
                    <Link to="/solutions" className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                      Explore Gateway
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      
      {/* Key Benefits */}
      <WhyChooseRCOM />
    

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
