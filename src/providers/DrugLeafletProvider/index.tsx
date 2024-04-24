import { createContext, useContext, useState } from "react";
import { useDrugLabel } from "../../modules/home/hooks/use-Drug-Label";

type DataContextType = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  endIndex: number;
  startIndex: number;
};

export const DrugLeafletContext = createContext<DataContextType>({
  setCurrentPage: () => {},
  currentPage: 0,
  endIndex: 0,
  startIndex: 0,
});

const useDrugLeafletContextBase = () => {
  const { filteredDrugLabels: initialFilteredDrugLabels } = useDrugLabel();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex != 0 ? startIndex + itemsPerPage : 10;

  return {
    setCurrentPage,
    endIndex,
    startIndex,
    currentPage,
    filteredDrugLabels: initialFilteredDrugLabels,
  };
};

export const DrugLeafletProvider = ({ children }: { children: React.ReactNode }) => {
  const values = useDrugLeafletContextBase();
  return <DrugLeafletContext.Provider value={values}>{children}</DrugLeafletContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDrugLeaflet = () => {
  const context = useContext(DrugLeafletContext);
  if (!context) {
    throw new Error("useDrugLeaflet must be used within an AuthProvider");
  }
  return context;
};
