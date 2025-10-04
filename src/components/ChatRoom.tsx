import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";

interface Message {
  id: string;
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
}

interface ChatRoomProps {
  roomName: string;
  roomId: string;
}

const ChatRoom = ({ roomName, roomId }: ChatRoomProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: "Admin",
      avatar: "/placeholder.svg",
      content: `Welcome to the ${roomName} chat room! Feel free to ask questions and connect with other participants.`,
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      user: "Sarah Chen",
      avatar: "/placeholder.svg",
      content: "Hey everyone! Excited to be here 🚀",
      timestamp: "10:35 AM",
    },
    {
      id: "3",
      user: "Alex Kumar",
      avatar: "/placeholder.svg",
      content: "Looking for team members with React experience. Anyone interested?",
      timestamp: "10:42 AM",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      user: "You",
      avatar: "/placeholder.svg",
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl flex flex-col h-[600px]">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold">{roomName}</h3>
        <p className="text-sm text-muted-foreground">{messages.length} messages</p>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={msg.avatar} />
                <AvatarFallback>{msg.user[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-sm">{msg.user}</span>
                  <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                </div>
                <p className="text-sm mt-1">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
