import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';
import sir1 from '../images/MPSBhatia.jpeg'
import sir2 from '../images/sir2.jpeg'

const ContactPage = () => {
  const professors = [
    {
      name: "Dr. M.P.S. Bhatia",
      title: "Training & Placement",
      office: "Ground Floor, Training & Placement Building",
      affiliation: "Netaji Subhas University of Technology",
      address: "Sector-3, Dwaraka, New Delhi-110078, INDIA",
      phone: ["+91-9968604104", "+91-9818192294"],
      email: ["placements@nsut.ac.in", "placements@nsitonline.in"],
      imge : `${sir1}`
    },
    {
      name: "Rajesh Rawat",
      title: "Training and Placement",
      office: "Ground Floor, Training & Placement Building",
      affiliation: "Netaji Subhas University of Technology",
      address: "Sector-3 Dwarka, New Delhi-110078",
      phone: ["+91-9205475078", "+91-9810472670"],
      email: ["placements@nsut.ac.in", "placements@nsitonline.in"],
      imge : `${sir2}`
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h1>
      
      <p className="text-lg text-gray-600 text-center mb-8">
        Those interested in the campus recruitment may also contact:
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {professors.map((prof, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <div className="flex items-start space-x-4">
              <img
                src={prof.imge}
                alt={prof.name}
                className="rounded-full w-32 h-32 object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{prof.name}</h3>
                <p className="text-gray-600 mb-1">{prof.title}</p>
                {prof.office && (
                  <p className="text-gray-600 mb-1">{prof.office}</p>
                )}
                <p className="text-gray-600 mb-3">{prof.affiliation}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{prof.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <div className="text-sm text-gray-600">
                      {prof.phone.join(", ")}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <div className="text-sm">
                      {prof.email.map((email, i) => (
                        <a 
                          key={i}
                          href={`mailto:${email}`}
                          className="text-blue-600 hover:text-blue-800 hover:underline block"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Social Media</h3>
        <p className="text-gray-600 mb-4">
          Follow us on social media to find out the latest information
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;