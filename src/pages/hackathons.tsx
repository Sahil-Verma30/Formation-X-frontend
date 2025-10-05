"use client";
import { useEffect, useState } from "react";
import { List, Grid } from "lucide-react";
import { useHackathonStore } from "@/store/hackathonStore";
import { Link } from "react-router-dom";

// Function to render description from Portable Text
const renderDescription = (desc) => {
  if (!desc) return null;
  return desc.map((block, i) => {
    if (block.type === "paragraph") {
      return (
        <p key={i} className="text-gray-300 text-sm">
          {block.children.map((c) => c.text).join("")}
        </p>
      );
    }
    return null;
  });
};

const HackathonPage = () => {
  const [view, setView] = useState<"list" | "grid">("list");
  const { hackathons, fetchHackathons } = useHackathonStore();

  useEffect(() => {
    fetchHackathons();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white px-4 sm:px-6 lg:px-12 py-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-10">
        🚀 Explore Hackathons
      </h1>

      {/* Filters + Toggle */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full md:w-auto">
          <select className="bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-sm w-full sm:w-auto">
            <option>Latest</option>
            <option>Upcoming</option>
            <option>Past</option>
          </select>
          <select className="bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-sm w-full sm:w-auto">
            <option>Total Prize</option>
            <option>High → Low</option>
            <option>Low → High</option>
          </select>
          <select className="bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-sm w-full sm:w-auto">
            <option>Tech Stack</option>
            <option>AI/ML</option>
            <option>Web3</option>
            <option>Fullstack</option>
          </select>
          <select className="bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-sm w-full sm:w-auto">
            <option>Status</option>
            <option>Live</option>
            <option>Upcoming</option>
            <option>Closed</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md ${view === "list" ? "bg-purple-600 text-white" : "bg-[#111522] text-gray-400"}`}
          >
            <List size={20} />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md ${view === "grid" ? "bg-purple-600 text-white" : "bg-[#111522] text-gray-400"}`}
          >
            <Grid size={20} />
          </button>
        </div>
      </div>

      {/* Hackathon Cards */}
      {view === "list" ? (
        <div className="flex flex-col gap-6">
          {hackathons.map((hack) => (
            console.log(hackathons,"newww"),
            <Link
              key={hack.id}
              to={`/hackathon/${hack?.id}`}
              className="flex flex-col md:flex-row justify-between md:items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-[#1a1f2e] to-[#111522] border border-white/10 shadow-lg hover:shadow-purple-500/20 transition"
            >
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{hack.title}</h3>
                  <span
                    className={`px-3 py-1 text-xs sm:text-sm rounded-full ${
                      hack.hackathonStatus === "Live"
                        ? "bg-green-500/20 text-green-400"
                        : hack.hackathonStatus === "Upcoming"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {hack.hackathonStatus}
                  </span>
                </div>

                {renderDescription(hack.description)}

                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-300">
                  <span>💻 {hack.category}</span>
                  <span>🏆 ${hack.priceMoney}</span>
                  <span>🕒 {hack.rsvp}+ participants</span>
                </div>
              </div>

              {hack.images[0] && (
                <div className="relative w-full md:w-60 h-40 md:h-32 rounded-lg overflow-hidden border border-purple-500/40">
                  <img src={hack.images[0].url} alt={hack.title} className="object-cover w-full h-full" />
                </div>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hack) => (
            <Link
              key={hack.id}
              to={`/hackathon/${hack?.documentId}`}
              className="p-5 rounded-xl bg-gradient-to-b from-[#1a1f2e] to-[#111522] border border-white/10 shadow-md hover:shadow-purple-500/20 transition"
            >
              {hack.images[0] && (
                <div className="relative h-40 w-full rounded-md overflow-hidden mb-4">
                  <img src={hack.images[0].url} alt={hack.title} className="object-cover w-full h-full" />
                </div>
              )}
              <h3 className="text-lg font-semibold">{hack.title}</h3>
              {renderDescription(hack.description)}
              <div className="flex justify-between items-center text-xs sm:text-sm text-gray-300 mt-2">
                <span>${hack.priceMoney}</span>
                <span>{hack.rsvp}+ participants</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HackathonPage;
