import { create } from "zustand";

export const useHackathonStore = create((set) => ({
  loading: false,
  error: null,
  success: false,

  createHackathon: async (hackathonData) => {
    set({ loading: true, error: null, success: false });

    try {
      const token = localStorage.getItem("jwt"); // get JWT token
      if (!token) throw new Error("No JWT token found in localStorage");

      const response = await fetch("http://localhost:1337/api/hackathons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Strapi auth header
        },
        body: JSON.stringify({ data: hackathonData }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "Failed to create hackathon");
      }

      const result = await response.json();
      set({ success: true, loading: false });
      return result.data;
    } catch (err) {
      set({ error: err.message, loading: false });
      console.error("Create Hackathon Error:", err);
    }
  },
  fetchHackathons: async () => {
    set({ loading: true, error: null });
    try {
        console.log("Fetching hackathons...");
      const res = await fetch("http://localhost:1337/api/hackathons");
      console.log("Fetch Hackathons Response:", res);
      if (!res.ok) throw new Error("Failed to fetch hackathons");

      const data = await res.json();
      console.log("Fetched Hackathons:", data);
      set({ hackathons: data.data, loading: false });
    } catch (err) {
      console.error("Fetch Hackathons Error:", err);
      set({ error: err.message, loading: false });
    }
  },
}));
