import React, { useEffect, useState } from 'react';
import { 
  Radio, 
  Camera, 
  Wifi, 
  Database, 
  Cpu, 
  Zap, 
  ArrowRight,
  Play,
  Filter,
  Shield,
  Settings,
  Network,
  Link2,
  Brain,
  Send,
  Workflow,
  Plug,
  Globe,
  Server,
  Lock,
  Building2,
  WifiOff,
  Activity,
  FileCheck,
  RefreshCw,
  Search,
  Eye,
  Upload,
  FileText,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Layers,
  Code2,
  BarChart3
} from 'lucide-react';

const SolutionsAgents = () => {
  const [eventPosition, setEventPosition] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setEventPosition(prev => {
        if (prev >= 100) {
          // Randomly trigger buffering state
          if (Math.random() > 0.7) {
            setIsBuffering(true);
            setTimeout(() => setIsBuffering(false), 2000);
          }
          return 0;
        }
        return prev + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const whyAgents = [
    {
      title: 'Cleaner transactions',
      desc: 'Strip noise, de-duplicate bursts, validate formats before they touch ERP/WMS.',
      icon: Filter,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Always-on operations',
      desc: 'Local store-and-forward keeps data flowing through network hiccups.',
      icon: Shield,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Faster rollouts',
      desc: 'Onboard mixed-vendor hardware without writing throwaway middleware.',
      icon: Zap,
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Central control',
      desc: 'Manage fleets, push configs, and watch health from one place.',
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const useCases = [
    {
      title: 'Healthcare Asset Tracking',
      desc: 'Track medical equipment across hospital campuses with RFID and RTLS, ensuring critical assets are always available.',
      icon: Activity,
      metrics: '99.8% asset visibility',
      color: 'from-rose-500 to-pink-500'
    },
    {
      title: 'Warehouse Automation',
      desc: 'Monitor inventory movement in real-time across multiple DCs, integrating with WMS for automated replenishment.',
      icon: Building2,
      metrics: '40% faster picking',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Manufacturing Floor',
      desc: 'Connect sensors, vision systems, and barcode scanners for production line monitoring and quality control.',
      icon: Settings,
      metrics: '25% less downtime',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen text-slate-100 bg-slate-950">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1325] via-[#0d1730] to-[#0f1c36]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">Edge Intelligence Layer</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Smart Edge Software for Auto-ID Devices
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Deploy lightweight RCOM Agents near your RFID readers, barcode scanners, and IoT sensors to normalize, filter, and buffer data at the source—then stream clean, structured events securely to RCOM Gateway or any other enterprise system, at scale.            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400/60 transition-all">
              Talk to an Engineer
              </button>
            </div>
          </div>

          {/* Enhanced Hero Visual - Flow Diagram with Buffer */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative bg-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
              {isBuffering && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-lg px-3 py-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-amber-400">Network issue - buffering locally</span>
                </div>
              )}
              
              <div className="flex items-center justify-between gap-4 md:gap-8">
                {/* Devices */}
                <div className="flex-1">
                  <div className="text-center mb-4">
                    <h3 className="text-sm font-semibold text-slate-400 mb-3">Edge Devices</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-800/60 border border-cyan-400/30 rounded-lg p-3 flex flex-col items-center">
                        <Radio className="w-6 h-6 text-cyan-400 mb-2" />
                        <span className="text-xs text-cyan-400">RFID</span>
                      </div>
                      <div className="bg-slate-800/60 border border-cyan-400/30 rounded-lg p-3 flex flex-col items-center">
                        <Camera className="w-6 h-6 text-cyan-400 mb-2" />
                        <span className="text-xs text-cyan-400">Vision</span>
                      </div>
                      <div className="bg-slate-800/60 border border-cyan-400/30 rounded-lg p-3 flex flex-col items-center">
                        <Wifi className="w-6 h-6 text-cyan-400 mb-2" />
                        <span className="text-xs text-cyan-400">RTLS</span>
                      </div>
                      <div className="bg-slate-800/60 border border-cyan-400/30 rounded-lg p-3 flex flex-col items-center">
                        <Database className="w-6 h-6 text-cyan-400 mb-2" />
                        <span className="text-xs text-cyan-400">Sensor</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="relative flex-shrink-0 w-16 md:w-24 h-1">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform -translate-y-1/2"></div>
                  {eventPosition >= 0 && eventPosition <= 33 && !isBuffering && (
                    <div 
                      className="absolute top-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-cyan-400/50 transition-all duration-75"
                      style={{ left: `${(eventPosition / 33) * 100}%` }}
                    ></div>
                  )}
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                </div>

                {/* Agent with Buffer Indicator */}
                <div className="flex-1">
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-slate-400 mb-3">RCOM Agent</h3>
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Cpu className="w-12 h-12 text-white" />
                      </div>
                      {isBuffering && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          Buffering
                        </div>
                      )}
                    </div>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-slate-400">Filter • Validate • Buffer</p>
                    </div>
                  </div>
                </div>

                {/* Arrow 2 */}
                <div className="relative flex-shrink-0 w-16 md:w-24 h-1">
                  <div className={`absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform -translate-y-1/2 ${isBuffering ? 'opacity-30' : ''}`}></div>
                  {eventPosition >= 33 && eventPosition <= 66 && !isBuffering && (
                    <div 
                      className="absolute top-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-blue-400/50 transition-all duration-75"
                      style={{ left: `${((eventPosition - 33) / 33) * 100}%` }}
                    ></div>
                  )}
                  <ArrowRight className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 ${isBuffering ? 'opacity-30' : ''}`} />
                </div>

                {/* Gateway */}
                <div className="flex-1">
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-slate-400 mb-3">RCOM Gateway</h3>
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                      <Network className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-xs text-slate-400 mt-2">Workflow Engine</p>
                  </div>
                </div>

                {/* Arrow 3 */}
                <div className="relative flex-shrink-0 w-16 md:w-24 h-1">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform -translate-y-1/2"></div>
                  {eventPosition >= 66 && eventPosition <= 100 && (
                    <div 
                      className="absolute top-1/2 w-3 h-3 bg-indigo-400 rounded-full transform -translate-y-1/2 shadow-lg shadow-indigo-400/50 transition-all duration-75"
                      style={{ left: `${((eventPosition - 66) / 34) * 100}%` }}
                    ></div>
                  )}
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
                </div>

                {/* Systems */}
                <div className="flex-1">
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-slate-400 mb-3">Enterprise</h3>
                    <div className="space-y-2">
                      <div className="bg-slate-800/60 border border-indigo-400/30 rounded-lg px-4 py-2">
                        <span className="text-xs text-indigo-400 font-semibold">ERP</span>
                      </div>
                      <div className="bg-slate-800/60 border border-indigo-400/30 rounded-lg px-4 py-2">
                        <span className="text-xs text-indigo-400 font-semibold">WMS</span>
                      </div>
                      <div className="bg-slate-800/60 border border-indigo-400/30 rounded-lg px-4 py-2">
                        <span className="text-xs text-indigo-400 font-semibold">MES</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AGENTS SECTION */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why add Agents to your stack?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Transform fragmented device data into reliable enterprise events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyAgents.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/60 hover:border-slate-500/60 transition-all hover:shadow-lg hover:shadow-slate-800/50"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-sky-500/50 text-sky-400 hover:bg-sky-500/10 focus:outline-none focus:ring-2 focus:ring-sky-400/60 transition-all">
              <Play className="w-5 h-5" />
              See a 60-second walkthrough
            </button>
          </div>
        </div>
      </section>

      {/* USE CASES SECTION - NEW */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real-world deployments
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From hospitals to warehouses, Agents power mission-critical operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/60 hover:border-slate-500/60 transition-all hover:shadow-lg hover:shadow-slate-800/50"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{useCase.desc}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-emerald-400">{useCase.metrics}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From edge read to system update - in four steps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: 1,
                title: 'Connect',
                desc: 'Install Agent on edge hardware near devices. Point it at RFID readers, scanners, sensors, or vision endpoints.',
                icon: Link2,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: 2,
                title: 'Clean',
                desc: 'Apply edge logic: filter noise, validate formats, de-duplicate bursts, tag with site metadata.',
                icon: Filter,
                color: 'from-purple-500 to-pink-500'
              },
              {
                step: 3,
                title: 'Deliver',
                desc: 'Send structured events upstream via REST or MQTT. Local buffering ensures delivery during outages.',
                icon: Send,
                color: 'from-emerald-500 to-teal-500'
              },
              {
                step: 4,
                title: 'Orchestrate',
                desc: 'Gateway runs workflows: update digital twins, trigger alerts, and sync with ERP/WMS/MES in real time.',
                icon: Workflow,
                color: 'from-amber-500 to-orange-500'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/60 hover:border-slate-500/60 transition-all hover:shadow-lg hover:shadow-slate-800/50 relative"
                >
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-white text-sm font-bold border border-slate-600">
                    {item.step}
                  </div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* NO-CODE PROCESS DESIGN - NEW SECTION */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-400">Zero Custom Code</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Build device workflows visually
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Use the no-code Process Template designer to create reusable workflows. Drag, drop, and configure—no programming required.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Layers, text: 'Template-driven design for consistency across sites' },
                  { icon: Settings, text: 'Configure readers, filters, and outputs per environment' },
                  { icon: RefreshCw, text: 'Version control and instant remote updates' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <p className="text-slate-300 pt-2">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/40 rounded-xl p-8 border border-slate-700/50">
              <div className="space-y-4">
                <div className="bg-slate-900/60 rounded-lg p-4 border border-slate-600/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Radio className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold text-white">Reader Connection</span>
                  </div>
                  <p className="text-sm text-slate-400">Configure LLRP/SNMP endpoints</p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-slate-500 rotate-90" />
                </div>
                <div className="bg-slate-900/60 rounded-lg p-4 border border-slate-600/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Filter className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold text-white">Data Processing</span>
                  </div>
                  <p className="text-sm text-slate-400">Apply validation & de-duplication rules</p>
                </div>
                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-slate-500 rotate-90" />
                </div>
                <div className="bg-slate-900/60 rounded-lg p-4 border border-slate-600/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Send className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold text-white">Event Output</span>
                  </div>
                  <p className="text-sm text-slate-400">Send to Gateway or any other enterprise system via REST or MQTT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise-grade edge capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Vendor-neutral connectivity',
                desc: 'Support for RFID (Zebra, Impinj, Alien), RTLS (Ubisense, Sewio), barcode scanners, and industrial sensors.',
                icon: Plug,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Edge intelligence',
                desc: 'Filter rules, format validation, light transforms, and local buffering during connectivity issues.',
                icon: Brain,
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Flexible topologies',
                desc: 'Deploy in DMZs, plants, distribution centers, retail stores, hospitals, and remote field sites.',
                icon: Globe,
                color: 'from-emerald-500 to-teal-500'
              },
              {
                title: 'Centralized management',
                desc: 'Configure, monitor, and update thousands of agents across sites from a single AppCenter interface.',
                icon: Server,
                color: 'from-amber-500 to-orange-500'
              },
              {
                title: 'Security & compliance',
                desc: 'Encrypted transport (TLS), scoped credentials, group-based access controls, and audit logging.',
                icon: Lock,
                color: 'from-red-500 to-rose-500'
              },
              {
                title: 'Real-time monitoring',
                desc: 'Device health checks, configurable alerts via email/SMS, and comprehensive logging.',
                icon: BarChart3,
                color: 'from-indigo-500 to-violet-500'
              }
            ].map((item, idx) => {
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
      </section>

      {/* WHERE AGENTS SHINE SECTION */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perfect for complex and distributed environments
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: 'Multi-site rollouts',
                desc: 'Standardize device behavior across facilities with shared templates.',
                icon: Building2,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Intermittent networks',
                desc: 'Keep capturing data and replay when links return.',
                icon: WifiOff,
                color: 'from-amber-500 to-orange-500'
              },
              {
                title: 'High-burst gates/portals',
                desc: 'De-dup floods at the edge before they hit your systems.',
                icon: Activity,
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Strict IT policies',
                desc: 'Choose push or pull to fit your security posture.',
                color: 'from-emerald-500 to-teal-500',
                icon: FileCheck
              },
              {
                title: 'Brownfield retrofits',
                desc: 'Wrap legacy endpoints without ripping and replacing.',
                icon: RefreshCw,
                color: 'from-indigo-500 to-violet-500'
              }
            ].map((item, idx) => {
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

          {/* Callout */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
              <p className="text-lg text-slate-200 leading-relaxed">
                <span className="font-semibold text-cyan-400">Use Agents alone for collection,</span> or{' '}
                <span className="text-cyan-400 hover:text-cyan-300 underline font-semibold cursor-pointer">
                  pair with RCOM Gateway Workflows
                </span>{' '}
                for full event-to-action automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT & VISIBILITY SECTION */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Fleet control without the headaches
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'One console for all Agents',
                desc: 'Search, filter, status, version.',
                icon: Search,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Health at a glance',
                desc: 'Running • Unknown • Update Required • Updating.',
                icon: Eye,
                color: 'from-emerald-500 to-teal-500'
              },
              {
                title: 'Zero-touch updates',
                desc: 'Push new configs and templates remotely.',
                icon: Upload,
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Actionable logs',
                desc: 'Agent and process logs when you need depth.',
                icon: FileText,
                color: 'from-amber-500 to-orange-500'
              }
            ].map((item, idx) => {
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
      </section>

      {/* PROOF POINTS SECTION */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted at the edge
            </h2>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">-30%</div>
              <div className="text-slate-300">noisy events before ERP/WMS</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">99%+</div>
              <div className="text-slate-300">delivery during network instability</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">Days → Hours</div>
              <div className="text-slate-300">to add new sites/devices</div>
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/60 rounded-xl p-8 border border-slate-700/60">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-xl text-slate-200 italic mb-4 leading-relaxed">
                    "Rolling out readers across five sites used to mean bespoke scripts and weeks of testing. With Agents, we standardized once and scaled everywhere."
                  </blockquote>
                  <div className="text-sm text-slate-400">
                    — Operations Manager, Fortune 500 Logistics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Do we need Agents to use RCOM Gateway?',
                a: 'No. You can ingest directly into Gateway. Agents are ideal when you want edge filtering, buffering, or centralized device management.'
              },
              {
                q: 'Push or pull?',
                a: 'Both models are supported. Choose event publish for streaming or a call-home/polling approach to align with IT policy.'
              },
              {
                q: 'What hardware works?',
                a: 'Agents are vendor-neutral: RFID readers (Zebra, Impinj, Alien), RTLS systems, barcode scanners, BLE gateways, sensors, and vision endpoints across brands.'
              },
              {
                q: 'How many sites can we manage?',
                a: 'From a single facility to a global fleet. Use templates to standardize; update and monitor from one place.'
              },
              {
                q: 'What about security?',
                a: 'Encrypted transport (TLS), scoped credentials, and group-based access controls are standard.'
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-slate-800/60 rounded-xl border border-slate-700/60 overflow-hidden hover:border-slate-500/60 transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between p-6"
                >
                  <span className="font-semibold text-lg pr-4 text-white">{faq.q}</span>
                  <ChevronDown 
                    size={22} 
                    className={`flex-shrink-0 transition-transform text-slate-400 ${
                      expandedFaq === i ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-sky-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ready to put intelligence at the edge?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="bg-white text-blue-700 px-7 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                Start an edge pilot
              </button>
              <button className="border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                Talk to an engineer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsAgents;