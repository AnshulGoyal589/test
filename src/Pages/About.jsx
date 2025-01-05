import React from 'react';
import { BookOpen } from 'lucide-react';
import Statue from '../images/statue.png';

const About = () => {
  const about = {
    aboutText: "The Training and Placement Section at NSUT is responsible for all placement-related activities at our institution. We play a vital role in bridging the gap between corporate and academia, ensuring that our students gain hands-on experience through internships during winter and summer breaks. These internships span multinational, private, and public sector companies, as well as government departments and foreign universities.",
    aboutTexts: "Some top-notch organizations where our students have interned and secured placements include:",
    cardDetails: [
      {
        title: "Technical Profiles",
        description: "Microsoft, Google, Adobe, Goldman Sachs, Rubrik, Tower Research Capital, Uber, Salesforce, D.E. Shaw, Atlassian, PayPal, PhonePe, Walmart, Zomato, Morgan Stanley"
      },
      {
        title: "Non-Tech Profiles",
        description: "Bain and Company, JPMorgan, ZS Associates, McKinsey and Company, BlackRock Group, American Express, KPMG, E&Y, Axis Bank"
      },
      {
        title: "Core Profiles",
        description: "Texas Instruments, Nvidia, Qualcomm, Cadence, Samsung, Bharti Airtel, Reliance, Vedanta, Schlumberger, Maruti"
      }
    ]
  };

  return (
    <div className="relative overflow-hidden bg-white py-16">
      
      <div className="absolute inset-0">
        
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #f1f5f9 25%, transparent 25%, transparent 75%, #f1f5f9 75%, #f1f5f9)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px',
          opacity: '0.4'
        }}></div>


        <div className="absolute top-0 right-0 -mr-40 w-96 h-96 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-40 w-96 h-96 bg-gradient-to-r from-indigo-200 to-purple-100 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
       
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6 backdrop-blur-sm">
            <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-600 font-medium">About Us</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Who are
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> we?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl filter blur-xl opacity-70"></div>
              <div className="relative rounded-xl overflow-hidden backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg p-2">
                <img 
                  src={Statue} 
                  alt="NSUT Statue" 
                  className="w-full h-auto rounded-lg transform hover:scale-[1.02] transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg">
              <p className="text-gray-700 leading-relaxed">{about.aboutText}</p>
            </div>
            <div className="text-blue-600 font-semibold text-lg">{about.aboutTexts}</div>
            
            <div className="grid grid-cols-1 gap-6">
              {about.cardDetails.map((card) => (
                <div 
                  key={card.title}
                  className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg transform hover:scale-[1.02] transition-all"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600">40+</div>
            <div className="mt-2 text-gray-600">Years of Excellence</div>
          </div>
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg text-center">
            <div className="text-3xl font-bold text-indigo-600">300+</div>
            <div className="mt-2 text-gray-600">Partner Companies</div>
          </div>
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600">95%</div>
            <div className="mt-2 text-gray-600">Placement Rate</div>
          </div>
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg text-center">
            <div className="text-3xl font-bold text-pink-600">1500+</div>
            <div className="mt-2 text-gray-600">Students</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;