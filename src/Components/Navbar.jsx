import React, { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md mx-4 border border-white/60">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Login</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-4 flex flex-col gap-2">
          <Link to="https://student.tnpnsut.in/" >
            <button 
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              Student Login
            </button>
          </Link>
          <Link to="https://admin.tnpnsut.in/" >
            <button 
              className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-lg shadow-indigo-500/20"
            >
              Admin Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="relative">
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm font-medium">
            Training and Placements - Netaji Subhas University of Technology
          </p>
        </div>
      </div>


      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img src={logo} alt="NSUT Logo" className="h-14 w-auto" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              
              <Link to="/about-us" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                About Us
              </Link>
              <Link to="/recruiters" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                For Recruiters
              </Link>
              <Link to="/stats" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Placement Stats
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Our Team
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Contact Us
              </Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <div className="hidden lg:flex items-center space-x-8">
              <a href="http://www.nsut.ac.in/hi/about-nsut" className="text-sm text-gray-600 hover:text-blue-600">About NSUT</a>
              <a href="http://www.nsut.ac.in/hi/photo-gallery" className="text-sm text-gray-600 hover:text-blue-600">Media</a>
              <a href="http://www.nsut.ac.in/hi/node/1265" className="text-sm text-gray-600 hover:text-blue-600">Academic Curriculum</a>
              <a href="http://www.nsut.ac.in/hi/node/335" className="text-sm text-gray-600 hover:text-blue-600">Alumni</a>
            </div>
            
            <button
              onClick={() => setShowLoginModal(true)}
              className="inline-flex items-center px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="lg:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="px-4 py-2 space-y-1">
            <Link to="/about-us" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              About Us
            </Link>
            <Link to="http://www.nsut.ac.in/hi/about-nsut" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              About NSUT
            </Link>
            <Link to="http://www.nsut.ac.in/hi/photo-gallery" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Media
            </Link>
            <Link to="http://www.nsut.ac.in/hi/node/1265" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Academic Curriculum
            </Link>
            <Link to="/recruiters" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              For Recruiters
            </Link>
            <a href="http://www.nsut.ac.in/hi/node/335" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Alumni
            </a>
            <Link to="/stats" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Placement Stats
            </Link>
            <Link to="/team" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Our Team
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Contact Us
            </Link>
          </div>
        </div>
      )}
       <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </div>
  );
};

export default Navbar;