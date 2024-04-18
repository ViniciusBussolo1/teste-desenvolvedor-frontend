## 💻 Projeto

Teste para empresa Dot.Lib. O desafio pode ser encontrado através <a href="https://github.com/Dotlib-BR/teste-desenvolvedor-frontend">deste GitHub</a>

## ✨ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix](https://www.radix-ui.com/)

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/ViniciusBussolo1/teste-desenvolvedor-frontend.git

$ cd teste-desenvolvedor-frontend-Vinicius-do-Nascimento-Bussolo
```

Para iniciá-lo, siga os passos abaixo:

## API Rest

Para carregar a api, use o [json-server](https://github.com/typicode/json-server):

```sh
npm install -g json-server

json-server api/dotlib.json -s ./api/public
```

Utilize os seguintes endpoints para carregar as informações:

```sh
# retorna todos os items paginados de 10 em 10
GET http://localhost:3000/data

# retorna um determinado medicamento consultado pelo id
GET http://localhost:3000/data/:id

# retorna os items paginados
GET http://localhost:3000/data?_page=:number
```

## Frontend

```bash
# Instalar as dependências
$ npm install
# Iniciar o projeto
$ npm run dev
```

O app estará disponível no seu browser pelo endereço  http://localhost:5173/.