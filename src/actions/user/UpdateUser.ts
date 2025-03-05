import axios from "axios";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(1, "Please enter a valid name"),
});
type UserType = {
  errors?: {
    name?: string[];
    formError?: string[];
  };
  success?: boolean;
};
export const UserAction = async (
  previousState: UserType,
  formData: FormData
): Promise<UserType> => {
  const result = UserSchema.safeParse({
    name: formData.get("name"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/profile/`,
      {
        name: formData.get("name"),
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
  return {
    success: true,
  };
};
