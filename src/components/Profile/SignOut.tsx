import { LogOut } from "lucide-react";

const SignOut = () => {
  return (
    <div className="text-red-600 font-semibold text-xs  flex items-center gap-2 cursor-pointer">
      <LogOut className="w-4 h-4" />
      Logout
    </div>
  );
};

export default SignOut;
