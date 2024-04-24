import { InputSearch } from "../../components/InputSearch";
import { MenuSelect } from "../../components/SelectMenu";
import styles from "./styles.module.css";
import { Paginacao } from "../../components/Paginação";
import { Controller } from "react-hook-form";

import { useBulas } from "./hooks/use-Bulas";

const options = [
  { value: "todos", label: "Todos" },
  { value: "medicamento", label: "Medicamento" },
  { value: "laboratorio", label: "Laboratório" },
];

export const Bulario = () => {
  const { register, handleSubmit, control, bulasFiltradas } = useBulas();

  return (
    <>
      <div className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.container}>
          <InputSearch
            {...register("content")}
            placeholder="Digite o nome do medicamento ou laboratório"
          />

          <div className={styles.select}>
            <Controller
              name="select"
              control={control}
              render={({ field }) => <MenuSelect options={options} field={field} />}
            />
          </div>
        </form>

        <section className={styles.listBulas}>
          <Paginacao items={bulasFiltradas} />
        </section>
      </div>
    </>
  );
};
