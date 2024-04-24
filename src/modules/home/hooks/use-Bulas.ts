/* eslint-disable @typescript-eslint/no-unused-vars */
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

  const { register, handleSubmit, control } = useForm();
  const [bulasFiltradas, setbulasFiltradas] = useState<MedicineData[]>([]);

  const onSubmit = (dataSubmit: dataRequest) => {
    const { content } = dataSubmit;
    const select = dataSubmit?.select.value;

    switch (select) {
      case "medicamento":
        setbulasFiltradas(
          bulas.filter(el => {
            return el.name.toUpperCase().includes(content.toUpperCase());
          })
        );
        break;

      case "laboratorio":
        setbulasFiltradas(
          bulas.filter(el => {
            return el.company.toUpperCase().includes(content.toUpperCase());
          })
        );
        break;

      default:
        setbulasFiltradas(bulas);
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
