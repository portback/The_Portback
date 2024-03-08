"use server";

import axios from "axios";

export const getAllPost = async () => {
  try {
    const response = await axios.get("https://portfolio-hub-server.onrender.com/api/v1/post");
    return response.data;
  } catch (err:any) {
    console.log(err.message);
  }
};
