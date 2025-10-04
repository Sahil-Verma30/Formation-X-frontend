import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, ArrowRight } from "lucide-react";

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect with
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Top Sponsors</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Formation X bridges the gap between innovative ideas and funding opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-gradient-card border-primary/20">
            <Sparkles className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-3">For Organizers</h3>
            <p className="text-foreground/70 mb-6">
              Access our curated network of sponsors. Pitch your event directly through our platform and secure funding faster.
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Direct messaging with sponsors
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Automated pitch deck sharing
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                Real-time funding updates
              </li>
            </ul>
            <Button variant="glass" className="w-full">
              Start Pitching
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-card border-accent/20">
            <Sparkles className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3">For Sponsors</h3>
            <p className="text-foreground/70 mb-6">
              Discover high-quality hackathons aligned with your brand values. Support innovation and gain visibility.
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Curated event recommendations
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Direct organizer communication
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Impact analytics dashboard
              </li>
            </ul>
            <Button variant="glass" className="w-full">
              Become a Sponsor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-foreground/60 mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            {["Tech Corp", "Innovation Labs", "Future Fund", "Dev Studios", "Cloud Systems"].map((company, i) => (
              <div key={i} className="text-xl font-bold text-foreground/40">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
