
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { Page } from './types';
import { COMPANY_INFO, SERVICES, REVIEWS, TRUST_BADGES } from './constants';
import { Phone, Clock, ShieldCheck, ArrowRight, Star, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home: return <HomeView onNavigate={setCurrentPage} />;
      case Page.Emergency: return <EmergencyView />;
      case Page.Residential: return <ResidentialView />;
      case Page.About: return <AboutView />;
      case Page.Reviews: return <ReviewsView />;
      case Page.Contact: return <ContactView />;
      default: return <HomeView onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black selection:bg-primaryAccent selection:text-black">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>{renderContent()}</main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
};

// --- View Components ---

const HomeView: React.FC<{ onNavigate: (p: Page) => void }> = ({ onNavigate }) => (
  <>
    {/* Minimalist Hero Section */}
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-block bg-primaryAccent px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]">
            24/7 Rapid Response
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-black">
            Roofing<br/>Reinvented<span className="text-primaryAccent">.</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg">
            High-performance roofing solutions delivered with speed, precision, and zero compromise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-black text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-primaryAccent hover:text-black transition-all shadow-xl flex items-center justify-center gap-3"
            >
              Emergency Dispatch
            </a>
            <button 
              onClick={() => onNavigate(Page.Contact)}
              className="bg-transparent text-black border-2 border-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3"
            >
              Get a Quote <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primaryAccent translate-x-6 translate-y-6 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-all"></div>
          <img 
            src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=1000" 
            alt="Modern Roof" 
            className="w-full h-[600px] object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
        </div>
      </div>
    </section>

    {/* Big Typography Section */}
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-12">
          Your home deserves <span className="text-outline">protection</span> without the <span className="text-primaryAccent">hassle.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left max-w-5xl mx-auto pt-12">
          <div className="space-y-4">
            <h3 className="text-primaryAccent text-2xl font-black uppercase">Elite Status</h3>
            <p className="text-gray-400 font-medium">Licensed, insured, and certified by GAF for your ultimate peace of mind.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-primaryAccent text-2xl font-black uppercase">Zero Waste</h3>
            <p className="text-gray-400 font-medium">Clean, professional job sites. We respect your property like it's our own.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-primaryAccent text-2xl font-black uppercase">Instant Fix</h3>
            <p className="text-gray-400 font-medium">Why wait? Our emergency team stabilizes damage within hours, not days.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Spacious Services Section */}
    <section className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <span className="text-primaryAccent font-black uppercase tracking-widest text-xs">Capabilities</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Superior Craft<span className="text-primaryAccent">.</span></h2>
          </div>
          <p className="max-w-md text-gray-500 font-medium text-lg">From minor repairs to complete commercial transformations, we execute with elite standard.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
          {SERVICES.map((s, i) => (
            <div key={s.id} className="bg-white p-16 hover:bg-softGray transition-all group">
              <div className="text-black mb-10 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-3xl font-black uppercase mb-4">{s.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">{s.description}</p>
              <button className="flex items-center gap-2 font-black uppercase text-xs tracking-widest border-b-2 border-primaryAccent pb-1">
                Details <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Quote Split Section */}
    <section className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-softGray">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
          Fix it<br/>today<span className="text-primaryAccent">.</span>
        </h2>
        <p className="text-xl text-gray-500 font-medium mb-12">Stop the damage before it starts. Get a transparent, no-fluff quote in minutes.</p>
        <div className="space-y-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black">1</div>
              <p className="font-bold uppercase tracking-widest text-sm">Tell us about the issue</p>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black">2</div>
              <p className="font-bold uppercase tracking-widest text-sm">Our team reviews and calls</p>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black">3</div>
              <p className="font-bold uppercase tracking-widest text-sm">Problem solved same-day</p>
           </div>
        </div>
      </div>
      <div className="lg:w-1/2 p-6 md:p-12 lg:p-24 bg-black flex flex-col justify-center">
        <div className="bg-white p-1 rounded-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  </>
);

const EmergencyView: React.FC = () => (
  <div className="pt-32 pb-40 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl space-y-12">
        <span className="bg-primaryAccent px-4 py-1 text-xs font-black uppercase tracking-widest">Active Leaks?</span>
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">Emergency<br/>Response<span className="text-primaryAccent">.</span></h1>
        <p className="text-2xl text-gray-500 font-medium leading-relaxed">We don't do "appointments" for emergencies. We do immediate action. When the storm hits, ZMAC rolls out.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-32">
        <div className="space-y-8">
          <h2 className="text-4xl font-black uppercase tracking-tight">Rapid Stabilization</h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">Our first priority is stopping water ingress. We use heavy-duty industrial tarps and rapid-seal composites to protect your interiors while we plan the permanent fix.</p>
          <ul className="space-y-4">
            {['Storm Damage', 'Tree Impacts', 'Structural Failure', 'Active Leaks'].map((item) => (
              <li key={item} className="flex items-center gap-3 font-black uppercase tracking-widest text-sm border-l-4 border-primaryAccent pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800" className="w-full h-[500px] object-cover rounded-3xl" alt="Emergency repair"/>
      </div>
    </div>
  </div>
);

const ResidentialView: React.FC = () => (
  <div className="pt-32 pb-40 bg-softGray">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24 space-y-6">
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter">Residential<span className="text-primaryAccent">.</span></h1>
        <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">The gold standard in home protection. Premium shingles, elite installation, lifetime warranties.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Shingle Replacement', 'Gutter Systems', 'Skylights', 'Attic Ventilation', 'Siding Repair', 'Drone Inspections'].map((item) => (
          <div key={item} className="bg-white p-12 hover:bg-black hover:text-white transition-all group">
            <h3 className="text-2xl font-black uppercase mb-4">{item}</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Precision execution for every corner of your home's exterior.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutView: React.FC = () => (
  <div className="pt-32 pb-40 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">Legacy<span className="text-primaryAccent">.</span></h1>
          <p className="text-2xl text-gray-500 font-medium leading-relaxed">Born in Lakewood, built for Colorado. For 15 years, ZMAC has stood for uncompromising integrity in an industry that needs it most.</p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-6xl font-black text-black">15+</p>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">Years Active</p>
            </div>
            <div>
              <p className="text-6xl font-black text-black">2.5k</p>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">Roofs Saved</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/400/600?random=1" className="w-full h-full object-cover rounded-2xl grayscale" alt="Team 1"/>
          <img src="https://picsum.photos/400/600?random=2" className="w-full h-[400px] object-cover rounded-2xl grayscale mt-12" alt="Team 2"/>
        </div>
      </div>
    </div>
  </div>
);

const ReviewsView: React.FC = () => (
  <div className="pt-32 pb-40 bg-black text-white">
    <div className="container mx-auto px-6">
      <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-center mb-32">Verdict<span className="text-primaryAccent">.</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {REVIEWS.map((r) => (
          <div key={r.id} className="border-t border-white/20 pt-8 space-y-8">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} fill={i <= r.rating ? "#FFD700" : "none"} stroke={i <= r.rating ? "#FFD700" : "currentColor"} />)}
            </div>
            <p className="text-xl font-medium leading-relaxed">"{r.text}"</p>
            <p className="font-black uppercase tracking-widest text-xs text-primaryAccent">{r.author} / {r.date}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactView: React.FC = () => (
  <div className="pt-32 pb-40 bg-white">
    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div className="space-y-12">
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter">Talk<span className="text-primaryAccent">.</span></h1>
        <p className="text-2xl text-gray-500 font-medium">Ready to start? We're on standby 24/7. Reach out via the form or hit the direct line.</p>
        <div className="space-y-8">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Direct Line</p>
            <p className="text-4xl font-black text-black">{COMPANY_INFO.phone}</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email</p>
            <p className="text-xl font-bold text-black underline decoration-primaryAccent decoration-4">{COMPANY_INFO.email}</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Location</p>
            <p className="text-xl font-bold text-black">{COMPANY_INFO.address}</p>
          </div>
        </div>
      </div>
      <div className="bg-softGray p-12 rounded-3xl">
        <ContactForm />
      </div>
    </div>
  </div>
);

export default App;
