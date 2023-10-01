import axios from "axios";
import cors from "cors";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyDAC9U-bYpWWrHoPUY9Ak8N4zSgzaoZGP4",
  cx: "b425bf05690974f1b",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
