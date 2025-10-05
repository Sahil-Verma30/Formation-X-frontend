"use client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ChatRoom from "@/components/ChatRoom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, MessageSquare } from "lucide-react";
import axios from "axios";

interface Hackathon {
  id: number;
  title: string;
  description: any[];
  priceMoney: string;
  category: string;
  hackathonStatus: string;
  venue: string;
  minTeamSize: number;
  maxTeamSize: number;
  rsvp: number;
  applicationOpen: string;
  applicationClose: string;
  hackathonBegin: string;
  submissionDeadline: string;
  images: { url: string }[];
}

const renderDescription = (desc) => {
  if (!desc) return null;
  return desc.map((block, i) => {
    if (block.type === "paragraph") {
      return (
        <p key={i} className="text-muted-foreground mb-2">
          {block.children.map((c) => c.text).join("")}
        </p>
      );
    }
    return null;
  });
};

const HackathonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [hackathon, setHackathon] = useState<Hackathon | null>(null);
  const [activeChatRoom, setActiveChatRoom] = useState("general");

  const chatRooms = [
    { id: "general", name: "General", unread: 3 },
    { id: "announcements", name: "Announcements", unread: 1 },
    { id: "tech-support", name: "Tech Support", unread: 0 },
    { id: "team-formation", name: "Team Formation", unread: 5 },
  ];

  useEffect(() => {
    const fetchHackathon = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const res = await axios.get(
          `http://localhost:1337/api/hackathons/${id}?populate=*`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );

        const data = res.data.data;

        setHackathon({
          id: data.id,
          title: data.title,
          description: data.description,
          priceMoney: data.priceMoney,
          category: data.category,
          hackathonStatus: data.hackathonStatus,
          venue: data.venue,
          minTeamSize: data.minTeamSize,
          maxTeamSize: data.maxTeamSize,
          rsvp: data.rsvp,
          applicationOpen: data.applicationOpen,
          applicationClose: data.applicationClose,
          hackathonBegin: data.hackathonBegin,
          submissionDeadline: data.submissionDeadline,
          images: data.images?.map((img) => ({
            url: `http://localhost:1337${img.url}`,
          })) || [],
        });
      } catch (error) {
        console.error("Error fetching hackathon:", error);
      }
    };

    if (id) fetchHackathon();
  }, [id]);

  if (!hackathon) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Hackathon Header */}
        <div className="relative rounded-2xl overflow-hidden mb-8 border border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
          <div className="relative p-8">
            <Badge className="mb-4">{hackathon.hackathonStatus}</Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
              {hackathon.title}
            </h1>

            {renderDescription(hackathon.description)}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-accent" />
                <span>
                  {new Date(hackathon.hackathonBegin).toLocaleDateString()} -{" "}
                  {new Date(hackathon.submissionDeadline).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{hackathon.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-accent" />
                <span>{hackathon.rsvp} Participants</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="w-4 h-4 text-accent" />
                <span>${hackathon.priceMoney} Prize</span>
              </div>
            </div>

            {hackathon.images[0] && (
              <div className="mt-6 w-full h-64 md:h-96 overflow-hidden rounded-xl">
                <img
                  src={hackathon.images[0].url}
                  alt={hackathon.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
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
                Hackathon category: {hackathon.category}, Team Size: {hackathon.minTeamSize}-
                {hackathon.maxTeamSize}, Prize: ${hackathon.priceMoney}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="chat" className="mt-6">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Chat Room List */}
              <div className="md:col-span-1">
                <div className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Chat Rooms
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
                  roomName={chatRooms.find((r) => r.id === activeChatRoom)?.name || "General"}
                  roomId={activeChatRoom}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="team-help" className="mt-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Get Team Help</h2>
              <p className="text-muted-foreground mb-6">
                Support options for hackathon participants.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HackathonDetails;
