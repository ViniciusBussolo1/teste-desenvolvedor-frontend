import { ComponentPropsWithRef, forwardRef } from "react";
import styles from "./styles.module.css";

type InputSearchProps = ComponentPropsWithRef<"input">;

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ ...props }: InputSearchProps, ref) => {
    return (
      <div className={styles.containerInput}>
        <input className={styles.input} {...props} ref={ref} />
        <button className={styles.button}>
          <img src="./lupaIcon.png" alt="" />
        </button>
      </div>
    );
  }
);
