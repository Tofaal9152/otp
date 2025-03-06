import { redirect } from "next/navigation";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";

const OtpSchema = z.object({
  otp: z.string().min(6, "please enter a valid otp"),
});
type OtpType = {
  errors: {
    otp?: string[];
    formError?: string[];
  };
};
export const VerifyOtpAction = async (
  previousState: OtpType,
  formData: FormData
): Promise<OtpType> => {
  //  Validate the form data
  const result = OtpSchema.safeParse({
    otp: formData.get("otp"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
console.log('====================================');
console.log('formData', formData.get("otp"));
console.log('====================================');
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/verify-otp/`,
      {
        otp: formData.get("otp"),
      },
      {
        withCredentials: true,
      }
    );

    console.log(res.data);
    toast.success("OTP verified successfully");
  } catch (error: unknown) {
    console.log(error);
    
    toast.error("Failed to verify OTP");
    if (error instanceof Error) {
      return {
        errors: {
          formError: axios.isAxiosError(error)
            ? error.response?.data.message
            : [error.message],
        },
      };
    } else {
      return {
        errors: {
          formError: ["Unknown error"],
        },
      };
    }
  }

  redirect("/auth/login");
};
