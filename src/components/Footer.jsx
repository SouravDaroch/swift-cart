import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 p-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Swift<span className="text-blue-500">Cart</span></h2>
          <p className="text-sm leading-relaxed">
            Your one-stop shop for the latest tech, fashion, and home essentials. 
            Quality products delivered to your doorstep.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedin /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Shopping</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shop" className="hover:text-white transition-colors">All Products</a></li>
            <li><a href="/categories" className="hover:text-white transition-colors">Categories</a></li>
            <li><a href="/deals" className="hover:text-white transition-colors">Hot Deals</a></li>
            <li><a href="/new-arrivals" className="hover:text-white transition-colors">New Arrivals</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="/shipping" className="hover:text-white transition-colors">Shipping Info</a></li>
            <li><a href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
            <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">Join Our Newsletter</h3>
          <p className="text-sm mb-4">Get the latest updates on new products and upcoming sales.</p>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 space-y-4 md:space-y-0">
          <p>&copy; {currentYear} SwiftCart Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
            <a href="/cookies" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;