import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatRoom from "@/components/ChatRoom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, MessageSquare } from "lucide-react";

const HackathonDetails = () => {
  const { id } = useParams();
  const [activeChatRoom, setActiveChatRoom] = useState("general");

  // Mock data
  const hackathon = {
    id,
    title: "AI Innovation Hackathon 2024",
    description: "Build the next generation of AI-powered applications",
    date: "Dec 15-17, 2024",
    location: "Formation X Space, San Francisco",
    participants: 156,
    prize: "$50,000",
    status: "Live",
    image: "/placeholder.svg",
  };

  const chatRooms = [
    { id: "general", name: "General", unread: 3 },
    { id: "announcements", name: "Announcements", unread: 1 },
    { id: "tech-support", name: "Tech Support", unread: 0 },
    { id: "team-formation", name: "Team Formation", unread: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Hackathon Header */}
        <div className="relative rounded-2xl overflow-hidden mb-8 border border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
          <div className="relative p-8">
            <Badge className="mb-4">{hackathon.status}</Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              {hackathon.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{hackathon.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{hackathon.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{hackathon.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-accent" />
                <span>{hackathon.participants} Participants</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="w-4 h-4 text-accent" />
                <span>{hackathon.prize} Prize</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="chat">Chat Rooms</TabsTrigger>
            <TabsTrigger value="team-help">Team Help</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">About This Hackathon</h2>
              <p className="text-muted-foreground mb-4">
                Join us for an exciting 48-hour hackathon focused on AI innovation. Build amazing projects,
                learn from mentors, and compete for prizes. We provide the space, mentorship, and resources
                you need to succeed.
              </p>
              <h3 className="text-xl font-semibold mb-2">What We Provide</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>24/7 access to Formation X spaces</li>
                <li>Mentorship from industry experts</li>
                <li>Free meals and refreshments</li>
                <li>Networking opportunities with sponsors</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="chat" className="mt-6">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Chat Room List */}
              <div className="md:col-span-1">
                <div className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Chat Rooms
                  </h3>
                  <div className="space-y-2">
                    {chatRooms.map((room) => (
                      <Button
                        key={room.id}
                        variant={activeChatRoom === room.id ? "default" : "ghost"}
                        className="w-full justify-between"
                        onClick={() => setActiveChatRoom(room.id)}
                      >
                        <span>{room.name}</span>
                        {room.unread > 0 && (
                          <Badge variant="secondary" className="ml-2">
                            {room.unread}
                          </Badge>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Chat Room */}
              <div className="md:col-span-3">
                <ChatRoom
                  roomName={chatRooms.find(r => r.id === activeChatRoom)?.name || "General"}
                  roomId={activeChatRoom}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="team-help" className="mt-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Get Team Help</h2>
              <p className="text-muted-foreground mb-6">
                Our expert team is here to help you organize and succeed in your hackathon journey.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-semibold mb-2">Technical Mentorship</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get guidance from experienced developers and engineers.
                  </p>
                  <Button variant="outline" className="w-full">Request Mentor</Button>
                </div>
                
                <div className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-semibold mb-2">Venue Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need help with space setup or equipment? We've got you covered.
                  </p>
                  <Button variant="outline" className="w-full">Contact Support</Button>
                </div>
                
                <div className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-semibold mb-2">Sponsor Connect</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with potential sponsors for your hackathon.
                  </p>
                  <Button variant="outline" className="w-full">Find Sponsors</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default HackathonDetails;
