import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Github, Linkedin, Globe, Zap } from 'lucide-react';

const ContactSection = ({ isLoaded }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "syedhashir1001@gmail.com",
      link: "mailto:syedhashir1001@gmail.com",
      color: "cyan"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+923106817281",
      link: "tel:+923106817281",
      color: "green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco,CA",
      color: "red"
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Available for projects",
      link: "https://calendly.com/syedhashir_ai",
      color: "purple"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@SyedHashir-Helper",
      link: "https://github.com/SyedHashir-Helper",
      color: "gray",
      followers: "*"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Syed Hashir",
      link: "https://linkedin.com/in/syedhashircs01",
      color: "blue",
      followers: "5.8K"
    },
    {
      icon: Globe,
      label: "Portfolio",
      username: "hashir.ai",
      link: "https://hashir.ai",
      color: "cyan",
      followers: "Live"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: "border-cyan-500/50 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20",
      green: "border-green-500/50 bg-green-500/10 text-green-400 hover:bg-green-500/20",
      red: "border-red-500/50 bg-red-500/10 text-red-400 hover:bg-red-500/20",
      purple: "border-purple-500/50 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20",
      blue: "border-blue-500/50 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20",
      gray: "border-gray-500/50 bg-gray-500/10 text-gray-400 hover:bg-gray-500/20"
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="contact" className="py-20 px-4 relative bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent flex-1"></div>
            <div className="px-6">
              <MessageCircle className="w-8 h-8 text-pink-400 mx-auto animate-pulse" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Ready to collaborate on the next breakthrough in AI? Let's build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span>Let's Connect</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm passionate about pushing the boundaries of AI and always excited to discuss innovative projects, research collaborations, or career opportunities in the field of artificial intelligence.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className={`block p-4 rounded-xl border transition-all duration-300 group hover:scale-105 ${getColorClasses(info.color)} ${
                      isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-sm opacity-80">{info.value}</div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow My Journey</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-300 group hover:scale-105 ${getColorClasses(social.color)}`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5" />
                        <div>
                          <div className="font-medium">{social.label}</div>
                          <div className="text-sm opacity-80">{social.username}</div>
                        </div>
                      </div>
                      <div className="text-sm font-medium">
                        {social.followers}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-pink-500/50 transition-all duration-500 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Send className="w-6 h-6 text-pink-400" />
                <span>Send Me a Message</span>
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                  ✅ Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}

              <div className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">Name *</div>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">Email *</div>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">Subject</div>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                    placeholder="Project collaboration, job opportunity, etc."
                  />
                </div>

                {/* Message */}
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">Message *</div>
                  <textarea 
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, idea, or opportunity. I'd love to hear from you!"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Response Time */}
                <div className="text-center text-sm text-gray-400">
                  ⚡ Typical response time: 2-6 hours
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="mailto:syedhashir1001@gmail.com"
                className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-4 text-center hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white font-medium">Quick Email</div>
                <div className="text-sm text-gray-400">Instant message</div>
              </a>
              
              <a
                href="https://calendly.com/syedhashir_ai"
                className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4 text-center hover:from-green-600/30 hover:to-emerald-600/30 transition-all duration-300 group"
              >
                <Calendar className="w-6 h-6 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white font-medium">Schedule Call</div>
                <div className="text-sm text-gray-400">30-min meeting</div>
              </a>
              
              <a
                href="https://linkedin.com/in/syedhashircs01"
                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-4 text-center hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-white font-medium">LinkedIn</div>
                <div className="text-sm text-gray-400">Professional chat</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ContactSection;