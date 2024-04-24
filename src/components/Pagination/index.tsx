import { useEffect } from "react";
import styles from "./styles.module.css";
import { MedicineData } from "../../modules/home/types";
import { ButtonDownload } from "../ButtonsDownload";
import { useDrugLeaflet } from "../../providers/DrugLeafletProvider";

export const Pagination = ({ items }: { items: MedicineData[] }) => {
  const { setCurrentPage, currentPage, startIndex, endIndex } = useDrugLeaflet();
  const currentItems = items
    .slice(startIndex, endIndex)
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

  useEffect(() => {
    setCurrentPage(1);
  }, [items]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Laboratorio</th>
            <th>Principio ativo</th>
            <th>Baixar bula</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(bula => {
            const PatientLeaflet = bula.documents.find(doc => doc.type === "PATIENT");
            const ProfessionalLeaflet = bula.documents.find(doc => doc.type === "PROFESSIONAL");

            return (
              <tr key={bula.id + 1}>
                <td>{bula.name}</td>
                <td>{bula.company}</td>
                <td>
                  <div className={styles.listContainer}>
                    <ul key={bula.id}>
                      {bula.active_principles.map(activePrinciples => {
                        return <li key={activePrinciples.id}>{activePrinciples.name}</li>;
                      })}
                    </ul>
                  </div>
                </td>
                <td className={styles.actions}>
                  {PatientLeaflet && (
                    <ButtonDownload
                      urlHref={PatientLeaflet.url}
                      variant="primary"
                      title="Bula para pacientes"
                    >
                      P
                    </ButtonDownload>
                  )}
                  {ProfessionalLeaflet && (
                    <ButtonDownload
                      urlHref={ProfessionalLeaflet.url}
                      variant="secondary"
                      title="Bula para profissionais da saúde"
                    >
                      M
                    </ButtonDownload>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.containerPaginacao}>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          ANTERIOR
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={items.length <= endIndex}>
          PROXIMO
        </button>
      </div>
    </>
  );
};
