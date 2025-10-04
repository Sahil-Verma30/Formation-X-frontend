import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Github } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

interface User {
  id: string;
  name: string;
  avatar: string;
  leetcode: number;
  github: number;
  isOrganizer?: boolean;
}

interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  hackathon: string;
}

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onShare: (postId: string) => void;
}

const PostCard = ({ post, onLike, onComment, onShare }: PostCardProps) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike(post.id);
  };

  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
      {/* User Header */}
      <div className="flex items-start gap-4 mb-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={post.user.avatar} />
          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold">{post.user.name}</h3>
            {post.user.isOrganizer && (
              <Badge variant="secondary" className="text-xs">Organizer</Badge>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{post.timestamp}</span>
            <Badge variant="outline" className="text-xs">{post.hackathon}</Badge>
          </div>
          
          {!post.user.isOrganizer && (
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <SiLeetcode className="w-3 h-3 text-accent" />
                <span>{post.user.leetcode} problems</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Github className="w-3 h-3 text-accent" />
                <span>{post.user.github} repos</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <p className="mb-4 text-foreground">{post.content}</p>

      {/* Image */}
      {post.image && (
        <div className="mb-4 rounded-lg overflow-hidden border border-border">
          <img src={post.image} alt="Post" className="w-full h-auto" />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-6 pt-4 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          className={`gap-2 ${liked ? "text-accent" : ""}`}
          onClick={handleLike}
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-accent" : ""}`} />
          <span>{post.likes}</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="gap-2" onClick={() => onComment(post.id)}>
          <MessageCircle className="w-4 h-4" />
          <span>{post.comments}</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="gap-2" onClick={() => onShare(post.id)}>
          <Share2 className="w-4 h-4" />
          <span>{post.shares}</span>
        </Button>
      </div>
    </Card>
  );
};

export default PostCard;
