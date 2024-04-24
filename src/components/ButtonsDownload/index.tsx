import { ComponentPropsWithoutRef } from "react";

type ButtonDownloadProps = {
  urlHref: string;
} & ComponentPropsWithoutRef<"button">;

export const ButtonDownload = (props: ButtonDownloadProps) => {
  const { urlHref, ...buttonProps } = props;

  return (
    <a href={urlHref} target="blank">
      <button {...buttonProps}>P</button>
    </a>
  );
};
