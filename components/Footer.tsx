import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07090F] text-white pt-12 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* 1. Brand & Authority */}
          <div className="col-span-1">
            <Link
              to="/"
              className="flex items-center space-x-3 mb-4 group"
            >
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-blue-600/20">
                <Car className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter">
                BookMyCar<span className="text-blue-500">.live</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Real road trip guides for real people. Based on multi-state road experience. Just the honest truth about Indian highways.
            </p>
          </div>

          {/* 2. Explore Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2 inline-block">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Travel Rules Guide</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">About My Mission</Link>
              </li>
            </ul>
          </nav>

          {/* 3. Legal & Support */}
          <nav aria-label="Legal links">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2 inline-block">
              Transparency
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Terms of Use</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Full Disclaimer</Link>
              </li>
              <li className="flex items-center text-gray-400 pt-2">
                <Mail className="h-4 w-4 mr-2 text-blue-500" />
                <a href="mailto:support@bookmycar.live" className="text-xs hover:text-blue-500 transition-colors font-black underline decoration-gray-700 underline-offset-4">
                  support@bookmycar.live
                </a>
              </li>
            </ul>
          </nav>

          {/* 4. Transparency Box */}
          <div className="bg-white/[0.03] p-6 rounded-[2rem] border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 text-blue-400">
                <ShieldCheck size={18} className="animate-pulse" />
                <h3 className="text-[10px] font-black uppercase tracking-widest text-white">Expert Verified</h3>
              </div>
              <p className="text-[12px] text-gray-400 leading-relaxed font-medium">
                Based on real experience. I don't sell bookings or take commissions. My goal is to share on-road evidence and verified advice.
              </p>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-[10px] text-gray-500 leading-relaxed font-bold italic opacity-60">
                  Ads help fund independent road research and keep guides free for travelers.
                </p>
              </div>
            </div>
            {/* Improved safety icon placement */}
            <ShieldCheck className="absolute -bottom-6 -right-6 text-white/[0.03] group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" size={120} />
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex justify-center items-center text-center">
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">
            © {currentYear} BookMyCar.live. Verified by Rajesh Navsagar based on on-road experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;