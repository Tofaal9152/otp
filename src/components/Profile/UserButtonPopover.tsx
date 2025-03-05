import { ModeToggle } from "../ui/ModeToggle";
import ManageAccount from "./ManageAccount";
import SignOut from "./SignOut";
import UserInfo from "./UserInfo";
type User = {
  name: string;
  email: string;
  phone_number: string;
  api_key: string;
  sms_quota: number;
  customer: number;
};
const UserButtonPopover:React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex text-slate-800 dark:text-slate-200 flex-col gap-3">
      {/* User Info */}
      <UserInfo user={user} className="w-12 h-12" />
      {/* Manage Account */}
      <ManageAccount user={user} />
      {/* Dark Mode */}
      <ModeToggle />
      {/* Sign Out */}
      <SignOut/>
    </div>
  );
};
export default UserButtonPopover;
