import { 
  Handshake, 
  Settings, 
  Globe, 
  ArrowRight, 
  Building2, 
  Cpu, 
  CheckCircle2, 
  Users, 
  ExternalLink,
  Briefcase,
  Code2
} from 'lucide-react';
import { Link } from "react-router-dom";


const PartnersPage = () => {

  const ecosystemBenefits = [
    {
      title: 'Project Management',
      desc: 'Certified partners who manage complex deployments, ensuring timeline adherence and resource allocation.',
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Custom Customization',
      desc: 'Dev-partners capable of building custom RCOM Agents, UI plugins, and bespoke workflow logic.',
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Global Integration',
      desc: 'Local support and onsite installation services across Globe.',
      icon: Globe,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen text-slate-100 bg-slate-950 font-sans flex flex-col">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}/>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
            <Handshake className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">RCOM Ecosystem</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Stronger Together.<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Our Partner Network.
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver end-to-end Auto-ID solutions. 
            From strategic management to technical customization, our partners extend the capabilities of the RCOM platform.
          </p>

          <Link to="/contact">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-blue-900/30">
            Become a Partner
          </button>
          </Link>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="py-20 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why work with our Partners?</h2>
            <p className="text-slate-400">Specialized expertise to tailor RCOM to your specific needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ecosystemBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PARTNERS SECTION */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white">Featured Partners</h2>
              <p className="text-slate-400 max-w-xl">
                Industry leaders delivering consulting, integration, and hardware excellence on the RCOM platform.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* MHP Card */}
            <div className="group relative bg-slate-900/40 rounded-3xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building2 className="w-32 h-32 text-blue-400" />
              </div>
              <div className="p-8 lg:p-12 relative z-10">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 shadow-lg">
                  {/* Placeholder for MHP Logo */}
                  <span className="text-slate-900 font-black text-xl tracking-tighter">MHP</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">MHP</h3>
                <p className="text-blue-400 font-semibold mb-6 text-sm uppercase tracking-wide">Management & IT Consulting</p>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  As a leading process and IT consultant, MHP (A Porsche Company) bridges the gap between management consulting and IT solutions. They specialize in optimizing digital supply chains and automotive manufacturing processes using RCOM Gateway.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">Process Optimization</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">Automotive</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">SAP Integration</span>
                </div>
             
              </div>
            </div>

            {/* Coriel Card */}
            <div className="group relative bg-slate-900/40 rounded-3xl border border-slate-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-32 h-32 text-purple-400" />
              </div>
              <div className="p-8 lg:p-12 relative z-10">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 shadow-lg">
                   {/* Placeholder for Coriel Logo */}
                   <span className="text-slate-900 font-black text-sm tracking-tighter">CORIEL</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Coriel</h3>
                <p className="text-purple-400 font-semibold mb-6 text-sm uppercase tracking-wide">RFID & IoT Solutions</p>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Coriel delivers complete Auto-ID solutions, providing expert hardware selection, site surveys, and custom software integration. They ensure the physical layer of your IoT stack communicates perfectly with RCOM Agents.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">Hardware Integration</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">Site Surveys</span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">Custom Dev</span>
                </div>
              
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-xl mb-6">
            <Users className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join the Ecosystem
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Whether you are a system integrator, a hardware vendor, or a management consultancy, RCOM provides the technology foundation for your client's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-blue-900/30">
            Become a Partner
          </button>
          </Link>
          </div>
        </div>
      </section>


    </div>
  );
};

export default PartnersPage;