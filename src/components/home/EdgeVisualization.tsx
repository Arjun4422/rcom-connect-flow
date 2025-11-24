import { Smartphone, Radio, Barcode, Camera, Thermometer, Workflow, Database, Cloud, Settings } from 'lucide-react';
import React from 'react';

export default function EdgeVisualization() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* CONNECTION LINES */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left fan-in lines from devices to Agent */}
        <g className="animate-flow">
          <line x1="12%" y1="15%" x2="40%" y2="35%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="12%" y1="27%" x2="40%" y2="40%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="12%" y1="40%" x2="40%" y2="45%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
          </line>
          <line x1="12%" y1="53%" x2="40%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite" />
          </line>
          <line x1="12%" y1="66%" x2="40%" y2="55%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2.3s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Center line Agent -> Gateway */}
        <g className="animate-flow-2">
          <line x1="45%" y1="45%" x2="65%" y2="45%" stroke="url(#lineGradient)" strokeWidth="3" opacity="0.9">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Right fan-out lines Gateway -> Enterprise */}
        <g className="animate-flow-3">
          <line x1="70%" y1="45%" x2="88%" y2="15%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.1s" repeatCount="indefinite" />
          </line>
          <line x1="70%" y1="45%" x2="88%" y2="27%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2.4s" repeatCount="indefinite" />
          </line>
          <line x1="70%" y1="45%" x2="88%" y2="40%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.6s" repeatCount="indefinite" />
          </line>
          <line x1="70%" y1="45%" x2="88%" y2="53%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2.2s" repeatCount="indefinite" />
          </line>
          <line x1="70%" y1="45%" x2="88%" y2="66%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.7s" repeatCount="indefinite" />
          </line>
        </g>
      </svg>

      {/* LEFT: Devices (5 items) */}
      <DeviceIcon
        className="absolute left-[2%] sm:left-[3%] top-[15%] -translate-y-1/2"
        icon={<Radio className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
        label="RFID Reader"
        delay="0s"
      />
      <DeviceIcon
        className="absolute left-[2%] sm:left-[3%] top-[27%] -translate-y-1/2"
        icon={<Barcode className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
        label="Barcode"
        delay="0.2s"
      />
      <DeviceIcon
        className="absolute left-[2%] sm:left-[3%] top-[40%] -translate-y-1/2"
        icon={<Smartphone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
        label="BLE Tag"
        delay="0.4s"
      />
      <DeviceIcon
        className="absolute left-[2%] sm:left-[3%] top-[53%] -translate-y-1/2"
        icon={<Thermometer className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
        label="Sensor"
        delay="0.6s"
      />
      <DeviceIcon
        className="absolute left-[2%] sm:left-[3%] top-[66%] -translate-y-1/2"
        icon={<Camera className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
        label="Camera"
        delay="0.8s"
      />

      {/* CENTER: Agent */}
      <div className="absolute left-[40%] top-[45%] -translate-y-1/2 -translate-x-1/2">
        <AgentNode />
      </div>

      {/* CENTER-RIGHT: Gateway */}
      <div className="absolute left-[64%] top-[45%] -translate-y-1/2 -translate-x-1/2">
        <GatewayNode />
      </div>

      {/* RIGHT: Enterprise icons (5 items) */}
      <EnterpriseIcon
        className="absolute right-[2%] sm:right-[3%] top-[15%] -translate-y-1/2"
        icon={<Workflow className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
        label="Workflows"
        delay="0s"
      />
      <EnterpriseIcon
        className="absolute right-[2%] sm:right-[3%] top-[27%] -translate-y-1/2"
        icon={<Database className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
        label="Digital Twins"
        delay="0.2s"
      />
      <EnterpriseIcon
        className="absolute right-[2%] sm:right-[3%] top-[40%] -translate-y-1/2"
        icon={<Barcode className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
        label="Custom UI"
        delay="0.4s"
      />
      <EnterpriseIcon
        className="absolute right-[2%] sm:right-[3%] top-[53%] -translate-y-1/2"
        icon={<Cloud className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
        label="ERP / WMS"
        delay="0.6s"
      />
      <EnterpriseIcon
        className="absolute right-[2%] sm:right-[3%] top-[66%] -translate-y-1/2"
        icon={<Settings className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
        label="Analytics"
        delay="0.8s"
      />
    </div>
  );
}

function DeviceIcon({
  icon,
  label,
  delay,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  delay: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-1 sm:gap-2 md:gap-3 animate-fade-in-left ${className ?? ''}`}
      style={{ animationDelay: delay }}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 hover:scale-110 transition-transform duration-300 hover:border-cyan-500/50">
        {icon}
      </div>
      <span className="text-[10px] sm:text-xs md:text-sm text-slate-300 whitespace-nowrap">{label}</span>
    </div>
  );
}

function AgentNode() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-cyan-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl group-hover:bg-cyan-500/30 transition-all duration-300" />
      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border-2 border-cyan-500/50 backdrop-blur-sm flex flex-col items-center justify-center gap-1 sm:gap-2 hover:scale-105 transition-transform duration-300">
        <Radio className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-400 animate-pulse" />
        <div className="text-center">
          <div className="text-[10px] sm:text-xs md:text-xs font-semibold text-white">RCOM</div>
          <div className="text-[10px] sm:text-xs md:text-xs font-semibold text-cyan-400">Agents</div>
          <div className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-400">(Edge)</div>
        </div>
      </div>
    </div>
  );
}

function GatewayNode() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-violet-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-2xl group-hover:bg-violet-500/30 transition-all duration-300" />
      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border-2 border-violet-500/50 backdrop-blur-sm flex flex-col items-center justify-center gap-1 sm:gap-2 hover:scale-105 transition-transform duration-300">
        <Database className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 text-violet-400 animate-pulse" />
        <div className="text-center">
          <div className="text-[10px] sm:text-xs md:text-sm font-bold text-white">RCOM</div>
          <div className="text-[10px] sm:text-xs md:text-sm font-bold text-violet-400">Gateway</div>
          <div className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-400">(Core Platform)</div>
        </div>
      </div>
    </div>
  );
}

function EnterpriseIcon({
  icon,
  label,
  delay,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  delay: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-1 sm:gap-2 md:gap-3 animate-fade-in-right ${className ?? ''}`}
      style={{ animationDelay: delay }}
    >
      <span className="text-[10px] sm:text-xs md:text-xs text-slate-300 whitespace-nowrap">{label}</span>
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md sm:rounded-lg bg-gradient-to-br from-violet-800/50 to-violet-900/50 border border-violet-700/50 flex items-center justify-center text-violet-400 hover:scale-110 transition-transform duration-300 hover:border-violet-500/50">
        {icon}
      </div>
    </div>
  );
}