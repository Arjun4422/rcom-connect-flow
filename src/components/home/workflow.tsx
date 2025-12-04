import React, { useState, useEffect } from 'react';
import { ArrowRight, Scan, Database, Eye, Settings, Bot } from 'lucide-react';

const RCOMGatewayWorkflow = () => {
  const [animatedStep, setAnimatedStep] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Device Event",
      subtitle: "Scan, read, or sensor signal",
      icon: Scan,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "2",
      title: "RCOM Agent",
      subtitle: "Capture, filter, and buffer data at the source",
      icon: Bot,
      color: "from-blue-300 to-blue-600"
    },
    {
      number: "3", 
      title: "RCOM Gateway",
      subtitle: "Runs low-code business logic",
      icon: Database,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "4",
      title: "Workflow", 
      subtitle: "Visual automation rules",
      icon: Eye,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      number: "5",
      title: "Your System",
      subtitle: "Updates ERP, alerts, actions", 
      icon: Settings,
      color: "from-orange-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            How RCOM Gateway Suite Works
          </h1>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          A device scan or sensor reading is captured by RCOM Agents, cleaned at the edge, then sent to RCOM Gateway, which runs visual workflows and updates your systems in milliseconds. <span className="font-semibold text-blue-600">No custom middleware required. </span>
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          
          {/* Connection Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-emerald-200 to-orange-200 hidden lg:block">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 to-orange-500 w-0 animate-pulse"></div>
          </div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isAnimated = animatedStep === index;
              
              return (
                <div key={step.number} className="relative flex flex-col items-center">
                  
                  {/* Step Circle */}
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-4 transition-all duration-500 ${
                    isAnimated ? 'scale-110 shadow-xl' : 'hover:scale-105'
                  }`}>
                    
                    {/* Pulse Effect */}
                    {isAnimated && (
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} animate-ping opacity-30`}></div>
                    )}
                    
                    {/* Icon */}
                    <Icon className="w-6 h-6 text-white relative z-10" />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-xs font-bold text-slate-700">{step.number}</span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center max-w-44">
                    <h3 className={`text-lg font-bold text-slate-800 mb-1 transition-all duration-300 ${
                      isAnimated ? 'scale-105' : ''
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Arrow (Desktop Only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-2 -right-6 z-10">
                      <div className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                        isAnimated ? 'scale-110 bg-blue-50' : ''
                      }`}>
                        <ArrowRight className={`w-4 h-4 text-slate-600 transition-all duration-300 ${
                          isAnimated ? 'text-blue-600 translate-x-0.5' : ''
                        }`} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/solutions-gateway"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>Explore Gateway Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/solutions-agents"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-teal-700 hover:from-cyan-700 hover:to-teal-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>Explore Agent Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RCOMGatewayWorkflow;