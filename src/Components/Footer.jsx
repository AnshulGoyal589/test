import React from 'react';
import logo from '../images/logo.png'
import googlePlay from '../images/google-play.png'
import appStore from '../images/apple-store.png'

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="NSUT Logo" className="h-16 w-16" />
              <div>
                <h3 className="font-medium">Netaji Subhas University Of Technology</h3>
                <p className="text-gray-600">Training and Placements</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Download the mobile version</p>
            <div className="flex space-x-4">
              <a href="#" className="w-32">
                <img src={googlePlay} alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="#" className="w-32">
                <img src={appStore} alt="Download on App Store" className="h-10" />
              </a>
            </div>
          </div>


          <div>
            <h4 className="font-medium mb-4">Address</h4>
            <p className="text-gray-600">Dwarka Sector-3, Dwarka Delhi, 110078, India</p>
          </div>


          <div>
            <h4 className="font-medium mb-4">Phone</h4>
            <p className="text-gray-600">9205475078</p>
            <p className="text-gray-600">9810472670</p>
            <h4 className="font-medium mt-4 mb-2">Email</h4>
            <a href="mailto:placements@nsitonline.in" className="text-gray-600 block hover:text-blue-600">placements@nsitonline.in</a>
            <a href="mailto:placements@nsut.ac.in" className="text-gray-600 block hover:text-blue-600">placements@nsut.ac.in</a>
          </div>


          <div>
            <h4 className="font-medium mb-4">Social Media</h4>
            <p className="text-gray-600 mb-4">Follow us on social media to find out the latest information</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <p>Copyright © TNP Netaji Subhas University Of Technology. All right Reserved</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <span className="mx-2">-</span>
            <a href="#" className="hover:text-blue-600">Terms and conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;