import React, { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] animate-in slide-in-from-bottom-10 duration-500">
            <div className="bg-gray-900 border border-white/10 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg">
                            <Shield size={20} />
                        </div>
                        <h3 className="text-white font-black uppercase tracking-widest text-xs">Privacy & Cookies</h3>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="ml-auto text-gray-500 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <p className="text-gray-400 text-[11px] leading-relaxed font-medium mb-6">
                        We use cookies to improve your experience and show relevant ads via Google AdSense. By continuing to explore our road trip guides, you agree to our <a href="/#/privacy" className="text-blue-400 underline underline-offset-4">Privacy Policy</a>.
                    </p>

                    <div className="flex gap-3">
                        <button
                            onClick={handleAccept}
                            className="flex-1 bg-white text-black font-black py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95"
                        >
                            Accept & Continue
                        </button>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="bg-white/5 text-gray-400 font-black px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all border border-white/5"
                        >
                            Settings
                        </button>
                    </div>
                </div>
                <Shield className="absolute -bottom-6 -right-6 text-white/[0.02] transform group-hover:scale-110 transition-transform" size={150} />
            </div>
        </div>
    );
};

export default CookieConsent;
