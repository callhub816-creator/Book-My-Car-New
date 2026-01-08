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

const Rules: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-4 pb-12 px-4">
      <div className="max-w-5xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-3 border border-blue-100/50">
            <ShieldCheck size={12} /> Experience-verified
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter leading-[1.1] font-serif uppercase">
            Road Rules They <br /> <span className="text-blue-600">Don't Tell You.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium leading-relaxed italic border-l-2 border-blue-100 pl-4 py-1 mt-4">
            Documents, insurance, and local laws — explained in plain Hinglish from real driving logs.
          </p>
        </div>

        {/* Rajesh's Intro Note */}
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 text-white mb-8 shadow-lg relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-[9px] font-black flex items-center gap-2 mb-3 uppercase tracking-[0.2em] text-blue-400">
              <div className="w-4 h-0.5 bg-blue-400"></div> Raaj's Reality Check
            </h2>
            <p className="text-lg md:text-xl font-bold leading-tight mb-3 text-white uppercase italic">
              "A missing permit doesn't just cost you money; it costs you your vacation time."
            </p>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium">
              Knowing these details is the difference between a smooth 500km run and a day spent arguing with a traffic cop.
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
        <section className="mb-10 bg-yellow-50 p-6 md:p-8 rounded-2xl border border-yellow-200 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-yellow-500 text-white px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest mb-4">
              <AlertTriangle size={12} /> Critical Law
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight uppercase">
              The Black Plate Trap
            </h2>
            <p className="text-sm font-bold text-gray-800 leading-relaxed mb-4 border-l-2 border-yellow-500 pl-4">
              White Number Plate rentals are illegal. <strong>Total Insurance Nullification.</strong> If you crash, you pay everything.
            </p>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-yellow-300 inline-block shadow-sm">
              <p className="text-yellow-900 font-black uppercase tracking-tighter text-[10px] italic">
                Raaj's Rule: No Black + Yellow Plate = No Drive.
              </p>
            </div>
          </div>
          <AlertTriangle className="absolute -bottom-4 -right-4 text-yellow-600/5 group-hover:scale-110 transition-transform" size={120} />
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
              <h3 className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-2">Liability Limit</h3>
              <p className="text-base font-black text-gray-900 mb-1 uppercase tracking-tighter">You Pay ~₹10,000</p>
              <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                Deducted from deposit for minor scratches or glass damage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-[9px] font-black text-red-600 uppercase tracking-widest mb-2">VOID Case</h3>
              <p className="text-base font-black text-gray-900 mb-1 uppercase tracking-tighter text-red-600">Total Loss</p>
              <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                Drink & drive or overspeeding. You pay for the whole car.
              </p>
            </div>
          </div>
        </section>

        {/* Final Disclaimer */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-center text-center md:text-left">
          <div className="bg-blue-600 p-2 rounded-xl text-white flex-shrink-0 shadow-md">
            <AlertCircle size={18} />
          </div>
          <div>
            <h4 className="text-xs font-black text-gray-900 mb-1 uppercase tracking-tighter italic">Honest Disclaimer</h4>
            <p className="text-gray-500 text-[10px] font-medium leading-relaxed italic">
              Rules vary by state. Info based on personal history. Always read the specific terms of your provider.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Rules;
