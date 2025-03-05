"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import { useEffect } from "react";
import Aavtar from "./Aavtar";
import UserButtonPopover from "./UserButtonPopover";

const Profile = () => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/profile/`,
          { withCredentials: true }
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser(); 
  }, []);

  return (
    <Popover>
      <PopoverTrigger>
        <Aavtar className="w-8 h-8" />
      </PopoverTrigger>
      <PopoverContent>
        <UserButtonPopover />
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
