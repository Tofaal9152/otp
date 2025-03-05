import axios from "axios";

type GenerateApiKey = {
  errors?: {
    formError?: string[];
  };
  success?: boolean;
};

export const GenerateApiKeyAction = async (): Promise<GenerateApiKey> => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/api-key/`,
      {},
      {
        withCredentials: true,
      }
    );

    console.log("data", res.data);

    return {
      success: true,
    };
  } catch (error) {
    return {
      errors: {
        formError: axios.isAxiosError(error)
          ? [error.response?.data?.message || "Error Generating API Key"]
          : [error instanceof Error ? error.message : "Unknown error"],
      },
    };
  }
};
