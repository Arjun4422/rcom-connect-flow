import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Zap, Shield, Users, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const faqs = [
    {
      question: "Is hardware included in the pricing?",
      answer: "No, RCOM Gateway is a software platform. We work with leading hardware partners and can recommend compatible devices for your deployment."
    },
    {
      question: "How does the volume licensing work?",
      answer: "Each tier includes initial limits that can be expanded up to maximum limits. Contact us for volume pricing when you need to scale beyond the included limits."
    },
    {
      question: "What's the difference between agents and mobile clients?",
      answer: "Agents are software components that run on devices to collect data, while mobile clients are mobile applications for users to interact with the system."
    },
    {
      question: "What happens if I exceed my monthly event limit?",
      answer: "Contact us to upgrade your plan or add additional event capacity. We'll work with you to find the most cost-effective solution."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}/>
        </div>
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary-glow border-primary/30">
              Pricing Plans
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing for 
              <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent"> Every Scale</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              RCOM Gateway is offered as a subscription-based license (annual) with tiers to fit different scales of deployment. 
              Choose a plan based on the number of devices, volume of events, and enterprise features you need.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Plans for Every Operation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare features across all pricing tiers to find the perfect fit for your needs
            </p>
          </div>

          <div className="overflow-x-auto mt-8">
            <table className="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg border border-border/50">
              {/* Quote Buttons Row */}
              <thead>
                <tr>
                  <th className="p-4"></th>
                  <th className="p-4 pt-12 relative">
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="w-full">
                        Get Quote
                      </Button>
                    </Link>
            
                  </th>
                                    <th className="p-4 pt-12 relative">
                    <Badge className="absolute -top-0 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs z-10">
                      <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                    <Link to="/contact">
                      <Button variant="hero" size="sm" className="w-full">
                        Get Quote
                      </Button>
                    </Link>
                    
                  </th>
                  <th className="p-4 pt-12 relative">
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="w-full">
                        Get Quote
                      </Button>
                    </Link>
                    
                  </th>
                  <th className="p-4 pt-12 relative">
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="w-full">
                        Get Quote
                      </Button>
                    </Link>
                    
                  </th>
                </tr>
              </thead>
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold">Features</th>
                  <th className="text-center p-4 font-semibold">Lite</th>
                                    <th className="text-center p-4 font-semibold">Basic</th>
                  <th className="text-center p-4 font-semibold">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {/* Pricing */}
               

                {/* Volume Licenses */}
                <tr className="border-t border-border/50 bg-primary/5">
                  <td className="p-4 font-bold text-primary">Volume Licenses for System</td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Max Users</td>
                  <td className="text-center p-4">Up to 10</td>
                  <td className="text-center p-4">Up to 100</td>
                  <td className="text-center p-4">Up to 1,000</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Max Agents</td>
                  <td className="text-center p-4">Up to 10</td>
                  <td className="text-center p-4">Up to 100</td>
                  <td className="text-center p-4">Up to 1,000</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Max Mobile Clients</td>
                  <td className="text-center p-4">Up to 10</td>
                  <td className="text-center p-4">Up to 100</td>
                  <td className="text-center p-4">Up to 1,000</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Max Objects</td>
                  <td className="text-center p-4">Up to 100k</td>
                  <td className="text-center p-4">Up to 1M</td>
                  <td className="text-center p-4">Up to 10M</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Max Monthly Events</td>
                  <td className="text-center p-4">Up to 10k</td>
                  <td className="text-center p-4">Up to 100k</td>
                  <td className="text-center p-4">Up to 1M</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>

                {/* User Management & Access */}
                <tr className="border-t border-border/50 bg-primary/5">
                  <td className="p-4 font-bold text-primary">User Management & Access</td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">User Management</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Customizable Roles & Permissions</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Groups</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Auth systems (OpenID, LDAP)</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">API Tokens</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Multi-tenancy</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>

                {/* Events & Automation */}
                <tr className="border-t border-border/50 bg-primary/5">
                  <td className="p-4 font-bold text-primary">Events & Automation</td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Event Repository</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Workflow Designer</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Endpoint Manager</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">MQTT Subscription/Publisher</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Workflow Debug Tool</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Custom Actions Repository</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Workflow Automation Tester</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Custom Event Type Repository</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>

                {/* Data Storage */}
                <tr className="border-t border-border/50 bg-primary/5">
                  <td className="p-4 font-bold text-primary">Data Storage</td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Custom Object Definitions</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Automated Object History</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Customizable Data Views</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Events on Create/Update/Delete</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>

                {/* Storage Locations & RTLS */}
                <tr className="border-t border-border/50 bg-primary/5">
                  <td className="p-4 font-bold text-primary">Storage Locations & RTLS</td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Bin Management</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Geolocations for Objects</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Custom RTLS Maps</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Geofencing</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Google Maps API Integration</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>

                {/* Reporting */}
                <tr className="border-t border-border/50 bg-primary/5">
                  <td className="p-4 font-bold text-primary">Reporting</td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Custom Dashboards</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Notifications & Alerts</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Advanced Report Designer</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>

                {/* Test / Dev Environment */}
                <tr className="border-t border-border/50 bg-primary/5">
                  <td className="p-4 font-bold text-primary">Test / Dev Environment</td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Export / Import Tool for Customizing</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Package Management for Customizing</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Additional Test System License</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Additional Dev System License</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>

                {/* Usability Enhancements */}
                <tr className="border-t border-border/50 bg-primary/5">
                  <td className="p-4 font-bold text-primary">Usability Enhancements</td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                  <td className="text-center p-4"></td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Device Management for Agents</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Device Management for Mobile Clients</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Custom UIs</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50 bg-muted/20">
                  <td className="p-4 font-medium pl-8">Custom Agent Component Repository</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
                <tr className="border-t border-border/50">
                  <td className="p-4 font-medium pl-8">Mobile App Designer SDK</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-rose-500">✗</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                  <td className="text-center p-4 text-green-500">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                  <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
           
          </div>
        </div>
      </section>

      {/* Add-on Modules */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-On Modules & Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Extend your RCOM Gateway deployment with specialized modules and professional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
      </section> */}

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

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-card border border-border/50 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left flex items-center justify-between p-6"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <ChevronDown 
                    size={22} 
                    className={`flex-shrink-0 transition-transform text-muted-foreground ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to get started? Contact us for a tailored quote or to discuss which plan fits your deployment needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
             
            </div>
            
            <p className="text-gray-400 text-sm">
              Volume pricing available • Flexible deployment options • Enterprise support included
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;