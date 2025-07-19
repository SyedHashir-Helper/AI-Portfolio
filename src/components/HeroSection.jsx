import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Brain, Cpu, Database, Code, Zap, Contact, PhoneCall } from 'lucide-react';
import ai from '../assets/icons8-chatbot.gif'
const HeroSection = ({ isLoaded }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "AI Engineer",
    "Machine Learning", 
    "Natural Language Processing",
    "Neural Networks",
    "Generative AI"
  ];

  // Typewriter effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < titles[textIndex].length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === titles[textIndex].length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % titles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, titles]);

  const aiIcons = [Brain, Cpu, Database, Code, Zap];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* AI-themed background elements */}
      <div className="absolute inset-0">
        {/* Animated neural connections */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>

        {/* Floating AI icons */}
        {aiIcons.map((Icon, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 animate-float"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`
            }}
          >
            <Icon className="w-8 h-8" />
          </div>
        ))}

        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-green-400 to-transparent animate-matrix"
              style={{
                left: `${i * 5}%`,
                height: '100px',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Profile Avatar with AI glow */}
        <div className="mb-8 relative mt-20">
          <div className="w-40 h-40 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl animate-glow">
                <img src={ai} />
              </div>
            </div>
            
            {/* Orbital elements */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Name with holographic effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Syed Hashir Husnain
          </span>
          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20 blur-xl"></div>
        </h1>
        
        {/* Animated title with typewriter effect */}
        <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
          <span className="font-mono">
            &gt; {titles[textIndex].substring(0, charIndex)}
            <span className="animate-pulse text-cyan-400">|</span>
          </span>
        </div>

        {/* AI Stats Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {[
            { label: "Level", value: "Associate", icon: Brain },
            { label: "Projects", value: "10+", icon: Code },
            { label: "Accuracy", value: "90%", icon: Zap },
            { label: "Experience", value: "1.5Y", icon: Cpu }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-black/40 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-4 transition-all duration-500 hover:border-cyan-400/50 hover:bg-cyan-500/10 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Action buttons with futuristic design */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://www.linkedin.com/in/syedhashircs01/"
            className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 border border-cyan-500/30 hover:border-cyan-400"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-semibold">LinkedIn</span>
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
          </a>
          
          <a
            href="https://github.com/SyedHashir-Helper"
            className="group flex items-center space-x-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-gray-400"
          >
            <Github className="w-5 h-5" />
            <span className="font-semibold">GitHub</span>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-ping"></div>
          </a>
          
          <a
            href="https://wa.me/923106817281"
            className="group flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 border border-purple-500/30 hover:border-purple-400"
          >
            <PhoneCall className="w-5 h-5" />
            <span className="font-semibold">Contact</span>
            <div className="w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-cyan-400 animate-pulse" />
          <div className="text-sm text-gray-400 mt-2">Scroll to explore</div>
        </div>
      </div>

      {/* Additional styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;