import { ModeToggle } from "../ui/ModeToggle";
import ManageAccount from "./ManageAccount";
import SignOut from "./SignOut";
import UserInfo from "./UserInfo";
const UserButtonPopover = () => {
  return (
    <div className="flex text-slate-800 dark:text-slate-200 flex-col gap-3">
      {/* User Info */}
      <UserInfo className="w-12 h-12" />
      {/* Manage Account */}
      <ManageAccount />
      {/* Dark Mode */}
      <ModeToggle />
      {/* Sign Out */}
      <SignOut/>
    </div>
  );
};
export default UserButtonPopover;
