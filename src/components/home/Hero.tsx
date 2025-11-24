import { ChevronDown, Activity, Shield, Zap } from 'lucide-react';
import EdgeVisualization from './EdgeVisualization';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center overflow-hidden relative py-8 md:py-8 px-4 md:px-6">
     <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}/>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
              Unified Edge + Automation Platform
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            RCOM Gateway Suite:
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              From Edge Reads to Enterprise Actions
            </span>
          </h1>

    
        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 md:mb-10 leading-relaxed">
        <span className="text-purple-400 font-semibold">RCOM Agents</span> collect and clean data at the edge, while <span className="text-emerald-400 font-semibold">RCOM Gateway</span> runs low-code workflows in the core. Deploy, normalize, and buffer reads at the device layer, then drive enterprise workflows, digital twins, and alerts - without custom middleware.
        </p>

          <div className="flex flex-col sm:flex-row gap-4">
           <Link to="/contact">
           <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Book a Demo
            </button>
           </Link>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Watch 2-Minute Overview
            </button>
          </div>

          <div className="flex flex-wrap gap-8 pt-4">
            <div className="flex items-center gap-2 text-slate-400">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Millions of events/day</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Device-agnostic Auto-ID & IoT</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-sm">Built for high-throughput operations</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <EdgeVisualization />
        </div>
      </div>

     
    </section>
  );
}
