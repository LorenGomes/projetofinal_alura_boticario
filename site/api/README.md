# Node.js Express MongoDB REST API

## Resumo do Projeto
Este projeto é uma API REST para gerenciar itens que serão exibidos por um website. Ele permite que os usuários executem operações CRUD (Criar, Ler, Atualizar, Excluir) . A API é construída usando Node.js com a estrutura Express e usa MongoDB para armazenamento de dados. Através do arquivos da pasta seeders dados inicias são preenchidos na base de dados para que o site não fique sem informações.


## Tecnologias usadas
- **Node.js**: Framework JavaScript criado no mecanismo JavaScript V8 do Chrome.
- **Express.js**: Framework para Node.js que gerencia as rotas para as chamadas recebidas.
- **MongoDB**: Banco de dados NoSQL que usa documentos semelhantes a JSON com esquemas opcionais.
- **Mongoose**: Uma biblioteca ODM (Object Data Modeling) para MongoDB e Node.js.
- **cors**: Um pacote Node.js para fornecer um middleware Connect/Express que pode ser usado para habilitar o CORS com várias opções.

## Estrutura do projeto

```

api/
├── controllers/
│ └── # Controlers contendo a lógica das entidades
├── data/
│ └──  # Configuração para conexão do MONGODB
├── models/
│ └── # Models das entidades
├── routes/
│ └── # Rotas para os endpoints
├── seeders/
│ └── # Criação de registros iniciais
├── app.js # Arquivo principal
├── package.json # Depedências
├── package-lock.json # Árvore de dependencias
├── .env # Arquivo que contém as variáveis de ambiente para conexão ao banco
└── README.md # Documentação

```

## Detalhes Código Fonte
- **Executar antes para baixar as dependencias do projeto de backend**: npm install
- **Executar para modo debug**: node --inspect app.js
- **Executar a aplicação**: node app.js.

## Informações Adicionais

- **Subir containers que permitam execução de back,front e banco**: docker compose -f "docker-compose.yaml" up -d --build 




