import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Play,
  Pause,
  Activity,
} from "lucide-react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  target, 
  suffix = '', 
  prefix = '', 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

const LiveDataStream: React.FC = () => {
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [isStreaming, setIsStreaming] = useState(true);

  useEffect(() => {
    if (!isStreaming) return;

    const interval = setInterval(() => {
      setDataPoints(prev => {
        const newPoint = Math.random() * 100;
        const updated = [...prev, newPoint].slice(-20);
        return updated;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const maxValue = Math.max(...dataPoints, 1);

  return (
    <div className="bg-slate-900/50 rounded-lg p-6 border border-blue-500/20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Activity className="w-5 h-5 text-blue-400 mr-2" />
          <span className="text-white font-medium">Live Event Stream</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsStreaming(!isStreaming)}
          className="bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20"
        >
          {isStreaming ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
      </div>
      
      <div className="h-24 flex items-end space-x-1 overflow-hidden">
        {dataPoints.map((point, index) => (
          <div
            key={index}
            className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-sm transition-all duration-200 min-w-[3px]"
            style={{
              height: `${(point / maxValue) * 100}%`,
              opacity: 0.3 + (index / dataPoints.length) * 0.7,
            }}
          />
        ))}
      </div>
      
      <div className="mt-3 text-xs text-gray-400">
        Processing <span className="text-blue-400 font-medium">
          <AnimatedCounter target={1247} suffix=" events/sec" />
        </span>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />
      <FloatingParticles />
      
      <div className="relative z-10 container mx-auto px-6 pt-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm font-medium">
              🚀 Enterprise IoT Integration Platform
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">RCOM Gateway</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Event‑Driven Automation
              </span>
              <br />
              <span className="text-white">for the Physical World</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-5xl mx-auto">
            RCOM Gateway is a powerful software platform that connects your world of Auto-ID devices to your world of software. It's an integration hub that captures every scan, read, or sensor signal and turns it into immediate, automated action. With a modular, scalable architecture, RCOM Gateway lets you build digital twin models of your operations and streamline processes without writing a line of code.
              </p>
          </div>

          <div className="flex flex-row gap-6 justify-center items-stretch mb-12">
            <Card className="bg-slate-800/50 border-slate-700 flex-1 min-w-[180px]">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter target={99.9} suffix="%" />
                </div>
                <div className="text-sm text-gray-400">Uptime SLA</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 flex-1 min-w-[180px]">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  <AnimatedCounter target={15} suffix="M+" />
                </div>
                <div className="text-sm text-gray-400">Events/Hour</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 flex-1 min-w-[180px]">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  &lt;1ms
                </div>
                <div className="text-sm text-gray-400">Processing</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 flex-1 min-w-[180px]">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter target={1000} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Devices</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule Technical Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;