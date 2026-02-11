import React from 'react';
import {
  AlertTriangle,
  FileText,
  Shield,
  Fuel,
  AlertCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Rules: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-4 pb-12 px-4">
      <Helmet>
        <title>Rental Car Rules & RTO Reality India | BookMyCar.live</title>
        <meta name="description" content="Indian Road Rules & Rental Guidelines 2026. Real-world checking, documentation advice, and black-plate vs white-plate reality." />
        <link rel="canonical" href="https://bookmycar.live/rules" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-3 border border-blue-100/50">
            <ShieldCheck size={12} /> Road Trip Field Notes
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter leading-[1.1] font-serif uppercase">
            Road Rules They <br /> <span className="text-blue-600">Don't Tell You.</span>
          </h1>
          <p className="text-[10px] md:text-xs text-blue-600 font-black uppercase tracking-widest mb-4">
            "Written from observations made at highway check-posts and real rental experiences."
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium leading-relaxed italic border-l-2 border-blue-100 pl-4 py-1">
            Documents, insurance, and state laws — Practical guidance for Indian travelers, based on real highway logs.
          </p>
        </div>

        {/* Global Compliance Disclaimer - High Visibility */}
        <div className="bg-orange-50/50 border-2 border-orange-200/50 rounded-2xl p-5 mb-8 flex flex-col md:flex-row gap-4 items-center shadow-sm">
          <div className="bg-orange-600 p-2 rounded-xl text-white flex-shrink-0 shadow-lg">
            <AlertCircle size={20} />
          </div>
          <div>
            <h4 className="text-xs font-black text-orange-900 mb-1 uppercase tracking-tighter italic">Honest Compliance Disclaimer</h4>
            <p className="text-[11px] text-orange-900/70 font-bold leading-relaxed">
              Rules vary significantly by state and car provider. The information below is based on personal driving history and common enforcement practices. Actual outcomes may vary by state and provider—always check your rental contract.
            </p>
          </div>
        </div>

        {/* Rajesh's Intro Note */}
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 text-white mb-8 shadow-lg relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-[9px] font-black flex items-center gap-2 mb-3 uppercase tracking-[0.2em] text-blue-400">
              <div className="w-4 h-0.5 bg-blue-400"></div> Rajesh's Reality Check
            </h2>
            <p className="text-lg md:text-xl font-bold leading-tight mb-3 text-white uppercase italic">
              "A missing permit doesn't just cost you money; it costs you your vacation time."
            </p>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium">
              These rules are compiled from real highway checks, rental disputes, and multi-state driving experiences between 2019–2026.
            </p>
          </div>
          <ShieldCheck className="absolute -bottom-6 -right-6 text-white/5 transform group-hover:scale-110 transition-transform duration-700" size={120} />
        </div>

        {/* Section 1: Documents */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-md">
              <FileText className="h-4 w-4" />
            </div>
            <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Essential Documents</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <CheckCircle2 className="text-blue-600 mb-2" size={18} />
              <h3 className="text-base font-black text-gray-900 mb-1 uppercase tracking-tight">DL (Original Mandatory)</h3>
              <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                LMV license only. On state borders, cops often demand the physical card over DigiLocker.
              </p>
            </div>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
              <CheckCircle2 className="text-blue-600 mb-2" size={18} />
              <h3 className="text-base font-black text-gray-900 mb-1 uppercase tracking-tight">Address Proof (No PAN)</h3>
              <p className="text-gray-500 font-medium text-[11px] leading-relaxed">
                Agencies do NOT accept PAN cards. Use Aadhaar or Passport.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Black Plate Rule */}
        <section className="mb-10 bg-red-50 p-6 md:p-8 rounded-2xl border border-red-200 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-red-600 text-white px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest mb-4">
              <AlertTriangle size={12} /> High Risk Warning: White Plate Rentals
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight uppercase">
              Insurance & Compliance Risks
            </h2>
            <p className="text-sm font-bold text-gray-800 leading-relaxed mb-4 border-l-2 border-red-500 pl-4">
              In many states, private (white plate) vehicles are not permitted for commercial rental use. Some insurance policies may deny claims if a vehicle is found to be operating outside permitted use. In such cases, renters may face claim complications or financial liability depending on policy terms and local enforcement.
            </p>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-red-300 inline-block shadow-sm">
              <p className="text-red-900 font-black uppercase tracking-tighter text-[10px] italic">
                Rajesh's Advice: Prefer commercially registered vehicles (black + yellow plates) to reduce insurance and compliance risks.
              </p>
            </div>
          </div>
          <AlertTriangle className="absolute -bottom-4 -right-4 text-red-600/5 group-hover:scale-110 transition-transform" size={120} />
        </section>

        {/* Section 3: Insurance Reality Check */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-xl text-white shadow-md">
              <Shield className="h-4 w-4" />
            </div>
            <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Insurance Reality</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-2">Typical Deductible (Varies by Provider)</h3>
              <p className="text-base font-black text-gray-900 mb-1 uppercase tracking-tighter">Limited Liability</p>
              <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                Often deducted from the security deposit for minor damages such as scratches or glass damage, subject to rental and insurance policy terms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center md:text-left">
              <h3 className="text-[9px] font-black text-red-600 uppercase tracking-widest mb-2">Severe Violation</h3>
              <p className="text-base font-black text-gray-900 mb-1 uppercase tracking-tighter text-red-600">Possible Recovery Costs</p>
              <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                In cases such as drink & drive or extreme overspeeding, insurance claims may be rejected depending on policy terms and enforcement reports. In such situations, renters may be required to bear significant recovery costs.
              </p>
            </div>
          </div>
        </section>

        {/* Final Context Note */}
        <div className="bg-blue-50/30 border border-blue-100/50 rounded-2xl p-6 text-center italic">
          <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em]">
            This page is for educational purposes only. Always refer to official RTO guidelines and your provider's legal contract.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Rules;
