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
      <footer className="relative py-8 overflow-hidden text-white bg-gray-800 md:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Logo section */}
          <div className="flex flex-col gap-8 mb-8 md:flex-row">
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
            <div className="grid w-full grid-cols-1 gap-6 md:w-3/4 md:grid-cols-3">
              {/* Bangladesh Office */}
              <div>
                <h4 className="mb-4 text-base font-bold md:text-lg">
                  Bangladesh Office
                </h4>
                <p className="text-sm text-gray-400 md:text-base">
                  Rajshahi Office: Hi Tech Park, Silicon Tower, Level # 7, Suit # A, Rajshahi.
                </p>
                <p className="text-sm text-gray-400 md:text-base">
                  Telephone: 02588878917-18
                </p>
                <p className="text-sm text-gray-400 md:text-base">
                  Email: atctechltdbd@gmail.com
                </p>
              </div>
              
              {/* USA Office */}
              <div>
                <h4 className="mb-4 text-base font-semibold md:text-lg">USA Office</h4>
                <p className="text-sm text-gray-400 md:text-base">
                  370, S Commonwealthe Ave, Apt 106, Losangeles, CA 90020.
                </p>
                <p className="text-sm text-gray-400 md:text-base">
                  Email: atctechltdusa@gmail.com
                </p>
              </div>
              
              {/* Dubai Office */}
              <div>
                <h4 className="mb-4 text-base font-semibold md:text-lg">Dubai Office</h4>
                <p className="text-sm text-gray-400 md:text-base">
                  Central Building, Shop No. G-11, Naif, Deira, Dubai, UAE.
                </p>
                <p className="text-sm text-gray-400 md:text-base">
                  Email: atctechlimited@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 py-4 border-t border-white/10">
  {[
    { label: 'About Us', path: '/aboutUs' },
    { label: 'Privacy Policy, Terms & Conditions', path: '/privacy-policy-t&c' },
   
    { label: 'Refund & Return Policy', path: '/refund' },
  
    
  ].map((item) => (
    <a 
      key={item.path}
      href={item.path}
      className="text-sm text-gray-400 transition-colors hover:text-white md:text-base"
    >
      {item.label}
    </a>
  ))}
</div>
          
          {/* Copyright and Social Links */}
          <div className="pt-6 mt-6 border-t md:pt-8 md:mt-8 border-white/10">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="mx-auto text-xs text-gray-400 md:text-sm">@
                2017- {new Date().getFullYear()} All rights reserved | ATC Tech Limited
              </p>
              <div className="flex space-x-4 md:space-x-6">
                <a href="#linkedin" aria-label="LinkedIn" className="text-xl text-gray-400 transition-colors hover:text-white">
                  <i className="fab fa-linkedin"> </i>
                </a>
                <a href="#youtube" aria-label="YouTube" className="text-xl text-gray-400 transition-colors hover:text-white">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#facebook" aria-label="Facebook" className="text-xl text-gray-400 transition-colors hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#twitter" aria-label="Twitter" className="text-xl text-gray-400 transition-colors hover:text-white">
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