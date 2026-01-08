import React from 'react';
import { Gavel, CheckCircle2, Bookmark, ExternalLink, ShieldAlert } from 'lucide-react';

const Terms: React.FC = () => (
  <div className="bg-white min-h-screen pt-10 pb-20">
    <div className="max-w-4xl mx-auto px-6 text-gray-800">

      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 border border-gray-100">
          <Gavel size={12} /> User Agreement
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif italic">
          Terms & Conditions
        </h1>
        <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-gray-200 pl-4 py-1">
          "I keep the rules simple so you can focus on the drive."
        </p>
      </div>

      <div className="prose prose-sm md:prose-base max-w-none">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Updated: Jan 2026</p>

        <p className="leading-relaxed mb-10 text-sm md:text-base">
          Welcome to <strong>BookMyCar.live</strong>. By using this site, you agree to the rules below. I built this to help honest travelers, and these terms ensure we stay on the same page.
        </p>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gray-900 p-2 rounded-xl text-white shadow-lg">
              <CheckCircle2 size={20} />
            </div>
            <h2 className="text-xl font-black text-gray-900 m-0 tracking-tight uppercase">1. Just a Blog</h2>
          </div>
          <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl">
            <p className="text-gray-900 font-bold m-0 leading-relaxed text-sm">
              BookMyCar.live is an informational hub. I am NOT a car rental agency or booking platform. I don't manage any fleet of cars.
            </p>
          </div>
        </section>

        <div className="space-y-10">
          <section className="group">
            <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase">
              <div className="bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Bookmark size={20} />
              </div>
              2. Your Responsibility
            </h2>
            <p className="leading-relaxed text-gray-500 font-medium text-sm">
              I share real-world logs for guidance. However, road laws and rental policies change fast. You are responsible for verifying facts with official portals.
            </p>
          </section>

          <section className="group">
            <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase">
              <div className="bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ExternalLink size={20} />
              </div>
              3. External Links
            </h2>
            <p className="leading-relaxed text-gray-500 font-medium text-sm">
              My articles may link to other sites. I have no control over their content. A link doesn't mean I endorse everything on that site.
            </p>
          </section>

          <section className="group">
            <h2 className="text-xl font-black text-red-600 flex items-center gap-3 mb-4 tracking-tight uppercase">
              <div className="bg-red-50 p-2 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                <ShieldAlert size={20} />
              </div>
              4. Liability
            </h2>
            <p className="leading-relaxed text-red-900 font-bold bg-red-50/30 p-5 rounded-xl border border-red-100 text-sm">
              BookMyCar.live is not liable for any fines, disputes, or accidents. Your reliance on the information here is at your own risk.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-100 mb-10 text-center md:text-left">
          <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] mb-4">Contact for Legal Queries</p>
          <a href="mailto:support@bookmycar.live" className="text-lg md:text-xl font-black text-gray-900 hover:text-blue-600 transition-colors underline decoration-blue-100 underline-offset-4 uppercase tracking-tighter">
            support@bookmycar.live
          </a>
        </div>
      </div>

    </div>
  </div>
);

export default Terms;