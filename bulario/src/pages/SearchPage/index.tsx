import { useContext } from "react";
import { AuthContext, IMedicine } from "../../contexts/BularioPageContext";
import { AnyObject } from "yup";
import { MenuNav } from "../../components/MenuNav/menu";
import { Info } from "../../components/Info/info";
import { Button, Form } from 'react-bootstrap';

export const SearchPage = () => {
  const {
    data,
    nextPage,
    prevPage,
    lastPage,
    currentPage,
  } = useContext<AnyObject>(AuthContext);

  const sortedData = [...data].sort((a: IMedicine, b: IMedicine) => {
    return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
  });

  return (
    <>
      <MenuNav />
      <Info />

      <div>
        <Form.Control type="email" placeholder="Digite seu email" />
        <ul>
          {sortedData.map((item: IMedicine) => (
            <li key={item.id}><h1>{item.name}</h1></li>
          ))}
        </ul>
        <Button variant="primary" onClick={prevPage}>Página Anterior</Button>
        <Button variant="primary" onClick={nextPage} disabled={currentPage === lastPage}>Próxima Página</Button>
      </div>
    </>

  );
};
