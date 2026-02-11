import React from 'react';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommentsProps {
    title: string;
    slug: string;
}

const Comments: React.FC<CommentsProps> = ({ title, slug }) => {
    const subject = `Query regarding: ${title}`;
    // Use a simple mailto link
    const mailtoLink = `mailto:bookmycar.live@gmail.com?subject=${encodeURIComponent(subject)}`;

    return (
        <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100 my-12 text-center relative overflow-hidden group">
            <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4 text-blue-600">
                    <HelpCircle size={24} />
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">
                    Still confused about the rules?
                </h3>

                <p className="text-gray-600 text-sm max-w-lg mx-auto mb-6 font-medium leading-relaxed">
                    Road rules in India can be tricky. If you have a specific doubt about this route or rental policy, ask me directly. No bots, just a fellow driver helping out.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <Mail size={14} /> Email Your Question
                    </a>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                        <MessageCircle size={14} /> More Options
                    </Link>
                </div>

                <p className="mt-6 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                    Response time: 24-48 Hours
                </p>
            </div>

            {/* Decorative Background Icon */}
            <HelpCircle className="absolute -bottom-10 -right-10 text-blue-100 opacity-50 group-hover:rotate-12 transition-transform duration-700" size={200} />
        </div>
    );
};

export default Comments;
