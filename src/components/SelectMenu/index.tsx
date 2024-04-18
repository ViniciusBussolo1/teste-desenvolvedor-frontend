import Select from "react-select";

type MenuSelectProps<T> = {
  options: T[];
};

export const MenuSelect = <T extends { value: string; label: string }>({
  options,
}: MenuSelectProps<T>) => {
  return (
    <Select
      options={options}
      styles={{
        control: baseStyles => ({
          ...baseStyles,
          backgroundColor: "#000a06",
          cursor: "pointer",
          height: "3em",
        }),

        singleValue: provided => ({
          ...provided,
          color: "#ffff", // Cor do texto do valor selecionado
        }),
      }}
    />
  );
};
