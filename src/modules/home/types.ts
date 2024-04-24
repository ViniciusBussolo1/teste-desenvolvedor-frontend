type Document = {
  id: string;
  expedient: string;
  type: "PROFESSIONAL" | "PATIENT";
  url: string;
};

type ActivePrinciple = {
  id: string;
  name: string;
};

export type MedicineData = {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: Document[];
  active_principles: ActivePrinciple[];
};
