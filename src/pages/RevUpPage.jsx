import React, { useState } from 'react'; // <-- FIX: Added useState
import { 
  Users, 
  Building2, 
  Star, 
  Wrench, 
  Building, 
  UsersRound, 
  Crown, 
  HelpCircle,
  ChevronDown 
} from 'lucide-react'; // Icons are now used
import { Link } from 'react-router-dom'; // For the "Register Now" button

// --- NEW: Import the AssemblyLine component ---
import AssemblyLine from '../components/AssemblyLine';

// --- FAQ Item Component ---
// A reusable component for each FAQ item to manage its own state
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); // This line caused the error

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-gray-100">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="pb-5 pr-10 text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

// --- Main RevUp Page Component ---
const RevUpPage = () => {
  // FAQ content
  const faqData = [
    {
      question: 'Who is eligible to participate in RevUp?',
      answer: 'RevUp is open to all university students, young professionals, and tech enthusiasts interested in vehicular technology, regardless of their branch or field of study.'
    },
    {
      question: 'What is the registration fee for the event?',
      answer: 'Please refer to the registration section for detailed information on fees for IEEE members and non-members.'
    },
    {
      question: 'Will accommodation be provided for out-station participants?',
      answer: 'Yes, accommodation options will be available for participants from outside Palakkad. More details will be provided upon registration.'
    },
    {
      question: 'Will food be provided during the event?',
      answer: 'Yes, registration includes access to all sessions, event kits, and food (lunch and refreshments) for both days of the event.'
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-20"> {/* Added space-y-20 for spacing */}
        
        {/* --- About RevUp Section --- */}
        <div className="bg-gray-800 rounded-lg p-10">
          <h2 className="text-3xl font-semibold text-center mb-6">
            About RevUp
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed">
            RevUp is a flagship initiative of the IEEE Vehicular Technology Society Student Branch Chapter (VTS SBC) of NSS College of Engineering, Palakkad, designed to ignite curiosity and innovation in the ever-evolving field of vehicular technology. This two-day immersive program brings together students, professionals, and enthusiasts through a blend of technical workshops, industrial visits, expert talk sessions, and cultural evenings, creating a perfect balance of learning and experience. Participants get the unique opportunity to engage directly with industry experts, explore advancements in electric vehicles, intelligent transport systems, and sustainable mobility, and gain practical exposure through field visits to leading organizations in the vehicular domain. RevUp stands as a symbol of the chapter’s commitment to empowering young engineers to drive technological progress and steer toward a smarter, sustainable, and connected world.
          </p>
        </div>

        {/* --- RE-ADDED: Our Audience Section --- */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Audience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            
            {/* Students Card */}
            <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-yellow-400 mb-4" />
              <span className="text-5xl font-bold text-white">70+</span>
              <span className="text-lg uppercase text-gray-400 mt-2">Students</span>
            </div>
            
            {/* Colleges Card */}
            <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center">
              <Building2 className="h-12 w-12 text-yellow-400 mb-4" />
              <span className="text-5xl font-bold text-white">25+</span>
              <span className="text-lg uppercase text-gray-400 mt-2">Colleges</span>
            </div>
            
          </div>
        </div>

        {/* --- RE-ADDED: RevUp Event Highlights --- */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            RevUp Event Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Highlight Card 1 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <Wrench className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Technical Workshops</h3>
              <p className="text-gray-300 text-sm">A blend of technical workshops to provide hands-on exposure to cutting-edge technologies shaping the future of mobility.</p>
            </div>
            {/* Highlight Card 2 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <UsersRound className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Expert Talk Sessions</h3>
              <p className="text-gray-300 text-sm">Engage directly with industry experts and explore advancements in electric vehicles and intelligent transport systems.</p>
            </div>
            {/* Highlight Card 3 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <Building className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Industrial Visits</h3>
              <p className="text-gray-300 text-sm">Gain practical exposure through field visits to leading organizations in the vehicular domain.</p>
            </div>
            {/* Highlight Card 4 */}
            <div className="bg-gray-800 rounded-lg p-6">
              <Users className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Cultural Evenings & Networking</h3>
              <p className="text-gray-300 text-sm">Connect, share ideas, and build lasting relationships in an evening of creativity and collaboration.</p>
            </div>
          </div>
        </div>

        {/* --- The RevUp Assembly Line --- */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center">
            <Crown className="h-8 w-8 text-yellow-400 mr-3" />
            The RevUp Assembly Line
          </h2>
          <AssemblyLine />
        </div>

        {/* --- Frequently Asked Questions --- */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center">
            <HelpCircle className="h-8 w-8 text-yellow-400 mr-3" />
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6">
            {faqData.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* --- Ready to RevUp? --- */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to RevUp?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Secure your spot at RevUp and be part of the future of vehicular technology.
          </p>
          <Link
            to="/register" // Or your registration path
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg transition-colors duration-200"
          >
            Register Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default RevUpPage;
