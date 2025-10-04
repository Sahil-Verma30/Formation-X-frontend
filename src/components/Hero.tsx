import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroBg} 
          alt="Tech innovation" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-foreground/80">Next-Gen Hackathon Platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Build, Compete, and
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Transform Ideas
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto">
          Join Formation X - Where innovators find spaces, sponsors, and support to bring their hackathon visions to life
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <Button variant="hero" onClick={() => {navigate("/hackathons")}} size="lg">
            Explore Hackathons
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg">
            Organize Your Event
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/10">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-foreground/70">Active Hackathons</div>
          </div>
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-accent/10">
            <div className="text-4xl font-bold text-accent mb-2">50K+</div>
            <div className="text-foreground/70">Participants</div>
          </div>
          <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/10">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-foreground/70">Partner Sponsors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
