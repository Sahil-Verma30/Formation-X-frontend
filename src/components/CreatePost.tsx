import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Send } from "lucide-react";

interface CreatePostProps {
  onPost: (content: string, image?: string) => void;
}

const CreatePost = ({ onPost }: CreatePostProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!content.trim()) return;
    onPost(content);
    setContent("");
  };

  return (
    <Card className="p-6 mb-6 bg-card border-border">
      <div className="flex gap-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>Y</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <Textarea
            placeholder="Share your progress, ask questions, or connect with others..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[100px] mb-4 resize-none"
          />
          
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="gap-2">
              <Image className="w-4 h-4" />
              Add Image
            </Button>
            
            <Button onClick={handleSubmit} className="gap-2">
              <Send className="w-4 h-4" />
              Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreatePost;
