import { useQuery } from "@tanstack/react-query";
import { getBulas, getBulasPaginado } from "../../../services/api";

export const useGetBulas = () => {
  return useQuery({
    queryKey: ["BULAS"],
    queryFn: async () => {
      const { data } = await getBulas();
      return data;
    },
  });
};

export const useGetPaginado = () => {
  return useQuery({
    queryKey: ["paginados"],
    queryFn: async () => {
      const { data } = await getBulasPaginado("3");
      return data;
    },
  });
};
