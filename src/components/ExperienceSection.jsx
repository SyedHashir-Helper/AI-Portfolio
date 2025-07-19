import React from 'react';
import { MapPin, Calendar, Briefcase, Users, TrendingUp, Award, ChevronRight } from 'lucide-react';

const ExperienceSection = ({ isLoaded }) => {
  const experiences = [
    {
      id: 1,
      company: "Intalytic Group LLC",
      designation: "Associate AI Engineer",
      location: "Remote, US",
      startDate: "Mar 2025",
      endDate: "Present",
      duration: "4+ months",
      description: "Worked as a core AI/ML engineer on client-facing projects involving intelligent automation, computer vision, and retrieval-based systems. Delivered scalable, production-ready solutions using modern ML techniques and cloud-native tools.",
      achievements: [
        "Delivered 4+ AI/ML solutions including document processing, object detection, and RAG-based assistants.",
        "Collaborated with 5+ clients to gather requirements.",
        "Handled 5,000+ AWS logs using vector search and semantic retrieval in a serverless setup.",
        "Improved processing efficiency by 80% through automation of invoice and document workflows."
      ],
      technologies: ["Python", "CUDA", "OCR", "YOLO", "LLMs", "OpenAI", "Langchain", "LangGraph", "Invoice Processing", "AWS S3", "AWS Lambda"],
      companyType: "AI/ML Startup",
      teamSize: "50-100",
      companyLogo: "🤖"
    },
    {
      id: 3,
      company: "i2c inc.",
      designation: "Associate Software Engineer",
      location: "Lahore, Pakistan",
      startDate: "Jul 2025",
      endDate: "Present",
      duration: "-",
      description: "",
      achievements: [
        "Recently joined i2c Inc. as a Associate Software Engineer."
      ],
      technologies: ["Java"],
      companyType: "Fintech",
      teamSize: "500+",
      companyLogo: "💶"
    },
    {
      id: 2,
      company: "Nexpred Solutions",
      designation: "Machine Learning Trainee",
      location: "Remote, Lahore",
      startDate: "Dec 2024",
      endDate: "Feb 2025",
      duration: "3 Months",
      description: "Completed a hands-on training program focused on core computer vision tasks and data annotation pipelines. Gained practical experience in building ML workflows from dataset creation to model evaluation.",
      achievements: [
        "Labeled and processed 2,000+ images for object detection, segmentation, and classification tasks.",
        "Assisted in training and evaluating models using TensorFlow and PyTorch for real-world use cases.",
        "Applied augmentation and preprocessing techniques to boost model performance by 15%.",
        "Collaborated with senior ML engineers to improve annotation efficiency and maintain data quality."
      ],
      technologies: ["Python", "Scikit-learn", "Machine Learning", "Data Annotation", "YOLO", "Deep Learning", "Object Classification", "Object Detection"],
      companyType: "Startup",
      teamSize: "10-50",
      companyLogo: "📊"
    },
  ];

  const skills = [
    { category: "AI/ML", items: ["Deep Learning", "Generative AI", "Computer Vision", "NLP"], color: "cyan" },
    { category: "Programming", items: ["Python", "JavaScript", "C++", "SQL"], color: "blue" },
    { category: "Frameworks", items: ["PyTorch", "TensorFlow", "LangGraph", "n8n"], color: "purple" },
    { category: "Cloud & Tools", items: ["AWS S3", "Docker", "AWS Lambda", "AWS EC2"], color: "green" }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      blue: "border-blue-500/30 bg-blue-500/10 text-blue-400",
      purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      green: "border-green-500/30 bg-green-500/10 text-green-400"
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="experience" className="py-20 px-4 relative bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1"></div>
            <div className="px-6">
              <Briefcase className="w-8 h-8 text-green-400 mx-auto animate-pulse" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Building the future of AI, one breakthrough at a time
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-green-400 via-blue-400 to-purple-400 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline marker */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-4 border-gray-900 hidden md:block animate-pulse"></div>
                
                {/* Experience Card */}
                <div className="md:ml-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-green-500/20">
                  {/* Company Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                      <div className="text-4xl">{exp.companyLogo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                          {exp.designation}
                        </h3>
                        <h4 className="text-xl text-green-400 font-semibold">{exp.company}</h4>
                        <div className="text-sm text-gray-400 mt-1">{exp.companyType} • {exp.teamSize} employees</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-right">
                      <div className="flex items-center space-x-2 text-gray-400 lg:justify-end">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 lg:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className="text-sm bg-gray-800 px-3 py-1 rounded-full border border-gray-600">
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span>Key Achievements</span>
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3 group/item">
                          <ChevronRight className="w-4 h-4 text-green-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                      <span>Technologies Used</span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-sm rounded-full text-gray-300 border border-gray-600 hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Core <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Competencies</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-${skillGroup.color}-500/50 transition-all duration-500 group hover:shadow-xl hover:shadow-${skillGroup.color}-500/20 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <h4 className={`text-lg font-semibold mb-4 text-${skillGroup.color}-400 group-hover:text-${skillGroup.color}-300 transition-colors`}>
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`px-3 py-2 rounded-lg border text-sm transition-all duration-300 hover:scale-105 ${getColorClasses(skillGroup.color)}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in discussing innovative AI projects and opportunities to push the boundaries of what's possible with machine learning.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <Users className="w-5 h-5" />
              <span>Let's Work Together</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ExperienceSection;