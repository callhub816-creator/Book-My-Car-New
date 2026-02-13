import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import { Calendar, Tag, ArrowLeft, ShieldCheck } from 'lucide-react';
import AuthorBox from '../components/AuthorBox';
import ShareButtons from '../components/ShareButtons';
import Comments from '../components/Comments';
import AdUnit from '../components/AdUnit';
import { Helmet } from 'react-helmet-async';

/* =======================
   BLOG LIST PAGE
 ======================= */
const BlogList: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen pt-6 pb-12">
      <Helmet>
        <title>Road Trip Guides | BookMyCar.live</title>
        <meta name="description" content="Read expert guides on Indian road trips, rental car rules, and safety checklists. Verified information based on real driving experiences." />
        <link rel="canonical" href="https://bookmycar.live/blog" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 px-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest mb-4 border border-blue-100">
            <ShieldCheck size={12} /> Experience-verified Guides
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tighter font-serif uppercase leading-[1.1]">
            Indian Road Trip <br /> <span className="text-blue-600">Travel Guides</span>
          </h1>
          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto font-medium leading-relaxed italic">
            Real-world driving logs, rental rules, and safety checklists.
          </p>
        </header>

        <section
          aria-label="Blog posts"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group p-1"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl">
                <img
                  src={`${post.imageUrl}?v=2`}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/95 backdrop-blur-md text-gray-900 text-[8px] font-black px-2 py-1 rounded-md shadow-md uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2 text-[8px] font-black text-blue-600 uppercase tracking-[0.2em]">
                  <ShieldCheck size={10} /> On-road experience
                </div>

                <h2 className="text-lg font-black text-gray-900 mb-2 line-clamp-2 tracking-tight leading-tight group-hover:text-blue-600 transition-colors uppercase">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-500 text-[11px] mb-4 line-clamp-2 flex-1 leading-relaxed font-medium">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t pt-4 border-gray-50 mt-auto">
                  <div className="flex items-center gap-1.5 text-gray-400 text-[8px] font-black uppercase tracking-widest">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </div>
                  <Link to={`/blog/${post.slug}`} className="text-blue-600 font-black text-[9px] uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                    Explore <ArrowLeft className="rotate-180" size={10} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

/* =======================
   BLOG DETAIL PAGE
 ======================= */
const BlogPostView: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="text-center py-10 text-xl text-gray-600 uppercase font-black">
        Guide not found.
      </main>
    );
  }

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
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={post.imageUrl} className="w-full h-full object-cover blur-sm" alt={post.title} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-gray-400 mb-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-blue-400 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-blue-400 truncate max-w-[150px]">{post.category}</span>
          </nav>

          <Link
            to="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white mb-4 text-[9px] font-black uppercase tracking-[0.2em] transition-colors"
          >
            <ArrowLeft className="h-3 w-3 mr-1.5" />
            Back to Guides
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white text-[8px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest">
              {post.category}
            </span>
            <span className="flex items-center text-blue-400 text-[8px] font-black uppercase tracking-widest">
              <ShieldCheck size={12} className="mr-1" /> Experience-verified
            </span>
          </div>

          <h1 className="text-2xl md:text-5xl font-black leading-tight mb-6 font-serif tracking-tighter italic uppercase">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-400 text-[9px] font-black uppercase tracking-widest">
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

          {/* Ad Unit - Top of Article */}
          <div className="px-6 pt-6">
            <AdUnit slotId="TOP_SLOT_ID_PLACEHOLDER" format="auto" className="min-h-[100px] mb-4" />
          </div>

          <div className="p-1">
            <img
              src={`${post.imageUrl}?v=2`}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-contain bg-gray-50 rounded-3xl mx-auto"
            />
          </div>

          <div className="p-6 md:p-10 lg:p-12">
            {post.expertTip && (
              <div className="bg-blue-50/50 border-l-2 border-blue-600 p-5 md:p-6 rounded-r-xl mb-8 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2 uppercase tracking-widest text-[9px] font-black text-blue-700">
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
            <AdUnit slotId="BOTTOM_SLOT_ID_PLACEHOLDER" format="auto" className="my-8" />

            <div className="text-[9px] font-black text-gray-400 mb-8 tracking-widest uppercase border-t pt-6 flex items-center gap-2">
              <img src="/logo.png" className="h-4 w-4 rounded-sm" alt="Logo" />
              Verified by Rajesh Navsagar | {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-10">
              {post.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="bg-gray-50 text-gray-500 border border-gray-100 px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {keyword}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <ShareButtons
              title={post.title}
              url={`https://bookmycar.live/blog/${post.slug}`}
            />

            {/* Author Section */}
            <AuthorBox />

            {/* Comments / Questions CTA */}
            <Comments title={post.title} slug={post.slug} />

            {/* Suggested Blogs Section */}
            <div className="mt-16 pt-12 border-t border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight italic">
                    Related <span className="text-blue-600">Guides</span>
                  </h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Recommended for your trip</p>
                </div>
                <Link to="/blog" className="text-[10px] font-black text-blue-600 uppercase tracking-widest border-b-2 border-blue-100 pb-0.5 hover:border-blue-600 transition-all">
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((p) => p.slug !== post.slug)
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 2)
                  .map((suggestedPost) => (
                    <Link
                      key={suggestedPost.id}
                      to={`/blog/${suggestedPost.slug}`}
                      className="group bg-gray-50/50 rounded-2xl p-4 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-32 mb-4 overflow-hidden rounded-xl">
                        <img
                          src={`${suggestedPost.imageUrl}?v=2`}
                          alt={suggestedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-white/90 backdrop-blur-sm text-[7px] font-black px-1.5 py-0.5 rounded shadow-sm uppercase">
                            {suggestedPost.category}
                          </span>
                        </div>
                      </div>
                      <h4 className="text-sm font-black text-gray-900 uppercase leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {suggestedPost.title}
                      </h4>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                          <Calendar size={10} /> {suggestedPost.date}
                        </span>
                        <span className="text-blue-600 font-black text-[8px] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read <ArrowLeft size={10} className="rotate-180" />
                        </span>
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
