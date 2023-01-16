import axios from "axios";

export const getAPI = async (url: string) => {
    const res = await axios.get(url);
    return res;
  };