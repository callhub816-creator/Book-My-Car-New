import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  Tag,
  ArrowLeft,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { blogPosts } from '../data/blogs';
import AdUnit from '../components/AdUnit';
import AuthorBox from '../components/AuthorBox';

const BlogList: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Highway Travel Guides & Rental Rules India | BookMyCar.live</title>
        <meta name="description" content="Expert-verified guides for Indian highways, car rental rules, safety checklists, and road trip tips. Written by राजेश नवसागर (Rajesh Navsagar)." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 px-4 py-2 rounded-full text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
            <ShieldCheck size={14} /> Expert-Verified Knowledge Base
          </div>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter italic uppercase font-serif">
            The Road <span className="text-blue-500">Survival</span> Vault
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-medium">
            No AI fluff. Just real driving logs, RTO rules, and survival tactics for Indian highways (2025-2026).
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                <img
                  src={`${post.imageUrl}?v=4`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  <Calendar className="h-3 w-3" /> {post.date}
                </div>
                <h2 className="text-xl font-black text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors uppercase leading-tight font-serif italic">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 font-medium">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Guide <ArrowLeft size={12} className="rotate-180" />
                  </span>
                  <div className="flex -space-x-2">
                    <img src="/logo.png" className="w-6 h-6 rounded-full border-2 border-white" alt="Author" />
                  </div>
                </div>
              </div>
              <Link to={`/blog/${post.slug}`} className="absolute inset-0" title={post.title} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

const BlogPostView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <main className="text-center py-10 text-xl text-gray-600 uppercase font-black">
        Guide not found.
      </main>
    );
  }

  const shareUrl = `https://bookmycar.live/blog/${post.slug}`;
  const shareTitle = `${post.title} | BookMyCar.live`;

  return (
    <main className="bg-white min-h-screen pb-12">
      <Helmet>
        <title>{post.title} | BookMyCar.live</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta name="author" content={post.author} />

        {/* Open Graph / Social */}
        <meta property="og:title" content={`${post.title} | BookMyCar.live`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`https://bookmycar.live${post.imageUrl}`} />
        <meta property="og:url" content={`https://bookmycar.live/blog/${post.slug}`} />
        <meta property="og:type" content="article" />

        {/* Canonical */}
        <link rel="canonical" href={`https://bookmycar.live/blog/${post.slug}`} />

        {/* JSON-LD for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": "https://bookmycar.live/about"
            },
            "datePublished": post.date,
            "image": `https://bookmycar.live${post.imageUrl}`,
            "publisher": {
              "@type": "Organization",
              "name": "BookMyCar.live",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bookmycar.live/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero - Compacted */}
      <section className="bg-gray-900 text-white pt-6 pb-12 px-4 overflow-hidden relative">
        {/* Animated Background Blur */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={`${post.imageUrl}?v=4`} className="w-full h-full object-cover blur-3xl scale-110" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-blue-400 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-blue-400 truncate max-w-[150px]">{post.category}</span>
          </nav>

          <Link
            to="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white mb-4 text-[10px] font-black uppercase tracking-[0.2em] transition-colors"
          >
            <ArrowLeft className="h-3 w-3 mr-1.5" />
            Back to Guides
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest">
              {post.category}
            </span>
            <span className="flex items-center text-blue-400 text-[10px] font-black uppercase tracking-widest">
              <ShieldCheck size={12} className="mr-1" /> Experience-verified
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 font-serif tracking-tighter italic uppercase drop-shadow-lg">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-400 text-[10px] font-black uppercase tracking-widest">
            <span className="flex items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white">
              <img src="/logo.png" className="h-3.5 w-3.5 mr-2 rounded-sm" alt="Logo" /> By Rajesh Navsagar
            </span>
            <span className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1.5" /> {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* Content - Optimized Fit */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 pb-8">
          {/* Cinematic Header Image - Truly Universal Aspect Ratio Handling */}
          <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-gray-950 shadow-2xl flex items-center justify-center">
            {/* Background Blur Layer (Fills the frame) */}
            <img
              src={`${post.imageUrl}?v=4`}
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
              alt=""
              aria-hidden="true"
            />

            {/* Foreground Image Layer (Main Image) */}
            <img
              src={`${post.imageUrl}?v=4`}
              alt={post.title}
              className="relative z-10 max-w-full max-h-full object-contain shadow-2xl transform hover:scale-[1.02] transition-transform duration-700 ease-out"
            />

            {/* Visual Polish Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-20" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none z-20" />
          </div>

          <div className="p-6 md:p-10 lg:p-12">
            {/* Ad Unit - Top of Article (Only if actual slot ID exists) */}
            <AdUnit slotId="" format="auto" className="mb-8" />

            {post.expertTip && (
              <div className="bg-blue-50/50 border-l-2 border-blue-600 p-5 md:p-6 rounded-r-xl mb-8 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2 uppercase tracking-widest text-xs font-black text-blue-700">
                    <ShieldCheck size={14} /> Rajesh's Expert Corner
                  </div>
                  <p className="text-base md:text-lg leading-relaxed font-serif text-gray-900 italic font-medium">
                    "{post.expertTip}"
                  </p>
                </div>
                <ShieldCheck className="absolute top-0 right-0 p-3 opacity-[0.03]" size={60} />
              </div>
            )}

            <div
              className="prose prose-sm md:prose-base prose-blue text-gray-700 max-w-none mb-8 article-content font-medium leading-[1.7]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Ad Unit - Bottom of Article (Before Comments) */}
            <AdUnit slotId="" format="auto" className="my-8" />

            <div className="text-[10px] font-black text-gray-400 mb-8 tracking-widest uppercase border-t pt-6 flex items-center gap-2">
              <img src="/logo.png" className="h-4 w-4 rounded-sm" alt="Logo" />
              Verified by Rajesh Navsagar | {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>

            {/* Content Footer / Sharing */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div>
                <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">Spread the Word</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Help more travelers stay safe in 2026.</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, '_blank')}
                  className="p-3 bg-white hover:bg-black hover:text-white rounded-xl shadow-sm border border-gray-100 transition-all group"
                  title="Share on Twitter"
                >
                  <Twitter size={18} />
                </button>
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                  className="p-3 bg-white hover:bg-blue-600 hover:text-white rounded-xl shadow-sm border border-gray-100 transition-all group"
                  title="Share on Facebook"
                >
                  <Facebook size={18} />
                </button>
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
                  className="p-3 bg-white hover:bg-blue-700 hover:text-white rounded-xl shadow-sm border border-gray-100 transition-all group"
                  title="Share on LinkedIn"
                >
                  <Linkedin size={18} />
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    alert('Guide link copied!');
                  }}
                  className="p-3 bg-white hover:bg-blue-600 hover:text-white rounded-xl shadow-sm border border-gray-100 transition-all group"
                  title="Copy Link"
                >
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Author Box */}
            <AuthorBox />

            {/* Suggested Blogs */}
            <div className="mt-12 pt-12 border-t border-gray-100">
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-8 flex items-center gap-2">
                <ArrowLeft className="rotate-180 text-blue-600" size={20} /> Suggested Guides
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                        <img
                          src={`${relatedPost.imageUrl}?v=4`}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                      </div>
                      <div className="p-5">
                        <span className="text-blue-600 text-[8px] font-black uppercase tracking-widest mb-2 block">
                          {relatedPost.category}
                        </span>
                        <h4 className="font-serif italic text-base font-black text-gray-900 line-clamp-2 uppercase group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read <ArrowLeft size={10} className="rotate-180" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export { BlogList, BlogPostView };
