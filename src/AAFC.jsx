
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
      title: "Drive Change",
      description: "Equipping the next generation with tools to create positive social impact."
    }
  ];

  const tiers = [
    { amount: "$25", impact: "Supplies for one workshop", monthly: false },
    { amount: "$100", impact: "Covers a teen's month of programming", monthly: false },
    { amount: "$500", impact: "Scholarship for leadership micro-course", monthly: false },
    { amount: "$50/mo", impact: "Sustain ongoing mentorship programs", monthly: true },
  ];

  const partners = ["Ava Energy", "Oakland USD", "BayTech Lab", "Arts Council", "Tech Co."];
  
  const testimonials = [
    { quote: "AAFC helped me find my voice on stage and in life.", author: "A., 17 – Vocalist" },
    { quote: "Our employees loved mentoring—real impact, real joy.", author: "CSR Lead, Tech Co." },
    { quote: "The internship turned my son into a leader.", author: "Parent, Oakland" },
  ];

  const stats = [
    { label: "Youth Served", value: "1,200+" },
    { label: "Partners", value: "35+" },
    { label: "Projects", value: "50+" },
  ];

  const kpis = [
    { label: "Retention", value: "92%" },
    { label: "College/Career", value: "74%" },
    { label: "New Sites", value: "6" },
  ];

  // Enhanced copy function with feedback
  const copyPrompt = async (sectionId) => {
    try {
      await navigator.clipboard.writeText(prompts[sectionId]);
      setCopiedPrompt(sectionId);
      setTimeout(() => setCopiedPrompt(""), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileOpen(false);
    }
  };

  // Create placeholder logo with initials
  const LogoPlaceholder = () => (
    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
      AAFC
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/95 border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoPlaceholder />
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">Artists & Athletes for Change</p>
              <p className="text-xs text-neutral-500">Youth • Creativity • Community Impact</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <button 
                key={n.id} 
                onClick={() => scrollToSection(n.id)}
                className={`text-sm transition-colors ${
                  activeSection === n.id ? 'text-black font-medium' : 'text-neutral-600 hover:text-black'
                }`}
              >
                {n.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('donate')}
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-black text-white text-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <HeartHandshake className="h-4 w-4" /> Donate
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {nav.map((n) => (
                <button 
                  key={n.id} 
                  onClick={() => scrollToSection(n.id)}
                  className="block w-full text-left py-2 text-neutral-700 hover:text-black transition-colors"
                >
                  {n.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('donate')}
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-black text-white text-sm mt-4"
              >
                <HeartHandshake className="h-4 w-4" /> Donate
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Floating Prompts Button */}
      <button
        onClick={() => setShowPrompts(!showPrompts)}
        className="fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg bg-white border-2 border-neutral-200 hover:shadow-xl hover:border-neutral-300 transition-all"
        aria-label="Toggle content prompts"
      >
        <Megaphone className="h-5 w-5 text-neutral-700" />
      </button>

      {/* Prompts Panel */}
      {showPrompts && (
        <aside className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[65vh] overflow-auto rounded-2xl border border-neutral-200 bg-white shadow-2xl">
          <div className="p-4 border-b border-neutral-200 bg-neutral-50 rounded-t-2xl">
            <h3 className="font-semibold text-neutral-900">Section Prompts</h3>
            <p className="text-xs text-neutral-600 mt-1">Click to copy content prompts for each section.</p>
          </div>
          <div className="p-4 space-y-4 text-sm">
            {nav.map((n) => (
              <div key={n.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-neutral-900">{n.label}</p>
                  <button
                    onClick={() => copyPrompt(n.id)}
                    className="flex items-center gap-1 text-xs rounded-lg px-2 py-1 border border-neutral-200 hover:bg-neutral-50 transition-colors"
                  >
                    {copiedPrompt === n.id ? (
                      <>
                        <Check className="h-3 w-3 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="text-xs p-3 rounded-lg bg-neutral-50 border border-neutral-200 leading-relaxed text-neutral-700">
                  {prompts[n.id]}
                </div>
              </div>
            ))}
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main>
        {/* HOME SECTION */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Create. Compete. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Change.</span>
                <br />
                <span className="text-neutral-600">Together.</span>
              </h1>
              <p className="text-lg text-neutral-700 max-w-prose leading-relaxed">
                AAFC is a teen-centered movement that fuses creativity and athletics to build community power and develop the next generation of leaders.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('involved')}
                  className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-black text-white font-medium hover:bg-neutral-800 transition-colors"
                >
                  Join Programs <ArrowRight className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => scrollToSection('donate')}
                  className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
                >
                  Support Us <HeartHandshake className="h-4 w-4" />
                </button>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-neutral-200 p-4 bg-white shadow-sm">
                    <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                    <p className="text-sm text-neutral-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br from-neutral-800 to-black text-white flex flex-col items-center justify-center shadow-2xl">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mb-6">
                AAFC
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Your Community</h2>
                <p className="text-neutral-300 mt-2">Empowering Youth Through Arts & Athletics</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About AAFC</h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Artists & Athletes for Change (AAFC) equips teens to lead—on the court, on the stage, and in the community. We believe in the power of creative expression and athletic excellence to transform lives and communities.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200">
                    <Users2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Youth-First Culture</h3>
                      <p className="text-sm text-neutral-600 mt-1">Programs designed by and for young people</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200">
                    <GraduationCap className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Skills & Pathways</h3>
                      <p className="text-sm text-neutral-600 mt-1">Clear routes to college and career success</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200">
                    <Building2 className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Strong Partnerships</h3>
                      <p className="text-sm text-neutral-600 mt-1">Collaboration with schools and organizations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200">
                    <Globe className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Community Impact</h3>
                      <p className="text-sm text-neutral-600 mt-1">Real change in neighborhoods we serve</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* KPI Dashboard */}
              <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8 shadow-sm">
                <h3 className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-6">Impact Dashboard</h3>
                <div className="grid gap-6">
                  {kpis.map((kpi) => (
                    <div key={kpi.label} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-neutral-200">
                      <span className="text-neutral-700 font-medium">{kpi.label}</span>
                      <span className="text-2xl font-bold text-neutral-900">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION SECTION */}
        <section id="mission" className="py-20 border-t border-neutral-200 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Mission & Vision</h2>
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Mission</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    To empower youth through integrated arts and athletics programming that builds leadership skills, fosters creativity, and creates positive community impact.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4 text-purple-600">Our Vision</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    A world where every young person has the tools, confidence, and community support to become a positive change agent in their neighborhood and beyond.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Value Pillars */}
            <div className="grid md:grid-cols-3 gap-8">
              {missionPillars.map((pillar, index) => (
                <div key={pillar.title} className="text-center p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-neutral-700">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMS SECTION */}
        <section id="programs" className="py-20 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Programs</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Comprehensive pathways for youth development through arts, athletics, and community engagement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program) => {
                const IconComponent = program.icon;
                return (
                  <div key={program.id} className="rounded-3xl border border-neutral-200 p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
                        <IconComponent className="h-6 w-6 text-neutral-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                        <p className="text-neutral-600">{program.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-neutral-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
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

        {/* TESTIMONIALS */}
        <section className="py-16 border-t border-neutral-200 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Community Voices</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-neutral-700 leading-relaxed mb-4">"{testimonial.quote}"</p>
                  <p className="text-sm text-neutral-500 font-medium">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GET INVOLVED SECTION */}
        <section id="involved" className="py-20 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get Involved</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                There are multiple ways to join our community and make a difference.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-3xl border border-neutral-200 hover:border-blue-300 transition-colors">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Users2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Join as a Teen</h3>
                <p className="text-neutral-600 mb-6">Ages 13-18, ready to create, compete, and change your community.</p>
                <button className="w-full rounded-2xl px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
              
              <div className="text-center p-8 rounded-3xl border border-neutral-200 hover:border-purple-300 transition-colors">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Partner Organization</h3>
                <p className="text-neutral-600 mb-6">Schools, nonprofits, and companies creating opportunities together.</p>
                <button className="w-full rounded-2xl px-4 py-2 bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors">
                  Learn More
                </button>
              </div>
              
              <div className="text-center p-8 rounded-3xl border border-neutral-200 hover:border-green-300 transition-colors">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Support as a Donor</h3>
                <p className="text-neutral-600 mb-6">Invest in the next generation of community leaders.</p>
                <button 
                  onClick={() => scrollToSection('donate')}
                  className="w-full rounded-2xl px-4 py-2 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DONATE SECTION */}
        <section id="donate" className="py-20 border-t border-neutral-200 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Support Our Mission</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Your donation directly impacts youth in our community. Every contribution helps provide opportunities, resources, and mentorship.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {tiers.map((tier) => (
                    <div key={tier.amount} className="rounded-2xl border border-neutral-200 p-6 bg-white hover:border-neutral-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-neutral-900">{tier.amount}</span>
                        {tier.monthly && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                            Monthly
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-neutral-600 mb-4">{tier.impact}</p>
                      <div className="flex gap-2">
                        <button className="flex-1 text-sm bg-black text-white rounded-lg px-3 py-2 hover:bg-neutral-800 transition-colors">
                          Stripe
                        </button>
                        <button className="flex-1 text-sm border border-neutral-300 rounded-lg px-3 py-2 hover:bg-neutral-50 transition-colors">
                          PayPal
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-sm text-neutral-600 space-y-2">
                  <p>• 100% of donations go directly to programs</p>
                  <p>• Tax-deductible receipts provided</p>
                  <p>• Quarterly impact reports for all donors</p>
                </div>
              </div>
              
              {/* Partners Section */}
              <div className="space-y-8">
                <div className="rounded-3xl border border-neutral-200 bg-white p-8">
                  <h3 className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-6">
                    Trusted Partners
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {partners.map((partner) => (
                      <div key={partner} className="h-16 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                        <span className="text-xs font-medium text-neutral-600">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="rounded-3xl border border-neutral-200 bg-white p-8">
                  <h3 className="text-lg font-semibold mb-4">Questions about donating?</h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    Our team is happy to discuss corporate partnerships, planned giving, or other ways to support AAFC.
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Contact Development Team <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Get in Touch</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Ready to join our community or have questions? We'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-50">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">General Inquiries</h3>
                      <p className="text-neutral-600">hello@aafcyouth.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-green-50">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-neutral-600">(510) 555-AAFC</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-50">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-neutral-600">Oakland, CA<br />Serving the Bay Area</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
                <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>I'm interested in...</option>
                    <option>Teen Programs</option>
                    <option>Partnership Opportunities</option>
                    <option>Volunteering</option>
                    <option>Donations</option>
                    <option>Other</option>
                  </select>
                  <textarea 
                    placeholder="Tell us more about your interest..." 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  <button 
                    type="submit"
                    className="w-full rounded-xl px-6 py-3 bg-black text-white font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <LogoPlaceholder />
                <div>
                  <p className="font-semibold">Artists & Athletes for Change</p>
                  <p className="text-sm text-neutral-400">Youth • Creativity • Community Impact</p>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                Empowering the next generation through integrated arts and athletics programming that builds leaders and transforms communities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                {nav.slice(0, 4).map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <div className="space-y-2 text-sm text-neutral-400">
                <button 
                  onClick={() => scrollToSection('involved')}
                  className="block hover:text-white transition-colors"
                >
                  Teen Programs
                </button>
                <button 
                  onClick={() => scrollToSection('involved')}
                  className="block hover:text-white transition-colors"
                >
                  Partnerships
                </button>
                <button 
                  onClick={() => scrollToSection('donate')}
                  className="block hover:text-white transition-colors"
                >
                  Donate
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-400">
            <p>&copy; 2024 Artists & Athletes for Change. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
