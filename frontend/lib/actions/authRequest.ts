import axios from "axios";

const baseurl = "https://portfolio-hub-server.onrender.com/api/v1/auth/";

export const loginUser = async (data: { email: string; password: string }) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios
      .post(`${baseurl}login_user`, raw, {
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

export const createUser = async (data: {
  full_name: string;
  email: string;
  password: string;
}) => {
  const raw = JSON.stringify(data);

  try {
    const response = await axios
      .post(`${baseurl}create_user`, raw, {
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
        console.log(err);
      });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id: string | string[], token: string) => {
  try {
    const response = await axios
      .get(`http://localhost:5000/api/v1/auth/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`,
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
