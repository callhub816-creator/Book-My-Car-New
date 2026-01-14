import React from 'react';
import { ShieldCheck, Lock, EyeOff, UserCheck } from 'lucide-react';

const Privacy: React.FC = () => {
  React.useEffect(() => {
    document.title = "Privacy Policy & AdSense Disclosure | BookMyCar.live";
  }, []);

  return (
    <div className="bg-white min-h-screen pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-6 text-gray-800">

        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6">
            <ShieldCheck size={12} /> Data Protection
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter font-serif">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed italic border-l-2 border-blue-500/20 pl-4 py-1">
            "Transparency in road rules reflects in how we handle your data."
          </p>
        </div>

        <div className="prose prose-sm md:prose-base max-w-none">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Updated: Jan 2026</p>

          <p className="leading-relaxed mb-8">
            At <strong>BookMyCar.live</strong>, user privacy is taken seriously. This website exists to help travelers and does not sell or trade personal information for profit.
          </p>

          {/* New Section: Information We Collect */}
          <h2 className="text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2">Information We Collect</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            When users contact BookMyCar.live through forms or email, we may collect information such as name, email address, and the content of the message. This information is used solely to respond to inquiries and provide relevant guidance. We do not share this data with third parties or brokers.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Lock className="text-blue-600 mb-3" size={24} />
              <h3 className="text-base font-black text-gray-900 mb-2 uppercase tracking-tight">Log Files</h3>
              <p className="text-gray-500 font-medium text-xs leading-relaxed">
                BookMyCar.live follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, Internet Service Provider (ISP), date/time stamp, and referring/exit pages. These are not linked to any information that is personally identifiable.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <EyeOff className="text-blue-600 mb-3" size={24} />
              <h3 className="text-base font-black text-gray-900 mb-2 uppercase tracking-tight">Cookies</h3>
              <p className="text-gray-500 font-medium text-xs leading-relaxed">
                This website uses cookies to store information about visitors' preferences and to record user-specific information on which pages the user accesses or visits. This helps in customizing web page content based on visitors' browser type or other information.
              </p>
            </div>
          </div>

          {/* Updated Google Section */}
          <div className="bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl my-10 relative overflow-hidden group">
            <h2 className="text-xl font-black mb-4 text-white tracking-tight uppercase">Google Advertising Cookies</h2>
            <ul className="space-y-3 text-blue-100 font-medium list-none pl-0 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Google AdSense:</strong> Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the <strong>DART cookie</strong> enables it to serve ads to our users based on their visit to our site and other sites on the Internet.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <span>Users may opt out of the use of the DART cookie by visiting the <strong>Google ad and content network privacy policy</strong> at the following URL: <a href="https://policies.google.com/technologies/ads" className="text-white hover:text-blue-200 underline">https://policies.google.com/technologies/ads</a></span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                <span>Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements. BookMyCar.live has no access to or control over these cookies that are used by third-party advertisers.</span>
              </li>
            </ul>
            <ShieldCheck className="absolute -bottom-6 -right-6 text-white/5 transform group-hover:scale-110 transition-transform" size={150} />
          </div>

          <h2 className="text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2 tracking-tight">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Under the CCPA, among other rights, California consumers have the right to: Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. Request that a business delete any personal data about the consumer that a business has collected. Request that a business that sells a consumer's personal data, not sell the consumer's personal data. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
          </p>

          <h2 className="text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2 tracking-tight">GDPR Data Protection Rights</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service. The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete. The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
          </p>

          <h2 className="text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2">Advertising Partners</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links. Our primary partner is:
          </p>
          <div className="mb-10">
            <div className="bg-gray-50 border-2 border-gray-100 p-4 rounded-xl font-black text-blue-600 text-center text-xs uppercase tracking-[0.2em] inline-block min-w-[200px]">
              Google AdSense
            </div>
          </div>

          {/* New Section: User Choices */}
          <h2 className="text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2">User Choices & Rights</h2>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <UserCheck size={20} className="text-blue-600 shrink-0" />
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Cookie Management:</strong> Users can choose to disable cookies through their individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <UserCheck size={20} className="text-blue-600 shrink-0" />
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Data Deletion Requests:</strong> If you wish to request the deletion of any personal data shared through our contact forms, please contact us at <strong>bookmycar.live@gmail.com</strong>. We will process your request as per applicable guidelines.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-black text-gray-900 mt-12 mb-4 tracking-tight uppercase border-b pb-2">Consent</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Privacy;