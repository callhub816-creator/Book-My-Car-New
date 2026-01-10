import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, User, BookOpen, AlertCircle, Car } from 'lucide-react';
import { blogPosts } from '../data/blogs';

const Home: React.FC = () => {
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ================= HERO SECTION (FIXED HEIGHT) ================= */}
      <section
        className="relative h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] md:max-h-[650px] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/home-hero-indian-road-trip-car.png"
            className="w-full h-full object-cover object-center scale-105"
            alt="Indian Road Trip"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-10 md:pt-0">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600 px-2.5 py-1 rounded-md text-[9px] font-bold tracking-wider uppercase mb-4 text-white">
              <ShieldCheck size={12} className="text-blue-100" /> Honest Traveler's Guide
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight text-white uppercase italic">
              Indian Road Trip Guide <br />
              <span className="text-blue-600">(Honest & Experience-Based)</span>
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-200 max-w-xl leading-relaxed font-medium border-l-2 border-blue-600 pl-4 py-1">
              BookMyCar.live is a Human-written & experience-verified guide built to help you avoid costly mistakes on Indian roads.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/blog"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-[11px] uppercase tracking-widest"
              >
                READ THE BLOGS <ArrowRight size={16} />
              </Link>
              <Link
                to="/rules"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-6 py-3.5 rounded-xl font-bold flex items-center justify-center transition-all text-[11px] uppercase tracking-widest"
              >
                THE RULEBOOK
              </Link>
            </div>
            <p className="mt-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest ml-1">
              State-wise road rules, permits & rental laws explained.
            </p>
          </div>
        </div>
      </section>

      {/* ================= QUICK STATS / TRUST ================= */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
              <BookOpen size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm uppercase">100% Personal</h3>
              <p className="text-gray-500 text-[11px] leading-snug">Coming from real driving logs, not bot-written manuals.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 border-y md:border-y-0 md:border-x py-8 md:py-2 px-0 md:px-8">
            <div className="bg-green-50 p-3 rounded-xl text-green-600">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm uppercase">Zero Agency Favor</h3>
              <p className="text-gray-500 text-[11px] leading-snug">If a brand has poor service, I’ll say it clearly.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-yellow-50 p-3 rounded-xl text-yellow-600">
              <AlertCircle size={22} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm uppercase">RTO Truths</h3>
              <p className="text-gray-500 text-[11px] leading-snug">The actual laws of the road, explained simply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFORMATIONAL SECTION (WHAT YOU'LL LEARN) ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-blue-50/50 rounded-[40px] p-8 md:p-12 border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none">
              <Car size={200} className="text-blue-600" />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">
                What You’ll Learn on <span className="text-blue-600">BookMyCar.live</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 bg-blue-600 rounded-full p-1"><ShieldCheck size={10} className="text-white" /></div>
                    <p className="text-gray-700 font-medium">How to legally rent and drive self-drive cars in India</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 bg-blue-600 rounded-full p-1"><ShieldCheck size={10} className="text-white" /></div>
                    <p className="text-gray-700 font-medium">State-wise road rules, tolls, and RTO realities</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 bg-blue-600 rounded-full p-1"><ShieldCheck size={10} className="text-white" /></div>
                    <p className="text-gray-700 font-medium">Rental car insurance traps and how to avoid damage scams</p>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 bg-blue-600 rounded-full p-1"><ShieldCheck size={10} className="text-white" /></div>
                    <p className="text-gray-700 font-medium">Real highway safety tips from long-distance drives</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 bg-blue-600 rounded-full p-1"><ShieldCheck size={10} className="text-white" /></div>
                    <p className="text-gray-700 font-medium">Route planning, pitstops, and timing strategies</p>
                  </li>
                  <li className="flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-blue-100">
                    <p className="text-blue-700 font-bold text-xs uppercase tracking-widest italic">
                      "All guides are written from real trips, not AI summaries."
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LATEST BLOGS ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tight uppercase italic">
                Latest Road Trip <span className="text-blue-600">Guides</span>
              </h2>
              <p className="text-gray-500 text-sm font-medium">
                Updated routes aur rule changes mere latest trips se.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-black uppercase text-[10px] tracking-[0.2em]"
            >
              View All <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={blog.imageUrl} alt="" className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-md text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wider">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2 text-[9px] font-black text-blue-600 uppercase tracking-widest">
                    <ShieldCheck size={12} /> Human-written
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2 line-clamp-2 leading-tight">
                    <Link to={`/blog/${blog.slug}`} className="hover:text-blue-600 transition-colors uppercase">{blog.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-xs mb-4 line-clamp-3 flex-1 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <Link to={`/blog/${blog.slug}`} className="text-blue-600 font-black text-[9px] uppercase tracking-[0.2em] flex items-center gap-1 border-t pt-4 mt-auto">
                    Explore Guide <ArrowRight size={10} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MEET THE EXPERT ================= */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-[#161b2b] text-white overflow-hidden relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/4 text-center lg:text-left">
              <div className="w-48 h-48 bg-blue-600 rounded-2xl mx-auto lg:mx-0 flex items-center justify-center shadow-2xl overflow-hidden relative border-2 border-white/10">
                <User size={100} className="text-white/20 absolute -bottom-4 -right-4" />
                <div className="w-full h-full flex items-center justify-center">
                  <Car size={60} className="text-white" />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-blue-700/90 py-1.5 text-[9px] font-black tracking-widest text-center uppercase">
                  RAJESH NAVSAGAR
                </div>
              </div>
            </div>
            <div className="lg:w-3/4">
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-none italic">
                Safar Ke Saathi: <br /><span className="text-blue-500">Expert Corner</span>
              </h2>
              <div className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-lg inline-block mb-4 text-[10px] font-black uppercase tracking-widest text-blue-400">
                20+ years of driving • Multi-state highway experience • Rental rule researcher
              </div>
              <p className="text-base md:text-lg text-gray-400 mb-6 italic font-medium leading-relaxed">
                "I've spent years on Indian highways. I built BookMyCar.live so you can focus on the drive, not the paperwork."
              </p>
              <Link to="/about" className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition-all shadow-xl uppercase tracking-[0.15em] text-[10px]">
                Understand My Mission <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight italic">
              Zaroori <span className="text-blue-600">Sawalaat</span> (FAQ)
            </h2>
            <p className="text-gray-500 font-medium italic">Tez aur saaf jawab, bina kisi filter ke.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-sm font-black text-gray-900 uppercase mb-2 flex items-center justify-between">
                Is BookMyCar.live a rental company?
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                Nahi. Hum koi rental company nahi hain. Hum ek independent guide portal hain jo aapko ye batata hai ki rental companies se gaadi kaise leni hai aur scams se kaise bachna hai.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-sm font-black text-gray-900 uppercase mb-2">
                Are these guides sponsored?
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                Bilkul nahi. Hum brands ko critique karte hain unki actual service ke basis par. Agar koi company fraud hai, toh hum use waisa hi likhte hain.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-sm font-black text-gray-900 uppercase mb-2">
                Is this content AI-generated?
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed font-medium">
                Nahi, ye content Rajesh Navsagar ke personal logs aur road experience par based hai. AI guides aksar road ki real situation (jaise potholes ya local scams) nahi janti.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
