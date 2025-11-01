import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Zap, ShieldCheck, Star, Check } from 'lucide-react'; // Added Star and Check icons

// --- Reusable Sponsor Logos Component ---
// (Copied from your Hero.js component for reusability)
const SponsorLogos = () => {
  // Dummy data for sponsor logos - replace with your actual paths
  const sponsorLogos = [
    '/logos/sponsor1.png',
    '/logos/sponsor2.png',
    '/logos/sponsor3.png',
    '/logos/sponsor4.png',
    '/logos/sponsor5.png',
    '/logos/sponsor6.png',
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Our Sponsors
      </h2>
      
      {/* Main container must be relative */}
      <div className="relative w-full overflow-hidden whitespace-nowrap py-4">
        
        {/* Left Fade Effect - (bg-gray-900 matches the page) */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Logos */}
        {/* The animate-marquee class comes from tailwind.config.js */}
        <div className="inline-block animate-marquee">
          {/* Duplicate logos to create a continuous loop */}
          {[...sponsorLogos, ...sponsorLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="h-16 mx-8 inline-block object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
        
        {/* Right Fade Effect - (bg-gray-900 matches the page) */}
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

      </div>
    </div>
  );
};

// --- Data for Partnership Table ---
const partnershipData = [
  { deliverable: 'Logo on posters', platinum: true, gold: true, silver: true, bronze: true },
  { deliverable: 'Logo on Banners', platinum: true, gold: true, silver: true, bronze: true },
  { deliverable: 'Logo on Event Merchandise', platinum: true, gold: true, silver: true, bronze: true },
  { deliverable: 'Logo on event emails', platinum: true, gold: true, silver: true, bronze: true },
  { deliverable: 'Survey from participants', platinum: true, gold: true, silver: true, bronze: true },
  { deliverable: 'Special mention in inaugural and closing ceremonies', platinum: true, gold: true, silver: true, bronze: false },
  { deliverable: 'Logo on Delegate Certificates', platinum: true, gold: true, silver: true, bronze: false },
  { deliverable: 'Exclusive talk/Interaction with participants', platinum: true, gold: true, silver: false, bronze: false },
  { deliverable: 'Exclusive stall space for brand promotion', platinum: true, gold: false, silver: false, bronze: false },
];


// --- Main Sponsors Page Component ---
const SponsorsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* --- Why Partner with RevUp? Section --- */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Why Partner with RevUp?
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Partnering with RevUp, the flagship event of IEEE VTS SBC NSSCE, offers your
            organization a unique opportunity to connect with some of the brightest young minds in
            engineering and innovation. Your partnership with RevUp is not just a sponsorship—it's an
            investment in empowering innovation, nurturing talent, and driving a smarter, sustainable
            tomorrow.
          </p>
        </div>

        {/* --- Benefits Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Enhance Brand Visibility */}
          <div className="bg-gray-800 rounded-lg p-8">
            <Zap className="h-10 w-10 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Enhance Brand Visibility
            </h3>
            <p className="text-gray-300">
              Gain wide exposure among hundreds of students, faculty, professionals, and industry leaders
              through event branding, digital promotions, and media coverage.
            </p>
          </div>

          {/* Card 2: Engage Future Talent */}
          <div className="bg-gray-800 rounded-lg p-8">
            <Users className="h-10 w-10 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Engage Future Talent
            </h3>
            <p className="text-gray-300">
              Interact directly with aspiring engineers and innovators who represent the next generation of
              technical leaders.
            </p>
          </div>

          {/* Card 3: Strengthen Industry-Academia Collaboration */}
          <div className="bg-gray-800 rounded-lg p-8">
            <Briefcase className="h-10 w-10 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Strengthen Industry-Academia Collaboration
            </h3>
            <p className="text-gray-300">
              Support initiatives that encourage practical learning, research, and innovation in emerging
              technologies like electric vehicles, automation, and sustainable transport.
            </p>
          </div>

          {/* Card 4: Showcase Corporate Social Responsibility */}
          <div className="bg-gray-800 rounded-lg p-8">
            <ShieldCheck className="h-10 w-10 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Showcase Corporate Social Responsibility
            </h3>
            <p className="text-gray-300">
              Align your brand with a student-led initiative that promotes education, technology, and
              sustainability - values that shape the future of mobility.
            </p>
          </div>
        </div>

        {/* --- NEW: Partnership Tiers Table --- */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            Our Partnership Tiers
          </h2>
          <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
            <table className="w-full min-w-max text-left">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="p-4 py-5 text-lg font-semibold">Deliverables</th>
                  <th className="p-4 py-5 text-center">
                    <span className="block text-lg font-semibold">Platinum</span>
                    <span className="text-sm text-gray-400">₹20,000</span>
                  </th>
                  <th className="p-4 py-5 text-center">
                    <span className="block text-lg font-semibold">Gold</span>
                    <span className="text-sm text-gray-400">₹15,000</span>
                  </th>
                  <th className="p-4 py-5 text-center">
                    <span className="block text-lg font-semibold">Silver</span>
                    <span className="text-sm text-gray-400">₹10,000</span>
                  </th>
                  <th className="p-4 py-5 text-center">
                    <span className="block text-lg font-semibold">Bronze</span>
                    <span className="text-sm text-gray-400">₹5,000</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {partnershipData.map((item) => (
                  <tr key={item.deliverable} className="hover:bg-gray-700/50">
                    <td className="p-4 font-medium">{item.deliverable}</td>
                    <td className="p-4 text-center">
                      {item.platinum && <Check className="h-6 w-6 text-green-400 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {item.gold && <Check className="h-6 w-6 text-green-400 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {item.silver && <Check className="h-6 w-6 text-green-400 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {item.bronze && <Check className="h-6 w-6 text-green-400 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- Scrolling Sponsor Logos --- */}
        <SponsorLogos />

        {/* --- Final CTA (Replaced with new content) --- */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-300"> {/* Added text-blue-300 to match image style */}
            Ready to Partner With Us?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join us in driving the future of vehicular technology. Contact us today to
            discuss sponsorship opportunities.
          </p>
          <Link
            to="/contact" // Or your contact/sponsorship page
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            Become a Sponsor
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SponsorsPage;


