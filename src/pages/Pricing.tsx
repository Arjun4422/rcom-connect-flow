import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap, Shield, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      description: "Perfect for pilot projects and single-facility deployments",
      price: "Contact for pricing",
      popular: false,
      features: [
        "Up to 50 connected devices",
        "Core workflow engine",
        "Standard integrations (MQTT, REST)",
        "Basic dashboards",
        "Email support",
        "Community documentation",
        "Single site deployment"
      ],
      limitations: [
        "Limited custom UI components",
        "Standard support response"
      ]
    },
    {
      name: "Professional", 
      description: "Ideal for growing operations and multi-site deployments",
      price: "Contact for pricing",
      popular: true,
      features: [
        "Up to 500 connected devices",
        "Advanced workflow engine",
        "All integrations (SAP, databases)",
        "Custom UI designer",
        "Multi-site management",
        "Phone & email support",
        "Advanced analytics",
        "Role-based access control"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      description: "For large-scale and mission-critical deployments",
      price: "Contact for pricing", 
      popular: false,
      features: [
        "Unlimited devices",
        "All platform features",
        "Premium integrations",
        "Multi-tenant architecture",
        "Custom development support",
        "Dedicated account manager",
        "24/7 priority support",
        "On-premise deployment",
        "Custom SLAs",
        "Advanced security features"
      ],
      limitations: []
    }
  ];

  const addOns = [
    {
      name: "Mobile SDK",
      description: "Native mobile app development kit for Android and iOS",
      price: "Additional module"
    },
    {
      name: "Track & Trace Module", 
      description: "Advanced facility mapping and visual object tracking",
      price: "Additional module"
    },
    {
      name: "Professional Services",
      description: "Deployment, custom development, and training services",
      price: "Quote on request"
    }
  ];

  const faqs = [
    {
      question: "Is hardware included in the pricing?",
      answer: "No, RCOM Gateway is a software platform. We work with leading hardware partners and can recommend compatible devices for your deployment."
    },
    {
      question: "Can I deploy on-premises vs cloud?",
      answer: "Yes, RCOM Gateway supports both cloud and on-premises deployment. Enterprise plans include flexible deployment options."
    },
    {
      question: "How does licensing work for multiple sites?",
      answer: "Our Professional and Enterprise plans support multi-site deployments. Pricing scales based on total devices across all sites."
    },
    {
      question: "Do you offer educational or nonprofit discounts?",
      answer: "Yes, we offer special pricing for educational institutions and qualified nonprofit organizations. Contact us for details."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-glow border-primary/30">
              Pricing Plans
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing for 
              <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent"> Every Scale</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Choose the plan that fits your deployment size and requirements. 
              All plans include core platform features with flexible scaling options.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative bg-gradient-card border-border/50 hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary shadow-2xl scale-105' : ''
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold">{plan.price}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button 
                      variant={plan.popular ? "hero" : "outline"} 
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Modules */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-On Modules & Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Extend your RCOM Gateway deployment with specialized modules and professional services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{addon.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {addon.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-primary">{addon.price}</span>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Proven ROI & Value
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                RCOM Gateway delivers measurable value by reducing development costs, 
                improving operational efficiency, and enabling faster deployments.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Save Development Costs</h3>
                    <p className="text-muted-foreground text-sm">
                      Replace months of custom development with hours of configuration. 
                      Many clients see ROI in under 12 months.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Scale as You Grow</h3>
                    <p className="text-muted-foreground text-sm">
                      Flexible licensing means you only pay for what you need, 
                      when you need it. No large upfront investments.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Reduce Operational Costs</h3>
                    <p className="text-muted-foreground text-sm">
                      Automate manual processes and eliminate data entry errors. 
                      Typical efficiency gains of 30-50%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-primary text-primary-foreground">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Customer Success</h3>
                  <blockquote className="text-lg italic mb-6 text-center">
                    "Worth every penny – we integrated our entire warehouse network 
                    for less than the cost of one custom project."
                  </blockquote>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-2">30%</div>
                      <div className="text-sm opacity-90">Efficiency Gain</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">12mo</div>
                      <div className="text-sm opacity-90">ROI Timeline</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about our pricing and licensing model
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to get a tailored quote or discuss which plan fits your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Call
              </Button>
            </div>
            
            <p className="text-gray-400 text-sm">
              30-day free trial available • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;