import React from 'react';
import { ShieldCheck, Cookie as CookieIcon, Info, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cookies: React.FC = () => {
    React.useEffect(() => {
        document.title = "Cookie Policy | BookMyCar.live";
    }, []);

    return (
        <div className="bg-white min-h-screen pt-10 pb-20">
            <div className="max-w-4xl mx-auto px-6 text-gray-800">

                {/* Header */}
                <div className="mb-10 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6">
                        <ShieldCheck size={12} /> Transparency
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif">
                        Cookie Policy
                    </h1>
                    <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-blue-500/20 pl-4 py-1">
                        "Understand how we use data to improve your experience."
                    </p>
                </div>

                <div className="prose prose-sm md:prose-base max-w-none">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Effective Date: Jan 2026</p>

                    <p className="leading-relaxed mb-8 font-medium">
                        This Cookie Policy explains how <strong>BookMyCar.live</strong> ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                    </p>

                    {/* Section 1: What are cookies? */}
                    <div className="flex items-start gap-4 mb-8">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-600 mt-1 shrink-0">
                            <CookieIcon size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-gray-900 mb-2 tracking-tight uppercase">What are cookies?</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-100 my-8" />

                    {/* Section 2: Why do we use cookies? */}
                    <h2 className="text-xl font-black text-gray-900 mb-4 tracking-tight uppercase">Why do we use cookies?</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl">
                            <h3 className="font-black text-gray-900 text-sm uppercase mb-2">Essential Cookies</h3>
                            <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                These are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
                            </p>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl">
                            <h3 className="font-black text-gray-900 text-sm uppercase mb-2">Analytics & Customization</h3>
                            <p className="text-xs text-gray-500 font-medium leading-relaxed">
                                These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.
                            </p>
                        </div>
                    </div>

                    {/* Section 3: Google AdSense */}
                    <div className="bg-blue-600 rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-xl mb-10">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <Info size={20} className="text-blue-300" />
                                <h2 className="text-xl font-black text-white uppercase tracking-tight">Google DoubleClick DART Cookie</h2>
                            </div>
                            <p className="text-blue-100 text-sm leading-relaxed mb-4 font-medium">
                                Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.bookmycar.live and other sites on the internet.
                            </p>
                            <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                                <p className="text-xs text-white/80 leading-relaxed mb-3">
                                    However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL:
                                </p>
                                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white font-black text-xs uppercase tracking-widest hover:text-blue-200 transition-colors">
                                    Google Ad Policies <ExternalLink size={10} />
                                </a>
                            </div>
                        </div>
                        <CookieIcon className="absolute -bottom-10 -right-10 text-white/5 group-hover:rotate-12 transition-transform duration-700" size={200} />
                    </div>

                    {/* Section 4: Control */}
                    <h2 className="text-xl font-black text-gray-900 mb-4 tracking-tight uppercase">How can I control cookies?</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. In addition, most web browsers allow you to control cookies through their settings preferences.
                    </p>
                    <ul className="space-y-2 mb-8">
                        <li className="text-sm text-gray-600 font-medium flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Chrome: Settings &rarr; Privacy and security &rarr; Cookies and other site data
                        </li>
                        <li className="text-sm text-gray-600 font-medium flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Safari: Preferences &rarr; Privacy
                        </li>
                        <li className="text-sm text-gray-600 font-medium flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Firefox: Options &rarr; Privacy & Security
                        </li>
                    </ul>

                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center">
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                            Have more questions?
                        </p>
                        <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors">
                            Contact Us
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cookies;
