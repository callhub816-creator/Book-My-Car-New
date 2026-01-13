import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

const Privacy: React.FC = () => {
  React.useEffect(() => {
    document.title = "Privacy Policy & AdSense Disclosure | BookMyCar.live";
  }, []);

  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-gray-800">

        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6">
            <ShieldCheck size={12} /> Data Integrity
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-blue-500/20 pl-4 py-1">
            "I value your privacy as much as I value a clear road."
          </p>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Updated: Jan 2026</p>

          <p className="leading-relaxed mb-8">
            At <strong>BookMyCar.live</strong>, I take your personal data seriously. This guide exists to help travelers, not to profit from selling your information.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Lock className="text-blue-600 mb-3" size={24} />
              <h3 className="text-base font-black text-gray-900 mb-2 uppercase">Log Files</h3>
              <p className="text-gray-500 font-medium text-xs leading-relaxed">
                I use log files (IP addresses, browser type, etc.) to analyze trends. This is not linked to information that is personally identifiable.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <EyeOff className="text-blue-600 mb-3" size={24} />
              <h3 className="text-base font-black text-gray-900 mb-2 uppercase">Cookies</h3>
              <p className="text-gray-500 font-medium text-xs leading-relaxed">
                I use cookies to store your preferences. This helps me customize the experience and provide more relevant highway guides.
              </p>
            </div>
          </div>

          {/* 3. DOUBLECLICK DART COOKIE */}
          <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl my-10 relative overflow-hidden group">
            <h2 className="text-xl font-black mb-4 text-white tracking-tight uppercase">Google AdSense & DART</h2>
            <ul className="space-y-3 text-blue-100 font-medium list-none pl-0 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <span>Google, as a third party vendor, uses cookies to serve ads on BookMyCar.live.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <span>Google's DART cookie enables it to serve ads based on your visit to this site.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <span>You can opt out by visiting the Google ad network privacy policy.</span>
              </li>
            </ul>
            <ShieldCheck className="absolute -bottom-6 -right-6 text-white/5 transform group-hover:scale-110 transition-transform" size={150} />
          </div>

          <h2 className="text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2">Our Ad Partners</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Advertising partners may use cookies. My primary partner is:
          </p>
          <ul className="grid grid-cols-2 gap-4 list-none pl-0 mb-10">
            <li className="bg-white border-2 border-gray-100 p-4 rounded-xl font-black text-blue-600 text-center text-xs uppercase tracking-widest">Google AdSense</li>
            <li className="bg-white border-2 border-gray-100 p-4 rounded-xl font-black text-gray-300 text-center text-xs italic uppercase tracking-widest">Independent</li>
          </ul>

          <h2 className="text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2">Your Consent</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            By using this website, you consent to this privacy policy. Questions? Contact <strong>support@bookmycar.live</strong>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Privacy;