import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, Mail, Github, Linkedin, Code, UserCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Team = () => {
  const teamData = {
    "2024": {
      technical: [
        { 
          name: "Alex Johnson", 
          role: "Technical Coordinator", 
          email: "alex@example.com",
          github: "https://github.com/alexj",
          linkedin: "https://linkedin.com/in/alexj",
          image: "/api/placeholder/300/300"
        },
        { 
          name: "Sarah Wilson", 
          role: "Design Coordinator", 
          email: "sarah@example.com",
          github: "https://github.com/sarahw",
          linkedin: "https://linkedin.com/in/sarahw",
          image: "/api/placeholder/300/300"
        }
      ],
      nonTechnical: [
        { 
          name: "John Doe", 
          role: "Placement Coordinator", 
          email: "john@example.com",
          github: "https://github.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          image: "/api/placeholder/300/300"
        },
        { 
          name: "Jane Smith", 
          role: "Placement Coordinator", 
          email: "jane@example.com",
          github: "https://github.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
          image: "/api/placeholder/300/300"
        },
        { 
          name: "Mike Brown", 
          role: "Content Coordinator", 
          email: "mike@example.com",
          github: "https://github.com/mikeb",
          linkedin: "https://linkedin.com/in/mikeb",
          image: "/api/placeholder/300/300"
        }
      ]
    },
    "2025": {
      technical: [
        { 
          name: "Emma Davis", 
          role: "Technical Lead", 
          email: "emma@example.com",
          github: "https://github.com/emmad",
          linkedin: "https://linkedin.com/in/emmad",
          image: "/api/placeholder/300/300"
        }
      ],
      nonTechnical: []
    },
    "2026": {
      technical: [],
      nonTechnical: [
        { 
          name: "Ryan Miller", 
          role: "Placement Coordinator", 
          email: "ryan@example.com",
          github: "https://github.com/ryanm",
          linkedin: "https://linkedin.com/in/ryanm",
          image: "/api/placeholder/300/300"
        }
      ]
    }
  };

  const MemberCard = ({ member }) => (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{member.role}</p>
        <div className="flex space-x-4">
          <a 
            href={`mailto:${member.email}`}
            className="text-gray-600 hover:text-blue-600 transition-colors"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a 
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="relative overflow-hidden">
        
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

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">Our Team</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Dedicated
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Team Members
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Working together to bridge the gap between talent and opportunity
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="technical" className="space-y-6">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="technical" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Technical Team
                </TabsTrigger>
                <TabsTrigger value="nonTechnical" className="flex items-center gap-2">
                  <UserCircle className="h-4 w-4" />
                  Non-Technical Team
                </TabsTrigger>
              </TabsList>


              <TabsContent value="technical">
                <Accordion type="single" collapsible className="space-y-4">
                  {Object.entries(teamData).map(([batch, { technical }]) => (
                    technical.length > 0 && (
                      <AccordionItem 
                        key={batch} 
                        value={batch}
                        className="backdrop-blur-sm bg-white/40 border border-white/60 rounded-lg shadow-lg"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center">
                            <span className="text-xl font-semibold text-gray-900">Batch {batch}</span>
                            <span className="ml-4 text-sm text-gray-500">({technical.length} members)</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {technical.map((member, index) => (
                              <MemberCard key={index} member={member} />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  ))}
                </Accordion>
              </TabsContent>


              <TabsContent value="nonTechnical">
                <Accordion type="single" collapsible className="space-y-4">
                  {Object.entries(teamData).map(([batch, { nonTechnical }]) => (
                    nonTechnical.length > 0 && (
                      <AccordionItem 
                        key={batch} 
                        value={batch}
                        className="backdrop-blur-sm bg-white/40 border border-white/60 rounded-lg shadow-lg"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center">
                            <span className="text-xl font-semibold text-gray-900">Batch {batch}</span>
                            <span className="ml-4 text-sm text-gray-500">({nonTechnical.length} members)</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {nonTechnical.map((member, index) => (
                              <MemberCard key={index} member={member} />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;