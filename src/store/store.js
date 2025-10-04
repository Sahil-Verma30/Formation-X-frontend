import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  jwt: localStorage.getItem("jwt") || null,
  loading: false,
  error: null,


  signup: async ({ username, email, password }) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(
          data.error?.message ||
            data.message?.[0]?.messages?.[0]?.message ||
            "Signup failed"
        );
      }

      // Store user + token
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));

      set({ user: data.user, jwt: data.jwt, loading: false });
      return data;
    } catch (err) {
      console.error("Signup error:", err);
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  // ✅ Login function
  login: async ({ identifier, password }) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(
          data.error?.message ||
            data.message?.[0]?.messages?.[0]?.message ||
            "Login failed"
        );
      }

      // Store user + token
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));

      set({ user: data.user, jwt: data.jwt, loading: false });
      return data;
    } catch (err) {
      console.error("Login error:", err);
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  // ✅ Logout
  logout: () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    set({ user: null, jwt: null });
  },
}));
