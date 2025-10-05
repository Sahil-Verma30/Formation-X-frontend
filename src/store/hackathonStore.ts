import { create } from "zustand";
import axios from "axios";

interface Hackathon {
    documentId: number;
  id: number;
  title: string;
  description: any; // Portable Text array
  category: string;
  priceMoney: string;
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

interface HackathonState {
  hackathons: Hackathon[];
  fetchHackathons: () => Promise<void>;
}

export const useHackathonStore = create<HackathonState>((set) => ({
  hackathons: [],

  fetchHackathons: async () => {
    try {
      const token = localStorage.getItem("jwt");
      const res = await axios.get(
        "http://localhost:1337/api/hackathons?populate=images",
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      const data = res.data.data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category,
        priceMoney: item.priceMoney,
        hackathonStatus: item.hackathonStatus,
        venue: item.venue,
        minTeamSize: item.minTeamSize,
        maxTeamSize: item.maxTeamSize,
        rsvp: item.rsvp,
        applicationOpen: item.applicationOpen,
        applicationClose: item.applicationClose,
        hackathonBegin: item.hackathonBegin,
        submissionDeadline: item.submissionDeadline,
        images: item.images?.map((img) => ({
          url: `http://localhost:1337${img.url}`,
        })) || [],
      }));

      set({ hackathons: data });
    } catch (error) {
      console.error("Error fetching hackathons:", error);
    }
  },
}));
