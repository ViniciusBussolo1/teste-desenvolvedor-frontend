import { useForm } from "react-hook-form";
import { useGetDrugLabel } from "./use-get-drug-label";
import { useState } from "react";
import { MedicineData } from "../types";

export type dataRequest = {
  content: string;
  select: { value: string; label: string };
};

export const useDrugLabel = () => {
  const { data: bulas } = useGetDrugLabel();
  const { register, handleSubmit, control } = useForm<dataRequest>();
  const [filteredDrugLabels, setFilteredDrugLabels] = useState<MedicineData[]>([]);

  const onSubmit = (dataSubmit: dataRequest) => {
    const { content } = dataSubmit;
    const contentUpper = content.toUpperCase();

    const select = dataSubmit?.select?.value ? dataSubmit?.select.value : "Todos";

    switch (select) {
      case "medicamento":
        setFilteredDrugLabels(
          bulas.filter((el: MedicineData) => {
            return el.name.toUpperCase().includes(contentUpper);
          })
        );
        break;

      case "laboratorio":
        setFilteredDrugLabels(
          bulas.filter((el: MedicineData) => {
            return el.company.toUpperCase().includes(contentUpper);
          })
        );
        break;

      default:
        setFilteredDrugLabels(
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
    filteredDrugLabels,
  };
};
