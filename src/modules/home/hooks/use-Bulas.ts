import { useForm } from "react-hook-form";
import { useGetBulas } from "./use-get-bulas";
import { useState } from "react";
import { MedicineData } from "../types";

type dataRequest = {
  content: string;
  select: { value: string; label: string };
};

export const useBulas = () => {
  const { data: bulas } = useGetBulas();
  const { register, handleSubmit, control } = useForm<dataRequest>();
  const [bulasFiltradas, setbulasFiltradas] = useState<MedicineData[]>([]);

  const onSubmit = (dataSubmit: dataRequest) => {
    const { content } = dataSubmit;
    const contentUpper = content.toUpperCase();

    const select = dataSubmit?.select?.value ? dataSubmit?.select.value : "Todos";

    switch (select) {
      case "medicamento":
        setbulasFiltradas(
          bulas.filter((el: MedicineData) => {
            return el.name.toUpperCase().includes(contentUpper);
          })
        );
        break;

      case "laboratorio":
        setbulasFiltradas(
          bulas.filter((el: MedicineData) => {
            return el.company.toUpperCase().includes(contentUpper);
          })
        );
        break;

      default:
        setbulasFiltradas(
          bulas.filter((el: MedicineData) => {
            return (
              el.company.toUpperCase().includes(contentUpper) ||
              el.name.toUpperCase().includes(contentUpper)
            );
          })
        );
        break;
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    control,
    bulasFiltradas,
  };
};
