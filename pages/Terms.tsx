import React from 'react';
import { Gavel, CheckCircle2, Bookmark, ExternalLink, ShieldAlert, UserCheck } from 'lucide-react';

const Terms: React.FC = () => {
  React.useEffect(() => {
    document.title = "Terms & Conditions | User Agreement | BookMyCar.live";
  }, []);

  return (
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
            "Clear terms so you can focus on the drive."
          </p>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Updated: Jan 2026</p>

          <p className="leading-relaxed mb-10 text-sm md:text-base">
            Welcome to <strong>BookMyCar.live</strong>. By using this website, users agree to the terms and conditions outlined below. This platform is intended for informational purposes for the road travel community.
          </p>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gray-900 p-2 rounded-xl text-white shadow-lg">
                <CheckCircle2 size={20} />
              </div>
              <h2 className="text-xl font-black text-gray-900 m-0 tracking-tight uppercase">1. Informational Service Only</h2>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl">
              <p className="text-gray-900 font-bold m-0 leading-relaxed text-sm">
                BookMyCar.live is an informational guide portal. This website is not a car rental agency, broker, or booking platform, and we do not manage or operate any fleet of vehicles.
              </p>
            </div>
          </section>

          <div className="space-y-10">
            <section className="group">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase">
                <div className="bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Bookmark size={20} />
                </div>
                2. User Responsibility
              </h2>
              <p className="leading-relaxed text-gray-500 font-medium text-sm">
                Content is based on documented road experiences for general guidance. However, road laws and rental policies are subject to change without notice. Users are responsible for verifying all information with official government portals and their respective rental providers before travel.
              </p>
            </section>

            <section className="group">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase">
                <div className="bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ExternalLink size={20} />
                </div>
                3. External Resources
              </h2>
              <p className="leading-relaxed text-gray-500 font-medium text-sm">
                This website may link to external resources or third-party websites. BookMyCar.live has no control over the nature, content, or availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
              </p>
            </section>

            {/* New Section: Acceptable Use */}
            <section className="group">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 mb-4 tracking-tight uppercase">
                <div className="bg-gray-100 p-2 rounded-xl text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <UserCheck size={20} />
                </div>
                4. Acceptable Use
              </h2>
              <p className="leading-relaxed text-gray-500 font-medium text-sm">
                Users agree not to misuse the content on this website for unlawful purposes, automated scraping, or redistribution without explicit permission. The content is intended for personal, non-commercial informational use only.
              </p>
            </section>

            <section className="group">
              <h2 className="text-xl font-black text-red-600 flex items-center gap-3 mb-4 tracking-tight uppercase">
                <div className="bg-red-50 p-2 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <ShieldAlert size={20} />
                </div>
                5. Limitation of Liability
              </h2>
              <p className="leading-relaxed text-red-900 font-bold bg-red-50/30 p-5 rounded-xl border border-red-100 text-sm">
                BookMyCar.live provides informational content for general guidance only. While efforts are made to keep information accurate, we do not guarantee completeness or current validity. BookMyCar.live shall not be held responsible for losses, disputes, penalties, or incidents arising from reliance on the information provided. Use of this site is at the user's own risk.
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
};

export default Terms;