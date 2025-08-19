import React, { useState, useEffect } from 'react';
import { 
  Package, 
  Truck, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  MapPin,
  Zap,
  Eye,
  Activity,
  PlayCircle
} from 'lucide-react';

export default function WarehouseDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeDevices, setActiveDevices] = useState(1247);
  const [uptime, setUptime] = useState(99.8);
  const [eventsPerHour, setEventsPerHour] = useState(15.2);
  const [processing, setProcessing] = useState(false);

  // Live activities
  const [activities, setActivities] = useState([
    { id: 1, type: 'scan', message: 'Pallet scanned', location: 'Warehouse A - Gate 3', status: 'success', icon: '✓' },
    { id: 2, type: 'location', message: 'Asset located', location: 'Hospital B - Zone 2', status: 'info', icon: '📍' },
    { id: 3, type: 'workflow', message: 'Workflow triggered', location: 'Factory C - Line 1', status: 'warning', icon: '⚡' }
  ]);

  const [locations] = useState([
    'Warehouse A - Gate 3',
    'Hospital B - Zone 2', 
    'Factory C - Line 1'
  ]);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate live metrics
      setActiveDevices(prev => Math.max(1200, Math.min(1300, prev + Math.floor(Math.random() * 6) - 2)));
      setUptime(prev => Math.max(99.0, Math.min(100, prev + (Math.random() - 0.5) * 0.1)));
      setEventsPerHour(prev => Math.max(10, Math.min(20, prev + (Math.random() - 0.5) * 0.5)));
      
      // Trigger processing animation
      if (Math.random() > 0.7) {
        setProcessing(true);
        setTimeout(() => setProcessing(false), 1500);
      }
      
      // Update activities occasionally
      if (Math.random() > 0.8) {
        const newActivities = [
          { type: 'scan', message: 'Pallet scanned', status: 'success', icon: '✓' },
          { type: 'location', message: 'Asset located', status: 'info', icon: '📍' },
          { type: 'workflow', message: 'Workflow triggered', status: 'warning', icon: '⚡' },
          { type: 'shipment', message: 'Shipment processed', status: 'success', icon: '📦' }
        ];
        
        const newActivity = {
          id: Date.now(),
          ...newActivities[Math.floor(Math.random() * newActivities.length)],
          location: locations[Math.floor(Math.random() * locations.length)]
        };
        
        setActivities(prev => [newActivity, ...prev.slice(0, 2)]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-80 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl p-6 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-24 h-24 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border border-purple-400 rounded-full"></div>
        <div className="absolute top-16 left-1/3 w-12 h-12 border border-green-400 rounded-full"></div>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-bold text-white">Live Operations Dashboard</h2>
            <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-sm font-medium">Real-time</span>
            </div>
          </div>
        </div>
        
        {/* RFID Event Live Badge */}
        <div className="bg-blue-600 px-4 py-2 rounded-lg">
          <div className="text-white font-semibold text-sm">RFID Event</div>
          <div className="text-blue-200 text-xs">Live</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6 h-48 relative z-10">
        
        {/* Left Side - Metrics */}
        <div className="col-span-7">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400 mb-1">
                {activeDevices.toLocaleString()}
              </div>
              <div className="text-slate-300 text-sm">Active Devices</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400 mb-1">
                {uptime.toFixed(1)}%
              </div>
              <div className="text-slate-300 text-sm">Uptime</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">
                {eventsPerHour.toFixed(1)}M
              </div>
              <div className="text-slate-300 text-sm">Events/Hour</div>
            </div>
          </div>

          {/* Location Status */}
          <div className="space-y-2">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <span className="text-slate-300 text-sm">{location}</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-xs">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Live Feed */}
        <div className="col-span-5">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 h-full">
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div 
                  key={activity.id} 
                  className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-500 ${
                    index === 0 ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-white/5'
                  }`}
                >
                  <div className="text-lg">{activity.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-medium">{activity.message}</div>
                    <div className="text-slate-400 text-xs truncate">{activity.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Processing Indicator */}
      {processing && (
        <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-blue-600 px-4 py-2 rounded-lg">
          <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">Processing</span>
          <span className="text-blue-200 text-sm">&lt;1ms</span>
        </div>
      )}

      {/* Bottom Right Icon */}
      <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-slate-400 rounded"></div>
      </div>
    </div>
  );
}