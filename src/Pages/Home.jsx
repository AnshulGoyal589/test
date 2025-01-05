// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       <div 
//         className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center"
//       >
//         {/* Abstract Pattern Background */}
//         <div className="absolute inset-0 opacity-10">
//           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
//               <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
//             </pattern>
//             <rect width="100" height="100" fill="url(#grid)"/>
//           </svg>
//         </div>

//         {/* Accent Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>

//         <div className="relative container mx-auto px-6 py-20 z-10">
//           <div className="max-w-4xl">
//             <div className="inline-block mb-4 px-4 py-1 bg-blue-50 rounded-full">
//               <span className="text-blue-600 font-medium">Training & Placements</span>
//             </div>
            
//             <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//               Shape Your Future at{' '}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
//                 NSUT
//               </span>
//             </h1>
            
//             <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
//               Empowering careers through excellence in education
//               <span className="block">at Netaji Subhas University of Technology</span>
//             </h2>
            
//             <div className="flex flex-col sm:flex-row gap-6 mt-12">
//               <Link 
//                 to="/contact"
//                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
//               >
//                 For Students
//               </Link>
//               <Link 
//                 to="/contact"
//                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-200"
//               >
//                 For Recruiters
//               </Link>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24">
//               <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
//                 <div className="text-gray-600 font-medium">Companies Visited</div>
//                 <div className="mt-2 text-sm text-gray-500">In the last academic year</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
//                 <div className="text-gray-600 font-medium">Placement Rate</div>
//                 <div className="mt-2 text-sm text-gray-500">Consistent achievement</div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
//                 <div className="text-3xl font-bold text-blue-600 mb-2">₹42 LPA</div>
//                 <div className="text-gray-600 font-medium">Highest Package</div>
//                 <div className="mt-2 text-sm text-gray-500">2023-24 Batch</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Building2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #f1f5f9 25%, transparent 25%, transparent 75%, #f1f5f9 75%, #f1f5f9), 
                             linear-gradient(45deg, #f1f5f9 25%, transparent 25%, transparent 75%, #f1f5f9 75%, #f1f5f9)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
            opacity: '0.4'
          }}></div>


          <div className="absolute top-0 right-0 -mr-40 w-96 h-96 bg-gradient-to-r from-blue-200 to-blue-100 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-40 w-96 h-96 bg-gradient-to-r from-indigo-200 to-purple-100 rounded-full filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>


          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)' }}></div>
        </div>

        <div className="relative">
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-72 h-72 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6 backdrop-blur-sm">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-blue-600 font-medium">Est. 1983</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Excellence in 
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Engineering Education
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-8">
                    Shaping tomorrow's innovators at Netaji Subhas University of Technology
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href='mailto:placements@nsitonline.in' >
                      <div
                        className="inline-flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                      >
                        Contact Us (Recruiters) 
                      </div>
                    </a>
                    <a href='mailto:tnpcell@nsitonline.in' >
                      <div
                        className="inline-flex justify-center items-center px-6 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 backdrop-blur-sm"
                      >
                        Contact Us (Students) 
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg">
                  <div className="text-4xl font-bold text-blue-600">300+</div>
                  <div className="mt-2 text-gray-600">Global Recruiting Partners</div>
                </div>
                <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg">
                  <div className="text-4xl font-bold text-indigo-600">80%+</div>
                  <div className="mt-2 text-gray-600">Batch Placed in 2024</div>
                </div>
                <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg">
                  <div className="text-4xl font-bold text-purple-600">₹1Cr</div>
                  <div className="mt-2 text-gray-600">Highest Package</div>
                </div>
                <div className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg">
                  <div className="text-4xl font-bold text-pink-600">1500+</div>
                  <div className="mt-2 text-gray-600">Students</div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200/80 backdrop-blur-sm py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex items-center justify-center">
                  <span className="text-sm text-gray-500 text-center ">India Today Colleges 2024 <br/> Rank 8</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-sm text-gray-500 text-center">NIRF India Rankings 2024: Engineering <br/> Rank 57 </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-sm text-gray-500 text-center">NIRF India Rankings 2023: UNIVERSITY <br/> Rank 95 </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-sm text-gray-500 text-center ">ARIIA Ranking 2020 <br/> Rank 5 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;