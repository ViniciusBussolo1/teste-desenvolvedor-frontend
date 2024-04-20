import { useContext } from "react";
import { AuthContext, IDocument, IMedicine } from "../../contexts/BularioPageContext";
import { AnyObject } from "yup";
import { MenuNav } from "../../components/MenuNav/menu";
import { Info } from "../../components/Info/info";
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import './stylepage.scss'

export const SearchPage = () => {
  const {
    nextPage,
    prevPage,
    lastPage,
    currentPage,
    searchValue,
    setSearchValue,
    handleSearch,
    filteredData,
    sortedData,
  } = useContext<AnyObject>(AuthContext);

  return (
    <>
      <MenuNav />
      <Info />

      <div>
        <div className="containerInput">
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="Digite sua pesquisa"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                handleSearch();
              }}
            />
            <Button variant="outline-success" onClick={handleSearch}>
              <BsSearch />
            </Button>
          </InputGroup>
        </div>

        <div className="topulstyle">
          <div>
            <h1 className="alterstyleH1">Nome do Medicamento</h1>
          </div>
          <div>
            <h1 className="alterstyleH1">Laboratorio</h1>
          </div>
          <div>
            <h1 className="alterstyleH1">Data de Publicação</h1>
          </div>
          <div>
            <h1 className="alterstyleH1">Bula Profissional e Paciente</h1>
          </div>
        </div>

        <ul className="containerul">
          {filteredData.length === 0 && searchValue !== '' && (
            <h1 className="h1msn">Nenhum resultado encontrado</h1>
          )}
          {(searchValue === '' ? sortedData : filteredData).map((item: IMedicine, index: number) => (
            <li className={index % 2 === 0 ? 'styleli1' : 'styleli2'} key={item.id}>
              <h1 className="styleH1">{item.name}</h1>
              <h1 className="styleH1">{item.company}</h1>
              <h1 className="styleH1">{item.published_at}</h1>
              <div className="urlcontainer">
                {item.documents.map((doc: IDocument) => (<h1 className="styleH1">
                  {doc.url}
                </h1>))}
              </div>
            </li>
          ))}
        </ul>

        <div className="containerbtn">
          <Button variant="success" onClick={prevPage}>
            Anterior
          </Button>
          <Button variant="success" onClick={nextPage} disabled={currentPage === lastPage}>
            Próximo
          </Button>
        </div>
      </div>
    </>
  );
};
