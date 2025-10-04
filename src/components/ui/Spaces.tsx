import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

export default function SpacesPage() {
  const [filters, setFilters] = useState({ city: '', date: '' });

  const spaces = [
    { id: 1, name: "Innovate Hub", city: "Bangalore", date: "2025-10-10", image: "spaces1.png" },
    { id: 2, name: "Creators Loft", city: "Delhi", date: "2025-10-15", image: "spaces2.png" },
    { id: 3, name: "Tech Den", city: "Mumbai", date: "2025-10-08", image: "spaces3.png" },
  ];

  const filteredSpaces = spaces.filter(space => {
    return (
      (!filters.city || space.city === filters.city) &&
      (!filters.date || space.date === filters.date)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B032D] via-[#1E0A47] to-[#2B1055] text-white px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold text-center p-8  bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text">
          Discover Inspiring Workspaces
        </motion.h1>

        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
         Find creative spaces to collaborate, build, and innovate — designed exclusively for hackathon creators, developers, and innovators shaping the future.
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <Select onValueChange={(v) => setFilters({ ...filters, city: v })}>
            <SelectTrigger className="w-[200px] bg-white/10 border border-white/20 text-white">
              <SelectValue placeholder="Filter by City" />
            </SelectTrigger>
            <SelectContent className="bg-[#1E0A47] text-white">
              <SelectItem value="Bangalore">Bangalore</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <Input type="date" className="pl-10 bg-white/10 border-white/20 text-white" onChange={(e) => setFilters({ ...filters, date: e.target.value })} />
          </div>

          <Button className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] hover:opacity-90">Apply Filters</Button>
        </div>

        {/* Spaces List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-5">
          {filteredSpaces.map(space => (
            <motion.div key={space.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card className="bg-white/5 border-white/10 hover:border-[#8E2DE2] transition rounded-2xl overflow-hidden shadow-lg">
                <img src={space.image} alt={space.name} className="w-full h-48 object-cover" />
                <CardContent className="p-5">
                  <h2 className="text-xl font-semibold mb-2">{space.name}</h2>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <MapPin size={16} /> {space.city}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} /> {space.date}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredSpaces.length === 0 && (
          <p className="text-center text-gray-400 mt-10">No spaces match your filters. Try adjusting your search.</p>
        )}
      </div>
    </div>
  );
}
