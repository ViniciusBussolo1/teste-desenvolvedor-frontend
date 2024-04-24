import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { MedicineData } from "../../modules/home/types";

export const Pagination = ({ items }: { items: MedicineData[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex != 0 ? startIndex + itemsPerPage : 10;
  const currentItems = items
    .slice(startIndex, endIndex)
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

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
            const bulasPacientes = bula.documents.find(doc => doc.type === "PATIENT");
            const bulasProfissionais = bula.documents.find(doc => doc.type === "PROFESSIONAL");

            return (
              <tr key={bula.id}>
                <td>{bula.name}</td>
                <td>{bula.company}</td>
                <td>
                  <div className={styles.listContainer}>
                    <ul>
                      {bula.active_principles.map(activePrinciples => {
                        return <li>{activePrinciples.name}</li>;
                      })}
                    </ul>
                  </div>
                </td>
                <td className={styles.actions}>
                  {bulasPacientes && (
                   
                  )}
                  {bulasProfissionais && (
                    <a href={bulasProfissionais.url} target="blank">
                      <button title="Bula para profissionais da saúde">M</button>
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.containerPaginacao}>
        <button onClick={() => previousPage()} disabled={startIndex === 0}>
          ANTERIOR
        </button>
        <button onClick={() => nextPage()} disabled={items.length <= endIndex}>
          PROXIMO
        </button>
      </div>
    </>
  );
};
