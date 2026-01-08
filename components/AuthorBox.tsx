import React from 'react';
import { User, ShieldCheck, Mail, MapPin } from 'lucide-react';

const AuthorBox: React.FC = () => {
    return (
        <div className="bg-white rounded-3xl p-6 md:p-10 mt-12 border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg relative overflow-hidden group">
            {/* Decorative Accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

            <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl transform transition-transform group-hover:rotate-3">
                    <User size={48} />
                </div>
            </div>

            <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Rajesh Navsagar</h3>
                            <div className="bg-blue-600 p-0.5 rounded-md">
                                <ShieldCheck className="text-white w-4 h-4" />
                            </div>
                        </div>
                        <p className="text-blue-600 font-black text-[9px] uppercase tracking-[0.2em] flex items-center gap-1.5">
                            <MapPin size={12} /> Expert Traveler
                        </p>
                    </div>
                    <a
                        href="mailto:support@bookmycar.live"
                        className="inline-flex items-center px-4 py-2 rounded-xl bg-gray-50 text-gray-900 hover:bg-blue-600 hover:text-white transition-all text-[9px] font-black uppercase tracking-widest border border-gray-100 group/btn"
                    >
                        <Mail className="w-3.5 h-3.5 mr-2 group-hover/btn:scale-110 transition-transform" /> Contact Raaj
                    </a>
                </div>

                <div className="space-y-4 mb-6">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium italic">
                        "I built this site because I was tired of seeing travelers get scammed. My guides are written from actual driving logs so you can hit the highway with zero stress."
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed font-bold border-l-2 border-gray-100 pl-4">
                        <span className="text-gray-600 uppercase text-[8px] tracking-widest block mb-1 font-black">Context</span>
                        Rajesh is an independent road-travel researcher documenting rental rules and highway safety realities across India.
                    </p>
                </div>

                <div className="bg-blue-50/50 rounded-xl px-4 py-2 border border-blue-100 inline-block">
                    <p className="text-[8px] font-black text-blue-900 flex items-center gap-2 uppercase tracking-widest">
                        <ShieldCheck size={14} className="text-blue-600" /> Human-written & verified.
                    </p>
                </div>
            </div>

            {/* Background decoration */}
            <ShieldCheck className="absolute -bottom-6 -right-6 text-gray-400/5" size={120} />
        </div>
    );
};

export default AuthorBox;
