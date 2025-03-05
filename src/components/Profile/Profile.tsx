"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import { useEffect, useState } from "react";
import Aavtar from "./Aavtar";
import UserButtonPopover from "./UserButtonPopover";

const Profile = () => {
  type User = {
    name: string;
    email: string;
    phone_number: string;
    api_key: string;
    sms_quota: number;
    customer: number;
  };
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/profile/`,
          { withCredentials: true }
        );

        setUser(res.data);
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
        {user && <UserButtonPopover user={user} />}
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
