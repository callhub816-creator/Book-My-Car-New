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
            "Documented observations for travelers, but final travel decisions remain with the user."
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
                <h2 className="text-xl font-black text-gray-900 m-0 tracking-tight uppercase">No Rental or Booking Services</h2>
              </div>
              <p className="text-gray-900 font-bold leading-relaxed mb-3 text-base md:text-lg">
                BookMyCar.live is an independent observational guide. This website does not facilitate car rentals, taxi bookings, or travel reservations.
              </p>
              <p className="text-yellow-800 font-medium text-sm">
                BookMyCar.live will never solicit payment for vehicle bookings or travel services. If any individual claims to represent BookMyCar.live for payment requests, such communication should be treated as unauthorized.
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
                BookMyCar.live is not affiliated with any car rental brand. Any mention of rental agencies is purely for informational comparison and general guidance based on user experience.
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
                While efforts are made to update road trip guides regularly, BookMyCar.live cannot guarantee that all information (such as toll prices, local taxes, or permit rules) is current or exhaustive.
              </p>
              <div className="bg-gray-50 border-l-2 border-blue-600 p-4 rounded-r-xl">
                <p className="text-gray-900 font-bold mb-0 text-sm">This information should be used as general guidance and not as a substitute for official legal or regulatory advice. Always verify rules with local authorities.</p>
              </div>
            </section>

            <section className="group">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase">
                <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform">
                  <Scale size={20} />
                </div>
                3. Limitation of Liability
              </h2>
              <p className="leading-relaxed text-gray-500 font-medium text-sm">
                BookMyCar.live provides informational content for general guidance only. While reasonable efforts are made to keep information accurate, no guarantees are made regarding completeness or current applicability. Users are responsible for making travel and compliance decisions based on official sources and provider policies. Use of this site is at the user's own risk.
              </p>
            </section>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-100 mb-10 text-center md:text-left">
            <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] mb-4">Questions about these terms?</p>
            <a href="mailto:bookmycar.live@gmail.com" className="text-lg md:text-xl font-black text-gray-900 hover:text-blue-600 transition-colors underline decoration-blue-100 underline-offset-4 uppercase tracking-tighter">
              bookmycar.live@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;