import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Play,
  Zap,
  Shield,
  Globe,
  Workflow,
  User2, // as user management
  Waypoints,
  Wifi, // as connectivity
  CalendarSync,
} from "lucide-react";
import { Link } from "react-router-dom";

// Responsive icon sizes and positions
const animatedIcons = [
  {
    icon: Workflow,
    className:
      "left-[8vw] top-[12vw] sm:left-[10%] sm:top-[20%] animate-float-slow text-primary-glow opacity-30",
    size: { base: 36, sm: 48, md: 56, lg: 64 },
    delay: "animation-delay-0",
  },
  {
    icon: User2,
    className:
      "left-[60vw] top-[6vw] sm:left-[70%] sm:top-[10%] animate-float-medium text-white opacity-20",
    size: { base: 28, sm: 40, md: 48, lg: 56 },
    delay: "animation-delay-200",
  },
  {
    icon: Waypoints,
    className:
      "left-[20vw] top-[60vw] sm:left-[30%] sm:top-[65%] animate-float-fast text-primary opacity-25",
    size: { base: 40, sm: 56, md: 64, lg: 72 },
    delay: "animation-delay-400",
  },
  {
    icon: Waypoints,
    className:
      "left-[65vw] top-[50vw] sm:left-[80%] sm:top-[60%] animate-float-medium text-primary-glow opacity-20",
    size: { base: 28, sm: 36, md: 40, lg: 48 },
    delay: "animation-delay-600",
  },
  {
    icon: Waypoints,
    className:
      "left-[40vw] top-[30vw] sm:left-[55%] sm:top-[40%] animate-float-slow text-white opacity-15",
    size: { base: 20, sm: 28, md: 32, lg: 40 },
    delay: "animation-delay-800",
  },
  {
    icon: Wifi,
    className:
      "left-[10vw] top-[70vw] sm:left-[20%] sm:top-[80%] animate-float-medium text-primary opacity-20",
    size: { base: 32, sm: 40, md: 48, lg: 60 },
    delay: "animation-delay-1000",
  },
  {
    icon: CalendarSync,
    className:
      "left-[50vw] top-[65vw] sm:left-[60%] sm:top-[75%] animate-float-fast text-white opacity-15",
    size: { base: 28, sm: 36, md: 44, lg: 52 },
    delay: "animation-delay-1200",
  },
];

const getResponsiveSize = (sizeObj) => {
  // Use window width to determine size
  if (typeof window === "undefined") return sizeObj.lg;
  const width = window.innerWidth;
  if (width < 640) return sizeObj.base;
  if (width < 768) return sizeObj.sm;
  if (width < 1024) return sizeObj.md;
  return sizeObj.lg;
};

import { useEffect, useState } from "react";

const HeroSection = () => {
  // Responsive icon size state
  const [iconSizes, setIconSizes] = useState(
    animatedIcons.map((icon) => getResponsiveSize(icon.size))
  );

  useEffect(() => {
    const handleResize = () => {
      setIconSizes(animatedIcons.map((icon) => getResponsiveSize(icon.size)));
    };
    window.addEventListener("resize", handleResize);
    // Initial set
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-screen max-h-[800px] flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
        {/* Animated Lucide Icons in the background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {animatedIcons.map(({ icon: Icon, className, delay }, i) => (
            <Icon
              key={i}
              className={`absolute ${className} ${delay}`}
              style={{
                filter: "blur(0.5px)",
                transition: "opacity 0.5s",
                zIndex: 0,
              }}
              width={iconSizes[i]}
              height={iconSizes[i]}
            />
          ))}
        </div>

        {/* SVG dot pattern overlay */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                <Zap className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">
                  Introducing the RCOM Gateway Suite
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                RCOM Gateway Suite{" "}
                <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
                  connects every device and orchestrates the edge.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                The RCOM Gateway Suite pairs <span className="text-primary font-semibold">RCOM Agents</span> for edge data collection with <span className="text-primary font-semibold">RCOM Gateway</span> for logic control. Deploy, normalize, and buffer reads at the device layer, then drive enterprise workflows, twins, and alerts without writing custom middleware.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="hero"
                    size="lg"
                    className="group w-full sm:w-auto"
                  >
                    Request a Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/product" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-8 opacity-80">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-glow" />
                  <span className="text-xs sm:text-sm text-gray-300">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary-glow" />
                  <span className="text-xs sm:text-sm text-gray-300">Global Scale</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary-glow" />
                  <span className="text-xs sm:text-sm text-gray-300">Real-Time Processing</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mt-10 lg:mt-0">
              <div className="relative rounded-lg border border-white/10 mx-auto ">
                {/* Dashboard Preview */}
                <div className="bg-enterprise rounded-lg p-4 sm:p-6 mb-3 sm:mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-enterprise-foreground">
                      Live Operations Dashboard
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm text-enterprise-foreground/70">
                        Real-time
                      </span>
                    </div>
                  </div>

                  {/* Mock Data Visualization */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-enterprise-muted rounded-lg p-2 sm:p-4 text-center">
                      <div className="text-lg sm:text-2xl font-bold text-primary-glow mb-1">
                        1,247
                      </div>
                      <div className="text-[10px] sm:text-xs text-enterprise-foreground/70">
                        Active Devices
                      </div>
                    </div>
                    <div className="bg-enterprise-muted rounded-lg p-2 sm:p-4 text-center">
                      <div className="text-lg sm:text-2xl font-bold text-primary-glow mb-1">
                        99.8%
                      </div>
                      <div className="text-[10px] sm:text-xs text-enterprise-foreground/70">
                        Uptime
                      </div>
                    </div>
                    <div className="bg-enterprise-muted rounded-lg p-2 sm:p-4 text-center">
                      <div className="text-lg sm:text-2xl font-bold text-primary-glow mb-1">
                        15.2M
                      </div>
                      <div className="text-[10px] sm:text-xs text-enterprise-foreground/70">
                        Events/Hour
                      </div>
                    </div>
                  </div>

                  {/* Activity Stream */}
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-enterprise-foreground/70">
                        Warehouse A - Gate 3
                      </span>
                      <span className="text-green-400">✓ Pallet scanned</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-enterprise-foreground/70">
                        Hospital B - Zone 2
                      </span>
                      <span className="text-blue-400">📍 Asset located</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-enterprise-foreground/70">
                        Factory C - Line 1
                      </span>
                      <span className="text-yellow-400">⚡ Workflow triggered</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-primary rounded-lg p-2 sm:p-3 shadow-lg min-w-[70px]">
                  <div className="text-[10px] sm:text-xs text-primary-foreground font-medium">
                    RFID Event
                  </div>
                  <div className="text-base sm:text-xl font-bold text-primary-foreground">
                    Live
                  </div>
                </div>

                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-gradient-primary rounded-lg p-2 sm:p-3 shadow-lg min-w-[70px]">
                  <div className="text-[10px] sm:text-xs text-primary-foreground font-medium">
                    Processing
                  </div>
                  <div className="text-base sm:text-xl font-bold text-primary-foreground">
                    &lt;1ms
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Animations for floating icons */}
        <style>
          {`
            @keyframes float-slow {
              0% { transform: translateY(0px) scale(1);}
              50% { transform: translateY(-18px) scale(1.04);}
              100% { transform: translateY(0px) scale(1);}
            }
            @keyframes float-medium {
              0% { transform: translateY(0px) scale(1);}
              50% { transform: translateY(-10px) scale(1.02);}
              100% { transform: translateY(0px) scale(1);}
            }
            @keyframes float-fast {
              0% { transform: translateY(0px) scale(1);}
              50% { transform: translateY(-6px) scale(1.01);}
              100% { transform: translateY(0px) scale(1);}
            }
            .animate-float-slow {
              animation: float-slow 7s ease-in-out infinite;
            }
            .animate-float-medium {
              animation: float-medium 4.5s ease-in-out infinite;
            }
            .animate-float-fast {
              animation: float-fast 2.8s ease-in-out infinite;
            }
            .animation-delay-0 { animation-delay: 0s; }
            .animation-delay-200 { animation-delay: 0.2s; }
            .animation-delay-400 { animation-delay: 0.4s; }
            .animation-delay-600 { animation-delay: 0.6s; }
            .animation-delay-800 { animation-delay: 0.8s; }
            .animation-delay-1000 { animation-delay: 1s; }
            .animation-delay-1200 { animation-delay: 1.2s; }
            @media (max-width: 640px) {
              .rounded-2xl { border-radius: 1rem !important; }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default HeroSection;