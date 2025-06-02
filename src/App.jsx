import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiArrowRight, FiLink, FiFolder, FiImage, FiSettings, FiPlay } from 'react-icons/fi';
import { FaRegBuilding, FaRegLightbulb, FaRegComments, FaRegChartBar } from 'react-icons/fa';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <ProblemSection />
      <ClaritySection />
      <FeatureSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/orb.svg" alt="Clarity Orb" className="h-8 w-8 mr-3" />
          <span className="text-lg font-bold">Clarity with Jahx</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="hero" smooth={true} className="cursor-pointer hover:text-clarity-orange transition-colors">Home</Link>
          <Link to="problem" smooth={true} className="cursor-pointer hover:text-clarity-orange transition-colors">Problem</Link>
          <Link to="clarity" smooth={true} className="cursor-pointer hover:text-clarity-orange transition-colors">Solution</Link>
          <Link to="features" smooth={true} className="cursor-pointer hover:text-clarity-orange transition-colors">Features</Link>
        </div>
        <button className="btn-primary text-sm py-2 px-4">Get Started</button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="orb-glow top-1/4 left-1/2 transform -translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          data-aos="fade-up"
        >
          This is the shift you missed…<br />
          <span className="gradient-text">Now it's built by Clarity with Jahx<br />Powered by Lumadious</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Run your entire business in one place—without duct tape and digital chaos.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="btn-primary flex items-center justify-center">
            Get Clarity Now
            <FiArrowRight className="ml-2" />
          </button>
          <button className="btn-secondary flex items-center justify-center">
            Tour the Stack
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="video" smooth={true} className="cursor-pointer">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="video" className="section-padding relative bg-black/90">
      <div className="max-w-5xl mx-auto text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-8"
          data-aos="fade-up"
        >
          See Clarity in Action
        </h2>
        
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="aspect-w-16 aspect-h-9 relative">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              controls
            >
              <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                onClick={togglePlay}
              >
                <div className="w-20 h-20 rounded-full bg-clarity-orange/90 flex items-center justify-center">
                  <FiPlay className="text-3xl text-white ml-1" />
                </div>
              </div>
            )}
          </div>
        </div>
        
        <p 
          className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Watch how Clarity with Jahx transforms your creative workflow and business operations into a seamless, integrated experience.
        </p>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: <FiLink className="text-4xl text-clarity-orange" />,
      title: "Beacons & Stanstore links",
      description: "Scattered link pages that don't convert or build your brand equity."
    },
    {
      icon: <FiFolder className="text-4xl text-clarity-blue" />,
      title: "Google Drive & Dropbox chaos",
      description: "Files everywhere with no central system for your customers."
    },
    {
      icon: <FiImage className="text-4xl text-clarity-purple" />,
      title: "Canva screenshots & AirTable mess",
      description: "Cobbled together visuals and databases that don't scale."
    },
    {
      icon: <FiSettings className="text-4xl text-clarity-orange" />,
      title: "Zapier spaghetti automation",
      description: "Complex automations that break and cost you more over time."
    }
  ];

  return (
    <section id="problem" className="section-padding bg-black relative">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Let's be real… this was your tech stack:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>
        
        <p 
          className="text-2xl font-semibold text-center mt-16"
          data-aos="fade-up"
        >
          It wasn't built for creators. Just... sellers.
        </p>
      </div>
    </section>
  );
}

function ClaritySection() {
  return (
    <section id="clarity" className="section-padding relative">
      <div className="orb-glow top-1/2 right-0 transform -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ✨ That chaos ends here.
            </h2>
            
            <div className="h-1 w-32 bg-clarity-orange rounded-full mb-8"></div>
            
            <p className="text-xl text-gray-300 mb-8">
              Clarity with Jahx is your guide. Lumadious is your system.
            </p>
            
            <p className="text-gray-400 mb-8">
              We've reimagined what's possible when you build a system from the ground up for creators, not just sellers. No more patchwork solutions or digital duct tape.
            </p>
            
            <button className="btn-primary flex items-center">
              See how it works
              <FiArrowRight className="ml-2" />
            </button>
          </div>
          
          <div 
            className="relative"
            data-aos="fade-left"
          >
            <div className="relative z-10 bg-gradient-to-br from-clarity-purple/20 to-clarity-blue/20 rounded-2xl p-1">
              <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex justify-center mb-8">
                  <img src="/orb.svg" alt="Clarity Orb" className="h-20 w-20 animate-float" />
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-clarity-blue mb-1">Unified Platform</h4>
                    <p className="text-sm text-gray-400">Everything connected in one ecosystem</p>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-clarity-orange mb-1">Creator-First Design</h4>
                    <p className="text-sm text-gray-400">Built for your creative workflow</p>
                  </div>
                  
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-clarity-purple mb-1">Intelligent Automation</h4>
                    <p className="text-sm text-gray-400">Less work, more impact</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-5 -left-5 w-full h-full bg-gradient-to-br from-clarity-orange/20 via-clarity-blue/20 to-clarity-purple/20 rounded-2xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  const features = [
    {
      icon: <FaRegBuilding className="text-4xl text-clarity-orange" />,
      title: "Build unlimited paid communities",
      description: "Create and manage multiple communities with different tiers, content, and access levels."
    },
    {
      icon: <FaRegLightbulb className="text-4xl text-clarity-blue" />,
      title: "Launch offers with full control",
      description: "Design, price, and launch your digital products with complete flexibility."
    },
    {
      icon: <FaRegChartBar className="text-4xl text-clarity-purple" />,
      title: "Automate everything, no patchwork",
      description: "Set up seamless workflows that run on autopilot without complex integrations."
    },
    {
      icon: <FaRegComments className="text-4xl text-clarity-orange" />,
      title: "Keep your audience in one clean hub",
      description: "Centralize all your audience interactions in a single, organized space."
    }
  ];

  return (
    <section id="features" className="section-padding bg-black/90 relative">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          Everything you need, finally together
        </h2>
        
        <div className="divider" data-aos="fade-up"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-testimonial-gradient opacity-90"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-up"
        >
          The truth? Most tools aren't built for the creative process.
        </h2>
        
        <p 
          className="text-xl md:text-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We're flipping the script. Community, speed, and soul—all in one flow.
        </p>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section-padding relative">
      <div className="orb-glow bottom-0 left-1/2 transform -translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 
          className="text-3xl md:text-5xl font-bold mb-6"
          data-aos="fade-up"
        >
          We're not doing this the old way.
        </h2>
        
        <p 
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Clarity is for creators who want less noise, more traction.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button className="btn-primary flex items-center justify-center">
            Get Started with Jahx
            <FiArrowRight className="ml-2" />
          </button>
          <button className="btn-secondary flex items-center justify-center">
            Explore Lumadious
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img src="/orb.svg" alt="Clarity Orb" className="h-8 w-8 mr-3" />
            <span className="text-lg font-bold">Clarity with Jahx – Powered by Lumadious</span>
          </div>
          
          <div className="flex space-x-8">
            <Link to="hero" smooth={true} className="cursor-pointer hover:text-clarity-orange transition-colors">Home</Link>
            <Link to="problem" smooth={true} className="cursor-pointer hover:text-clarity-orange transition-colors">About</Link>
            <Link to="features" smooth={true} className="cursor-pointer hover:text-clarity-orange transition-colors">Tour</Link>
            <Link to="cta" smooth={true} className="cursor-pointer hover:text-clarity-orange transition-colors">Join Us</Link>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          © 2025 Clarity with Jahx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default App;
