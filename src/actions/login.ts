"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import axios from "axios";

const LoginSchema = z.object({
  email: z.string().email("please enter a valid email"),
  password: z.string().min(1, "password must be at least 1 characters"),
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
  // Api call
  console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`);

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
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
