import React from 'react';
import { AlertTriangle, ShieldCheck, Info, Scale } from 'lucide-react';

const Disclaimer: React.FC = () => {
  React.useEffect(() => {
    document.title = "Important Legal Disclaimer | BookMyCar.live";
  }, []);

  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-gray-800">

        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 border border-yellow-100/50">
            <Scale size={12} /> Legal Transparency
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif italic">
            Disclaimer
          </h1>
          <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-yellow-500/20 pl-4 py-1">
            "I share my logs to help you, but the final decision is yours."
          </p>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none">

          {/* Important Notice Box */}
          <div className="bg-yellow-50 border-2 border-yellow-200 p-8 rounded-[2rem] my-10 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-500 p-2 rounded-xl text-white shadow-lg">
                  <AlertTriangle size={20} />
                </div>
                <h2 className="text-xl font-black text-gray-900 m-0 tracking-tight uppercase">Zero Rental Services</h2>
              </div>
              <p className="text-gray-900 font-bold leading-relaxed mb-3 text-base md:text-lg">
                BookMyCar.live is an independent observational guide. I do not facilitate car rentals or taxi bookings.
              </p>
              <p className="text-yellow-800 font-medium text-sm">
                I will <strong>never</strong> ask for payment to book a vehicle. If anyone uses my name to solicit money, it is a scam.
              </p>
            </div>
            <AlertTriangle className="absolute -bottom-6 -right-6 text-yellow-600/10 group-hover:scale-110 transition-transform duration-700" size={150} />
          </div>

          <div className="space-y-12 mt-12">
            <section className="group">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase">
                <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform">
                  <ShieldCheck size={20} />
                </div>
                1. Independent Status
              </h2>
              <p className="leading-relaxed text-gray-500 font-medium text-sm">
                BookMyCar.live is not affiliated with Zoomcar, Revv, MyChoize, or any other rental brand. Mentioning them is purely for informational comparison.
              </p>
            </section>

            <section className="group">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase">
                <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform">
                  <Info size={20} />
                </div>
                2. Content Accuracy
              </h2>
              <p className="leading-relaxed text-gray-500 font-medium text-sm mb-4">
                While I strive to update my Human-written guides regularly, I cannot guarantee that all info (toll prices, permit rules) is 100% current.
              </p>
              <div className="bg-gray-50 border-l-2 border-blue-600 p-4 rounded-r-xl">
                <p className="text-gray-900 font-bold mb-0 text-sm">Use this info as a guide, not a law book. Check local authorities before crossing borders.</p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase">
                <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform">
                  <Scale size={20} />
                </div>
                3. Liability
              </h2>
              <p className="leading-relaxed text-gray-500 font-medium text-sm">
                BookMyCar.live will not be liable for any losses or damages. You drive at your own risk and responsibility.
              </p>
            </section>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-100 mb-10 text-center md:text-left">
            <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] mb-4">Questions about these terms?</p>
            <a href="mailto:support@bookmycar.live" className="text-lg md:text-xl font-black text-gray-900 hover:text-blue-600 transition-colors underline decoration-blue-100 underline-offset-4 uppercase tracking-tighter">
              support@bookmycar.live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;