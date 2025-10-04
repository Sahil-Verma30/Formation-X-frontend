import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFeed from "@/components/SocialFeed";
import CreatePost from "@/components/CreatePost";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      user: {
        id: "1",
        name: "Sarah Chen",
        avatar: "/placeholder.svg",
        leetcode: 342,
        github: 45,
      },
      content: "Just finished our AI chatbot project! 🚀 Check out the demo. We used React, Node.js, and OpenAI API.",
      image: "/placeholder.svg",
      likes: 24,
      comments: 8,
      shares: 3,
      timestamp: "2 hours ago",
      hackathon: "AI Innovation Hackathon 2024",
    },
    {
      id: "2",
      user: {
        id: "2",
        name: "Alex Kumar",
        avatar: "/placeholder.svg",
        leetcode: 521,
        github: 78,
      },
      content: "Our team is looking for one more frontend developer! DM me if interested. 💻",
      likes: 15,
      comments: 12,
      shares: 2,
      timestamp: "5 hours ago",
      hackathon: "Web3 Builders Hackathon",
    },
    {
      id: "3",
      user: {
        id: "3",
        name: "Formation X Team",
        avatar: "/placeholder.svg",
        leetcode: 0,
        github: 120,
        isOrganizer: true,
      },
      content: "📢 Announcement: Mentor session starting in 30 minutes at Hall B! Topics: Smart Contract Security & Testing.",
      likes: 45,
      comments: 5,
      shares: 12,
      timestamp: "1 hour ago",
      hackathon: "Web3 Builders Hackathon",
    },
  ]);

  const handleNewPost = (content: string, image?: string) => {
    const newPost = {
      id: Date.now().toString(),
      user: {
        id: "current-user",
        name: "You",
        avatar: "/placeholder.svg",
        leetcode: 234,
        github: 32,
      },
      content,
      image,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: "Just now",
      hackathon: "AI Innovation Hackathon 2024",
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
            Community Feed
          </h1>
          <p className="text-muted-foreground mb-8">
            Share your progress, connect with participants, and stay updated with hackathon announcements.
          </p>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="my-hackathons">My Hackathons</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <CreatePost onPost={handleNewPost} />
              <SocialFeed posts={posts} setPosts={setPosts} />
            </TabsContent>

            <TabsContent value="my-hackathons" className="mt-6">
              <CreatePost onPost={handleNewPost} />
              <SocialFeed 
                posts={posts.filter(p => p.hackathon === "AI Innovation Hackathon 2024")} 
                setPosts={setPosts}
              />
            </TabsContent>

            <TabsContent value="following" className="mt-6">
              <SocialFeed posts={posts.slice(0, 1)} setPosts={setPosts} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Feed;
