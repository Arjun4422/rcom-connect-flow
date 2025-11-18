import React, { useState, useEffect, useRef, FC } from 'react';
import { Zap, Filter, Database, Cpu, Share2, Workflow, ArrowRight } from 'lucide-react';

interface Pulse {
  id: number;
  x: number;
  filtered?: boolean;
  gateway?: boolean;
  erp?: boolean;
}

interface System {
  name: string;
  icon: typeof Database;
  color: string;
}

const HeroSection: FC = () => {
  const [pulses, setPulses] = useState<Pulse[]>([]);
  const [filteredPulses, setFilteredPulses] = useState<Pulse[]>([]);
  const [gatewayPulses, setGatewayPulses] = useState<Pulse[]>([]);
  const [erpPulses, setErpPulses] = useState<Pulse[]>([]);
  const [pipelineScale, setPipelineScale] = useState(1);
  const pipelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulses(prev => [...prev, { id: Date.now(), x: Math.random() * 100 }]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const filterTimer = setInterval(() => {
      setPulses(prev => {
        if (prev.length > 0) {
          const pulse = prev[0];
          setFilteredPulses(p => [...p, { ...pulse, filtered: true }]);
          return prev.slice(1);
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(filterTimer);
  }, []);

  useEffect(() => {
    const gatewayTimer = setInterval(() => {
      setFilteredPulses(prev => {
        if (prev.length > 0) {
          const pulse = prev[0];
          setGatewayPulses(p => [...p, { ...pulse, gateway: true }]);
          return prev.slice(1);
        }
        return prev;
      });
    }, 1200);

    return () => clearInterval(gatewayTimer);
  }, []);

  useEffect(() => {
    const erpTimer = setInterval(() => {
      setGatewayPulses(prev => {
        if (prev.length > 0) {
          const pulse = prev[0];
          setErpPulses(p => [...p.slice(-2), { ...pulse, erp: true }]);
          return prev.slice(1);
        }
        return prev;
      });
    }, 1400);

    return () => clearInterval(erpTimer);
  }, []);

  useEffect(() => {
    const BASE_WIDTH = 1100;
    const MIN_SCALE = 0.25;

    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const availableWidth = viewportWidth - 48; // account for page padding/margins
      const scale = Math.min(1, Math.max(MIN_SCALE, availableWidth / BASE_WIDTH));
      setPipelineScale(scale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center overflow-hidden relative py-8 md:py-10 px-4 md:px-6">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}/>
      </div>

      {/* Title Section - Above Animation */}
      <div className="relative z-10 max-w-7xl w-full mb-2 md:mb-5 text-center">
    
        
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold mb-2">
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
        RCOM Gateway Suite
          </span>
        </h1>
        <p className='text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-slate-300 mb-8 pb-5 leading-relaxed max-w-5xl mx-auto bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent'>
            Connect everything. Automate anything
      </p>
      </div>
      

      {/* Pipeline Visualization - Responsive Scaling */}
      <div className="relative z-10 w-full max-w-7xl md:w-7xl flex justify-center overflow-hidden mb-4">
        <div
          ref={pipelineRef}
          className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 px-2 sm:px-4"
          style={{
            transform: `scale(${pipelineScale})`,
            transformOrigin: 'center',
          }}
        >
          {/* Auto-ID Devices */}
          <div className="relative flex-shrink-0">
            <div className="bg-slate-900/80 backdrop-blur-sm border-2 border-cyan-500/30 rounded-xl md:rounded-2xl p-4 lg:p-6 w-44 shadow-2xl">
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <Zap className="w-10 h-10 text-cyan-400 animate-pulse" />
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full animate-pulse" />
                </div>
                <div className="text-center">
                  <div className="text-cyan-300 font-bold text-base">Auto-ID</div>
                  <div className="text-cyan-500/60 text-xs">Devices</div>
                </div>
                <div className="flex gap-2 flex-wrap justify-center mt-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-7 h-7 bg-cyan-500/20 rounded border border-cyan-500/40 flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Emitting pulses */}
            <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
              {pulses.slice(-3).map((pulse, i) => (
                <div
                  key={pulse.id}
                  className="absolute w-3 h-3 rounded-full bg-cyan-400"
                  style={{
                    left: `${i * 30}px`,
                    top: `${pulse.x % 40 - 20}px`,
                    boxShadow: '0 0 15px #06b6d4',
                    animation: 'movePulse 2s ease-in-out forwards'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Connection line to Agent */}
          <div className="relative md:w-12 xl:w-32 w-12 h-1 bg-gradient-to-r from-cyan-500/40 to-purple-500/40 rounded-full overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" 
                 style={{ animation: 'shimmer 2s ease-in-out infinite' }} />
          </div>

          {/* RCOM Agent */}
          <div className="relative flex-shrink-0">
            <div className="bg-slate-900/90 backdrop-blur-sm border-2 border-purple-500/50 rounded-xl md:rounded-2xl p-4 lg:p-6 w-52 shadow-2xl">
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <Filter className="w-10 h-10 text-purple-400" />
                  <div className="absolute inset-0 bg-purple-400/20 blur-xl rounded-full animate-pulse" />
                </div>
                <div className="text-center">
                  <div className="text-purple-300 font-bold text-base">RCOM Agent</div>
                  <div className="text-purple-500/60 text-xs">Filter • Validate</div>
                </div>
                <div className="flex gap-2 mt-2 flex-wrap justify-center">
                  <div className="px-2 py-1 bg-purple-500/20 rounded-full border border-purple-500/40 text-purple-300 text-xs">Filter</div>
                  <div className="px-2 py-1 bg-purple-500/20 rounded-full border border-purple-500/40 text-purple-300 text-xs">Clean</div>
                </div>
                {/* Processing animation */}
                <div className="w-full h-10 bg-slate-800/50 rounded-lg overflow-hidden relative">
                  {filteredPulses.slice(-2).map((pulse, i) => (
                    <div
                      key={pulse.id}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400"
                      style={{
                        boxShadow: '0 0 10px #a855f7',
                        animation: 'process 1s ease-in-out forwards',
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Connection line to Gateway */}
          <div className="relative md:w-12 xl:w-32 w-12 h-1 bg-gradient-to-r from-purple-500/40 to-emerald-500/40 rounded-full overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent" 
                 style={{ animation: 'shimmer 2s ease-in-out infinite 0.5s' }} />
          </div>

          {/* RCOM Gateway */}
          <div className="relative flex-shrink-0">
            <div className="bg-slate-900/90 backdrop-blur-sm border-2 border-emerald-500/50 rounded-xl md:rounded-2xl p-4 lg:p-6 w-52 shadow-2xl">
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <Workflow className="w-10 h-10 text-emerald-400" />
                  <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full animate-pulse" />
                </div>
                <div className="text-center">
                  <div className="text-emerald-300 font-bold text-base">RCOM Gateway</div>
                  <div className="text-emerald-500/60 text-xs">Workflow • Digital Twins</div>
                </div>
                <div className="flex gap-2 flex-wrap justify-center mt-2">
                  <div className="p-2 bg-emerald-500/20 rounded border border-emerald-500/40">
                    <Cpu className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div className="p-2 bg-emerald-500/20 rounded border border-emerald-500/40">
                    <Database className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div className="p-2 bg-emerald-500/20 rounded border border-emerald-500/40">
                    <Share2 className="w-4 h-4 text-emerald-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection lines to ERP systems */}
          <div className="relative flex-col gap-6 flex flex-shrink-0">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative md:w-12 xl:w-24 w-12 h-1 bg-gradient-to-r from-emerald-500/40 to-blue-500/40 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" 
                     style={{ animation: 'shimmer 2s ease-in-out infinite', animationDelay: `${i * 0.3}s` }} />
              </div>
            ))}
          </div>

          {/* ERP/WMS/EMR Systems */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            {([
              { name: 'ERP', icon: Database, color: 'blue' },
              { name: 'WMS', icon: Share2, color: 'blue' },
              { name: 'EMR', icon: Cpu, color: 'blue' }
            ] as System[]).map((system) => (
              <div key={system.name} className="relative">
                <div className={`bg-slate-900/80 backdrop-blur-sm border-2 border-${system.color}-500/50 rounded-lg md:rounded-xl p-3 w-36 shadow-xl`}>
                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <system.icon className={`w-7 h-7 text-${system.color}-400`} />
                      <div className={`absolute inset-0 bg-${system.color}-400/20 blur-lg rounded-full`} />
                    </div>
                    <div className="min-w-0">
                      <div className={`text-${system.color}-300 font-bold text-sm`}>{system.name}</div>
                      <div className="flex gap-1 mt-1">
                        {erpPulses.map((pulse, pi) => (
                          <div 
                            key={`${pulse.id}-${pi}`}
                            className={`w-1.5 h-1.5 rounded-full bg-${system.color}-400`}
                            style={{ 
                              boxShadow: `0 0 8px ${system.color === 'blue' ? '#3b82f6' : system.color === 'indigo' ? '#6366f1' : '#8b5cf6'}`,
                              animation: 'pulse 1s ease-in-out infinite',
                              animationDelay: `${pi * 0.2}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description and Buttons - Below Animation */}
      <div className="relative z-10 max-w-5xl w-full text-center px-4">
        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-10 leading-relaxed">
          The RCOM Gateway Suite pairs <span className="text-purple-400 font-semibold">RCOM Agents</span> for edge data collection with <span className="text-emerald-400 font-semibold">RCOM Gateway</span> for logic control. Deploy, normalize, and buffer reads at the device layer, then drive enterprise workflows, twins, and alerts without writing custom middleware.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/contact">
          <button  className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white text-sm md:text-base shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center">
            Request a Demo
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </button>
          </a>
          
          <a href="/product">
          <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-slate-800/50 border-2 border-slate-700 rounded-lg font-semibold text-slate-200 text-sm md:text-base hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-sm w-full sm:w-auto justify-center">
            Learn More
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          </a>
        </div>
      </div>

      <style >{`
        @keyframes movePulse {
          from { transform: translateX(0) scale(1); opacity: 1; }
          to { transform: translateX(100px) scale(0.5); opacity: 0; }
        }
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
        }
        @keyframes process {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          50% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;