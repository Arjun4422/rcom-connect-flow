import React, { useState } from 'react';
import { Eye, Settings, Database, Zap, ChevronRight, CheckCircle } from 'lucide-react';

const WhyChooseRCOM = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: Eye,
      title: "Real-Time Visibility",
      description: "Live dashboards and alerts for instant insight into operations.",
      benefits: ["Instant notifications", "Real-time analytics", "Operational transparency"],
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      id: 2,
      icon: Settings,
      title: "Flexible Automation",
      description: "Low-code workflows adapt to your processes—from warehouse and hospital to factory and campus.",
      benefits: ["Drag & drop interface", "Custom workflows", "No coding required"],
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      id: 3,
      icon: Database,
      title: "Unified Data Integration",
      description: "Bring RFID, barcode, BLE, vision, and sensor data into your enterprise systems seamlessly.",
      benefits: ["Multi-format support", "Enterprise integration", "Seamless connectivity"],
      color: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      id: 4,
      icon: Zap,
      title: "Scalable & Secure",
      description: "An enterprise-grade platform that grows from a single site to global operations with strong security controls.",
      benefits: ["Enterprise security", "Global scalability", "Future-ready platform"],
      color: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <div className="pb-5 bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> RCOM Gateway Suite</span>?
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Transform your Auto-ID and IoT data into automated business processes with a unified 
            <span className="font-semibold text-blue-600"> edge-to-cloud platform.</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === feature.id;
            
            return (
              <div
                key={feature.id}
                className={`group relative bg-white rounded-3xl p-8 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                  isHovered ? 'shadow-2xl -translate-y-2' : 'hover:shadow-xl'
                }`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl opacity-0 transition-opacity duration-500 ${
                  isHovered ? 'opacity-30' : 'group-hover:opacity-20'
                }`}></div>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isHovered ? 'scale-110 shadow-xl' : 'group-hover:scale-105'
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold text-slate-800 mb-4 transition-all duration-300 ${
                    isHovered ? 'text-2xl' : ''
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className={`space-y-2 transition-all duration-500 ${
                    isHovered ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className={`absolute bottom-6 right-6 transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       

      </div>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseRCOM;