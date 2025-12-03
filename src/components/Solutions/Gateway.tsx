import { useEffect, useState } from 'react';
import RCOMWorkflow from "./RCOMWorkflow"

import { 
  Network, 
  Cpu, 
  Zap, 
  ArrowRight,
  Filter,
  Shield,
  Settings,
  Database,
  Workflow,
  CheckCircle,
  Globe,
  Server,
  Lock,
  Building2,
  Activity,
  FileCheck,
  RefreshCw,
  Search,
  Eye,
  FileText,
  MessageSquare,
  ChevronDown,
  TrendingUp,
  Code2,
  Layers,
  Box,
  Share2,
  BarChart3,
  Smartphone
} from 'lucide-react';

const PlatformGateway = () => {
  const [flowPosition, setFlowPosition] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Animation for the Data Flow diagram
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowPosition(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: 'Low-Code Automation',
      desc: 'Build automated processes using visual workflows - no scripts or custom middleware required.',
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Digital Twins',
      desc: 'Model assets, rooms, pallets, and tools with full history, relationships, and storage hierarchy.',
      icon: Box,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'High-Volume Engine',
      desc: 'Handle millions of events per hour with <1ms processing and parallel execution.',
      icon: Zap,
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Unified Integrations',
      desc: 'Sync clean, validated events to ERP, WMS, EMR, MES, or your cloud analytics pipeline.',
      icon: Share2,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Operational Intelligence',
      desc: 'Live dashboards, custom UIs, and maps show what’s happening right now.',
      icon: Activity,
      color: 'from-indigo-500 to-violet-500'
    },
    {
      title: 'Enterprise Security',
      desc: 'Multi-tenant, RBAC, TLS, encrypted pipelines, and audited interactions.',
      icon: Shield,
      color: 'from-red-500 to-rose-500'
    }
  ];

  const deployments = [
    {
      title: 'Logistics & Supply Chain',
      desc: 'Update inventory, shipment status, and dock activities in real-time.',
      icon: TruckIcon, // Using generic placeholder, referencing logic below
      metric: '99.7% inventory accuracy',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Healthcare',
      desc: 'Track equipment, patients, and workflows with zero manual scanning.',
      icon: Activity,
      metric: '75% reduction in search time',
      color: 'from-rose-500 to-pink-500'
    },
    {
      title: 'Manufacturing',
      desc: 'Automate WIP flow, quality checks, and production events.',
      icon: Settings,
      metric: '25% fewer stoppages',
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Retail',
      desc: 'Enable on-shelf accuracy, replenishment, and shrink prevention.',
      icon: Building2,
      metric: '60% faster stock audits',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const processSteps = [
    {
      title: 'Ingest Events',
      desc: 'Connect any source: EPCIS, REST, MQTT, or Schedulers. Auto-detect context.',
      icon: Network,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Filter & Route',
      desc: 'Apply field mapping, conditional filters, and topic routing to isolate relevant data.',
      icon: Filter,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Execute Logic',
      desc: 'Run low-code workflows: decisions, transforms, and object updates.',
      icon: Code2,
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Store State',
      desc: 'Update Digital Twins with typed attributes, relationships, and audit history.',
      icon: Database,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Visualize',
      desc: 'Real-time dashboards, live maps, and operator forms.',
      icon: Eye,
      color: 'from-indigo-500 to-violet-500'
    },
    {
      title: 'Orchestrate',
      desc: 'Push to ERP (SAP, Oracle), WMS, and Cloud Analytics.',
      icon: Server,
      color: 'from-rose-500 to-red-500'
    }
  ];

  const faqs = [
    {
      q: 'Do we need Agents to use RCOM Gateway?',
      a: 'No — Gateway can ingest directly from REST, MQTT, or timers.'
    },
    {
      q: 'Can Gateway scale to multiple sites?',
      a: 'Yes — multi-tenant architecture supports enterprise-wide deployments.'
    },
    {
      q: 'Does it support EPCIS 2.0?',
      a: 'Fully supported at both document and per-event levels.'
    },
    {
      q: 'What integrations are included?',
      a: 'REST, MQTT, SQL, DB connectors, SAP integrations, and more.'
    },
    {
      q: 'How secure is the platform?',
      a: 'Encrypted channels, RBAC, tenant isolation, and full audit trails.'
    }
  ];

  return (
    <div className="min-h-screen text-slate-100 bg-slate-950 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}/>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
              <Network className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-400">Core Automation Layer</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600 bg-clip-text text-transparent">
                Real-Time Workflow Engine
              </span>
              <br />
              <span className="text-slate-100 text-3xl lg:text-5xl mt-2 block">
                for Auto-ID & IoT Operations
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-6xl mx-auto">
              RCOM Gateway is the central brain of your automation stack. Ingest every RFID read, barcode scan, or sensor value and turn it into immediate, smart, automated action—without custom code.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 rounded-lg font-semibold text-white hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/25">
                Talk to an Engineer
              </button>
            </div>
          </div>

          {/* Visual Flow Diagram: Device -> Gateway -> Enterprise */}
          <div className="mt-5 max-w-5xl mx-auto">
            <div className="relative bg-slate-900/50 rounded-2xl p-6 lg:p-10 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                
                {/* 1. Auto-ID Devices */}
                <div className="flex-1 w-full lg:w-auto">
                  <h3 className="text-xs font-semibold text-slate-400 mb-4 text-center uppercase tracking-wider">Auto-ID Devices</h3>
                  <div className="bg-slate-800/60 border border-cyan-500/30 rounded-xl p-4 flex flex-col items-center gap-3">
                    <div className="grid grid-cols-3 gap-3">
                       <Smartphone className="w-5 h-5 text-cyan-400" />
                       <Eye className="w-5 h-5 text-cyan-400" />
                       <Database className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="text-xs text-cyan-400 font-mono text-center">
                      RFID • Barcode • BLE<br/>Vision • Sensors
                    </div>
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="relative h-12 lg:h-1 w-1 lg:w-32 bg-slate-800 rounded-full">
                   <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-30"></div>
                   {/* Animated Particle */}
                   <div 
                      className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      style={{
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        offsetPath: 'path("M0,0 L100%,0")', // Simplified for horizontal
                        left: `${flowPosition}%`
                      }}
                   ></div>
                </div>

                {/* 2. RCOM Gateway (Center) */}
                <div className="flex-1 w-full lg:w-auto transform scale-110">
                  <h3 className="text-xs font-semibold text-indigo-400 mb-4 text-center uppercase tracking-wider font-bold">RCOM Gateway</h3>
                  <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 border border-indigo-500/50 rounded-xl p-6 flex flex-col items-center shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
                    <Network className="w-12 h-12 text-white mb-3 relative z-10" />
                    <div className="text-sm font-semibold text-white relative z-10">Workflow Engine</div>
                    <div className="text-xs text-indigo-200 mt-1 relative z-10">Digital Twins • Custom UI</div>
                  </div>
                </div>

                 {/* Arrow 2 */}
                 <div className="relative h-12 lg:h-1 w-1 lg:w-32 bg-slate-800 rounded-full">
                   <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30"></div>
                   {/* Animated Particle */}
                   <div 
                      className="absolute w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                      style={{
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        left: `${flowPosition}%`
                      }}
                   ></div>
                </div>

                {/* 3. Enterprise Systems */}
                <div className="flex-1 w-full lg:w-auto">
                  <h3 className="text-xs font-semibold text-slate-400 mb-4 text-center uppercase tracking-wider">Enterprise Systems</h3>
                  <div className="bg-slate-800/60 border border-purple-500/30 rounded-xl p-4 flex flex-col items-center gap-3">
                    <div className="grid grid-cols-2 gap-2 w-full text-center">
                       <span className="bg-slate-900/50 text-purple-300 text-[10px] px-2 py-1 rounded">ERP</span>
                       <span className="bg-slate-900/50 text-purple-300 text-[10px] px-2 py-1 rounded">WMS</span>
                       <span className="bg-slate-900/50 text-purple-300 text-[10px] px-2 py-1 rounded">MES</span>
                       <span className="bg-slate-900/50 text-purple-300 text-[10px] px-2 py-1 rounded">Analytics</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO WAYS TO USE SECTION */}
      <section className="py-20 bg-slate-950 border-b border-slate-900/60">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-slate-800/70 border border-slate-700/70 rounded-full px-4 py-1.5 text-sm font-semibold text-indigo-400">
              <CheckCircle className="w-4 h-4" />
              Flexible Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
              Two Ways to Use RCOM Gateway
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Operate as a central orchestration engine for your entire operation — or run standalone in contexts where edge logic or third-party ingestion layers already exist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Method 1 */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Method 1: With RCOM Agents</h3>
                  <p className="text-slate-400 mb-5 leading-relaxed">
                    Use RCOM Agents to collect & pre-clean data at the edge, then send structured events into Gateway for advanced automation.
                  </p>
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-500" /> <span>Real-time workflow logic</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-500" /> <span>Digital twins & state tracking</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-500" /> <span>Robust data lineage (EPCIS)</span>
                     </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">Perfect For</p>
                    <p className="text-sm text-slate-400 mt-1">High-throughput warehouses, hospitals, factories.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 2 */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Server className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Method 2: Direct Ingestion</h3>
                  <p className="text-slate-400 mb-5 leading-relaxed">
                    Already have an ingestion layer? Send events directly into RCOM Gateway through REST, MQTT, or scheduled triggers.
                  </p>
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-purple-500" /> <span>API-driven open architecture</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-purple-500" /> <span>No vendor lock-in</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-purple-500" /> <span>Compatible with any device</span>
                     </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <p className="text-xs font-semibold text-purple-400 uppercase tracking-wide">Perfect For</p>
                    <p className="text-sm text-slate-400 mt-1">Enterprises with existing device networks or middleware.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ADD GATEWAY (FEATURES) */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Turn Raw Events into <br/><span className="text-indigo-400">Repeatable Actions</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Why add RCOM Gateway to your stack?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/60 hover:border-slate-500/60 transition-all hover:shadow-lg hover:shadow-slate-800/50"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <RCOMWorkflow/>
      </section>

      {/* INSIDE RCOM GATEWAY (STEPS) */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Inside RCOM Gateway
            </h2>
            <p className="text-lg text-slate-400">
              From a Single Event to a Full Workflow — Instantly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                   <div key={idx} className="relative bg-slate-800/40 rounded-xl p-6 border border-slate-700/60 hover:bg-slate-800/60 transition-colors">
                      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-sm font-bold text-white">
                         {idx + 1}
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                         <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-10`}>
                            <Icon className="w-6 h-6 text-white" />
                         </div>
                         <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                         {step.desc}
                      </p>
                   </div>
                )
             })}
          </div>
        </div>
      </section>

      {/* REAL WORLD DEPLOYMENTS */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Automation That Scales
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Trusted for mission-critical operations across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deployments.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/60 hover:border-slate-500/60 transition-all hover:shadow-lg hover:shadow-slate-800/50"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{useCase.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 h-12">{useCase.desc}</p>
                  <div className="flex items-center gap-2 text-sm pt-4 border-t border-slate-700/50">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-emerald-400 text-xs">{useCase.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800 bg-slate-800/30 rounded-2xl border border-slate-800">
             <div className="p-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Uptime</div>
             </div>
             <div className="p-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">15M+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Events / Hour</div>
             </div>
             <div className="p-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">&lt;1ms</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Execution</div>
             </div>
             <div className="p-6 text-center">
                <div className="text-3xl font-bold text-white mb-1">Multi-site</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Multi-tenant ready</div>
             </div>
          </div>

        </div>
      </section>
      <section>
        
      </section>
      

    </div>
  );
};

// Helper icon for Logistics
const TruckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="8" x="14" y="2" rx="2" ry="2"/><path d="M14 10h-2.17a2 2 0 0 0-1.66.87l-2.72 4.16A2 2 0 0 1 5.79 16H2"/><path d="M2 22h20"/><path d="M6 22v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M16 22v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
);

export default PlatformGateway;