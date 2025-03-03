"use server";
import axios from "axios";

export const SignOutAction = async (prevState: { isPending: boolean }) => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
      {},
      { withCredentials: true }
    );
    return { isPending: false, success: true };
  } catch (error) {
    console.error("Logout Error:", error);
    return { isPending: false, error: "Logout failed. Please try again." };
  }
  
};
