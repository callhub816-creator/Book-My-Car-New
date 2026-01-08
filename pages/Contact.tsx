import React from 'react';
import { Mail, MessageSquare, ShieldCheck, User, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Bhai, message mil gaya! Rajesh will get back to you within 24-48 hours.');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-6 pb-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 border border-blue-100/50">
          <User size={12} /> Human Response
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter font-serif italic uppercase leading-none">
          Talk to <span className="text-blue-600 not-italic">Raaj.</span>
        </h1>
        <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed font-medium">
          Stuck with a rental policy? <strong> I personally respond </strong> to genuine road trip queries.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Side: Information */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group">
            <h3 className="text-base font-black text-gray-900 flex items-center mb-3 tracking-tight uppercase">
              <div className="bg-blue-600 p-2 rounded-xl mr-3 group-hover:rotate-6 transition-transform shadow-md">
                <Mail className="text-white" size={18} />
              </div>
              Direct Line
            </h3>
            <p className="text-gray-500 text-[11px] leading-relaxed mb-3 font-medium">
              For route planning or sending policy documents for audit:
            </p>
            <a href="mailto:support@bookmycar.live" className="text-lg md:text-xl font-black text-blue-600 hover:text-blue-700 transition-colors underline decoration-blue-100 underline-offset-4 tracking-tighter uppercase">
              support@bookmycar.live
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group">
            <h3 className="text-base font-black text-gray-900 flex items-center mb-3 tracking-tight uppercase">
              <div className="bg-black p-2 rounded-xl mr-3 group-hover:rotate-6 transition-transform shadow-md">
                <MessageSquare className="text-white" size={18} />
              </div>
              Reality Check
            </h3>
            <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
              I respond within <strong>24–48 hours</strong>. If urgent, mention it in the subject. This is not an emergency helpline.
            </p>
          </div>

          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden group">
            <ShieldCheck className="absolute -bottom-4 -right-4 text-white/10 group-hover:scale-110 transition-transform duration-700" size={100} />
            <h3 className="text-base font-black flex items-center mb-2 uppercase tracking-wider relative z-10">
              <ShieldCheck className="mr-2 text-blue-200" size={20} /> Privacy First
            </h3>
            <p className="text-blue-100 text-[11px] leading-relaxed font-medium relative z-10">
              Your details are safe. I don't share data with agencies or brokers. My goal is to help you.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white shadow-xl rounded-3xl p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl font-black text-gray-900 mb-6 tracking-tight uppercase">Share Your Plan</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Verma"
                  className="w-full bg-gray-50 border-gray-100 border p-3 rounded-xl focus:border-blue-600 outline-none transition-all placeholder:text-gray-300 font-bold text-xs"
                />
              </div>
              <div>
                <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  placeholder="rahul@example.com"
                  className="w-full bg-gray-50 border-gray-100 border p-3 rounded-xl focus:border-blue-600 outline-none transition-all placeholder:text-gray-300 font-bold text-xs"
                />
              </div>
            </div>
            <div>
              <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Query?</label>
              <textarea
                required
                rows={3}
                placeholder="Ex: Driving from Delhi to Manali. Is it safe at night?"
                className="w-full bg-gray-50 border-gray-100 border p-3 rounded-xl focus:border-blue-600 outline-none transition-all placeholder:text-gray-300 font-bold text-xs"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 group">
              Send Query <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <div className="mt-5 pt-5 border-t border-gray-50 text-center">
            <p className="text-[9px] text-gray-400 font-black leading-relaxed uppercase tracking-tight">
              Replies are informational only. <br />
              No paid consultation or emergency assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;