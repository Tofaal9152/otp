import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserButtonPopover from "./UserButtonPopover";
import Aavtar from "./Aavtar";

const Profile = () => {
  return (
    <Popover>
      <PopoverTrigger >
        <Aavtar className="w-8 h-8" />
      </PopoverTrigger>
      <PopoverContent>
        <UserButtonPopover />
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
