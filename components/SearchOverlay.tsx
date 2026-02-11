import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<typeof blogPosts>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filtered = blogPosts.filter(post =>
            post.title.toLowerCase().includes(lowerQuery) ||
            post.keywords.some(k => k.toLowerCase().includes(lowerQuery)) ||
            post.category.toLowerCase().includes(lowerQuery)
        ).slice(0, 5); // Limit to top 5

        setResults(filtered);
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex flex-col animate-in fade-in duration-200">
            {/* Search Header */}
            <div className="max-w-4xl mx-auto w-full p-6 flex items-center gap-4">
                <Search className="text-gray-400" size={24} />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search guides (e.g. 'Challan', 'Manali', 'Fastag')..."
                    className="flex-1 bg-transparent text-2xl md:text-4xl font-black text-gray-900 placeholder:text-gray-300 outline-none uppercase tracking-tight"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <X size={32} />
                </button>
            </div>

            {/* Results Area */}
            <div className="flex-1 overflow-y-auto px-6 pb-20">
                <div className="max-w-2xl mx-auto mt-10 space-y-4">
                    {query && results.length === 0 && (
                        <div className="text-center text-gray-400 py-20">
                            <p className="text-sm font-bold uppercase tracking-widest">No guides found for "{query}"</p>
                        </div>
                    )}

                    {results.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.slug}`}
                            onClick={onClose}
                            className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                        >
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform"
                            />
                            <div className="flex-1">
                                <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-1 block">
                                    {post.category}
                                </span>
                                <h3 className="text-lg font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors uppercase">
                                    {post.title}
                                </h3>
                            </div>
                            <ArrowRight className="text-gray-300 group-hover:text-blue-600 self-center opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                        </Link>
                    ))}
                </div>
            </div>

            {/* Footer Hint */}
            <div className="border-t border-gray-100 p-4 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Press ESC to close
            </div>
        </div>
    );
};

export default SearchOverlay;
