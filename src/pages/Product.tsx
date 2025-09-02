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
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/Product/Hero";
import RCOMGatewayWorkflow from "@/components/Product/Workflow";

const featureGraphics = [
  // You can replace these with SVGs, Lottie animations, or custom illustrations
  // For now, we use Lucide icons in a styled way as placeholders
  (
    <div className="flex items-center justify-center w-full h-full ">
      <Wifi className="w-24 h-24 text-white drop-shadow-lg animate-pulse" />
    </div>
  ),
  (
    <div className="flex items-center justify-center w-full h-full">
      <Workflow className="w-24 h-24 text-white drop-shadow-lg animate-pulse" />
    </div>
  ),
  (
    <div className="flex items-center justify-center w-full h-full">
      <Zap className="w-24 h-24 text-white drop-shadow-lg animate-pulse" />
    </div>
  ),
  (
    <div className="flex items-center justify-center w-full h-full">
      <Database className="w-24 h-24 text-white drop-shadow-lg animate-pulse" />
    </div>
  ),
  (
    <div className="flex items-center justify-center w-full h-full">
      <BarChart3 className="w-24 h-24 text-white drop-shadow-lg animate-pulse" />
    </div>
  ),
  (
    <div className="flex items-center justify-center w-full h-full">
      <Smartphone className="w-24 h-24 text-white drop-shadow-lg animate-pulse" />
    </div>
  ),
];

const Product = () => {
  const features = [
    {
      icon: Wifi,
      title: "Connect Any Device",
      color: "from-blue-500 to-cyan-500",
      description:
        "Out-of-the-box connectors for RFID, barcodes, BLE, sensors and more. Easily onboard new devices with standard protocols – no custom coding required.",
      highlights: [
        "RAIN RFID/UHF Support",
        "Barcode Scanners (1D/2D)",
        "BLE Beacon Gateways",
        "IoT Sensors",
      ],
    },
    {
      icon: Workflow,
      title: "Visual Workflows (Low-Code)",
      color: "from-purple-500 to-pink-500",
      description:
        "Design automation workflows with an intuitive drag-and-drop editor. Convert raw reads into meaningful actions in minutes.",
      highlights: [
        "50+ Prebuilt Actions",
        "Conditional Logic",
        "Error Handling",
        "Real-time Testing",
      ],
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      color: "from-emerald-500 to-teal-500",
      description:
        "Handle high volume of events with sub-second processing. RCOM's event engine filters, enriches, and responds to data streams in real time.",
      highlights: [
        "<1ms Processing",
        "Event Filtering",
        "Data Enrichment",
        "Instant Alerts",
      ],
    },
    {
      icon: Database,
      title: "Enterprise Integration",
      color: "from-indigo-500 to-purple-500",
      description:
        "Built-in integrations for MQTT, REST APIs, databases, and SAP systems. No data silos – direct integration with your ERP, WMS, or cloud analytics.",
      highlights: [
        "SAP Integration",
        "REST APIs",
        "MQTT Broker",
        "Database Connectors",
      ],
    },
    {
      icon: BarChart3,
      title: "Digital Twin & Data Storage",
      color: "from-green-500 to-teal-500",
      description:
        "Model your operation with digital objects. Track every asset or item with custom attributes, location hierarchy, and complete history.",
      highlights: [
        "Custom Schemas",
        "Location Hierarchy",
        "Time-series Data",
        "Search & Query",
      ],
    },
    {
      icon: Smartphone,
      title: "Custom Dashboards & UI",
      color: "from-indigo-500 to-purple-500",
      description:
        "Build interactive dashboards directly in RCOM Gateway. Create live maps, operational dashboards, or data entry forms – all powered by real-time data.",
      highlights: [
        "UI Designer",
        "Real-time Bindings",
        "Mobile Support",
        "Multi-language",
      ],
    },
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Device Triggers Event",
      description: "A pallet passes through an RFID gate at Warehouse A",
      icon: "📡",
    },
    {
      step: "2",
      title: "Event Capture",
      description: "RFID data published via MQTT to RCOM Gateway as Gateway Event",
      icon: "⚡",
    },
    {
      step: "3",
      title: "Workflow Execution",
      description: "RCOM matches event to workflow, updates digital twin, calls ERP API",
      icon: "🔄",
    },
    {
      step: "4",
      title: "Outcome & Response",
      description: "Dashboard updates, notifications sent, all in milliseconds",
      icon: "✅",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection/>

      {/* Redesigned Platform Capabilities */}
      <section className="py-24 bg-background" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive features designed for enterprise-grade IoT integration and automation
            </p>
          </div>
          <div className="space-y-20">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 md:gap-20 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Feature Info */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mr-4 ">
                        <feature.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-base">
                          <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Feature Graphic/Animation */}
                  <div className="w-full md:w-1/2 flex items-center justify-center">
                    <Card className="bg-gradient-card border-none shadow-xl w-full max-w-md">
                      <CardContent className={`flex items-center justify-center p-10 min-h-[220px] rounded-xl bg-gradient-to-r ${feature.color}`}>
                        {featureGraphics[index]}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
         
          <RCOMGatewayWorkflow/>

          
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
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow mb-2">
                        99.9%
                      </div>
                      <div className="text-sm text-enterprise-foreground/70">
                        Uptime SLA
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow mb-2">
                        15M+
                      </div>
                      <div className="text-sm text-enterprise-foreground/70">
                        Events/Hour
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow mb-2">
                        &lt;1ms
                      </div>
                      <div className="text-sm text-enterprise-foreground/70">
                        Processing Time
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow mb-2">
                        1000+
                      </div>
                      <div className="text-sm text-enterprise-foreground/70">
                        Devices Supported
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
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
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
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