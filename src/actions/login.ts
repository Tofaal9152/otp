"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import axios from "axios";

const LoginSchema = z.object({
  email: z.string().email("please enter a valid email"),
  password: z.string().min(0, "please enter a valid password"),
});
type LoginType = {
  errors: {
    email?: string[];
    password?: string[];
    formError?: string[];
  };
};
export const LoginAction = async (
  previousState: LoginType,
  formData: FormData
): Promise<LoginType> => {
  //  Validate the form data
  const result = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/rest-auth/login/`,
      {
        email: formData.get("email"),
        password: formData.get("password"),
      },
      {
        withCredentials: true,
      }
    );

    console.log(res.data);
  } catch (error) {
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

  redirect("/");
};
