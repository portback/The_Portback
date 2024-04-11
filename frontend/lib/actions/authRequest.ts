import axios from "axios";
import { toast } from "react-toastify";

const baseurl = "http://localhost:5000/api/v1/auth/";

export const loginUser = async (data: { email: string; password: string }) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios
      .post(`${baseurl}login`, raw, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
      });
    return response?.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const createUser = async (data: {
  full_name: string;
  email: string;
  password: string;
}) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios
      .post(`${baseurl}create-account`, raw, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
      });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const forgot_password = async (data: { email: string }) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios
      .post(`${baseurl}forgot-password`, raw, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        console.log(err);
      });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const reset_password = async (data: {
  otp: string;
  email: string;
  password: string;
}) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios
      .post(`${baseurl}reset-password`, raw, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
      });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const onBoardUser = async (payload: any, token: string) => {
  const raw = JSON.stringify(payload);
  try {
    const response = await axios
      .post(`${baseurl}onboarding`, raw, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      })
      .catch((err) => {
        toast.error(err);
        console.log(err);
      });
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id: string | string[], token: string) => {
  try {
    console.log(token);
    const response = await axios
      .get(`${baseurl}user/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      })
      .catch((err) => {
        throw err;
      });
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
