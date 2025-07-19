import React, { useState, useEffect } from 'react';
import { Github, Play, ExternalLink, Brain, Eye, BarChart3, Cpu, Smartphone, Zap, ChevronRight } from 'lucide-react';

const ProjectsSection = ({ isLoaded }) => {
  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState([]);

  // Sample projects data with AI theme
  const projects = [
    {
      id: 1,
      name: "AutoLegal: AI Legal Assistant",
      description: "Advanced legal assistant powered by OpenAI API and OCR, helping startup owners, common man to understand, negotiate and generate legal documents",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["Python", "PyTorch", "Transformers", "FastAPI", "Redis", "Docker"],
      category: "NLP & Document Processing",
      youtubeLink: "https://youtube.com/watch?v=demo1",
      githubLink: "https://github.com/hashir/neural-chat",
      demoLink: "https://demo.neuralchat.ai",
      status: "Local",
      metrics: { accuracy: "97%", Usecases: "4+", response: "< 200ms" }
    },
    {
      id: 2,
      name: "Harmful Objects & Crowd Detection",
      description: "Computer vision pipeline using YOLO v8 and custom CNN for fire detection, weapons and crowd. Efficient detection with 91% accuracy.",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["Python", "OpenCV", "YOLOv8", "TensorRT", "CUDA", "Flask"],
      category: "Computer Vision",
      youtubeLink: "https://youtube.com/watch?v=demo2",
      githubLink: "https://github.com/hashir/defect-detection",
      demoLink: "https://demo.qcvision.ai",
      status: "Local",
      metrics: { accuracy: "91%", speed: "30 FPS", defects: "5 Types" }
    },
    {
      id: 9,
      name: "Pet Detection in ROI",
      description: "Currently building a YOLOv12 based detector to detect pets in Bed Area, detect brightness in the room and unusual sound above threshold.",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["Python", "Yolo", "OpenCV", "DeepLearning"],
      category: "Computer Vision",
      youtubeLink: "https://youtube.com/watch?v=demo2",
      githubLink: "https://github.com/hashir/defect-detection",
      demoLink: "https://demo.qcvision.ai",
      status: "Local",
      metrics: { accuracy: "99%", model: "YOLO", env: "Raspberry Pi" }
    },
    {
      id: 8,
      name: "Potato Disease Classification",
      description: "Computer vision pipeline finetuning VGGNet-16 for potato disease detection.",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["Python", "CNN", "DeepLearning", "VGGNet-16"],
      category: "Computer Vision",
      youtubeLink: "https://youtube.com/watch?v=demo2",
      githubLink: "https://github.com/hashir/defect-detection",
      demoLink: "https://demo.qcvision.ai",
      status: "Local",
      metrics: { accuracy: "99%", CNN: "Custom", classes: "3 Types" }
    },
    {
      id: 3,
      name: "AWS Logs Assistant - RAG",
      description: "Role Based Chatbots for analyzing Logs of all services of AWS using RAG with pinecone and OpenAI API.",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["RAG", "Pinecone", "AWS (S3, Lambda, IAM, Bedrock)", "Streamlit"],
      category: "Generative AI",
      youtubeLink: "https://youtube.com/watch?v=demo3",
      githubLink: "https://github.com/hashir/predictive-platform",
      demoLink: "https://demo.analytics.ai",
      status: "Local",
      metrics: { accuracy: "94%", servies: "5", logs: "1M+" }
    },
    {
      id: 4,
      name: "Document Classification System",
      description: "Using traditional machine learning model, I built a efficient document classifier with 100% accuracy.",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["Python", "NLP", "Classification", "kNN", "Cosine Similarity", "Web Scraping"],
      category: "Machine Learning",
      youtubeLink: "https://youtube.com/watch?v=demo4",
      githubLink: "https://github.com/hashir/recommendation-ai",
      demoLink: "https://demo.recommend.ai",
      status: "Local",
      metrics: { accuracy: "100%", model: "kNN", types: "6" }
    },
    {
      id: 5,
      name: "NFIP - Client Project",
      description: "OCR and LLMs enabled intelligent document processor.",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["Python", "Pytesseract", "OpenAI API", "Flask"],
      category: "NLP & Document Processing",
      youtubeLink: "https://youtube.com/watch?v=demo5",
      githubLink: "https://github.com/hashir/edge-ai-camera",
      demoLink: "https://demo.edgecam.ai",
      status: "Local",
      metrics: { types: "5+", accuracy: "90%", response: "< 5000ms" }
    },
    {
      id: 6,
      name: "Agentic RAG using LangGraph",
      description: "Multi-agent AI chatbot for extracting text using your organization or company's data.",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["Python", "GROQ", "LangGraph", "LangChain", "RAG", "Agentic AI"],
      category: "Agentic AI",
      youtubeLink: "https://youtube.com/watch?v=demo6",
      githubLink: "https://github.com/hashir/ai-content-suite",
      demoLink: "https://demo.aicontent.ai",
      status: "Local",
      metrics: { quality: "100%", speed: "2s", memory: "efficient" }
    },
    {
      id: 10,
      name: "Automated Booking System",
      description: "Multi-agent AI chatbot for booking and appointments using n8n.",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["n8n", "Google Calendar", "Google Sheets", "GROQ"],
      category: "Agentic AI",
      youtubeLink: "https://youtube.com/watch?v=demo6",
      githubLink: "https://github.com/hashir/ai-content-suite",
      demoLink: "https://demo.aicontent.ai",
      status: "development",
      metrics: { quality: "95%", speed: "2s", env: "n8n" }
    },
    {
      id: 12,
      name: "Automated Invoice Processing",
      description: "AI workflow for extract relevant fields from invoices and processing using n8n.",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["n8n", "Google Drive", "Document Processing"],
      category: "Generative AI",
      youtubeLink: "https://youtube.com/watch?v=demo6",
      githubLink: "https://github.com/hashir/ai-content-suite",
      demoLink: "https://demo.aicontent.ai",
      status: "development",
      metrics: { quality: "95%", speed: "2s", env: "n8n" }
    },
    {
      id: 11,
      name: "Agentic Recruitment Agency",
      description: "Multi-agent AI system which selects candidates based on Job Description",
      image: "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124680.jpg",
      technologies: ["LangGraph", "Python", "LangChain", "Colab"],
      category: "Agentic AI",
      youtubeLink: "https://youtube.com/watch?v=demo6",
      githubLink: "https://github.com/hashir/ai-content-suite",
      demoLink: "https://demo.aicontent.ai",
      status: "development",
      metrics: { quality: "95%", speed: "2s", env: "Colab" }
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const getCategoryIcon = (category) => {
    const icons = {
      'NLP & Document Processing': Brain,
      'Computer Vision': Eye,
      'Data Science & Analytics': BarChart3,
      'Machine Learning': Cpu,
      'Agentic AI': Smartphone,
      'Generative AI': Zap
    };
    return icons[category] || Brain;
  };

  const getTechIcon = (tech) => {
    const icons = {
      'Python': '🐍', 'PyTorch': '🔥', 'TensorFlow': '🧠', 'React': '⚛️',
      'JavaScript': '💛', 'Node.js': '💚', 'MongoDB': '🍃', 'PostgreSQL': '🐘',
      'Docker': '🐳', 'AWS': '☁️', 'Kubernetes': '⚙️', 'Redis': '🔴'
    };
    return icons[tech] || '💻';
  };

  const getStatusColor = (status) => {
    const colors = {
      'Production': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Beta': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Development': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    };
    return colors[status] || colors['Development'];
  };

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    setVisibleProjects(filteredProjects);
  }, [filter]);

  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Section header with AI styling */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent flex-1"></div>
            <div className="px-6">
              <Brain className="w-8 h-8 text-cyan-400 mx-auto animate-pulse" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Projects
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Cutting-edge artificial intelligence solutions that push the boundaries of what's possible
          </p>
        </div>

        {/* Category filter with futuristic design */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const isActive = filter === category;
            const Icon = category === 'All' ? Brain : getCategoryIcon(category);
            
            return (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50 shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800/50 text-gray-400 border-gray-700 hover:bg-gray-700/50 hover:text-cyan-400 hover:border-cyan-500/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category}</span>
                {isActive && <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>}
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project image with overlay */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Status badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
                
                {/* Metrics overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4 text-xs">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-cyan-400 font-bold">{value}</div>
                        <div className="text-gray-300 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h4>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technology stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-800 text-xs rounded-full text-gray-300 flex items-center space-x-1 border border-gray-700 hover:border-cyan-500/30 transition-colors"
                    >
                      <span>{getTechIcon(tech)}</span>
                      <span>{tech}</span>
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                {/* Action buttons */}
                <div className="flex space-x-3">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.youtubeLink} 
                    className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors text-sm group/link"
                  >
                    <Play className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    <span>Video</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors text-sm group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    <span>Code</span>
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View more projects button */}
        <div className="text-center mt-16">
          <button className="group flex items-center space-x-3 mx-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 border border-cyan-500/30">
            <Github className="w-5 h-5" />
            <span className="font-semibold">View All Projects on GitHub</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
};

export default ProjectsSection;