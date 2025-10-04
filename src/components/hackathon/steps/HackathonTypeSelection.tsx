import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Building2, Zap, ShoppingBag, Users, Eye } from "lucide-react";
import { HackathonType } from "../CreateHackathonDialog";

interface HackathonTypeSelectionProps {
  onSelect: (type: HackathonType) => void;
}

export function HackathonTypeSelection({ onSelect }: HackathonTypeSelectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">For Students</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-3">
            <GraduationCap className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              Free access to Formation X + premium features to supercharge your hackathons
            </p>
          </div>
          <div className="flex gap-3">
            <Zap className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              Partner with top companies for exciting bounties and sponsorships
            </p>
          </div>
          <div className="flex gap-3">
            <ShoppingBag className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              Exclusive swag and rewards for winners and organizers
            </p>
          </div>
          <div className="flex gap-3">
            <Users className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              Guidance and support from the Formation X team to make your hackathon a success
            </p>
          </div>
        </div>

        <Button
          className="w-full h-12 text-base font-semibold"
          onClick={() => onSelect("students")}
        >
          Start Hackathon Setup
        </Button>
      </Card>

      <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3">
          <Building2 className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-bold">For Communities/Companies</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-3">
            <Building2 className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              Unlock the full power of Formation X - run and manage hackathons effortlessly
            </p>
          </div>
          <div className="flex gap-3">
            <Eye className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              
Boost your hackathon's visibility by getting featured on our Hackathons Page
            </p>
          </div>
          <div className="flex gap-3">
            <Users className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              Support from the Formation X team
            </p>
          </div>
        </div>

        <Button
          className="w-full h-12 text-base font-semibold"
          onClick={() => onSelect("communities")}
        >
          Start Hackathon Setup
        </Button>
      </Card>
    </div>
  );
}
