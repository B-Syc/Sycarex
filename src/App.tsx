import React, { useState } from 'react';
import { 
  Bot, 
  MessageCircle, 
  Workflow, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Brain,
  Eye,
  FileText,
  Shield,
  Zap,
  Target,
  Users,
  Clock,
  MessageSquare
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessNeeds: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Sycarex AI
              </h2>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight leading-tight">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Automate Your
              </span>
              <span className="block text-white mt-2">
                Business with AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Transform your operations with cutting-edge AI automation. 
              Streamline workflows, enhance productivity, and unlock unprecedented growth.
            </p>
            
            <div className="pt-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="relative z-10 flex items-center gap-3">
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-700"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-1000"></div>
        </div>
      </section>

      {/* Glowing Divider */}
      <div className="relative">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      </div>

      {/* About Section */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Why AI Automation?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              In today's rapidly evolving business landscape, AI automation isn't just an advantage—it's essential. 
              We help businesses transform their operations, reduce costs, and scale efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-cyan-400">Boost Efficiency</h3>
              <p className="text-gray-300 leading-relaxed">
                Automate repetitive tasks and free your team to focus on strategic initiatives that drive growth.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-purple-400">Scale Seamlessly</h3>
              <p className="text-gray-300 leading-relaxed">
                Scale your operations seamlessly without proportional increases in overhead and complexity.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-blue-400">Drive Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Stay ahead of the competition with cutting-edge AI solutions tailored to your business.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-green-400">Reduce Costs</h3>
              <p className="text-gray-300 leading-relaxed">
                Cut operational expenses by up to 60% while maintaining or improving service quality and output.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl border border-gray-800 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-orange-400">24/7 Operations</h3>
              <p className="text-gray-300 leading-relaxed">
                AI systems work around the clock, ensuring continuous productivity and customer service availability.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl border border-gray-800 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-pink-400">Improve Accuracy</h3>
              <p className="text-gray-300 leading-relaxed">
                Eliminate human errors and achieve 99%+ accuracy in data processing and decision-making tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider */}
      <div className="relative">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      </div>

      {/* Services Section */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation solutions designed to transform every aspect of your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Bot className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-cyan-400">AI Agents</h3>
                <p className="text-gray-300 leading-relaxed">
                  Intelligent agents that handle complex tasks, make decisions, and interact with customers autonomously.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <MessageCircle className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-purple-400">Chatbots</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced conversational AI that provides 24/7 customer support and enhances user engagement.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Workflow className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-blue-400">Workflow Automation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Streamline business processes with intelligent automation that adapts to your workflow.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-green-500 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <BarChart3 className="w-12 h-12 text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-green-400">Data Analysis</h3>
                <p className="text-gray-300 leading-relaxed">
                  Transform raw data into actionable insights with AI-powered analytics and reporting.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-pink-500 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Brain className="w-12 h-12 text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-pink-400">Machine Learning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Custom ML models that learn from your data to predict trends and optimize operations.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-orange-500 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Eye className="w-12 h-12 text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-orange-400">Computer Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-powered image and video analysis for quality control, security, and automation.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-indigo-500 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <FileText className="w-12 h-12 text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-indigo-400">Document Processing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Intelligent document extraction, classification, and processing with OCR and NLP.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Shield className="w-12 h-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-yellow-400">Fraud Detection</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced AI algorithms to detect and prevent fraudulent activities in real-time.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-teal-500 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Zap className="w-12 h-12 text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-teal-400">Process Optimization</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-driven optimization of business processes to reduce costs and improve efficiency.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-red-500 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Target className="w-12 h-12 text-red-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-red-400">Predictive Analytics</h3>
                <p className="text-gray-300 leading-relaxed">
                  Forecast future trends and behaviors to make data-driven strategic decisions.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-violet-500 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Users className="w-12 h-12 text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-violet-400">Customer Intelligence</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-powered customer segmentation, behavior analysis, and personalization engines.
                </p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-gray-800 hover:border-emerald-500 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Clock className="w-12 h-12 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4 text-emerald-400">Real-time Monitoring</h3>
                <p className="text-gray-300 leading-relaxed">
                  Continuous AI monitoring systems that alert and respond to critical events instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glowing Divider */}
      <div className="relative">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      </div>

      {/* Consultation Form */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform?
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Book a free consultation and discover how AI automation can revolutionize your business.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300 group-hover:border-gray-600"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300 group-hover:border-gray-600"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            
            <div className="group">
              <label htmlFor="businessNeeds" className="block text-sm font-medium text-gray-300 mb-3">
                Business Needs
              </label>
              <textarea
                id="businessNeeds"
                name="businessNeeds"
                value={formData.businessNeeds}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all duration-300 group-hover:border-gray-600 resize-none"
                placeholder="Tell us about your business and automation goals..."
                required
              />
            </div>
            
            <div className="text-center pt-4">
              <button
                type="submit"
                className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Sycarex AI
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming businesses through intelligent automation. 
                Partner with us to unlock the full potential of AI for your organization.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-cyan-400">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                  <span>baher.kherbek@sycarex.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors cursor-pointer group">
                  <Phone className="w-5 h-5" />
                  <div className="flex items-center gap-2">
                    <span>+963 935 315 414</span>
                    <div className="flex items-center gap-1 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30 group-hover:bg-green-500/30 transition-all duration-300">
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5" />
                  <span>Latakia, Syria</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-400">Services</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">AI Agents</a>
                <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">Chatbots</a>
                <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">Workflow Automation</a>
                <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">Data Analysis</a>
                <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">Machine Learning</a>
                <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">Computer Vision</a>
                <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors">Predictive Analytics</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Sycarex AI. All rights reserved. Powered by the future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;