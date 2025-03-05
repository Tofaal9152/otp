import axios from "axios";

type DeleteApiKey = {
  errors?: {
    formError?: string[];
  };
  success?: boolean;
};

export const DeleteApiKeyAction = async (): Promise<DeleteApiKey> => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/api-key/`,
      {
        withCredentials: true,
      }
    );

    console.log(res.data);

    return {
      success: true,
    };
  } catch (error) {
    return {
      errors: {
        formError: axios.isAxiosError(error)
          ? [error.response?.data?.message || "Error Deleting API Key"]
          : [error instanceof Error ? error.message : "Unknown error"],
      },
    };
  }
};
