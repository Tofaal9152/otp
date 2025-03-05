"use client";
import { VerifyOtpAction } from "@/actions/VerifyOtp";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Loader } from "lucide-react";
import { useActionState } from "react";
const VerifyOtpPage = () => {
  const [state, action, isPending] = useActionState(VerifyOtpAction, {
    errors: {},
  });
  return (
    <form
      action={action}
      className="min-h-[93vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4"
    >
      <div className="max-w-md w-full border p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#686df6] to-emerald-500 text-transparent bg-clip-text mb-2">
          Verify Your Phone Number
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 ">
          Enter the 6-digit code sent to your phone number
        </p>
        <div className="flex justify-center mb-6">
          <InputOTP maxLength={6} name="otp" required>
            <InputOTPGroup>
              <InputOTPSlot className="dark:border-slate-600" index={0} />
              <InputOTPSlot className="dark:border-slate-600" index={1} />
              <InputOTPSlot className="dark:border-slate-600" index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot className="dark:border-slate-600" index={3} />
              <InputOTPSlot className="dark:border-slate-600" index={4} />
              <InputOTPSlot className="dark:border-slate-600" index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        {state.errors.otp && (
          <div className="bg-red-100 text-red-500 p-2 rounded-lg my-2">
            {state.errors.otp}
          </div>
        )}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#686df6] to-emerald-500 text-white py-2 rounded-lg text-lg font-semibold hover:opacity-90 transition"
        >
          {isPending && <Loader className="mr-2 animate-spin" size={18} />}
          Verify OTP
        </Button>
      </div>
    </form>
  );
};

export default VerifyOtpPage;
