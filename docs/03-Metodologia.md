# Metodologia

O desenvolvimento do sistema de urna eletrônica seguirá a metodologia ágil Scrum. A equipe será organizada em sprints de duas semanas, durante os quais será desenvolvido um conjunto de funcionalidades previamente definidas.

Daily Stand-up: Reuniões diárias de 15 minutos para acompanhar o progresso das tarefas e discutir impedimentos. Sprint Planning: Reunião para definir as tarefas e objetivos da próxima sprint. Sprint Review: Reunião para demonstrar as funcionalidades desenvolvidas durante a sprint. Sprint Retrospective: Reunião para discutir o que funcionou bem e o que pode ser melhorado no próximo ciclo.

## Relação de ambientes de trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas. A relação dos ambientes com seus respectivos propósitos deverá ser apresentada em uma tabela que especifique e detalhe Ambiente, Plataforma e Link de Acesso. Defina também os ambientes e frameworks que serão utilizados no desenvolvimento de aplicações móveis.

## Controle de versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [GitHub](https://github.com) foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gestão de tags, merges, commits e branches é realizada. Discuta também como a gestão de issues foi feita.

> **Links úteis**:
>
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e GitHub](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Planejamento do projeto

### Divisão de papéis

A equipe está organizada da seguinte maneira:

    • Scrum Master: Alexandre
    • Equipe de Desenvolvimento
        ◦ Rafael
        ◦ Rhillary
        ◦ Wagner
    • Equipe de Design
        ◦ Rafael

#### Sprint 1

- _Scrum master_: AlunaX
- Protótipos: AlunoY
- Testes: AlunoK
- Documentação: AlunaZ

#### Sprint 2

- _Scrum master_: AlunaY
- Desenvolvedor _front-end_: AlunoX
- Desenvolvedor _back-end_: AlunoK
- Testes: AlunaZ

### Quadro de tarefas

> Apresente a divisão de tarefas entre os membros do grupo e o acompanhamento da execução, conforme o exemplo abaixo.

#### Sprint 1

Atualizado em: 21/04/2024

| Responsável | Tarefa/Requisito     | Iniciado em |   Prazo    | Status | Terminado em |
| :---------- | :------------------- | :---------: | :--------: | :----: | :----------: |
| AlunaX      | Introdução           | 01/02/2024  | 07/02/2024 |   ✔️   |  05/02/2024  |
| AlunaZ      | Objetivos            | 03/02/2024  | 10/02/2024 |   📝   |              |
| AlunoY      | Histórias de usuário | 01/01/2024  | 07/01/2005 |   ⌛   |              |
| AlunoK      | Personas 1           | 01/01/2024  | 12/02/2005 |   ❌   |              |

#### Sprint 2

Atualizado em: 21/04/2024

| Responsável | Tarefa/Requisito | Iniciado em |   Prazo    | Status | Terminado em |
| :---------- | :--------------- | :---------: | :--------: | :----: | :----------: |
| AlunaX      | Página inicial   | 01/02/2024  | 07/03/2024 |   ✔️   |  05/02/2024  |
| AlunaZ      | CSS unificado    | 03/02/2024  | 10/03/2024 |   📝   |              |
| AlunoY      | Página de login  | 01/02/2024  | 07/03/2024 |   ⌛   |              |
| AlunoK      | Script de login  | 01/01/2024  | 12/03/2024 |   ❌   |              |

Legenda:

- ✔️: terminado
- 📝: em execução
- ⌛: atrasado
- ❌: não iniciado

> **Links úteis**:
>
> - [11 passos essenciais para implantar Scrum no seu projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

O grupo de desenvolvimento adotou a metodologia ágil Scrum para gerenciar o projeto de desenvolvimento de um sistema de votação digital para a PUC Minas. A metodologia foi escolhida devido à sua flexibilidade, foco na entrega contínua de valor e na colaboração eficiente entre os membros da equipe. Abaixo estão os detalhes da implementação do Scrum e o uso das ferramentas de gerenciamento de projeto disponíveis no GitHub.

O grupo faz uso extensivo do recurso de gerenciamento de projetos oferecido pelo GitHub, especificamente o GitHub Projects. Esta ferramenta permite ao grupo acompanhar o andamento do projeto, a execução das tarefas, e o status de desenvolvimento da solução de forma visual e integrada ao repositório de código.

->Um quadro Kanban foi criado no GitHub Projects para visualizar o fluxo de trabalho
->Cada user story derivada dos requisitos do sistema de votação digital foi adicionada como um issue no GitHub
->O projeto é dividido em sprints de duas semanas. Cada sprint começa com uma reunião de planejamento (Sprint Planning) onde o grupo seleciona as histórias do usuário do Product Backlog para mover para a coluna To Do.
->Daily Stand-ups realizados diariamente via reuniões de vídeo rápidas (15 minutos) para sincronizar o progresso, identificar impedimentos, e planejar o trabalho do dia.

### Ferramentas

Liste todas as ferramentas que foram empregadas no projeto, justificando a escolha delas, sempre que possível.

Exemplo: os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| Ambiente                    | Plataforma         | Link de acesso |
| --------------------------- | ------------------ | -------------- |
| Repositório de código fonte | GitHub             | http://....    |
| Documentos do projeto       | GitHub             | http://....    |
| Projeto de interface        | Figma              | http://....    |
| Gerenciamento do projeto    | GitHub Projects    | http://....    |
| Hospedagem                  | Vercel             | http://....    |
| Editor de código-fonte      | Visual Studio Code | http://....    |
| Testes de APIS              | Postman            | http://....    |
