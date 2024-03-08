"use server";

import axios from "axios";

export const getAllPost = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/post");
    return response.data;
  } catch (err:any) {
    console.log(err.message);
  }
};
