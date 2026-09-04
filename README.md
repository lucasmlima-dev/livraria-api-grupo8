# API de Gestão da Livraria — Grupo 8

Projeto da UC de Programação Back-End — Curso Técnico em Desenvolvimento de Sistemas  
Escola SENAI "Santo Paschoal Crepaldi" — Turma 1-2026-SESI_DEV_OC_1

## Integrantes
- Guilherme Tomaz Camara 1 — @guilhermetomaz11
- Heloisa Gigliott Soroca 2 — @heloisasoroca-ai
- Isabela Ferreira da Silva 3 — @isafrsilva
- Lucas Maciel de Lima 4 — @lucasmlima-dev

## Divisão de responsabilidades

| Bloco / Atividade | Integrante | O que ficou sob responsabilidade dele(a) |
|---|---|---|
| Bloco 1 | Isabela | Pessoas.js |
| Bloco 2 | Heloisa | Cliente.js |
| Bloco 3 | Lucas | Funcionario.js |
| Bloco 4 | Guilherme | testar.js |
| Consolidação (28/08) | Guilherme | LivroFisico.js |
| Consolidação (28/08) | Heloisa | LivroDigital.js |
| Consolidação (28/08) | Isabela | Carrinho.js |

> Esta tabela é atualizada **a cada bloco**, com rodízio de responsabilidades entre os participantes.

## Decisão sobre a Auditoria e Consolidação de Classes (28/08)

Após a auditoria entre o diagrama UML e o código em `src/models/`, o grupo tomou as seguintes decisões:

* **Classes a consolidar hoje (28/08):**
  - `LivroFisico.js`: Responsável **Guilherme**
  - `LivroDigital.js`: Responsável **Heloisa**
  - `Carrinho.js`: Responsável **Isabela**
* **Classes planejadas para o Bloco 3:**
  - `Pedido` e `ItemPedido`: Permanecem apenas no diagrama UML por enquanto, pois dependem da integração com o banco de dados.

## Refatoração (02/09)
Em 02/09, o projeto foi refatorado para padronizar a estrutura MVC/Services, distribuindo o fluxo de requisições, regras de negócio e rotas para as entidades de Categoria e Livro.

## Diagrama de Classes
![Diagrama de Classes](https://github.com/lucasmlima-dev/livraria-api-grupo8/blob/main/docs/diagrama-classes-v2.png?raw=true)  
* Link para visualização: [Diagrama de Classes v2](https://github.com/lucasmlima-dev/livraria-api-grupo8/blob/main/docs/diagrama-classes-v2.png)

## Estrutura do Projeto (MVC)
```text
livraria-api-grupo8/
├── docs/
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── categoriaController.js
│   │   └── livroController.js
│   ├── models/
│   │   ├── Administrador.js
│   │   ├── Carrinho.js
│   │   ├── Categoria.js
│   │   ├── Cliente.js
│   │   ├── Funcionario.js
│   │   ├── Livro.js
│   │   ├── LivroDigital.js
│   │   ├── LivroFisico.js
│   │   └── Pessoas.js
│   ├── routes/
│   │   ├── categoriaRoutes.js
│   │   └── livroRoutes.js
│   ├── services/
│   │   ├── categoriaService.js
│   │   └── livroService.js
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md