import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

const HackathonBrowse = () => {
  const hackathons = [
    {
      title: "AI Innovation India 2025",
      description: "Build the next generation of AI-powered applications",
      date: "Nov 15-17, 2025",
      location: "Bengaluru, Karnataka",
      participants: "500+",
      prize: "₹40,000",
      tags: ["AI/ML", "Web3", "Cloud"],
      status: "Registration Open"
    },
    {
      title: "FinTech India Hackathon",
      description: "Reimagine the future of financial technology",
      date: "Nov 2-4, 2025",
      location: "Mumbai, Maharashtra",
      participants: "300+",
      prize: "₹25,000",
      tags: ["FinTech", "Blockchain", "APIs"],
      status: "Early Bird"
    },
    {
      title: "Green Tech India Challenge",
      description: "Develop sustainable solutions for India’s future",
      date: "Dec 20-22, 2025",
      location: "Virtual",
      participants: "1000+",
      prize: "₹30,000",
      tags: ["Sustainability", "IoT", "Mobile"],
      status: "Registration Open"
    },
    
  ];

  return (
    <section id="hackathons" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Amazing
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Hackathons</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Join hackathons that match your passion and skill level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <Card 
              key={index}
              className="group p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                  {hackathon.status}
                </span>
                <Trophy className="h-5 w-5 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {hackathon.title}
              </h3>
              <p className="text-foreground/70 mb-6">{hackathon.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Calendar className="h-4 w-4" />
                  {hackathon.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <MapPin className="h-4 w-4" />
                  {hackathon.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Users className="h-4 w-4" />
                  {hackathon.participants} participants
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {hackathon.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 rounded bg-primary/10 text-primary text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div>
                  <div className="text-sm text-foreground/60">Prize Pool</div>
                  <div className="text-xl font-bold text-accent">{hackathon.prize}</div>
                </div>
                <Button variant="glass">
                  Register Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Hackathons
          </Button>
        </div>
      </div>
    </section>
  );
};


export default HackathonBrowse;
