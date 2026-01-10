import React from 'react';
import { User, ShieldCheck, Mail, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => (
  <div className="max-w-5xl mx-auto px-6 pt-6 pb-12">
    {/* --- Punchy Hero Intro --- */}
    <div className="text-center mb-8 px-4">
      <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter font-serif uppercase leading-none">
        Road Trip Truths.
      </h1>
      <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium italic">
        <strong>BookMyCar.live</strong> is an independent guide built to help you avoid expensive mistakes on Indian roads.
      </p>
    </div>

    <div className="space-y-8">
      {/* --- User-Focused Founder Section --- */}
      <section className="bg-blue-600 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden group">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white/20 p-1.5 rounded-lg">
              <User className="text-white" size={18} />
            </div>
            <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">The Mission</h2>
          </div>

          <div className="space-y-3 text-blue-50">
            <p className="text-lg md:text-xl leading-snug font-bold italic uppercase tracking-tighter">
              "Most disasters happen because of bad info, not bad roads."
            </p>
            <p className="text-xs md:text-base font-medium text-white/90 border-l-2 border-white/30 pl-4 py-0.5">
              Families pay 3x for damages they didn't even cause. This site exists so you don’t have to learn the hard way.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-blue-500/50 pt-6">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-base shadow-lg">RN</div>
            <div>
              <p className="font-black text-base uppercase tracking-tight">Rajesh Navsagar</p>
              <p className="text-[9px] text-blue-200 uppercase tracking-[0.2em] font-bold opacity-80 mb-1">Founder & Expert Guide</p>
              <p className="text-[10px] md:text-xs text-blue-100/90 font-medium leading-relaxed max-w-md">
                Independent road-travel researcher with multi-state driving experience across India (2019–2026).
              </p>
            </div>
          </div>
        </div>
        <ShieldCheck className="absolute -bottom-6 -right-6 text-white/5 transform group-hover:scale-110 transition-transform duration-700" size={150} />
      </section>

      {/* --- Bulleted Why Section --- */}
      <section>
        <h2 className="text-xl font-black text-gray-900 mb-6 border-b border-gray-100 pb-2 flex items-center gap-2 uppercase tracking-tight">
          Honest Advice <span className="text-[9px] font-medium text-gray-400 tracking-widest">(Real Talk)</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-blue-100 transition-all shadow-sm">
            <ShieldCheck className="text-blue-600 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-black text-gray-900 mb-1 text-sm uppercase tracking-tight">No Brand Favorites</h3>
              <p className="text-gray-500 text-xs leading-relaxed font-medium">I don't take referral fees. If a company has poor service, I'll say it.</p>
            </div>
          </div>
          <div className="flex gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-blue-100 transition-all shadow-sm">
            <BookOpen className="text-blue-600 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-black text-gray-900 mb-1 text-sm uppercase tracking-tight">Real Driving Logs</h3>
              <p className="text-gray-500 text-xs leading-relaxed font-medium">Every guide comes from actual odometer readings. No generic theory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Consolidated Transparency Notice --- */}
      <section className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="flex items-center gap-2 mb-3 text-blue-400 relative z-10">
          <AlertCircle size={20} />
          <h2 className="text-sm font-black uppercase tracking-widest">Independent Truth</h2>
        </div>
        <div className="text-gray-400 text-xs md:text-sm leading-relaxed space-y-3 relative z-10">
          <p>
            BookMyCar.live is an <strong>independent observational guide</strong>. I am not affiliated with Zoomcar or Revv.
          </p>
          <p className="border-l-2 border-blue-600 pl-4 py-0.5 text-white/80">
            This site exists to help Indian travelers understand rules through verified experience.
          </p>
        </div>
        <ShieldCheck className="absolute -top-6 -right-6 text-white/5" size={100} />
      </section>

      {/* --- Strong CTAs --- */}
      <section className="pt-6 border-t border-gray-100">
        <h2 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-widest">Where to start?</h2>
        <div className="flex flex-col md:flex-row gap-3">
          <Link to="/rules" className="flex-1 flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-600 transition-all group shadow-sm">
            <span className="font-black text-gray-900 text-[10px] uppercase tracking-widest">State rules</span>
            <ArrowRight className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" size={16} />
          </Link>
          <Link to="/blog/car-rental-scams-india" className="flex-1 flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-600 transition-all group shadow-sm">
            <span className="font-black text-gray-900 text-[10px] uppercase tracking-widest">Avoid Scams</span>
            <ArrowRight className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" size={16} />
          </Link>
        </div>
      </section>
    </div>
  </div>
);

export default About;