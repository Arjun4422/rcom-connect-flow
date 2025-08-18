import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Workflow, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Smartphone, 
  ArrowRight,
  CheckCircle,
  Wifi,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";

const Product = () => {
  const features = [
    {
      icon: Wifi,
      title: "Connect Any Device",
      description: "Out-of-the-box connectors for RFID, barcodes, BLE, sensors and more. Easily onboard new devices with standard protocols – no custom coding required.",
      highlights: ["RAIN RFID/UHF Support", "Barcode Scanners (1D/2D)", "BLE Beacon Gateways", "IoT Sensors"]
    },
    {
      icon: Workflow,
      title: "Visual Workflows (Low-Code)",
      description: "Design automation workflows with an intuitive drag-and-drop editor. Convert raw reads into meaningful actions in minutes.",
      highlights: ["50+ Prebuilt Actions", "Conditional Logic", "Error Handling", "Real-time Testing"]
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Handle high volume of events with sub-second processing. RCOM's event engine filters, enriches, and responds to data streams in real time.",
      highlights: ["<1ms Processing", "Event Filtering", "Data Enrichment", "Instant Alerts"]
    },
    {
      icon: Database,
      title: "Enterprise Integration",
      description: "Built-in integrations for MQTT, REST APIs, databases, and SAP systems. No data silos – direct integration with your ERP, WMS, or cloud analytics.",
      highlights: ["SAP Integration", "REST APIs", "MQTT Broker", "Database Connectors"]
    },
    {
      icon: BarChart3,
      title: "Digital Twin & Data Storage",
      description: "Model your operation with digital objects. Track every asset or item with custom attributes, location hierarchy, and complete history.",
      highlights: ["Custom Schemas", "Location Hierarchy", "Time-series Data", "Search & Query"]
    },
    {
      icon: Smartphone,
      title: "Custom Dashboards & UI",
      description: "Build interactive dashboards directly in RCOM Gateway. Create live maps, operational dashboards, or data entry forms – all powered by real-time data.",
      highlights: ["UI Designer", "Real-time Bindings", "Mobile Support", "Multi-language"]
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Device Triggers Event",
      description: "A pallet passes through an RFID gate at Warehouse A",
      icon: "📡"
    },
    {
      step: "2", 
      title: "Event Capture",
      description: "RFID data published via MQTT to RCOM Gateway as Gateway Event",
      icon: "⚡"
    },
    {
      step: "3",
      title: "Workflow Execution", 
      description: "RCOM matches event to workflow, updates digital twin, calls ERP API",
      icon: "🔄"
    },
    {
      step: "4",
      title: "Outcome & Response",
      description: "Dashboard updates, notifications sent, all in milliseconds",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-glow border-primary/30">
              Enterprise IoT Integration Platform
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The RCOM Gateway Platform – 
              <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent"> Event‑Driven Automation</span> for the Physical World
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              RCOM Gateway is a powerful software platform that connects your world of devices to your world of software. 
              It's an integration hub that captures every scan, read, or sensor signal and turns it into immediate, automated action. 
              With a modular, scalable architecture, RCOM Gateway lets you build digital twin models of your operations and 
              streamline processes without writing a line of code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Schedule Technical Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-background" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive features designed for enterprise-grade IoT integration and automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How RCOM Gateway Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From device event to business action in milliseconds – see how the platform transforms 
              physical data into automated workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-enterprise text-enterprise-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 transform -translate-y-1/2" 
                         style={{ width: 'calc(100% - 2rem)' }}></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-gradient-card border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">The Result</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Within milliseconds, the warehouse dashboard updates the pallet's location to 'in transit', 
                  an email notification is sent to the logistics team, and all irrelevant reads are filtered out. 
                  No manual steps or custom coding involved – everything configured entirely within the platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Scale */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Secure & Scalable by Design
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Deploy on a single server or across global sites with cloud or on-prem options. 
                Multi-tenant support serves multiple facilities or clients from one platform, 
                with role-based access control to protect data.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg">Enterprise-grade security with RBAC</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg">Scales horizontally across global deployments</span>
                </div>
                <div className="flex items-center">
                  <Database className="w-6 h-6 text-primary mr-4" />
                  <span className="text-lg">Multi-tenant architecture</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-enterprise text-enterprise-foreground">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-center">Performance Metrics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow mb-2">99.9%</div>
                      <div className="text-sm text-enterprise-foreground/70">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow mb-2">15M+</div>
                      <div className="text-sm text-enterprise-foreground/70">Events/Hour</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow mb-2">&lt;1ms</div>
                      <div className="text-sm text-enterprise-foreground/70">Processing Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow mb-2">1000+</div>
                      <div className="text-sm text-enterprise-foreground/70">Devices Supported</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Connect Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            See RCOM Gateway in action with a personalized demo tailored to your industry and use case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;