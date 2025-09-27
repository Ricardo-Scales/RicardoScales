
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Heart, 
  Users, 
  Trophy, 
  Target, 
  ArrowRight, 
  Star, 
  Globe, 
  Award, 
  BookOpen, 
  Briefcase, 
  Crown, 
  HandHeart, 
  ChevronLeft, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check,
  MessageSquare,
  Lightbulb,
  Eye
} from 'lucide-react';

const AAFC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showPrompts, setShowPrompts] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Copy to clipboard function
  const copyPrompt = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompt(index);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Content prompts for each section
  const contentPrompts = [
    {
      section: "Hero",
      prompt: "Write a compelling hero section headline and description for AAFC that emphasizes youth empowerment through arts and athletics"
    },
    {
      section: "About", 
      prompt: "Create mission statement and impact metrics for AAFC showing how we've transformed lives through creative and athletic programs"
    },
    {
      section: "Programs",
      prompt: "Describe our 4 core programs: Mentorship, Internships, Leadership Development, and Community Projects with specific outcomes"
    },
    {
      section: "Get Involved",
      prompt: "Write compelling calls-to-action for teens to join, organizations to partner, and donors to support AAFC"
    },
    {
      section: "Testimonials",
      prompt: "Create authentic testimonials from program participants, mentors, and community partners highlighting AAFC's impact"
    },
    {
      section: "Contact",
      prompt: "Write professional contact information and form fields for AAFC's Bay Area headquarters and program inquiries"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Program Graduate",
      quote: "AAFC changed my life. Through their mentorship program, I discovered my passion for digital art and now I'm studying graphic design at SF State.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
    },
    {
      name: "James Wilson", 
      role: "Basketball Mentor",
      quote: "Seeing these kids grow not just as athletes but as leaders in their community is incredibly rewarding. AAFC creates real change.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Partner Organization",
      quote: "Our partnership with AAFC has allowed us to reach underserved youth in ways we never thought possible. Their impact is measurable and lasting.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150"
    }
  ];

  const partners = [
    { name: "Golden State Warriors", logo: "GSW" },
    { name: "SF Museum of Modern Art", logo: "SFMOMA" },
    { name: "Oakland Athletics", logo: "OAK" },
    { name: "Berkeley Arts Center", logo: "BAC" },
    { name: "Bay Area Youth Foundation", logo: "BAYF" },
    { name: "California College of the Arts", logo: "CCA" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Prompts Panel */}
      <div className={`fixed top-20 right-4 z-40 transition-transform duration-300 ${showPrompts ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Content Prompts</h3>
            </div>
            <button 
              onClick={() => setShowPrompts(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-2">
            {contentPrompts.map((item, index) => (
              <div key={index} className="p-3 border border-gray-100 rounded-lg mb-2 hover:bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm text-blue-600">{item.section}</span>
                  <button
                    onClick={() => copyPrompt(item.prompt, index)}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {copiedPrompt === index ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{item.prompt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prompts Toggle Button */}
      <button
        onClick={() => setShowPrompts(!showPrompts)}
        className="fixed top-24 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <MessageSquare className="w-5 h-5" />
      </button>

      {/* Navigation Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AAFC</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-blue-600 transition-colors">Programs</button>
              <button onClick={() => scrollToSection('get-involved')} className="text-gray-700 hover:text-blue-600 transition-colors">Get Involved</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('donate')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Donate
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('hero')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">About</button>
                <button onClick={() => scrollToSection('programs')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Programs</button>
                <button onClick={() => scrollToSection('get-involved')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Get Involved</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
                <button 
                  onClick={() => scrollToSection('donate')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Donate
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-20 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Youth Through 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Arts & Athletics</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Artists & Athletes for Change transforms lives by providing underserved teens with mentorship, creative opportunities, and athletic programs that build confidence, leadership, and community connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  Explore Programs <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('get-involved')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg font-semibold"
                >
                  Get Involved
                </button>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Youth Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">Graduation Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Mentors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-gray-600">Years Impact</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop" 
                  alt="Youth in arts and athletics programs"
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Program Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe every young person deserves the opportunity to discover their potential through creative expression and athletic achievement, regardless of their background or circumstances.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A world where every young person has access to transformative programs that unlock their creative and athletic potential.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Inclusion, excellence, community, and the belief that every young person has unique talents worth nurturing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Impact</h3>
              <p className="text-gray-600">
                Measurable outcomes in academic achievement, college readiness, and community leadership development.
              </p>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Our Impact by the Numbers</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">89%</div>
                <div className="text-blue-100">College Enrollment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">250+</div>
                <div className="text-blue-100">Scholarships Earned</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">75+</div>
                <div className="text-blue-100">Community Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$2.5M</div>
                <div className="text-blue-100">Economic Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four core programs designed to meet young people where they are and help them reach their full potential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mentorship Program</h3>
              </div>
              <p className="text-gray-600 mb-6">
                One-on-one mentoring connecting teens with successful artists and athletes who provide guidance, support, and real-world insights into creative and athletic careers.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Weekly 1:1 sessions
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Industry exposure events
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Goal setting & tracking
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Internship Program</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Paid internships with Bay Area organizations providing hands-on experience in arts, media, sports management, and nonprofit work.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  8-week summer placements
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Professional development
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Portfolio building
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Leadership Development</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive leadership training focusing on public speaking, project management, and community organizing skills for teen leaders.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Monthly workshops
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Peer leadership roles
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Community presentations
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <HandHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Community Projects</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Teen-led initiatives addressing local issues through art installations, athletic events, and community service projects.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  Quarterly projects
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  Community partnerships
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  Public showcases
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What People Say</h2>
            <p className="text-xl text-gray-600">Real stories from our community</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
              <div className="mb-8">
                <img 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <blockquote className="text-2xl text-gray-900 mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div className="text-lg font-semibold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-blue-600">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways to support our mission and make a difference in young people's lives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join as a Teen</h3>
              <p className="text-gray-600 mb-6">
                Ages 13-18, ready to explore your creative and athletic potential? Apply for our programs and connect with mentors who believe in your future.
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Free program participation
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Personal mentorship
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Scholarship opportunities
                </li>
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
              >
                Apply Now
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner as Organization</h3>
              <p className="text-gray-600 mb-6">
                Schools, businesses, and nonprofits can partner with us to provide internships, mentorship, and resources for our participants.
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Host interns & volunteers
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Provide mentors
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  Community recognition
                </li>
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold"
              >
                Partner With Us
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support as Donor</h3>
              <p className="text-gray-600 mb-6">
                Your financial support directly funds programs, mentorships, and opportunities that transform young lives in our community.
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Tax-deductible giving
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Impact reporting
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Community events
                </li>
              </ul>
              <button 
                onClick={() => scrollToSection('donate')}
                className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors font-semibold"
              >
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Support Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donation directly supports programming, mentorships, and opportunities for Bay Area youth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border-2 border-transparent hover:border-blue-300 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">$50</div>
              <div className="text-lg font-semibold text-gray-900 mb-4">Supporter</div>
              <p className="text-gray-600 mb-6">Provides art supplies for one teen for a full month of programming.</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold">
                Give $50
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border-2 border-purple-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">$150</div>
              <div className="text-lg font-semibold text-gray-900 mb-4">Champion</div>
              <p className="text-gray-600 mb-6">Sponsors one teen's full participation in our mentorship program.</p>
              <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold">
                Give $150
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center border-2 border-transparent hover:border-green-300 transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">$500</div>
              <div className="text-lg font-semibold text-gray-900 mb-4">Game Changer</div>
              <p className="text-gray-600 mb-6">Funds a paid internship opportunity for one teen participant.</p>
              <button className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors font-semibold">
                Give $500
              </button>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Proud Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20">
                  <div className="text-lg font-bold text-gray-600">{partner.logo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join our community? Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200">
                    <option>Teen Program Application</option>
                    <option>Partnership Opportunities</option>
                    <option>Volunteer/Mentor</option>
                    <option>Donation Information</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us more about your interest..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">1234 Mission Street<br />Oakland, CA 94612</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">(510) 555-AAFC</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@aafc.org</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    Programs run year-round with special summer intensive sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">AAFC</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering Bay Area youth through transformative arts and athletics programs since 2016.
              </p>
              <div className="text-sm text-gray-500">
                © 2024 Artists & Athletes for Change. All rights reserved.
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Internships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Join as Teen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become a Mentor</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner with Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Mission Street</li>
                <li>Oakland, CA 94612</li>
                <li>(510) 555-AAFC</li>
                <li>info@aafc.org</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AAFC;
