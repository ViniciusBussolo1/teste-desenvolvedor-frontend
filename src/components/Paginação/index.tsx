import { useState } from "react";
import styles from "./styles.module.css";
import { MedicineData } from "../../modules/home/types";

export const Paginacao = ({ items }: { items: MedicineData[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPorPagina = 10;
  const startIndex = (currentPage - 1) * itemsPorPagina;
  const endIndex = startIndex != 0 ? startIndex + itemsPorPagina : 10;
  const currentItems = items.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

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
                      {bula.active_principles.map(principioAtivo => {
                        return <li>{principioAtivo.name}</li>;
                      })}
                    </ul>
                  </div>
                </td>
                <td className={styles.actions}>
                  {bulasPacientes && (
                    <a href={bulasPacientes.url} target="blank">
                      <button>P</button>
                    </a>
                  )}
                  {bulasProfissionais && (
                    <a href={bulasProfissionais.url} target="blank">
                      <button>M</button>
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
