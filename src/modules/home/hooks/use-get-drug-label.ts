import { useQuery } from "@tanstack/react-query";
import { getBulas } from "../../../services/api";

export const useGetDrugLabel = () => {
  return useQuery({
    queryKey: ["BULAS"],
    queryFn: async () => {
      const { data } = await getBulas();
      return data;
    },
  });
};
