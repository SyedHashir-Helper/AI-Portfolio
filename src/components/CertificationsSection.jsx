import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Star, Shield, Zap } from 'lucide-react';

const CertificationsSection = ({ isLoaded }) => {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certifications = [
    {
      id: 1,
      name: "Generative AI Essential Training",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
      certifiedBy: "Pak Angels",
      issueDate: "Oct 2024",
      expiryDate: "Lifetime",
      credentialId: "04a3c951-2efd-480b-906c-a6b05ddca57b",
      verificationLink: "https://credsverse.com/credentials/04a3c951-2efd-480b-906c-a6b05ddca57b",
      level: "Professional",
      skills: ["Generative AI", "OpenAI API", "Hugging Face", "RAG", "Langchain"],
      description: "Verifies my expertise in building Generative AI Applications with Langchain and LLM APIs.",
      logo: "☁️",
      color: "orange"
    },
    {
      id: 2,
      name: "AI Agents in LangGraph",
      image: "https://learn.deeplearning.ai/_next/image?url=%2Fassets%2Fdlai-accomplishment-bg.png&w=1920&q=75",
      certifiedBy: "DeepLearning.ai",
      issueDate: "Jul 2025",
      expiryDate: "Lifetime",
      credentialId: "GCP-ML-2023-G456",
      verificationLink: "https://learn.deeplearning.ai/accomplishments/9c0b7792-be72-4820-acc7-fe7c51ac34b6",
      level: "Beginner",
      skills: ["Langchain", "LangGraph", "Agentic RAG", "Tools with AI"],
      description: "Demonstrates ability to build AI Agents using LangGraph for different business usecases.",
      logo: "🌐",
      color: "red"
    },
    {
      id: 3,
      name: "LangChain Chat with your Data",
      image: "https://learn.deeplearning.ai/_next/image?url=%2Fassets%2Fdlai-accomplishment-bg.png&w=1920&q=75",
      certifiedBy: "Deeplearning.ai",
      issueDate: "Aug 2024",
      expiryDate: "Lifetime",
      credentialId: "DL-SPEC-2023-D123",
      verificationLink: "https://learn.deeplearning.ai/accomplishments/ec3bb583-c5fc-46a1-b25e-e4ab7e6e618e",
      level: "Beginner",
      skills: ["LangChain", "RAG", "Document Processor", "VectorDB"],
      description: "Comprehensive understanding of building RAG based Applications.",
      logo: "🧠",
      color: "purple"
    },
    // {
    //   id: 4,
    //   name: "TensorFlow Developer Certificate",
    //   image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    //   certifiedBy: "TensorFlow",
    //   issueDate: "Jun 2023",
    //   expiryDate: "Jun 2026",
    //   credentialId: "TF-DEV-2023-T789",
    //   verificationLink: "https://tensorflow.org/verification/T789",
    //   level: "Developer",
    //   skills: ["TensorFlow", "Keras", "Model Building", "Computer Vision"],
    //   description: "Validates practical skills in building and training neural networks using TensorFlow.",
    //   logo: "🔥",
    //   color: "orange"
    // },
    // {
    //   id: 5,
    //   name: "Microsoft Azure AI Engineer Associate",
    //   image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    //   certifiedBy: "Microsoft",
    //   issueDate: "Apr 2023",
    //   expiryDate: "Apr 2025",
    //   credentialId: "AZ-AI-2023-M456",
    //   verificationLink: "https://microsoft.com/verification/M456",
    //   level: "Associate",
    //   skills: ["Azure Cognitive Services", "Bot Framework", "Azure ML", "Computer Vision"],
    //   description: "Expertise in implementing AI solutions using Microsoft Azure services.",
    //   logo: "🪟",
    //   color: "blue"
    // },
    // {
    //   id: 6,
    //   name: "NVIDIA Deep Learning Institute Certificate",
    //   image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    //   certifiedBy: "NVIDIA",
    //   issueDate: "Feb 2023",
    //   expiryDate: "Lifetime",
    //   credentialId: "DLI-2023-N789",
    //   verificationLink: "https://nvidia.com/verification/N789",
    //   level: "Advanced",
    //   skills: ["CUDA Programming", "GPU Computing", "Deep Learning Optimization", "TensorRT"],
    //   description: "Advanced techniques for accelerating deep learning workloads on NVIDIA GPUs.",
    //   logo: "🚀",
    //   color: "green"
    // }
  ];

  const getLevelColor = (level) => {
    const colors = {
      'Professional': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Specialization': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Developer': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Associate': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Advanced': 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    return colors[level] || colors['Associate'];
  };

  const getColorClasses = (color) => {
    const colors = {
      orange: 'border-orange-500/50 shadow-orange-500/20',
      blue: 'border-blue-500/50 shadow-blue-500/20',
      purple: 'border-purple-500/50 shadow-purple-500/20',
      green: 'border-green-500/50 shadow-green-500/20'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent flex-1"></div>
            <div className="px-6">
              <Award className="w-8 h-8 text-yellow-400 mx-auto animate-pulse" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Validated expertise in cutting-edge AI and machine learning technologies
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              className={`group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                hoveredCert === cert.id ? getColorClasses(cert.color) : 'hover:border-yellow-500/50 hover:shadow-yellow-500/20'
              } ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Certificate Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-gray-600 group-hover:border-yellow-400 transition-colors">
                    <img 
                      src={cert.image} 
                      alt={cert.certifiedBy}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 text-2xl">
                    {cert.logo}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors leading-tight">
                {cert.name}
              </h3>
              
              <p className="text-yellow-400 font-semibold mb-3">{cert.certifiedBy}</p>
              
              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center space-x-1">
                  <Star className="w-3 h-3" />
                  <span>Key Skills</span>
                </h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-800 text-xs rounded-md text-gray-300 border border-gray-700 hover:border-yellow-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Issued:</span>
                  </span>
                  <span className="text-gray-300">{cert.issueDate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 flex items-center space-x-1">
                    <Shield className="w-3 h-3" />
                    <span>Expires:</span>
                  </span>
                  <span className={`${cert.expiryDate === 'Lifetime' ? 'text-green-400' : 'text-gray-300'}`}>
                    {cert.expiryDate}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">ID:</span>
                  <span className="text-gray-300 font-mono text-xs">{cert.credentialId}</span>
                </div>
              </div>

              {/* Verification Link */}
              <a 
                href={cert.verificationLink}
                className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors text-sm group/link"
              >
                <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                <span>Verify Certificate</span>
              </a>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Certifications", value: "3+", icon: Award, color: "yellow" },
            { label: "Cloud Platforms", value: "1", icon: Shield, color: "blue" },
            { label: "Specializations", value: "1", icon: Star, color: "purple" },
            { label: "Skill Hours", value: "300+", icon: Zap, color: "green" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700 hover:border-${stat.color}-500/50 transition-all duration-300 group ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${(index + 6) * 100}ms` }}
              >
                <Icon className={`w-6 h-6 text-${stat.color}-400 mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center space-x-2">
              <Award className="w-6 h-6 text-yellow-400" />
              <span>Continuous Learning</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm committed to staying at the forefront of AI technology through continuous learning and professional development. Currently pursuing additional learning in Agentic AI and Automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
                <span className="text-sm text-gray-300">🎯 Agentic AI Engineering</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
                <span className="text-sm text-gray-300">📚 Learning: Agentic AI for HRs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CertificationsSection;