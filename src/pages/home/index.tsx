import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Table } from "../../Components/Table";
import { HomeContainer } from "./styles";
import {MagnifyingGlass } from 'phosphor-react'

export default function Home() {
  return (
      <HomeContainer>
          <h1>Listagem de Remedios</h1>
          <form>
            <Input type="text" placeholder="Digite o nome do remedio..." />
            <Input type="text" placeholder="Digite o nome do remedio..." />
            <Button type="submit" icon={<MagnifyingGlass  size={16} weight="bold"/>}>
  
              Pesquisar
              </Button>
          </form>
          <Table />
        </HomeContainer>

  )
}
