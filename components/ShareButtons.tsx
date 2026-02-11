import React, { useState } from 'react';
import {
    Share2,
    Copy,
    Facebook,
    Twitter,
    Linkedin,
    MessageCircle, // Using MessageCircle for WhatsApp as generic chat icon if specific WhatsApp icon missing, but usually lucide has it or we use custom svg. Actually lucide has MessageCircle but let's check if it has 'MessageSquare' or similar. Lucide doesn't have brand icons like Whatsapp perfectly, so we can use generic or text. Wait, let's use a simple approach with lucide icons that resemble them or just text/custom SVG. 
    // Actually, Lucide represents brands poorly. I'll use simple text or SVGs if needed.
    // Let's use generic share icons or just "Share on WhatsApp".
    // Better: Use Lucide's `Share2` and `Copy`, and maybe `Facebook` `Twitter` `Linkedin` passed as props or just hardcoded SVGs for brands?
    // Re-checking Lucide imports in project...
    // Project uses lucide-react. 
    // Let's use:
    // Facebook -> Facebook
    // Twitter -> Twitter
    // LinkedIn -> Linkedin
    // WhatsApp -> MessageCircle (with green color)
} from 'lucide-react';

interface ShareButtonsProps {
    title: string;
    url: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
    const [copied, setCopied] = useState(false);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: 'WhatsApp',
            icon: <MessageCircle size={18} />,
            url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
            color: 'bg-[#25D366] hover:bg-[#20bd5a] text-white',
            label: 'Share'
        },
        {
            name: 'Facebook',
            icon: <Facebook size={18} />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: 'bg-[#1877F2] hover:bg-[#166fe5] text-white',
            label: 'Post'
        },
        {
            name: 'Twitter/X',
            icon: <Twitter size={18} />,
            url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
            color: 'bg-black hover:bg-gray-800 text-white',
            label: 'Tweet'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={18} />,
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
            color: 'bg-[#0077B5] hover:bg-[#006da5] text-white',
            label: 'Post'
        }
    ];

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col gap-4 py-8 border-t border-gray-100 mt-8">
            <div className="flex items-center gap-2 mb-2">
                <Share2 size={16} className="text-blue-600" />
                <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">
                    Share this Guide
                </h3>
            </div>

            <div className="flex flex-wrap gap-3">
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 ${link.color}`}
                        aria-label={`Share on ${link.name}`}
                    >
                        {link.icon}
                        <span className="hidden sm:inline">{link.label}</span>
                    </a>
                ))}

                <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all shadow-sm border border-gray-200 hover:bg-gray-50 ${copied ? 'bg-green-50 text-green-600 border-green-200' : 'bg-white text-gray-600'
                        }`}
                >
                    {copied ? <Share2 size={18} /> : <Copy size={18} />}
                    {copied ? 'Copied!' : 'Copy Link'}
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;
