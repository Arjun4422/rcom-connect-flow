import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import PlatformGateway from '@/components/Solutions/Gateway';


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
  const [showAllApps, setShowAllApps] = useState(false)

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
        'Scan item → Validate against order → Custom UI shows next pick → Alert on error → Update order status.',
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
        'Zone entry/exit → Update work center status → Live count dashboards → Bottleneck alerts → ERP work order sync.',
    },
    {
      id: '6',
      title: 'Tool & Fixture Accountability',
      objective: ['Trace', 'Audit'],
      environment: 'Facility',
      signal: ['RFID'],
      complexity: 'Starter',
      why: 'Prevent loss of high-value tools and fixtures.',
      howItWorks:
        'Check-out/check-in reads → Associate with user/job → Usage history → Missing-item alerts → Custody reports.',
    },
    {
      id: '7',
      title: 'Cold-Chain Excursions',
      objective: ['Condition', 'Alert'],
      environment: 'Facility',
      signal: ['Sensor', 'RFID'],
      complexity: 'Advanced',
      why: 'Protect temperature-sensitive inventory automatically.',
      howItWorks:
        'Temp/door sensors → Detect excursion → Alert team → Update digital twin → Compliance report generated.',
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
        'Badge read → Permission check → Grant/deny → Log entry/exit → Occupancy tracking → Compliance reports.',
    },
    {
      id: '9',
      title: 'Bed & Asset Rounds Dashboard',
      objective: ['Track', 'Guide'],
      environment: 'Campus',
      signal: ['BLE'],
      complexity: 'Starter',
      why: 'Speed up equipment rounds and reduce search time.',
      howItWorks:
        'BLE detection → Map locations → Custom UI shows ward status → Guide staff → Update availability.',
    },
    {
      id: '10',
      title: 'Patient Flow Milestones',
      objective: ['Track', 'Alert'],
      environment: 'Campus',
      signal: ['BLE'],
      complexity: 'Advanced',
      why: 'Capture delays and throughput across care milestones.',
      howItWorks:
        'Badge tracking across zones → Log milestones → Delay alerts → EMR integration → Family updates.',
    },
    {
      id: '11',
      title: 'Kanban Refill Triggers',
      objective: ['Count', 'Orchestrate'],
      environment: 'Facility',
      signal: ['RFID', 'Barcode'],
      complexity: 'Starter',
      why: 'Automate just-in-time replenishment.',
      howItWorks:
        'Low-level detection → Trigger refill order → Alert material handler → Track fulfillment → ERP inventory sync.',
    },
    {
      id: '12',
      title: 'Yard & Gate Automation',
      objective: ['Verify', 'Gate'],
      environment: 'Campus',
      signal: ['RFID', 'Vision'],
      complexity: 'Advanced',
      why: 'Automate truck/trailer check-in and placement.',
      howItWorks:
        'ANPR + RFID → Validate appointment → Assign dock/yard → Guide driver → Update TMS → Log transaction.',
    },
    {
      id: '13',
      title: 'Smart Parking Occupancy',
      objective: ['Count', 'Alert'],
      environment: 'Campus',
      signal: ['BLE', 'Vision', 'Sensor'],
      complexity: 'Starter',
      why: 'Show real-time parking availability and enforce rules.',
      howItWorks:
        'Space sensor/vision → Update occupancy → Signage/app display → Alerts when full → Analytics.',
    },
    {
      id: '14',
      title: 'Visitor & Vendor Self-Service',
      objective: ['Guide', 'Audit'],
      environment: 'Campus',
      signal: ['Barcode', 'Vision'],
      complexity: 'Starter',
      why: 'Streamline check-in without a reception line.',
      howItWorks:
        'Custom UI registration → QR/badge → Entry/exit tracking → Host notify → Compliance logging → Auto-expire access.',
    },
    {
      id: '15',
      title: 'Instrument Set Traceability',
      objective: ['Trace', 'Verify'],
      environment: 'Facility',
      signal: ['RFID'],
      complexity: 'Advanced',
      why: 'Ensure sterile instrument sets are complete and traceable.',
      howItWorks:
        'Read full set → Validate manifest → Track sterilization → Associate to procedure → EPCIS documentation.',
    },
    {
      id: '16',
      title: 'Paperless Inspections with Photo Proof',
      objective: ['Audit', 'Guide'],
      environment: 'Facility',
      signal: ['Vision', 'Barcode'],
      complexity: 'Starter',
      why: 'Replace paper forms with digital, auditable checklists.',
      howItWorks:
        'Custom UI checklist → Capture photos/scans → Validate → Timestamp/store → Export report → Role-based review.',
    },
    {
      id: '17',
      title: 'Inventory Cycle Counting',
      objective: ['Count', 'Track'],
      environment: 'Facility',
      signal: ['RFID', 'Barcode'],
      complexity: 'Starter',
      why: 'Perform accurate counts in minutes, not hours.',
      howItWorks:
        'Bulk read/scan → Compare to expected → Flag discrepancies → Adjustment workflow → ERP sync.',
    },
    {
      id: '18',
      title: 'Library & Archives Check-In/Out',
      objective: ['Trace', 'Verify'],
      environment: 'Campus',
      signal: ['RFID', 'Barcode'],
      complexity: 'Starter',
      why: 'Automate circulation and reduce loss.',
      howItWorks:
        'Patron + item scan → Validate availability → Update circulation → Due date tracking → Overdue alerts.',
    },
    {
      id: '19',
      title: 'Rental & Field Equipment Custody',
      objective: ['Trace', 'Alert'],
      environment: 'Field',
      signal: ['RFID', 'BLE', 'GPS'],
      complexity: 'Advanced',
      why: 'Track equipment from depot to job site and back.',
      howItWorks:
        'Check-out/in → GPS/BLE presence → Usage logging → Maintenance alerts → Billing integration → Audit trail.',
    },
    {
      id: '20',
      title: 'Nurse-Call Equipment Availability',
      objective: ['Track', 'Alert'],
      environment: 'Campus',
      signal: ['BLE'],
      complexity: 'Starter',
      why: 'Ensure critical equipment is always available.',
      howItWorks:
        'Real-time location → Availability thresholds → Alerts → Dashboard visibility → Predictive placement.',
    },
    {
      id: '21',
      title: 'Kitting & Assembly Error-Proofing',
      objective: ['Verify', 'Guide'],
      environment: 'Facility',
      signal: ['Barcode', 'RFID'],
      complexity: 'Starter',
      why: 'Prevent wrong-part assembly at stations.',
      howItWorks:
        'Scan part at station → Check BOM/route → OK/NOK prompt → Log trace → Andon alert on errors.',
    },
    {
      id: '22',
      title: 'IT Asset Tracking in Data Centers',
      objective: ['Track', 'Audit'],
      environment: 'DataCenter',
      signal: ['RFID', 'Barcode'],
      complexity: 'Advanced',
      why: 'Maintain accurate location and custody of IT hardware.',
      howItWorks:
        'Rack/room reads → Update asset twin → Move approvals → Change logs → CMDB sync.',
    },
    {
      id: '23',
      title: 'Pharma Serialization & Pedigree',
      objective: ['Trace', 'Verify'],
      environment: 'Transit',
      signal: ['Barcode', 'RFID'],
      complexity: 'Advanced',
      why: 'Ensure DSCSA/traceability compliance.',
      howItWorks:
        'Scan serials at steps → EPCIS lineage → Verify chain-of-custody → Exception alerts → Regulator-ready reports.',
    },
    {
      id: '24',
      title: 'Lab Sample Chain of Custody',
      objective: ['Trace', 'Alert'],
      environment: 'Facility',
      signal: ['Barcode', 'RFID', 'Sensor'],
      complexity: 'Advanced',
      why: 'Preserve sample integrity and auditability.',
      howItWorks:
        'Tube/box scan → Location/time capture → Temp sensor watch → Alerts on deviation → LIMS update.',
    },
    {
      id: '25',
      title: 'Construction Site Access & Safety',
      objective: ['Gate', 'Alert'],
      environment: 'Field',
      signal: ['RFID', 'BLE', 'Vision'],
      complexity: 'Starter',
      why: 'Control access and enforce PPE/safety zones.',
      howItWorks:
        'Badge read/vision check → Permit validation → Zone presence → Safety breach alerts → Incident log.',
    },
    {
      id: '26',
      title: 'Retail Backroom to Salesfloor Replenishment',
      objective: ['Count', 'Orchestrate'],
      environment: 'Retail',
      signal: ['RFID', 'Barcode'],
      complexity: 'Starter',
      why: 'Keep shelves stocked with minimal labor.',
      howItWorks:
        'Backroom reads → Gap detection vs planogram → Replenish task → UI pick list → POS/ERP sync.',
    },
    {
      id: '27',
      title: 'Airport Baggage Tracking',
      objective: ['Track', 'Trace'],
      environment: 'Transit',
      signal: ['RFID', 'Barcode'],
      complexity: 'Advanced',
      why: 'Reduce mishandled bags and speed transfers.',
      howItWorks:
        'BHS portal reads → Flight mapping → Misroute alerts → Customer notifications → Airline DCS update.',
    },
    {
      id: '28',
      title: 'Hotel Linen & Laundry Automation',
      objective: ['Track', 'Count'],
      environment: 'Facility',
      signal: ['RFID'],
      complexity: 'Starter',
      why: 'Account for linens through wash cycles and reduce loss.',
      howItWorks:
        'Bag/garment reads → Cycle states → Replacement thresholds → Vendor reconciliation → Cost reports.',
    },
    {
      id: '29',
      title: 'Waste & Recycling Bin Collection',
      objective: ['Verify', 'Count'],
      environment: 'Field',
      signal: ['RFID', 'GPS', 'Sensor'],
      complexity: 'Starter',
      why: 'Verify service and optimize routes.',
      howItWorks:
        'Bin RFID + truck GPS → Service event → Weight/level sensor → Route KPI → Billing/CRM update.',
    },
    {
      id: '30',
      title: 'Museum/Exhibit Asset Security',
      objective: ['Gate', 'Alert'],
      environment: 'Facility',
      signal: ['RFID', 'BLE', 'Vision'],
      complexity: 'Starter',
      why: 'Detect unauthorized movement instantly.',
      howItWorks:
        'Zone breach detection → Silent alert → Camera snapshot → Guard workflow → Incident record.',
    },
    {
      id: '31',
      title: 'Livestock & Farm Asset Tracking',
      objective: ['Track', 'Condition'],
      environment: 'Field',
      signal: ['RFID', 'BLE', 'GPS', 'Sensor'],
      complexity: 'Advanced',
      why: 'Monitor location and health of animals/equipment.',
      howItWorks:
        'Tag reads/GPS → Geo-fence events → Temp/activity sensors → Vet alerts → Herd reports.',
    },
    {
      id: '32',
      title: 'University Asset Audit & Loaners',
      objective: ['Audit', 'Trace'],
      environment: 'Campus',
      signal: ['RFID', 'Barcode'],
      complexity: 'Starter',
      why: 'Track AV/IT equipment loans and room assets.',
      howItWorks:
        'Issue/return scans → Due dates → Room sweeps → Missing alerts → Chargeback/export.',
    },
    {
      id: '33',
      title: 'Ports & Container Terminal Moves',
      objective: ['Track', 'Orchestrate'],
      environment: 'Transit',
      signal: ['RFID', 'Vision', 'GPS'],
      complexity: 'Advanced',
      why: 'Coordinate container moves with live yard state.',
      howItWorks:
        'Gate/RTG reads + GPS → Assign moves → Optimize sequencing → TOS/ERP updates → Exceptions handled.',
    },
    {
      id: '34',
      title: 'Food Production Trace & Recall Readiness',
      objective: ['Trace', 'Verify'],
      environment: 'Facility',
      signal: ['Barcode', 'RFID', 'Sensor'],
      complexity: 'Advanced',
      why: 'Trace ingredients to finished goods for rapid recalls.',
      howItWorks:
        'Lot scans at steps → EPCIS lineage → Temp/humidity checks → COA linkage → Recall query in seconds.',
    },
    {
      id: '35',
      title: 'Event/Conference Attendee Flow',
      objective: ['Track', 'Guide'],
      environment: 'Campus',
      signal: ['RFID', 'Barcode', 'BLE'],
      complexity: 'Starter',
      why: 'Understand traffic and personalize experience.',
      howItWorks:
        'Badge scans/beacons → Session check-ins → Heatmaps → Capacity alerts → Sponsor lead delivery.',
    },
  ];

  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: 'What exactly does RCOM Gateway do?',
      a: 'RCOM Gateway connects Auto-ID devices (RFID readers, barcode scanners, BLE tags, sensors, vision systems) to your business systems and automates what happens next. It ingests events in real time, runs rule-based workflows, updates digital twins, and pushes clean data to ERP/WMS/MES systems.',
    },
    {
      q: 'Does RCOM Gateway replace custom middleware?',
      a: 'Yes. Instead of writing scripts, adapters, or device-specific services, you create automation visually through a low-code workflow engine. The system handles ingestion, validation, routing, state updates, and integrations — no custom middleware required.',
    },
    {
      q: 'Do I need RCOM Agents, or can devices connect directly?',
      a: (
        <>
          <p className="mb-2">You can use both.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Direct-to-Gateway:</strong> Ideal for REST/MQTT-capable
              devices.
            </li>
            <li>
              <strong>With RCOM Agents:</strong> Recommended for RFID portals,
              high-read zones, and environments with noise or intermittent
              connectivity. Agents filter, buffer, and normalize data at the
              edge before sending it to Gateway.
            </li>
          </ul>
        </>
      ),
    },
    {
      q: 'What types of data or events can the Gateway process?',
      a: (
        <>
          <p className="mb-2">Anything from Auto-ID or IoT, including:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              EPCIS 2.0 events (Object, Aggregation, Association, Transaction)
            </li>
            <li>RFID tag reads (UHFTagRead)</li>
            <li>Barcode scans</li>
            <li>BLE sensor values</li>
            <li>Vision system triggers</li>
            <li>REST API payloads</li>
            <li>MQTT messages</li>
          </ul>
          <p className="mt-2">
            The Event Processor routes each event to the correct workflow
            automatically.
          </p>
        </>
      ),
    },
    {
      q: 'How does RCOM Gateway maintain the state of assets or items?',
      a: 'Through Object Groups — structured digital twins. Each object stores attributes like ID, status, location, timestamps, and history. Workflows update these objects in real time as events arrive, ensuring single-source, continuously updated state.',
    },
    {
      q: 'Can I integrate Gateway with SAP, Oracle, or other enterprise systems?',
      a: (
        <>
          <p className="mb-2">Absolutely. Gateway supports:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>REST (sync/async)</li>
            <li>Webhooks</li>
            <li>SQL read/write</li>
            <li>MQTT publish</li>
          </ul>
          <p className="mt-2">
            This makes it easy to push updates, fetch master data, or trigger
            ERP/WMS actions without custom middleware.
          </p>
        </>
      ),
    },
    {
      q: 'How do I build automation flows? Do I need coding skills?',
      a: (
        <>
          <p className="mb-2">
            No coding is required. Automation is built using a drag-and-drop
            visual workflow designer with actions for:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>API calls</li>
            <li>Data transformation</li>
            <li>Object creation/updates</li>
            <li>Notifications</li>
            <li>Timers and conditional logic</li>
            <li>EPCIS processing</li>
          </ul>
          <p className="mt-2">
            Developers can extend with scripts, but operations teams can build
            end-to-end workflows without programming.
          </p>
        </>
      ),
    },
    {
      q: 'Can RCOM Gateway handle high event volumes?',
      a: (
        <>
          <p className="mb-2">
            Yes. RCOM uses a microservices architecture with:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Horizontally scalable workflow executors</li>
            <li>Parallel event queues</li>
            <li>MQTT at QoS1/2</li>
            <li>PostgreSQL/MSSQL backend</li>
          </ul>
          <p className="mt-2">
            It is used in production scenarios with continuous high-frequency
            RFID or sensor traffic.
          </p>
        </>
      ),
    },
    {
      q: 'How quickly can I go from device event → ERP update?',
      a: 'Typically under a second for synchronous flows. Asynchronous flows can process thousands of events per minute with controlled batching or background processing.',
    },
    {
      q: 'How do I visualize locations or zones (warehouse, rooms, gates)?',
      a: (
        <>
          <p className="mb-2">Using Custom Maps:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Upload your floorplan</li>
            <li>Draw zones (bins, areas, rooms)</li>
            <li>Link object coordinates</li>
            <li>See real-time movement and item distribution</li>
            <li>Trigger workflows on zone entry/exit</li>
          </ul>
          <p className="mt-2">
            Great for warehouses, hospitals, factories, or any spatial workflow.
          </p>
        </>
      ),
    },
    {
      q: 'Is the system secure and multi-tenant?',
      a: (
        <>
          <p className="mb-2">Yes. Security includes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Role-based access</li>
            <li>Per-module CRUD permissions</li>
            <li>Access Groups for data segmentation</li>
            <li>External authentication (OpenID)</li>
            <li>TLS/HTTPS</li>
            <li>Audit and history logs</li>
          </ul>
          <p className="mt-2">
            Multi-tenant deployments isolate data, users, workflows, and
            dashboards by client or site.
          </p>
        </>
      ),
    },
    {
      q: 'How do I deploy RCOM Gateway?',
      a: (
        <>
          <p className="mb-2">Deployments are flexible:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Docker Compose (single server)</li>
            <li>Kubernetes for scaling</li>
            <li>On-prem or cloud (customer or vendor-hosted)</li>
            <li>
              Supports dev/stage/prod environments with package-based migration
            </li>
          </ul>
        </>
      ),
    },
  ];

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
  const displayedApplications = showAllApps ? filteredApplications : filteredApplications.slice(0, 6)
  const steps = [
    { name: 'Connect', icon: Link2, description: 'Link devices' },
    { name: 'Detect', icon: Eye, description: 'Capture data' },
    { name: 'Decide', icon: Brain, description: 'Process logic' },
    { name: 'Act', icon: Zap, description: 'Take action' },
    { name: 'Verify', icon: CheckCircle2, description: 'Confirm results' }
  ];
  
  const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0)

  useEffect(() => {
    setShowAllApps(false)
  }, [activeFilters])

  return (
    
    <div className="min-h-screen text-slate-100 bg-slate-950">

     <PlatformGateway/>
      
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
            <h2 className="text-3xl font-bold mb-2">Hundreds of ways to use RCOM. <span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent'> Here are some favorites</span></h2>
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
            <div className="text-sm text-slate-400">Showing {displayedApplications.length} of {filteredApplications.length} matching applications</div>
          </div>

          {/* Application Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedApplications.map(app => (
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
          {filteredApplications.length > 6 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllApps(prev => !prev)}
                className="px-6 py-3 rounded-lg font-semibold border border-slate-600 text-slate-100 hover:bg-white/5 transition"
              >
                {showAllApps ? 'Show less' : 'Show more'}
              </button>
            </div>
          )}
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
          {/* <div className={lightCard}>
            <blockquote className="text-xl text-slate-800 italic mb-2">
              "We automated gate checks and synced to ERP in real time — reconciliation went from hours to minutes."
            </blockquote>
            <div className="text-slate-600">— Operations Manager, Fortune 500 Logistics</div>
          </div> */}
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
                  <span className="font-semibold text-lg pr-4 py-1">{faq.q}</span>
                  <ChevronDown size={22} className={`flex-shrink-0 transition ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && <div className="pb-4 text-slate-300 leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl p-12 text-center">
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-800"></div>
             <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
             }}></div>
             
             <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Automate Your Operation in Real Time
                </h2>
                <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                   See RCOM Gateway in action with a walkthrough tailored to your use case.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-all shadow-xl">
                    Schedule a Demo
                  </button>
                  </Link>
                
       
                  <Link to="https://docs.rcom-gateway.com/" className="w-full sm:w-auto">
              <button className="border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white/10">Read the Docs</button>
            </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default App
