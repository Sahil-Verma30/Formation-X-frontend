// src/utils/login.js
export async function login({ identifier, password }) {
  try {
    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message?.[0]?.messages?.[0]?.message || "Login failed");
    }

    // ✅ Store JWT and user info
    localStorage.setItem("jwt", data.jwt);
    localStorage.setItem("user", JSON.stringify(data.user));

    return data; // { jwt, user }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export const logoutUser = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
};