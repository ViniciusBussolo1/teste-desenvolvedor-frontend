import axios from "axios";

const apiBulas = axios.create({
  baseURL: "http://localhost:3000",
});

export const getBulas = async () => {
  return await apiBulas.get("/data");
};

export const getBulasPaginado = (number: number) => {
  return apiBulas.get(`/data?_page=${number}`);
};
