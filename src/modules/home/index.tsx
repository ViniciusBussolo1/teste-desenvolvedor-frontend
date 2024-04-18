import { InputSearch } from "../../components/InputSearch";
import { IconSelect } from "../../components/icons";

import styles from "./styles.module.css";

export const Bulario = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <InputSearch />

        <div className={styles.menuSelect}>
          <label htmlFor="menuSelect" className={styles.iconWrapper}>
            <IconSelect />
          </label>
          <select id="menuSelect" className={styles.selectMenu}>
            <option value={"todos"}>Todos</option>
            <option value={"laboratorio"}>Laboratório</option>
            <option value={"medicamento"}>Medicamento</option>
          </select>
        </div>
      </div>
    </div>
  );
};
