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
  <h2 className="text-lg font-bold text-gray-700 mb-4 hover:text-green-600 transition-all duration-300">
    Sorting & Searching
  </h2>
  <ul className="space-y-2 text-gray-600">
    <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">
      <a href="/sorting" target="_blank">Sorting Algorithms</a>
    </li>
    <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">
      <a href="/searching" target="_blank">Searching Algorithms</a>
    </li>
    {/* <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">
      <a href="/comparison" target="_blank">Comparison Analysis</a>
    </li> */}
    {/* <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">
      <a href="/visualization" target="_blank">Visualization Tools</a>
    </li> */}
  </ul>
</div>

        {/* Learn Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-700 mb-4 hover:text-green-600 transition-all duration-300">Learn</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer"><a target="_blank">How Visualzation Works</a></li>
            {/* <li className="hover:text-green-600 transition-all duration-300 cursor-pointer"><a target="_blank">How Searching Works</a></li> */}
            {/* <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Time Complexity Guide</li>
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Big-O Notation</li> */}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-700 mb-4 hover:text-green-600 transition-all duration-300">Contact</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">
            <a href="mailto:rupampatel786@gmail.com">Email: rupampatel786@gmail.com</a>
            </li>

            <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">
            <a href="tel:+917999482004">Phone: +91 8225850368</a>
            </li>
            {/* <li className="hover:text-green-600 transition-all duration-300 cursor-pointer">Live Chat Support</li> */}
          </ul>
        </div>
      </div>

      {/* Social Media & Policies */}
      <div className="text-center mt-10 relative z-10">
        <div className="flex justify-center space-x-4 text-2xl text-gray-700">
          {/* <FaFacebook className="hover:text-green-600 transition-all duration-300 cursor-pointer" />
          {/* <FaTwitter className="hover:text-green-600 transition-all duration-300 cursor-pointer" /> */}
          {/* <FaInstagram className="hover:text-green-600 transition-all duration-300 cursor-pointer" /> */}
          <FaLinkedin className="hover:text-green-600 transition-all duration-300 cursor-pointer" 
          onClick={() => window.open("https://www.linkedin.com/in/rupam-patel-702b75311/", "_blank")}
          />
          <FaGithub className="hover:text-green-600 transition-all duration-300 cursor-pointer"
          onClick={() => window.open("https://github.com/Rupampatel20/algo-simulator", "_blank")}
          />
        </div>

        <p className="text-gray-600 text-sm mt-4">&copy; {new Date().getFullYear()} SEARCHSORTPLAY. All rights reserved.</p>
        {/* <p className="text-gray-500 text-xs mt-2">
          <a href="#" className="hover:text-green-600 transition-all duration-300">Terms of Service</a> |
          <a href="#" className="hover:text-green-600 transition-all duration-300"> Privacy Policy</a> |
          <a href="#" className="hover:text-green-600 transition-all duration-300"> Refund Policy</a> |
          <a href="#" className="hover:text-green-600 transition-all duration-300"> Accessibility Policy</a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;