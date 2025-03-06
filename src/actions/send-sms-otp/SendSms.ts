import axios from "axios";
import { toast } from "sonner";
import { z } from "zod";

const SendSmsSchema = z.object({
  message: z.string().min(1, "please enter a valid message"),
  recipient: z.string().min(1, "please enter a valid recipient"),
});
type SendSmsProps = {
  errors: {
    message?: string[];
    recipient?: string[];
    formError?: string[];
  };
};
export const SendSmsAction = async (
  isBulk: boolean,
  previousState: SendSmsProps,
  formData: FormData
): Promise<SendSmsProps> => {
  //  Validate the form data
  const result = SendSmsSchema.safeParse({
    message: formData.get("message"),
    recipient: formData.get("recipient"),
  });
  // console.log(result);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const payload = {
    message: formData.get("message"),
    ...(isBulk
      ? {
          recipients: (formData.get("recipient") as string)
            .split(",")
            .map((num) => num.trim()),
        }
      : { recipient: formData.get("recipient") }),
  };

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/forwarder/send/}`,
      {
        payload,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    toast.success("SMS sent successfully");
    return { errors: {} };
  } catch (error) {
    console.log(error);

    toast.error("Failed to send SMS");
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
};
