import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL;

export const getAPI = async (url: string) => {
    const res = await axios.get(url);
    return res;
  };