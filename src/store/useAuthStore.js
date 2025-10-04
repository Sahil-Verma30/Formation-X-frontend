import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  jwt: localStorage.getItem("jwt") || null,
  loading: false,
  error: null,

  // ✅ Signup Function
  signup: async ({ username, email, password }) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.post("/auth/local/register", {
        username,
        email,
        password,
      });

      const { jwt, user } = res.data;

      // Store user + token
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("user", JSON.stringify(user));

      set({ user, jwt, loading: false });
      return res.data;
    } catch (err) {
      console.error("Signup error:", err);
      const errorMsg =
        err.response?.data?.error?.message ||
        err.response?.data?.message?.[0]?.messages?.[0]?.message ||
        err.message ||
        "Signup failed";
      set({ error: errorMsg, loading: false });
      throw new Error(errorMsg);
    }
  },

  // ✅ Login Function
  login: async ({ identifier, password }) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.post("/auth/local", {
        identifier,
        password,
      });

      const { jwt, user } = res.data;

      localStorage.setItem("jwt", jwt);
      localStorage.setItem("user", JSON.stringify(user));

      set({ user, jwt, loading: false });
      return res.data;
    } catch (err) {
      console.error("Login error:", err);
      const errorMsg =
        err.response?.data?.error?.message ||
        err.response?.data?.message?.[0]?.messages?.[0]?.message ||
        err.message ||
        "Login failed";
      set({ error: errorMsg, loading: false });
      throw new Error(errorMsg);
    }
  },

  // ✅ Logout Function
  logout: () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    set({ user: null, jwt: null, error: null });
  },
  organizerSignup: async ({ username, email, password }) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.post("/auth/local/register", {
        username,
        email,
        password,
        isOrganizer: true,
      });

      const { jwt, user } = res.data;

      // Store user + token
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("user", JSON.stringify(user));

      set({ user, jwt, loading: false });
      return res.data;
    } catch (err) {
      console.error("Signup error:", err);
      const errorMsg =
        err.response?.data?.error?.message ||
        err.response?.data?.message?.[0]?.messages?.[0]?.message ||
        err.message ||
        "Signup failed";
      set({ error: errorMsg, loading: false });
      throw new Error(errorMsg);
    }
  },

  organizerLogin: async ({ identifier, password }) => {
    set({ loading: true, error: null });
    try {
      const res = await axiosInstance.post("/auth/local", {
        identifier,
        password,
        isOrganizer: true,
      });

      const { jwt, user } = res.data;

      localStorage.setItem("jwt", jwt);
      localStorage.setItem("user", JSON.stringify(user));

      set({ user, jwt, loading: false });
      return res.data;
    } catch (err) {
      console.error("Login error:", err);
      const errorMsg =
        err.response?.data?.error?.message ||
        err.response?.data?.message?.[0]?.messages?.[0]?.message ||
        err.message ||
        "Login failed";
      set({ error: errorMsg, loading: false });
      throw new Error(errorMsg);
    }
  },
}));
