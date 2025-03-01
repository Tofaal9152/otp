import { LogOut } from "lucide-react";
import { ModeToggle } from "../ui/ModeToggle";
import Aavtar from "./Aavtar";
import ManageAccount from "./ManageAccount";
const UserButtonPopover = () => {
  return (
    <div className="flex text-slate-800 dark:text-slate-200 flex-col gap-3">
      {/* User Info */}
      <div className="flex px-4 py-2 items-center gap-3 border-b pb-3 ">
        <Aavtar className="w-12 h-12" />
        <div>
          <p className="text-sm font-semibold ">Md Tofaal Ahmed</p>
          <p className="text-xs dark:text-slate-300">tofaal91522@gmail.com</p>
        </div>
      </div>

      {/* Manage Account */}
      <ManageAccount />
      {/* Dark Mode */}
      <ModeToggle />
      {/* Sign Out */}
      <div className="flex pb-3 pt-1 items-center gap-3  cursor-pointer transition text-red-600 dark:text-red-400">
        <LogOut className="w-4 h-4" />
        <span className="text-xs font-medium">Sign out</span>
      </div>
    </div>
  );
};
export default UserButtonPopover;
