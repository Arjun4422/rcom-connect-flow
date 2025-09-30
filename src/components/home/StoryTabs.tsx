import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Radio, Wifi, Camera, Database, Zap, Package, Heart, ShoppingCart, Factory, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RCOMStory(){
      const [currentSlide, setCurrentSlide] = useState(1);
      const [isTransitioning, setIsTransitioning] = useState(true);
      const [resetTimer, setResetTimer] = useState(0);
      const timeoutRef = useRef(null);
    
      const totalSlides = 5;
    
      const devices = [
        { icon: Radio, label: 'RFID' },
        { icon: Camera, label: 'Camera' },
        { icon: Wifi, label: 'BLE' },
        { icon: Database, label: 'Scanner' }
      ];
    
      const industries = [
        { icon: Package, title: 'Warehouse', desc: 'Pallet tracking' },
        { icon: Heart, title: 'Hospital', desc: 'Patient monitoring' },
        { icon: ShoppingCart, title: 'Retail', desc: 'Inventory' },
        { icon: Factory, title: 'Manufacturing', desc: 'Production line' }
      ];
    
      const steps = [
        { title: 'Device Event', desc: 'RFID/BLE signal', icon: Radio },
        { title: 'Ingestion', desc: 'MQTT/REST', icon: Database },
        { title: 'Workflow', desc: 'Business rules', icon: Cpu },
        { title: 'Action', desc: 'Update systems', icon: Zap }
      ];
    
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 5000);
        return () => clearInterval(interval);
      }, [resetTimer]);
    
      const handleTransitionEnd = () => {
        if (currentSlide === 0) {
          setIsTransitioning(false);
          setTimeout(() => {
            setCurrentSlide(totalSlides);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 0);
        } else if (currentSlide === totalSlides + 1) {
          setIsTransitioning(false);
          setTimeout(() => {
            setCurrentSlide(1);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 0);
        }
      };
    
      const nextSlide = () => {
        if (isTransitioning) {
          setCurrentSlide((prev) => prev + 1);
        }
      };
    
      const prevSlide = () => {
        if (isTransitioning) {
          setCurrentSlide((prev) => prev - 1);
        }
      };
    
      const goToSlide = (index) => {
        setCurrentSlide(index + 1);
        setResetTimer(prev => prev + 1);
      };
    
      const renderSlide = (slideIndex) => {
        const actualIndex = slideIndex === 0 ? 4 : slideIndex === 6 ? 1 : slideIndex;
        
        switch (actualIndex) {
          case 1:
            return (
              <div className="min-w-full p-8 flex-shrink-0" key={`slide-${slideIndex}`}>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  The Challenge
                </h2>
                <p className="text-lg text-slate-300 mb-6">
                  Your devices are talking, but the data is <span className="text-red-400 font-semibold">stuck in silos</span>
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {devices.map((Device, idx) => (
                    <div key={idx} className="bg-slate-800/50 border border-cyan-400/30 rounded-lg p-4 text-center">
                      <Device.icon className="w-8 h-8 text-cyan-400 mx-auto" />
                      <div className="text-sm text-cyan-400 mt-2">{Device.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          case 2:
            return (
              <div className="min-w-full p-8 flex-shrink-0" key={`slide-${slideIndex}`}>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  The Gap
                </h2>
                <p className="text-lg text-slate-300 mb-6">
                  Most data <span className="text-red-400 font-semibold">never reaches</span> ERP, WMS, or dashboards in real-time
                </p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {['Logs', 'Sheets', 'Apps'].map((item, idx) => (
                    <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <Database className="w-8 h-8 text-red-400 mb-2" />
                      <h3 className="text-base font-semibold text-white mb-2">{item}</h3>
                      <div className="h-2 bg-slate-700 rounded mb-1" />
                      <div className="h-2 bg-slate-700 rounded w-3/5" />
                    </div>
                  ))}
                </div>
              </div>
            );
          case 3:
            return (
              <div className="min-w-full p-8 flex-shrink-0" key={`slide-${slideIndex}`}>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Enter RCOM Gateway
                </h2>
                <p className="text-lg text-slate-300 mb-6">
                  Connects devices to business systems <span className="text-cyan-400 font-semibold">seamlessly</span>
                </p>
                <div className="flex items-center justify-between gap-4 mt-8">
                  <div className="flex-1 text-right">
                    {devices.slice(0, 2).map((Device, idx) => (
                      <div key={idx} className="flex items-center justify-end gap-2 mb-3">
                        <span className="text-sm text-slate-400">{Device.label}</span>
                        <div className="bg-slate-800 border border-cyan-400/50 rounded-lg p-2">
                          <Device.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="relative p-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full">
                    <Cpu className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    {['ERP', 'WMS'].map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2 mb-3">
                        <div className="bg-slate-800 border border-blue-400/50 rounded-lg px-4 py-2">
                          <span className="text-blue-400 font-semibold text-sm">{app}</span>
                        </div>
                        <span className="text-sm text-slate-400">Real-time</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          case 4:
            return (
              <div className="min-w-full p-8 flex-shrink-0" key={`slide-${slideIndex}`}>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  How It Works
                </h2>
                <p className="text-sm text-slate-400 mb-6">4-step workflow process</p>
                <div className="grid grid-cols-4 gap-3 mt-6">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={idx} className="bg-slate-800/50 border border-purple-400 rounded-lg p-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-gradient-to-br from-purple-500 to-pink-500">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs text-purple-400 font-semibold mb-1">Step {idx + 1}</div>
                        <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                        <p className="text-xs text-slate-400">{step.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          case 5:
            return (
              <div className="min-w-full p-8 flex-shrink-0" key={`slide-${slideIndex}`}>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  The Impact
                </h2>
                <p className="text-lg text-slate-300 mb-6">
                  <span className="text-green-400 font-semibold">One platform.</span> Any industry.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {industries.map((industry, idx) => {
                    const Icon = industry.icon;
                    return (
                      <div key={idx} className="bg-slate-800/50 border border-green-500 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-1">{industry.title}</h3>
                            <p className="text-sm text-slate-400">{industry.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          default:
            return null;
        }
      };
    
      const getActualSlideIndex = () => {
        if (currentSlide === 0) return 4;
        if (currentSlide === totalSlides + 1) return 0;
        return currentSlide - 1;
      };
    
      return (
        <div className="w-full max-w-4xl mx-auto py-8 px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {renderSlide(0)}
              {renderSlide(1)}
              {renderSlide(2)}
              {renderSlide(3)}
              {renderSlide(4)}
              {renderSlide(5)}
              {renderSlide(6)}
            </div>
    
            {/* Navigation Buttons */}
            <button
              onClick={() => {
                prevSlide();
                setResetTimer(prev => prev + 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 border border-slate-700 cursor-pointer hover:bg-slate-700"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={() => {
                nextSlide();
                setResetTimer(prev => prev + 1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 border border-slate-700 cursor-pointer hover:bg-slate-700"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
    
            {/* Pagination Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {[...Array(totalSlides)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded transition-all ${
                    getActualSlideIndex() === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      );
    };
    
