import React from 'react';
import { ArrowRight, Database, Cpu, Zap, Eye, Network, Play, ArrowDown } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Connect & Capture",
    icon: <Database className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    content: {
      title: "Connect & Capture (Event Ingestion)",
      description: "RCOM listens to your operation via ingestion channels: MQTT, REST API endpoints, and the Scheduler. Every incoming item is treated as an event. Supported trigger types include:",
      details: [
        "EpcisMessage (full EPCIS 2.0 docs)",
        "EpcisObject (per-event EPCIS records)", 
        "Object Change (CRUD on stored objects)",
        "On Timer (timer completions from workflows)",
        "Ghost Data (compact payloads used with RCOM Mobile)"
      ]
    }
  },
  {
    id: 2,
    title: "Match & Route",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    content: {
      title: "Match & Route (Event Processor)",
      description: "An Event Processor watches your selected source (REST route, MQTT topic, or scheduled trigger), applies filters (e.g., EPCIS bizStep, disposition, topic), maps payload fields to workflow inputs, and selects the correct workflow version for controlled, repeatable execution.",
      details: [
        "Watches REST routes, MQTT topics, or scheduled triggers",
        "Applies EPCIS bizStep, disposition, and topic filters",
        "Maps payload fields to workflow inputs",
        "Selects correct workflow version for execution"
      ]
    }
  },
  {
    id: 3,
    title: "Execute Automation",
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    content: {
      title: "Execute Automation (Low-Code Workflow Engine)",
      description: "Your visual workflow runs at high throughput: validate/transform data, make decisions, branch/loop, create/update/read objects, publish MQTT, start timers, push updates to dashboards/maps, log results, or run custom scripts when needed. Built for parallelism, it handles device bursts smoothly.",
      details: [
        "Validate/transform data and make decisions",
        "Branch/loop through complex logic flows",
        "Create/update/read objects and publish MQTT",
        "Start timers and push updates to dashboards/maps",
        "Log results and run custom scripts when needed"
      ]
    }
  },
  {
    id: 4,
    title: "Persist as Digital Twins",
    icon: <Eye className="w-6 h-6" />,
    color: "from-green-500 to-teal-500",
    content: {
      title: "Persist as Digital Twins (Object Groups)",
      description: "Store operational state as Objects inside Object Groups—your digital twins for pallets, patients, assets, rooms, devices, etc. Schemas support typed attributes, relations, audit/history, and precise storage hierarchy (Storage Number → Location → Area → Bin). Workflows can set/query storage and attributes at any time.",
      details: [
        "Digital twins for pallets, patients, assets, rooms, devices",
        "Typed attributes, relations, audit/history",
        "Storage hierarchy (Number → Location → Area → Bin)",
        "Workflows can set/query storage and attributes anytime"
      ]
    }
  },
  {
    id: 5,
    title: "Visualize & Interact",
    icon: <Network className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    content: {
      title: "Visualize & Interact (Custom UI & Maps)",
      description: "See outcomes instantly on Custom UIs (HTML/JS dashboards, forms) and Custom Maps (your floorplans with zones). Teams track flows in real time, click a zone to inspect contents, and follow guided actions—scoped by Access Groups; UIs can subscribe to MQTT for live updates.",
      details: [
        "Custom UIs (HTML/JS dashboards, forms)",
        "Custom Maps (floorplans with zones)",
        "Real-time flow tracking and zone inspection",
        "Access Groups scoping and MQTT live updates"
      ]
    }
  }
];

const StepCard = ({ step, index, isLast }) => (
  <div key={step.id} className="relative">
    {/* Mobile Layout */}
    <div className="flex flex-col sm:hidden items-center">
      <div 
        className={`
          w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg mb-2
        `}
      >
        {step.icon}
      </div>
      <div className="w-8 h-8 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center font-bold text-gray-700 mb-2">
        {step.id}
      </div>
      <div 
        className={`
          bg-white rounded-2xl shadow-lg p-4 border-l-4 border-gradient-to-b w-full max-w-xs mx-auto mb-2
        `}
        style={{ borderLeftColor: step.color.includes('blue') ? '#3b82f6' : step.color.includes('purple') ? '#8b5cf6' : step.color.includes('yellow') ? '#f59e0b' : step.color.includes('green') ? '#10b981' : '#6366f1' }}
      >
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {step.content.title}
        </h3>
        <p className="text-gray-600 mb-2 leading-relaxed">
          {step.content.description}
        </p>
        <div>
          <div className="border-t border-gray-200 pt-2">
            <ul className="grid grid-cols-1 gap-1">
              {step.content.details.map((detail, idx) => (
                <li key={idx} className="text-sm text-gray-500 flex items-start">
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mt-1 mr-2 flex-shrink-0`}></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Vertical Arrow (except for last item) */}
      {!isLast && (
        <div className="flex flex-col items-center my-2">
          <ArrowDown className="w-5 h-5 text-gray-400" />
        </div>
      )}
    </div>
    {/* Desktop Layout */}
    <div className="hidden sm:flex items-center space-x-4 md:space-x-6">
      {/* Icon */}
      <div 
        className={`
          w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg flex-shrink-0
        `}
      >
        {step.icon}
      </div>
      {/* Connection Line */}
      <div className="w-10 md:w-12 h-0.5 bg-gray-300 flex-shrink-0"></div>
      {/* Number Circle */}
      <div className="w-10 h-10 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center font-bold text-gray-700 flex-shrink-0">
        {step.id}
      </div>
      {/* Connection Line */}
      <div className="w-10 md:w-12 h-0.5 bg-gray-300 flex-shrink-0"></div>
      {/* Content Block */}
      <div className="flex-1 min-w-0">
        <div 
          className={`
            bg-white rounded-2xl shadow-lg p-6 border-l-4 border-gradient-to-b
          `}
          style={{ borderLeftColor: step.color.includes('blue') ? '#3b82f6' : step.color.includes('purple') ? '#8b5cf6' : step.color.includes('yellow') ? '#f59e0b' : step.color.includes('green') ? '#10b981' : '#6366f1' }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {step.content.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {step.content.description}
          </p>
          <div>
            <div className="border-t border-gray-200 pt-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {step.content.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-start">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mt-1.5 mr-2 flex-shrink-0`}></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Desktop Vertical Arrow (except for last item) */}
    {!isLast && (
      <div className="hidden sm:flex justify-start ml-5 mt-4 mb-2">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    )}
  </div>
);

const RCOMGatewayWorkflow = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 sm:py-12 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            How it works
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> (end-to-end)</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4 sm:mb-6">
            How RCOM turns scans into system actions
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From the first device read to a live result — in <span className="font-semibold text-indigo-600">milliseconds</span>.
          </p>
        </div>

        {/* Responsive Flow */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}

        
        </div>

        {/* Add-on Module */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-8">
          
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4 border-orange-500 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Orchestrate by time (Scheduler & On-Timer)
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Not everything is device-driven. Use the Scheduler to fire events on a schedule (daily runs, one-offs) and the On Timer trigger to resume a workflow after a delay (e.g., "re-check in 10 minutes"). Event Processors listen for these timer events and continue the flow automatically.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="text-sm text-gray-500 flex items-start">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>Schedule events (daily runs, one-offs)</span>
                    </li>
                    <li className="text-sm text-gray-500 flex items-start">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>On Timer trigger for workflow delays</span>
                    </li>
                    <li className="text-sm text-gray-500 flex items-start">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>Event Processors listen for timer events</span>
                    </li>
                    <li className="text-sm text-gray-500 flex items-start">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>Automatic flow continuation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      

        {/* Performance Badge */}
       
      </div>
    </div>
  );
};

export default RCOMGatewayWorkflow;