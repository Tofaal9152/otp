import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings } from "lucide-react";
import Aavtar from "./Aavtar";

const ManageAccount = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex pb-3 pt-1 items-center border-b gap-3  cursor-pointer transition dark:text-slate-300">
          <Settings className="w-4 h-4" />
          <span className="text-xs font-medium">Manage Account</span>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-lg p-6 rounded-lg ">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Manage Your Account
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
            Update your personal information.
          </DialogDescription>
        </DialogHeader>

        {/* Avatar Upload */}
        <div className="flex flex-col items-center gap-3">
          <Aavtar className="w-20 h-20 border" />

          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="avatar-upload"
          />
          <Label
            htmlFor="avatar-upload"
            className="cursor-pointer text-xs text-blue-500 hover:underline dark:text-blue-400"
          >
            Change Profile Picture
          </Label>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name" className="text-sm">
              Full Name
            </Label>
            <Input id="name" name="name" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input id="email" name="email" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="address" className="text-sm">
              Address
            </Label>
            <Input id="address" name="address" className="mt-1" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ManageAccount;
