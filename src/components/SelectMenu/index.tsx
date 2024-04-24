import { ControllerRenderProps } from "react-hook-form";
import Select from "react-select";
import { dataRequest } from "../../modules/home/hooks/use-Drug-Label";

type Options = {
  value: string;
  label: string;
};
type MenuSelectProps = {
  options: Options[];
  field: ControllerRenderProps<dataRequest, "select">;
};

export const MenuSelect = (props: MenuSelectProps) => {
  const { options, field } = props;
  return (
    <Select
      {...field}
      defaultValue={options[0]}
      options={options}
      styles={{
        control: baseStyles => ({
          ...baseStyles,
          boxShadow: "0px 2px 3px 0px;",
          cursor: "pointer",
          height: "3em",
        }),

        singleValue: provided => ({
          ...provided,
        }),
      }}
    />
  );
};
