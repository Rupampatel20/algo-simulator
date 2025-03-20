import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-200 text-gray-900 pt-10 pb-6 px-6 md:px-20 relative overflow-hidden">
      {/* Curved Background Effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-green-300 rounded-b-full"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Shop Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-700 mb-4 hover:text-green-600 transition-all duration-300">Sorting & Searching</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Sorting Algorithms</li>
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Searching Algorithms</li>
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Comparison Analysis</li>
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Visualization Tools</li>
          </ul>
        </div>

        {/* Learn Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-700 mb-4 hover:text-green-600 transition-all duration-300">Learn</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer"><a target="_blank" href="https://www.geeksforgeeks.org/sorting-algorithms/">How Sorting Works</a></li>
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">How Searching Works</li>
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Time Complexity Guide</li>
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Big-O Notation</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-700 mb-4 hover:text-green-600 transition-all duration-300">Contact</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Email: support@searchsortplay.com</li>
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Phone: +123 456 7890</li>
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Live Chat Support</li>
          </ul>
        </div>
      </div>

      {/* Social Media & Policies */}
      <div className="text-center mt-10 relative z-10">
        <div className="flex justify-center space-x-4 text-2xl text-gray-700">
          <FaFacebook className="hover:text-green-600 transition-all duration-300 cursor-pointer" />
          <FaTwitter className="hover:text-green-600 transition-all duration-300 cursor-pointer" />
          <FaLinkedin className="hover:text-green-600 transition-all duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-green-600 transition-all duration-300 cursor-pointer" />
          <FaGithub className="hover:text-green-600 transition-all duration-300 cursor-pointer" />
        </div>
        <p className="text-gray-600 text-sm mt-4">&copy; {new Date().getFullYear()} SEARCHSORTPLAY. All rights reserved.</p>
        <p className="text-gray-500 text-xs mt-2">
          <a href="#" className="hover:text-green-600 transition-all duration-300">Terms of Service</a> |
          <a href="#" className="hover:text-green-600 transition-all duration-300"> Privacy Policy</a> |
          <a href="#" className="hover:text-green-600 transition-all duration-300"> Refund Policy</a> |
          <a href="#" className="hover:text-green-600 transition-all duration-300"> Accessibility Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;