import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import styles from "./style.module.css";

type ButtonDownloadProps = {
  urlHref: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const ButtonDownload = (props: ButtonDownloadProps) => {
  const { urlHref, variant, children, ...buttonProps } = props;

  return (
    <a href={urlHref} target="blank">
      <button
        {...buttonProps}
        className={clsx(styles.buttonDownload, {
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
        })}
      >
        {children}
      </button>
    </a>
  );
};
