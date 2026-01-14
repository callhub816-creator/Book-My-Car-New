import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ArrowRight, AlertCircle } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center">
                <div className="bg-red-50 w-20 h-20 rounded-[2rem] flex items-center justify-center text-red-600 mx-auto mb-8 animate-bounce">
                    <AlertCircle size={40} />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter uppercase italic">
                    Road Closed.
                </h1>
                <p className="text-gray-500 font-medium mb-10 leading-relaxed italic">
                    Mistakes happen, even to the best drivers. The page you are looking for doesn't exist or has been moved to a new route.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black transition-all shadow-xl uppercase tracking-widest text-xs group"
                >
                    Back to Safe Route <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="mt-12 flex justify-center opacity-30">
                    <Car size={100} className="text-gray-200" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
