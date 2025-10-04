import { Building2, Users, Sparkles, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

import teamCollabImg from "@/assets/team-collab.jpg";
import spaceVenueImg from "@/assets/space-venue.jpg";
import sponsorImg from "@/assets/sponsor_conn.png";
import integratedCom from "@/assets/ic.png";

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Building2,
      title: "Venue & Space Support",
      description:
        "No venue? No problem. Access our network of premium spaces perfect for your hackathon.",
      image: spaceVenueImg,
      color: "primary",
      link: "/spaces",
    },
    {
      icon: Sparkles,
      title: "Sponsor Connections",
      description:
        "Connect directly with sponsors who believe in innovation. Pitch, chat, and secure funding seamlessly.",
      color: "accent",
      image: sponsorImg,
      link: "/sponsors",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Get matched with experienced mentors and organizers who'll help you create an unforgettable event.",
      image: teamCollabImg,
      color: "primary",
      // link: "/mentors",
    },
    {
      icon: MessageSquare,
      title: "Integrated Communication",
      description:
        "Built-in chat and pitch tools to connect organizers, participants, and sponsors in real-time.",
      color: "accent",
      image: integratedCom,
      // link: "/communication",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Succeed
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Formation X provides the complete ecosystem for organizing and
            participating in world-class hackathons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              onClick={() => navigate(feature.link)}
              className="group cursor-pointer p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow overflow-hidden"
            >
              {feature.image && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              <div
                className={`inline-flex p-3 rounded-lg bg-${feature.color}/10 mb-4`}
              >
                <feature.icon
                  className={`h-6 w-6 text-${feature.color}`}
                />
              </div>

              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
