import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  HeartHandshake,
  Users2,
  GraduationCap,
  Building2,
  Globe,
  Megaphone,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function AAFCWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "mission", label: "Mission & Vision" },
    { id: "programs", label: "Programs" },
    { id: "involved", label: "Get Involved" },
    { id: "donate", label: "Donate" },
    { id: "contact", label: "Contact" },
  ];

  const prompts = {
    home: "Homepage hero with bold tagline, value prop, micro-stats, CTAs.",
    about: "Summarize AAFC's story, mission, and who we serve.",
    mission: "Mission + Vision with 3 value pillars.",
    programs: "Program blurbs: Mentorship, Internship, Leadership, Community Impact.",
    involved: "3 pathways: Join as a Teen, Partner as an Organization, Support as a Donor.",
    donate: "Donate page with tiers, trust copy, transparency note.",
    contact: "Contact section: form, emails, accessibility.",
  };

  const programs = [
    {
      id: "mentorship",
      title: "Mentorship",
      description: "One-on-one guidance from industry professionals in arts and athletics.",
      icon: Users2,
      features: ["Weekly 1:1 sessions", "Industry networking", "Goal setting & tracking"]
    },
    {
      id: "internships",
      title: "Internships",
      description: "Real-world experience with our partner organizations and companies.",
      icon: Building2,
      features: ["Paid positions", "Skills development", "Professional references"]
    },
    {
      id: "leadership",
      title: "Leadership",
      description: "Develop leadership skills through workshops and community projects.",
      icon: GraduationCap,
      features: ["Workshop series", "Project management", "Public speaking"]
    },
    {
      id: "community",
      title: "Community Projects",
      description: "Lead positive change in your neighborhood through organized initiatives.",
      icon: Globe,
      features: ["Event planning", "Community partnerships", "Social impact measurement"]
    }
  ];

  const missionPillars = [
    {
      title: "Empower Youth",
      description: "Creating safe spaces where teens can explore their passions and develop confidence."
    },
    {
      title: "Build Community",
      description: "Connecting young people with mentors, peers, and opportunities in their local area."
    },
    {
      title: "Drive Impact",
      description: "Measuring and amplifying positive change in communities through our programs."
    }
  ];

  const copyToClipboard = (text, promptKey) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptKey);
    setTimeout(() => setCopiedPrompt(""), 2000);
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <HeartHandshake className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-xl font-bold text-gray-900">AAFC</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Development Prompts Toggle */}
      <button
        onClick={() => setShowPrompts(!showPrompts)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 z-40"
        title="Toggle prompts"
      >
        <Megaphone className="h-5 w-5" />
      </button>

      {/* Prompts Panel */}
      {showPrompts && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Section Prompts</h3>
              <button
                onClick={() => setShowPrompts(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              {Object.entries(prompts).map(([key, prompt]) => (
                <div key={key} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm capitalize">{key}</h4>
                    <button
                      onClick={() => copyToClipboard(prompt, key)}
                      className="text-purple-600 hover:text-purple-700"
                    >
                      {copiedPrompt === key ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-600">{prompt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="pt-16">
        {/* Home Section */}
        <section id="home" className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Empowering Youth Through
                <span className="block text-yellow-400">Arts & Athletics</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Building tomorrow's leaders through mentorship, opportunity, and community impact
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-8">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-sm">Youth Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm">Mentors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">10</div>
                  <div className="text-sm">Years Impact</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('programs')}
                  className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Explore Programs
                </button>
                <button
                  onClick={() => scrollToSection('involved')}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About AAFC</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Arts & Athletics Foundation for Community (AAFC) was founded on the belief that every young person deserves access to opportunities that help them discover their potential and build a brighter future.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-gray-600 mb-4">
                  Since 2014, AAFC has been bridging the gap between talented youth and the opportunities they need to succeed. We work primarily with teens from underserved communities, providing mentorship, internships, and leadership development through arts and athletics programs.
                </p>
                <p className="text-gray-600">
                  Our holistic approach combines skill development with character building, ensuring our participants not only excel in their chosen fields but become positive forces in their communities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Who We Serve</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    Ages 13-18 from underserved communities
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    Youth with passion for arts or athletics
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    Students seeking mentorship and guidance
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                    Future community leaders
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-blue-800">
                  To empower youth through comprehensive arts and athletics programs that develop skills, build character, and create pathways to success while strengthening communities.
                </p>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">Our Vision</h3>
                <p className="text-purple-800">
                  A world where every young person has access to mentorship, opportunities, and support systems that enable them to reach their full potential and become positive change agents.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {missionPillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h4>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive programs designed to develop skills, build character, and create opportunities for success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h4>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <ul className="space-y-1">
                      {program.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-sm text-gray-500 flex items-center">
                          <ArrowRight className="h-3 w-3 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section id="involved" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three ways to make a difference in young lives and strengthen our communities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border-2 border-blue-200 rounded-lg hover:border-blue-400 transition-colors">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Join as a Teen</h3>
                <p className="text-gray-600 mb-6">
                  Are you 13-18 and passionate about arts or athletics? Apply to join our programs and unlock your potential.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>

              <div className="text-center p-6 border-2 border-purple-200 rounded-lg hover:border-purple-400 transition-colors">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partner Organization</h3>
                <p className="text-gray-600 mb-6">
                  Organizations can partner with us to provide internships, mentorship, or program space.
                </p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Partner With Us
                </button>
              </div>

              <div className="text-center p-6 border-2 border-yellow-200 rounded-lg hover:border-yellow-400 transition-colors">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartHandshake className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Support as a Donor</h3>
                <p className="text-gray-600 mb-6">
                  Your donation directly funds programs, equipment, and opportunities for deserving youth.
                </p>
                <button
                  onClick={() => scrollToSection('donate')}
                  className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section id="donate" className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Mission</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                Your donation creates opportunities, builds skills, and changes lives. Every contribution makes a direct impact on the youth we serve.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { amount: "$25", impact: "Program supplies for one teen" },
                { amount: "$100", impact: "One month of mentorship sessions" },
                { amount: "$500", impact: "Full program scholarship" },
                { amount: "$1000", impact: "Equipment for entire program" }
              ].map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{tier.amount}</div>
                  <p className="text-sm">{tier.impact}</p>
                  <button className="mt-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors w-full">
                    Donate
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-bold mb-4">Your Impact, Transparent</h3>
              <p className="mb-4">
                We believe in complete transparency. 85% of donations go directly to programs, with detailed impact reports sent quarterly to all donors.
              </p>
              <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors mr-4">
                View Impact Report
              </button>
              <button className="border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Custom Donation
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to get involved? Have questions? We're here to help and would love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@aafcommunity.org</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">(555) 123-AAFC</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        123 Community Drive<br />
                        Oakland, CA 94610
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Accessibility</h4>
                  <p className="text-blue-800 text-sm">
                    Our programs and facilities are fully accessible. We provide accommodations and support for all participants regardless of ability.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form className="bg-white p-6 rounded-lg shadow-lg">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Interest
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                      <option>Teen Programs</option>
                      <option>Volunteer/Mentor</option>
                      <option>Partnership</option>
                      <option>Donation</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <HeartHandshake className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-xl font-bold">AAFC</span>
              </div>
              <p className="text-gray-400">
                Empowering youth through arts and athletics since 2014.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white">About</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="hover:text-white">Programs</button></li>
                <li><button onClick={() => scrollToSection('involved')} className="hover:text-white">Get Involved</button></li>
                <li><button onClick={() => scrollToSection('donate')} className="hover:text-white">Donate</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white">Mentorship</li>
                <li className="hover:text-white">Internships</li>
                <li className="hover:text-white">Leadership</li>
                <li className="hover:text-white">Community Projects</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@aafcommunity.org</li>
                <li>(555) 123-AAFC</li>
                <li>Oakland, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Arts & Athletics Foundation for Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}