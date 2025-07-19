import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';
import Navigation from './Navigation';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // AI-themed animated background
  const AnimatedBackground = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Neural network nodes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating code snippets */}
      <div className="absolute inset-0 opacity-5">
        {['AI', 'ML', '{}', '<>', 'def', 'import', 'neural', 'data'].map((text, i) => (
          <div
            key={i}
            className="absolute text-sm font-mono text-cyan-400 animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Matrix-like grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection isLoaded={isLoaded} />
        <ProjectsSection isLoaded={isLoaded} />
        <ExperienceSection isLoaded={isLoaded} />
        <CertificationsSection isLoaded={isLoaded} />
        <ContactSection isLoaded={isLoaded} />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 bg-black/50 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono text-sm">System Online</span>
          </div>
          <p className="text-gray-400 font-mono">
            © 2024 Syed Hashir Husnain | AI Engineer | Built with React & Neural Networks
          </p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        @keyframes matrix {
          0% { opacity: 0; transform: translateY(-100px); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(100px); }
        }
        .animate-matrix {
          animation: matrix 8s linear infinite;
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3); }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;