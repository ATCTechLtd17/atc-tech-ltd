/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

const Footer = () => {
   const [isOpen, setIsOpen] = useState(false);
  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };
  return (
    <div>
      <footer className="py-8 md:py-12 relative overflow-hidden bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo section */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
          <a
            href="#home"
            className="mx-auto"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('#home');
            }}
          >
            <img
              src="https://res.cloudinary.com/dufs2ywc7/image/upload/v1742376697/ATC_sh8p3m.png" // Updated to use local image path
              alt="ATC Tech Logo"
              className="h-18  w-full md:h-[160px] transition-transform hover:scale-105"
            />
          </a>
            
            {/* Office information */}
            <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bangladesh Office */}
              <div>
                <h4 className="text-base md:text-lg font-bold mb-4">
                  Bangladesh Office
                </h4>
                <p className="text-gray-400 text-sm md:text-base">
                  Rajshahi Office: BSMHTP, Joy Silicon Tower, Level # 7, Suit # A, Rajshahi.
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  Telephone: 02588878917-18
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  Email: atctechltdbd@gmail.com
                </p>
              </div>
              
              {/* USA Office */}
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-4">USA Office</h4>
                <p className="text-gray-400 text-sm md:text-base">
                  370, S Commonwealthe Ave, Apt 106, Losangeles, CA 90020.
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  Email: atctechltdusa@gmail.com
                </p>
              </div>
              
              {/* Dubai Office */}
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-4">Dubai Office</h4>
                <p className="text-gray-400 text-sm md:text-base">
                  Central Building, Shop No. G-11, Naif, Deira, Dubai, UAE.
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  Email: atctechlimited@gmail.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 py-4 border-t border-white/10">
  {[
    { label: 'About Us', path: '/aboutUs' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Refund Policy', path: '/refund' },
    { label: 'Fraud Policy', path: '/fraud' },
    { label: 'Delivery Policy', path: '/delivery' },
    { label: 'Compliance Report', path: '/report' }
  ].map((item) => (
    <a 
      key={item.path}
      href={item.path}
      className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
    >
      {item.label}
    </a>
  ))}
</div>
          
          {/* Copyright and Social Links */}
          <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 mx-auto text-xs md:text-sm">@
                2017- {new Date().getFullYear()} All rights reserved | ATC Tech Limited
              </p>
              <div className="flex space-x-4 md:space-x-6">
                <a href="#linkedin" aria-label="LinkedIn" className="text-gray-400 hover:text-white text-xl transition-colors">
                  <i className="fab fa-linkedin"> </i>
                </a>
                <a href="#youtube" aria-label="YouTube" className="text-gray-400 hover:text-white text-xl transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#facebook" aria-label="Facebook" className="text-gray-400 hover:text-white text-xl transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#twitter" aria-label="Twitter" className="text-gray-400 hover:text-white text-xl transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;