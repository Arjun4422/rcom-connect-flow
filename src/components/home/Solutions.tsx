import React, { useState } from 'react';
import { Truck, Heart, Factory, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function IndustrySolutions() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(0);

  const industries = [
    {
      id: 0,
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Optimize every move – from dock door RFID reads to ERP updates. RCOM automates tracking of pallets, shipments, and inventory across the globe.",
      color: "from-blue-500 to-blue-600",
      accentColor: "blue",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      benefits: ["Real-time tracking", "Automated inventory", "Global visibility", "ERP integration"],
      stats: "99.9% tracking accuracy"
    },
    {
      id: 1,
      icon: Heart,
      title: "Healthcare",
      description: "Real-time asset and patient tracking for smarter, safer hospitals. Connect medical devices and ID tags to your EMR and alert systems instantly.",
      color: "from-emerald-500 to-green-600",
      accentColor: "emerald",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      benefits: ["Patient safety", "Asset tracking", "EMR integration", "Instant alerts"],
      stats: "50% reduction in lost equipment"
    },
    {
      id: 2,
      icon: Factory,
      title: "Manufacturing",
      description: "Drive Industry 4.0 on your shop floor. Monitor production flow with sensors and RFID, and trigger automated actions without manual intervention.",
      color: "from-orange-500 to-amber-600",
      accentColor: "orange",
      bgGradient: "from-orange-500/10 to-yellow-500/10",
      benefits: ["Production monitoring", "Quality control", "Predictive maintenance", "Zero downtime"],
      stats: "30% efficiency increase"
    },
    {
      id: 3,
      icon: Building2,
      title: "Smart Infrastructure",
      description: "Unify building or city-wide sensor networks. Whether it's smart building management or intelligent transport systems, RCOM orchestrates devices and data.",
      color: "from-purple-500 to-violet-600",
      accentColor: "purple",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      benefits: ["Smart automation", "Energy optimization", "Predictive analytics", "Centralized control"],
      stats: "40% energy savings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions for your industry's <span className="font-semibold text-blue-600">unique challenges</span> and requirements
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isHovered = hoveredCard === industry.id;
            const isActive = activeCard === industry.id;
            
            return (
              <div
                key={industry.id}
                className={`group relative bg-white rounded-3xl p-8 border transition-all duration-500 cursor-pointer ${
                  isActive ? 'border-blue-200 shadow-2xl scale-105' : 'border-slate-100 hover:border-slate-200'
                } ${isHovered ? 'shadow-xl -translate-y-1' : 'hover:shadow-lg'}`}
                onMouseEnter={() => setHoveredCard(industry.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(industry.id)}
              >
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} rounded-3xl opacity-0 transition-opacity duration-500 ${
                  isHovered || isActive ? 'opacity-100' : ''
                }`}></div>
                
                {/* Content Container */}
                <div className="relative z-10">
                  
                  {/* Header Section */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isHovered || isActive ? 'scale-110' : ''
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {industry.title}
                      </h3>
                      <div className={`text-sm font-medium px-3 py-1 rounded-full bg-${industry.accentColor}-100 text-${industry.accentColor}-700 inline-block`}>
                        {industry.stats}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    {industry.description}
                  </p>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {industry.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 text-${industry.accentColor}-500 flex-shrink-0`} />
                        <span className="text-sm text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button className={`group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${industry.color} text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Animated Border */}
                {(isHovered || isActive) && (
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${industry.color} opacity-20 animate-pulse`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">500+</div>
              <div className="text-slate-300">Companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-400">99.9%</div>
              <div className="text-slate-300">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-400">50M+</div>
              <div className="text-slate-300">Devices Connected</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-400">24/7</div>
              <div className="text-slate-300">Support</div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}