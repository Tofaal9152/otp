import axios from "axios";

const AllSmsList = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/all-sms/`,
      { withCredentials: true }
    );
    console.log(res.data);

    return res?.data;
  } catch (error: any) {
    console.log(error);
  }
};

export default AllSmsList;
