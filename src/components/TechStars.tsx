import React, { useEffect, useState } from 'react';

const TechStars = () => {
  const [stars, setStars] = useState([]);
  
  const technologies = [
    { 
      name: 'React', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/128px-React-icon.svg.png',
      color: 'text-cyan-500' 
    },
    { 
      name: 'Next.js', 
      logo: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
      color: 'text-white' 
    },
    { 
      name: 'Python', 
      logo: 'https://www.svgrepo.com/show/376344/python.svg',
      color: 'text-yellow-400' 
    },
    
    
  ];
  

  useEffect(() => {
    const generateStars = () => {
      return technologies.map((tech, index) => ({
        ...tech,
        id: index,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        blinkDelay: `${Math.random() * 5}s`,
        scale: 0.6 + Math.random() * 0.5,
      }));
    };

    setStars(generateStars());

    const interval = setInterval(() => {
      setStars(generateStars());
    }, 500000000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute transition-transform duration-[20000ms] ease-in-out"
          style={{
            top: star.top,
            left: star.left,
            transform: `scale(${star.scale})`,
          }}
        >
          <div className="relative group animate-float" style={{ animationDelay: star.animationDelay }}>
            <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl bg-gradient-to-r from-white/50 to-transparent" />
            
            {/* Blinking Logo */}
            <div className="relative z-10 animate-blinking" style={{ animationDelay: star.blinkDelay }}>
              <img src={star.logo} alt={star.name} width={24} height={24} className="w-12 h-12" />
            </div>
            
            <span className="absolute text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              {star.name}
            </span>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes blinking {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
        .animate-blinking {
          animation: blinking 3s infinite ease-in-out;
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default TechStars;
