import { useEffect, useState, useRef } from 'react';

const LogoSlider = () => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef(null);
  
  const logos = [
    { id: 1, name: 'Bacco', src: 'https://i.ibb.co.com/1tsPBzDz/bacco.png' },
    { id: 2, name: 'Hi Tech Park', src: 'https://i.ibb.co.com/Ng62TnYh/HITech.jpg' },
    { id: 3, name: 'BIDA', src: 'https://i.ibb.co.com/ZpQDwR43/logo-for-jsln.png' },
    { id: 4, name: 'BASIS', src: 'https://i.ibb.co.com/B2ctnWfh/Basis-removebg-preview.png' },
    { id: 5, name: 'ISO', src: 'https://i.ibb.co.com/GvhqWBp6/iso.png' },
    { id: 6, name: 'BTRC', src: 'https://i.ibb.co.com/9QzTz7z/btrc.png' }
  ];

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        if (Math.abs(newPosition) >= 1200) {
          return 0;
        }
        return newPosition;
      });
    };

    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-900 overflow-hidden py-8 relative">
      <div className="relative w-full max-w-6xl mx-auto">
        <div 
          ref={containerRef}
          className="flex items-center"
          style={{
            transform: `translateX(${position}px)`,
            transition: 'transform 0.1s linear'
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center opacity-70 transition-all duration-300"
            >
              <div className="w-40 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 w-auto object-contain hover:scale-110 transition-all duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays for fading effect */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default LogoSlider;