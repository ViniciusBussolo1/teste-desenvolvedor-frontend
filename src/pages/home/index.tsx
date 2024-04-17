import { Table } from "../../Components/Table";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
      <HomeContainer>
          <h1>Listagem de Remedios</h1>
          <form>
            <input type="text" placeholder="Pesquisar" />
            <button type="submit">Pesquisar</button>
          </form>
          <Table />
        </HomeContainer>

  )
}
