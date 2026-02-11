import React, { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

interface AdUnitProps {
    slotId: string;
    format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
    layoutKey?: string; // For In-feed ads
    className?: string;
    style?: React.CSSProperties;
}

const AdUnit: React.FC<AdUnitProps> = ({
    slotId,
    format = 'auto',
    layoutKey,
    className = '',
    style = {}
}) => {
    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    // Placeholder for development/pre-approval (Optional: toggle this off for production if you want it invisible)
    const isDev = false; // Set to true to see placeholders during dev

    if (!slotId) {
        if (isDev) {
            return (
                <div className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 font-bold text-xs uppercase tracking-widest p-4 ${className}`} style={{ minHeight: '250px', ...style }}>
                    AdSense Space
                </div>
            );
        }
        return null;
    }

    return (
        <div className={`ad-container ${className}`} style={style}>
            {isDev && <div className="text-[9px] text-gray-300 text-center mb-1">Advertisement</div>}
            <ins
                className="adsbygoogle"
                style={{ display: 'block', ...style }}
                data-ad-client="ca-pub-YOUR_ADSENSE_ID_HERE" // Replace with actual ID or keep generic for now
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
                {...(layoutKey && { 'data-ad-layout-key': layoutKey })}
            />
        </div>
    );
};

export default AdUnit;
