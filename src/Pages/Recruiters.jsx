import React from 'react';
import { Calendar, Briefcase, Clock, GraduationCap } from 'lucide-react';

const Recruiters = () => {
  const programs = [
    { 
      degree: "B.Tech (2025 passing)",
      internshipDuration: "6 MONTHS",
      dates: "01 JAN 2025 to 30 JUNE 2025",
      joining: "July 2025",
      passing: "July 2025"
    },
    { 
      degree: "B.Tech (2026 passing)",
      internshipDuration: "2 MONTHS",
      dates: "24 MAY 2025 to 25 JULY 2025",
      joining: "July 2026",
      passing: "July 2026"
    },
    {
      degree: "M.Tech (2025 Passing)",
      internshipDuration: "6 MONTHS",
      dates: "01 JAN 2025 to 30 JUNE 2025",
      joining: "July 2025",
      passing: "July 2025"
    },
    {
      degree: "M.Tech (2026 Passing)",
      internshipDuration: "2 MONTHS",
      dates: "24 MAY 2025 to 25 JULY 2025",
      joining: "July 2026",
      passing: "July 2026"
    },
    {
      degree: "M.Tech (2026 Passing)",
      internshipDuration: "6 MONTHS",
      dates: "01 JAN 2026 to 30 JUNE 2026",
      joining: "July 2026",
      passing: "July 2026"
    },
    {
      degree: "M.Sc (2025 Passing)",
      internshipDuration: "4 MONTHS",
      dates: "01 JAN 2025 to 30 April 2025",
      joining: "June 2025",
      passing: "June 2025"
    },
    {
      degree: "B.Design (2025 Passing)",
      internshipDuration: "6 MONTHS",
      dates: "01 JAN 2025 to 30 JUNE 2025",
      joining: "July 2025",
      passing: "July 2025"
    },
    {
      degree: "B.Design (2026 Passing)",
      internshipDuration: "2 MONTHS",
      dates: "24 MAY 2025 to 25 JULY 2025",
      joining: "July 2026",
      passing: "July 2026"
    },
    {
      degree: "MBA (2025 Passing)",
      internshipDuration: "4 MONTHS",
      dates: "01 JAN 2025 to 30 APRIL 2025",
      joining: "June 2025",
      passing: "June 2025"
    },
    {
      degree: "MBA (2026 Passing)",
      internshipDuration: "2 MONTHS",
      dates: "24 MAY 2025 to 25 JULY 2025",
      joining: "June 2026",
      passing: "June 2026"
    },
    {
      degree: "BBA (2025 Passing)",
      internshipDuration: "4 MONTHS",
      dates: "01 JAN 2025 to 30 APRIL 2025",
      joining: "June 2025",
      passing: "June 2025"
    },
    {
      degree: "BBA (2026 Passing)",
      internshipDuration: "2 MONTHS",
      dates: "24 MAY 2025 to 25 JULY 2025",
      joining: "June 2026",
      passing: "June 2026"
    },
    {
      degree: "MA (2025 Passing)",
      internshipDuration: "2 MONTHS",
      dates: "24 MAY 2024 to 25 JULY 2024",
      joining: "June 2025",
      passing: "June 2025"
    }
  ];

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
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Internship/Placement Availability and Joining dates for students
              </h1>
              
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Below is a detailed description of internship and Placements availability (date & duration) for various courses at the university. The dates mentioned below for the exam and internship are tentative, it all depends on the release of the last date sheet scheduled 10-15 days before the exam
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {programs.map((program, index) => (
                <div key={index} className="p-6 rounded-2xl backdrop-blur-sm bg-white/40 border border-white/60 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{program.degree}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-600">Duration: {program.internshipDuration}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-600">Dates: {program.dates}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-600">Joining: {program.joining}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiters;