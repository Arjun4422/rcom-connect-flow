import React, { useState } from 'react'
import {
  ArrowRight,
  Check,
  Filter,
  X,
  ChevronDown,
  Play,
  Zap,
  Shield,
  Eye,
  Hash,
  Workflow,
  Bell,
  GitBranch,
  Thermometer,
  Navigation,
  FileCheck,
  Link2, Brain, CheckCircle2
} from 'lucide-react'

/**
 * Visual fixes & polish (aligned to the provided mock):
 * - Removed non-existent `bg-gradient-hero` class causing inconsistent backgrounds
 * - Standardized color system to a calm navy + blue accent palette
 * - Increased contrast for accessibility (WCAG AA on buttons & text)
 * - Reduced neon tints; replaced with subtle tints and slate neutrals
 * - Fixed mismatched borders on light sections (no white/10 on white)
 * - Unified card styles across sections
 * - Simplified gradients to primary usage only (hero + CTA)
 */

interface FilterState {
  objective: string[]
  environment: string[]
  signal: string[]
  complexity: string[]
}

interface Application {
  id: string
  title: string
  objective: string[]
  environment: string
  signal: string[]
  complexity: string
  why: string
  howItWorks: string
}

// Helper: shared card classes for light and dark contexts
const lightCard =
  'bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition'
const darkCard =
  'bg-slate-800/60 rounded-xl p-6 border border-slate-700/60 hover:border-slate-500/60 transition'

const App: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    objective: [],
    environment: [],
    signal: [],
    complexity: [],
  })
  const [expandedApp, setExpandedApp] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Accent gradients toned down to match mock
  const patterns = [
    { icon: Eye, title: 'Track', desc: 'Real-time asset, item, or person visibility with complete history and location context.', color: 'from-sky-500 to-blue-600' },
    { icon: Shield, title: 'Verify', desc: 'Validate "right item/right place/right time" at gates, docks, rooms, and checkpoints.', color: 'from-indigo-500 to-violet-600' },
    { icon: Zap, title: 'Gate', desc: 'Area and zone access control with safety and compliance triggers built in.', color: 'from-amber-500 to-orange-600' },
    { icon: Hash, title: 'Count', desc: 'Live counts by zone, type, and status with automatic reconciliation.', color: 'from-emerald-500 to-teal-600' },
    { icon: Workflow, title: 'Orchestrate', desc: 'Trigger multi-step business flows across systems with conditional logic.', color: 'from-blue-600 to-indigo-600' },
    { icon: Bell, title: 'Alert', desc: 'Smart thresholds, exceptions, and escalations with timers, rules, and routing.', color: 'from-orange-500 to-rose-600' },
    { icon: GitBranch, title: 'Trace', desc: 'Complete chain-of-custody and EPCIS event lineage for compliance.', color: 'from-teal-500 to-cyan-600' },
    { icon: Thermometer, title: 'Condition', desc: 'Temperature and vibration monitoring with cold chain and preventive actions.', color: 'from-rose-500 to-pink-600' },
    { icon: Navigation, title: 'Guide', desc: 'Operator prompts, checklists, and station UIs without extra applications.', color: 'from-sky-500 to-indigo-600' },
    { icon: FileCheck, title: 'Audit', desc: 'Evidence logs, photo and scan capture, and role-based approval workflows.', color: 'from-violet-500 to-indigo-600' },
  ]

  const applications: Application[] = [
    {
      id: '1',
      title: 'Pallet & Tote Tracking Across Dock Doors',
      objective: ['Track'],
      environment: 'Facility',
      signal: ['RFID'],
      complexity: 'Starter',
      why: 'Know exactly where inventory is at every dock door in real time.',
      howItWorks:
        'RFID portal read → Workflow captures location → Digital twin updated → Dashboard shows live positions → ERP sync via webhook.',
    },
    {
      id: '2',
      title: 'Shipping Verification at RFID Gate',
      objective: ['Verify', 'Alert'],
      environment: 'Facility',
      signal: ['RFID'],
      complexity: 'Starter',
      why: 'Stop wrong-item shipments before they leave the dock.',
      howItWorks:
        'Gate read → Workflow checks ASN/ERP → Update digital twin → Alert if mismatch → Print label/hold release → Log event (EPCIS).',
    },
    {
      id: '3',
      title: 'RTI Cycle Automation',
      objective: ['Track', 'Verify'],
      environment: 'Facility',
      signal: ['RFID', 'Barcode'],
      complexity: 'Advanced',
      why: 'Automate returnable container flow from shipment to return to wash.',
      howItWorks:
        'Multi-point reads → Track lifecycle state → Trigger return notifications → Update inventory → Generate cycle reports.',
    },
    {
      id: '4',
      title: 'Pick/Pack Validation with Handhelds',
      objective: ['Verify', 'Guide'],
      environment: 'Facility',
      signal: ['Barcode'],
      complexity: 'Starter',
      why: 'Eliminate picking errors with real-time validation.',
      howItWorks:
        'Scan item → Workflow validates against order → Custom UI shows next pick → Alert on error → Update order status.',
    },
    {
      id: '5',
      title: 'Zone-Based WIP Flow on Production Line',
      objective: ['Track', 'Count'],
      environment: 'Facility',
      signal: ['RFID', 'BLE'],
      complexity: 'Advanced',
      why: 'Monitor work-in-progress as it moves through manufacturing zones.',
      howItWorks:
        'Zone entry/exit detection → Update work center status → Live count dashboards → Bottleneck alerts → ERP work order sync.',
    },
    {
      id: '6',
      title: 'Tool & Fixture Accountability',
      objective: ['Trace', 'Audit'],
      environment: 'Facility',
      signal: ['RFID'],
      complexity: 'Starter',
      why: 'Never lose expensive tools or fixtures again.',
      howItWorks:
        'Check-out/check-in reads → Associate with user → Track usage history → Alert on missing items → Generate custody reports.',
    },
    {
      id: '7',
      title: 'Cold-Chain Door Excursions',
      objective: ['Condition', 'Alert'],
      environment: 'Facility',
      signal: ['Sensor', 'RFID'],
      complexity: 'Advanced',
      why: 'Protect temperature-sensitive inventory automatically.',
      howItWorks:
        'Temperature sensor + door sensor → Detect excursion event → Alert relevant team → Log to digital twin → Generate compliance report.',
    },
    {
      id: '8',
      title: 'Restricted Room Access Control',
      objective: ['Gate', 'Audit'],
      environment: 'Facility',
      signal: ['RFID', 'BLE'],
      complexity: 'Starter',
      why: 'Control and log access to secure areas.',
      howItWorks:
        'Badge read → Workflow checks permissions → Grant/deny access → Log entry/exit → Real-time occupancy tracking → Compliance reports.',
    },
    {
      id: '9',
      title: 'Bed & Asset Rounds Dashboard for Wards',
      objective: ['Track', 'Guide'],
      environment: 'Campus',
      signal: ['BLE'],
      complexity: 'Starter',
      why: 'Speed up equipment rounds and reduce search time.',
      howItWorks:
        'BLE beacon detection → Map asset locations → Custom UI shows ward status → Guide staff to items → Update availability.',
    },
    {
      id: '10',
      title: 'Patient Flow Milestones',
      objective: ['Track', 'Alert'],
      environment: 'Campus',
      signal: ['BLE'],
      complexity: 'Advanced',
      why: 'Track patient journey through care milestones automatically.',
      howItWorks:
        'Badge tracking across zones → Workflow logs milestones → Alert on delays → EMR integration → Real-time family updates.',
    },
    {
      id: '11',
      title: 'Kanban Refill Triggers',
      objective: ['Count', 'Orchestrate'],
      environment: 'Facility',
      signal: ['RFID'],
      complexity: 'Starter',
      why: 'Automate just-in-time replenishment on the factory floor.',
      howItWorks:
        'Low-level detection → Workflow triggers refill order → Alert material handler → Track fulfillment → Update ERP inventory.',
    },
    {
      id: '12',
      title: 'Yard & Gate Automation',
      objective: ['Verify', 'Gate'],
      environment: 'Campus',
      signal: ['RFID', 'Vision'],
      complexity: 'Advanced',
      why: 'Automate truck and trailer check-in and placement.',
      howItWorks:
        'License plate + RFID read → Validate appointment → Assign dock/yard spot → Guide driver → Update TMS → Log transaction.',
    },
    {
      id: '13',
      title: 'Smart Parking Occupancy',
      objective: ['Count', 'Alert'],
      environment: 'Campus',
      signal: ['BLE', 'Vision'],
      complexity: 'Starter',
      why: 'Show real-time parking availability to reduce congestion.',
      howItWorks:
        'Sensor detects vehicle → Update occupancy count → Display on signage → Mobile app integration → Send alerts when full.',
    },
    {
      id: '14',
      title: 'Visitor & Vendor Self-Service Portal',
      objective: ['Guide', 'Audit'],
      environment: 'Campus',
      signal: [],
      complexity: 'Starter',
      why: 'Streamline guest check-in without reception desk.',
      howItWorks:
        'Custom UI registration → Generate QR/badge → Track entry/exit → Host notification → Compliance logging → Auto-expire access.',
    },
    {
      id: '15',
      title: 'Instrument Set Traceability',
      objective: ['Trace', 'Verify'],
      environment: 'Campus',
      signal: ['RFID'],
      complexity: 'Advanced',
      why: 'Ensure sterile instrument sets are complete and traceable.',
      howItWorks:
        'Read full set → Validate against manifest → Track sterilization cycle → Associate with procedure → EPCIS documentation.',
    },
    {
      id: '16',
      title: 'Paper-Less Inspections with Photo Proof',
      objective: ['Audit', 'Guide'],
      environment: 'Facility',
      signal: [],
      complexity: 'Starter',
      why: 'Replace paper forms with digital checklists and evidence.',
      howItWorks:
        'Custom UI checklist → Capture photos/scans → Workflow validation → Store with timestamp → Export reports → Role-based review.',
    },
    {
      id: '17',
      title: 'Inventory Cycle Counting',
      objective: ['Count', 'Track'],
      environment: 'Facility',
      signal: ['RFID', 'Barcode'],
      complexity: 'Starter',
      why: 'Conduct accurate cycle counts in minutes instead of hours.',
      howItWorks:
        'RFID bulk read or barcode scan → Compare to expected → Flag discrepancies → Workflow for adjustment → Sync to ERP.',
    },
    {
      id: '18',
      title: 'Library & Archives Check-In/Out',
      objective: ['Trace', 'Verify'],
      environment: 'Campus',
      signal: ['RFID', 'Barcode'],
      complexity: 'Starter',
      why: 'Automate media circulation and prevent loss.',
      howItWorks:
        'Patron scan + item scan → Validate availability → Update circulation system → Due date tracking → Overdue alerts.',
    },
    {
      id: '19',
      title: 'Rental & Field Equipment Custody',
      objective: ['Trace', 'Alert'],
      environment: 'Field',
      signal: ['RFID', 'BLE'],
      complexity: 'Advanced',
      why: 'Track equipment from warehouse to job site and back.',
      howItWorks:
        'Check-out/check-in → GPS + RFID tracking → Usage logging → Maintenance alerts → Billing integration → Audit trail.',
    },
    {
      id: '20',
      title: 'Nurse-Call Equipment Availability',
      objective: ['Track', 'Alert'],
      environment: 'Campus',
      signal: ['BLE'],
      complexity: 'Starter',
      why: 'Ensure critical equipment is available when needed.',
      howItWorks:
        'Real-time location tracking → Availability status → Alert on low availability → Custom dashboard → Predictive positioning.',
    },
  ]

  const faqs = [
    {
      q: 'Is RCOM limited to specific industries?',
      a: 'No. If your environment emits Auto-ID or IoT events (RFID, barcode, BLE, sensors, vision), RCOM applies. We work across warehouses, hospitals, factories, campuses, yards, labs, and more.',
    },
    {
      q: 'Do we need to build separate apps?',
      a: 'Usually no. Use Custom UI for dashboards and forms, and Custom Maps for spatial logic. Everything is built into the RCOM platform.',
    },
    {
      q: 'How do we start small?',
      a: 'Begin with one pattern like Shipping Verify or Track, then expand using templates. Most customers start with a single use case and grow from there.',
    },
    { q: 'Cloud, on-prem, or hybrid?', a: 'All supported. Many customers run edge readers with cloud orchestration for the best of both worlds.' },
    { q: 'Does RCOM support EPCIS?', a: 'Yes. We support both document and per-event processing, making RCOM great for traceability and compliance use cases.' },
    { q: 'What integrations are available?', a: 'REST, MQTT, and database connectors out of the box. Connect to ERP, WMS, EMR, TMS, and virtually any enterprise system.' },
  ]

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value],
    }))
  }

  const clearFilters = () => {
    setActiveFilters({ objective: [], environment: [], signal: [], complexity: [] })
  }

  const filteredApplications = applications.filter(app => {
    if (activeFilters.objective.length > 0 && !activeFilters.objective.some(o => app.objective.includes(o))) return false
    if (activeFilters.environment.length > 0 && !activeFilters.environment.includes(app.environment)) return false
    if (activeFilters.signal.length > 0 && !activeFilters.signal.some(s => app.signal.includes(s))) return false
    if (activeFilters.complexity.length > 0 && !activeFilters.complexity.includes(app.complexity)) return false
    return true
  })
  const steps = [
    { name: 'Connect', icon: Link2, description: 'Link devices' },
    { name: 'Detect', icon: Eye, description: 'Capture data' },
    { name: 'Decide', icon: Brain, description: 'Process logic' },
    { name: 'Act', icon: Zap, description: 'Take action' },
    { name: 'Verify', icon: CheckCircle2, description: 'Confirm results' }
  ];
  
  const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0)

  return (
    <div className="min-h-screen text-slate-100 bg-slate-950">
      {/* HERO */}
      <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1325] via-[#0d1730] to-[#0f1c36]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="items-center">
            <div className='text-center '>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">Connect Every Device. Automate Any Process.</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                If your operation emits a scan, read, ping, or frame — RCOM Gateway can turn it into action. Build end-to-end automation across warehouses, hospitals, factories, campuses, yards, labs, and beyond.
              </p>
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400/60">
                  Request a Demo
                </button>
                <button className="px-6 py-3 rounded-lg font-semibold border border-slate-600 text-slate-100 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-slate-400/40">
                  See it in Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATTERN PRIMER */}
     
      <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-sky-600 bg-sky-50 px-4 py-2 rounded-full border border-sky-200">
              Universal Platform
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            One platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Any environment.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            RCOM Gateway connects Auto-ID and IoT (RFID, barcodes, BLE, sensors, vision) to your systems. Everywhere, the loop is the same:
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative mb-12">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-200 to-transparent transform -translate-y-1/2 -z-10"></div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.name}>
                  <div className="group relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    
                    {/* Card */}
                    <div className="relative rounded-2xl w-40 h-40 flex flex-col items-center justify-center bg-white shadow-lg shadow-sky-500/10 border border-sky-100 group-hover:border-sky-300 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-sky-500/20 group-hover:-translate-y-1">
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-600 to-sky-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        {i + 1}
                      </div>
                      <div className="w-16 h-16 mb-3 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={32} strokeWidth={2} />
                      </div>
                      <div className="font-bold text-lg text-slate-900">{step.name}</div>
                      <div className="text-xs text-slate-500 mt-1">{step.description}</div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  {i < 4 && (
                    <div className="hidden md:flex items-center">
                      <ArrowRight className="text-sky-400" size={24} strokeWidth={2.5} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#patterns" 
            className="group inline-flex items-center gap-3 text-sky-600 hover:text-sky-700 font-semibold text-lg transition-all duration-300"
          >
            <span className="relative">
              Explore solution patterns
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-600 group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </a>
        </div>
      </div>
    </section>
      {/* SOLUTION PATTERNS */}
      <section id="patterns" className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-10 text-center">Solution Patterns</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {patterns.map(pattern => (
              <div key={pattern.title} className={lightCard + ' cursor-pointer group'}>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pattern.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <pattern.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-1">{pattern.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{pattern.desc}</p>
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="applications" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Hundreds of ways to use RCOM — here are some favorites</h2>
            <p className="text-slate-300">Filter by what matters to you</p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-3 items-center">
              <span className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                <Filter size={16} /> Filters:
              </span>
              {['Track', 'Verify', 'Gate', 'Count', 'Alert', 'Trace'].map(obj => (
                <button
                  key={obj}
                  onClick={() => toggleFilter('objective', obj)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-400/50 ${
                    activeFilters.objective.includes(obj)
                      ? 'bg-sky-600 text-white'
                      : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  {obj}
                </button>
              ))}
              <div className="w-px h-6 bg-slate-700/60" />
              {['RFID', 'Barcode', 'BLE', 'Sensor', 'Vision'].map(sig => (
                <button
                  key={sig}
                  onClick={() => toggleFilter('signal', sig)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-400/50 ${
                    activeFilters.signal.includes(sig)
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  {sig}
                </button>
              ))}
              <div className="w-px h-6 bg-slate-700/60" />
              {['Starter', 'Advanced'].map(comp => (
                <button
                  key={comp}
                  onClick={() => toggleFilter('complexity', comp)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-400/50 ${
                    activeFilters.complexity.includes(comp)
                      ? 'bg-violet-600 text-white'
                      : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  {comp}
                </button>
              ))}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-rose-700/30 text-rose-200 hover:bg-rose-700/40 transition flex items-center gap-2"
                >
                  <X size={16} /> Clear all
                </button>
              )}
            </div>
            <div className="text-sm text-slate-400">Showing {filteredApplications.length} of {applications.length} applications</div>
          </div>

          {/* Application Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApplications.map(app => (
              <div key={app.id} className={darkCard}>
                <div className="flex flex-wrap gap-2 mb-3">
                  {app.objective.map(obj => (
                    <span key={obj} className="px-2 py-1 bg-sky-900/30 text-sky-300 text-xs rounded-full border border-sky-700/40">
                      {obj}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{app.title}</h3>
                <p className="text-sm text-slate-300 mb-3"><span className="font-semibold text-slate-200">Why:</span> {app.why}</p>
                <button
                  onClick={() => setExpandedApp(expandedApp === app.id ? null : app.id)}
                  className="text-sky-300 text-sm font-semibold hover:text-sky-200 inline-flex items-center gap-1"
                >
                  {expandedApp === app.id ? 'Hide' : 'See'} the flow <ChevronDown size={14} className={expandedApp === app.id ? 'rotate-180 transition' : 'transition'} />
                </button>
                {expandedApp === app.id && (
                  <div className="mt-4 pt-4 border-t border-slate-700/60">
                    <p className="text-sm text-slate-200 leading-relaxed">{app.howItWorks}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL DEMOS */}
      <section id="demos" className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-10 text-center">See RCOM in Action</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Demo 1 */}
            <div className={lightCard}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center">
                  <Play size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Asset Flow Demo</h3>
                  <p className="text-sm text-slate-600">From RFID read to ERP update</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 mb-6 font-mono text-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-slate-700">Reader detects tag</span>
                </div>
                <div className="flex items-center gap-3 pl-5">
                  <ArrowRight size={14} className="text-sky-600" />
                  <span className="text-slate-700">Event filtered by rules</span>
                </div>
                <div className="flex items-center gap-3 pl-5">
                  <ArrowRight size={14} className="text-sky-600" />
                  <span className="text-slate-700">Workflow executes logic</span>
                </div>
                <div className="flex items-center gap-3 pl-5">
                  <ArrowRight size={14} className="text-sky-600" />
                  <span className="text-slate-700">Digital twin updated</span>
                </div>
                <div className="flex items-center gap-3 pl-5">
                  <ArrowRight size={14} className="text-sky-600" />
                  <span className="text-slate-700">ERP/Webhook triggered</span>
                </div>
                <div className="flex items-center gap-3 pl-5">
                  <Check size={14} className="text-emerald-600" />
                  <span className="text-emerald-700">Dashboard updated</span>
                </div>
              </div>
              {/* <button className="w-full bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-sky-600">
                Try this scenario in a guided demo
              </button> */}
            </div>

            {/* Demo 2 */}
            <div className={lightCard}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white flex items-center justify-center">
                  <Play size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Zone Automation Demo</h3>
                  <p className="text-sm text-slate-600">Custom Maps and UI in action</p>
                </div>
              </div>
              <div className="rounded-lg p-6 mb-6 bg-slate-900 text-slate-100">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-sky-900/20 border border-sky-700/40 rounded p-3 text-center">
                    <div className="text-2xl font-bold text-sky-300">12</div>
                    <div className="text-xs text-slate-400">Zone A</div>
                  </div>
                  <div className="bg-emerald-900/20 border border-emerald-700/40 rounded p-3 text-center">
                    <div className="text-2xl font-bold text-emerald-300">8</div>
                    <div className="text-xs text-slate-400">Zone B</div>
                  </div>
                  <div className="bg-amber-900/20 border border-amber-700/40 rounded p-3 text-center">
                    <div className="text-2xl font-bold text-amber-300">15</div>
                    <div className="text-xs text-slate-400">Zone C</div>
                  </div>
                </div>
                <div className="text-sm text-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Entry/exit events trigger workflows</span>
                    <Check size={16} className="text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Live count by zone</span>
                    <Check size={16} className="text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Exception alerts</span>
                    <Bell size={16} className="text-amber-400" />
                  </div>
                </div>
              </div>
              {/* <button className="w-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 rounded-lg font-semibold text-white hover:from-indigo-700 hover:to-fuchsia-700">
                Try this scenario in a guided demo
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* WHY RCOM */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Why teams pick RCOM for event-driven ops</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {[
              { capability: 'Low-code workflows', benefit: 'Ship faster, fewer manual touches', icon: Workflow, color: 'from-blue-600 to-sky-500' },
              { capability: 'Digital twins & history', benefit: 'Trust your data; audit anytime', icon: GitBranch, color: 'from-indigo-600 to-fuchsia-600' },
              { capability: 'Custom UI & Maps', benefit: 'Right UI in the right place; zero extra apps', icon: Navigation, color: 'from-amber-500 to-orange-600' },
              { capability: 'Open integrations', benefit: 'Fit your stack, not the other way around', icon: Zap, color: 'from-emerald-500 to-teal-600' },
            ].map((item, i) => (
              <div key={i} className={darkCard}>
                <div className="flex gap-6 w-64 h-32">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center flex-shrink-0`}>
                    <item.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-0.5">{item.capability}</h3>
                    <p className="text-slate-300">{item.benefit}</p>
                  </div>
                  {/* <button className="text-sky-300 hover:text-sky-200 font-semibold text-sm">Learn more →</button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF & ROI */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-10 text-center">Real results, real operations</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-sky-700 mb-2">-30%</div>
              <div className="text-slate-600">Manual checks eliminated</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-emerald-700 mb-2">+99%</div>
              <div className="text-slate-600">Inventory accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-200 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-violet-700 mb-2">&lt;100ms</div>
              <div className="text-slate-600">Event processing time</div>
            </div>
          </div>
          <div className={lightCard}>
            <blockquote className="text-xl text-slate-800 italic mb-2">
              "We automated gate checks and synced to ERP in real time — reconciliation went from hours to minutes."
            </blockquote>
            <div className="text-slate-600">— Operations Manager, Fortune 500 Logistics</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={darkCard + ' overflow-hidden'}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-lg pr-4 py-4">{faq.q}</span>
                  <ChevronDown size={22} className={`flex-shrink-0 transition ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && <div className="pb-4 text-slate-200">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-sky-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-3">Map your use case to RCOM in minutes.</h2>
            <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking for operational outcomes or technical details, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-700 px-7 py-3 rounded-lg font-semibold hover:bg-blue-50">Request a Demo</button>
              <button className="border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white/10">Talk to an Engineer</button>
              <button className="border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white/10">Read the Docs</button>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default App
