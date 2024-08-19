// src/api.tsx
import axios from "axios";

export const loginOrCreate = async (
  email: string | null,
  username: string | null
) => {
  try {
    const response = await axios.post(`http://13.232.39.125:3000/main`, {
      email: email,
      username: username,
      password: "1234",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error; // Re-throw the error for handling in the component
  }
};
