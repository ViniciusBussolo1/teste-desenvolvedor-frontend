import { InputSearch } from "../../components/InputSearch";
import { MenuSelect } from "../../components/SelectMenu";

import { useGetBulas, useGetPaginado } from "./hooks/use-get-bulas";
import styles from "./styles.module.css";

const options = [
  { value: "todos", label: "Todos" },
  { value: "medicamento", label: "Medicamento" },
  { value: "laboratorio", label: "Laboratório" },
];
export const Bulario = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <InputSearch />

          <div className={styles.select}>
            <label>Filtro</label>
            <MenuSelect options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* 


















        <div className={styles.menuSelect}>
          <label htmlFor="menuSelect" className={styles.iconWrapper}>
            <IconSelect />
          </label>
          <select id="menuSelect" className={styles.selectMenu}>
            <option value={"todos"}>Todos</option>
            <option value={"laboratorio"}>Laboratório</option>
            <option value={"medicamento"}>Medicamento</option>
          </select>
        </div> */
}
