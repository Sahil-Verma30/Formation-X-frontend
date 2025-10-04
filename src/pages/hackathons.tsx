"use client";
import { useState } from "react";
import { Grid, List, Users } from "lucide-react";

const HackathonPage = () => {
  const [view, setView] = useState<"list" | "grid">("list");

  // Mock Data
  const hackathons = [
    {
      id: 1,
      title: "Forte Hacks",
      desc: "Flagship hackathon on Flow, the home of consumer Web3.",
      prize: "$250,000",
      status: "Live",
      tech: "All",
      participants: 519,
      banner: "/hackathon1.png",
      daysLeft: "27 days left",
      recommended: true,
    },
    {
      id: 2,
      title: "AI Builders 2025",
      desc: "A hackathon for the next wave of AI developers & builders.",
      prize: "$50,000",
      status: "Upcoming",
      tech: "AI/ML",
      participants: 312,
      banner: "/hackathon2.png",
      daysLeft: "Starts in 5 days",
      recommended: false,
    },
    {
      id: 3,
      title: "Formation X Global Hack",
      desc: "Pushing innovation in Web3, AI, and FinTech.",
      prize: "$100,000",
      status: "Closed",
      tech: "Web3 + AI",
      participants: 845,
      banner: "/hackathon3.png",
      daysLeft: "Ended",
      recommended: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E17] text-white px-4 sm:px-6 lg:px-12 py-24">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-10">
        🚀 Explore Hackathons
      </h1>

      {/* Filters + Toggle */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        {/* Filters */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full md:w-auto">
          <select className="bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 w-full sm:w-auto">
            <option>Latest</option>
            <option>Up Coming</option>
            <option>Past</option>
          </select>
          <select className="bg-[#111522] border border-white/10 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 w-full sm:w-auto">
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

        {/* Toggle */}
        <div className="flex gap-3">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md ${
              view === "list"
                ? "bg-purple-600 text-white"
                : "bg-[#111522] text-gray-400"
            }`}
          >
            <List size={20} />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md ${
              view === "grid"
                ? "bg-purple-600 text-white"
                : "bg-[#111522] text-gray-400"
            }`}
          >
            <Grid size={20} />
          </button>
        </div>
      </div>

      {/* Hackathon Cards */}
      {view === "list" ? (
        <div className="flex flex-col gap-6">
          {hackathons.map((hack) => (
            <div
              key={hack.id}
              className="flex flex-col md:flex-row justify-between md:items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-[#1a1f2e] to-[#111522] border border-white/10 shadow-lg hover:shadow-purple-500/20 transition"
            >
              {/* Left Info */}
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {hack.title}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs sm:text-sm rounded-full ${
                      hack.status === "Live"
                        ? "bg-green-500/20 text-green-400"
                        : hack.status === "Upcoming"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {hack.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{hack.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-300">
                  <span>🕒 {hack.daysLeft}</span>
                  <span>💻 {hack.tech}</span>
                  <span>🏆 {hack.prize}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users size={16} className="text-purple-400" />
                  <span className="text-gray-200">
                    {hack.participants}+ participants
                  </span>
                </div>
              </div>

              {/* Right Banner */}
              <div className="relative w-full md:w-60 h-40 md:h-32 rounded-lg overflow-hidden border border-purple-500/40">
                <img
                  src={hack.banner}
                  alt="hackathon banner"
                  className="object-cover w-full h-full"
                />
                {hack.recommended && (
                  <span className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                    Recommended
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hack) => (
            <div
              key={hack.id}
              className="p-5 rounded-xl bg-gradient-to-b from-[#1a1f2e] to-[#111522] border border-white/10 shadow-md hover:shadow-purple-500/20 transition"
            >
              <div className="relative h-40 w-full rounded-md overflow-hidden mb-4">
                <img
                  src={hack.banner}
                  alt="hackathon"
                  className="object-cover w-full h-full"
                />
                {hack.recommended && (
                  <span className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                    Recommended
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold">{hack.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{hack.desc}</p>
              <div className="flex justify-between items-center text-xs sm:text-sm text-gray-300">
                <span>{hack.prize}</span>
                <span>{hack.daysLeft}</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm">
                <Users size={16} className="text-purple-400" />
                <span>{hack.participants}+ participants</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HackathonPage;
