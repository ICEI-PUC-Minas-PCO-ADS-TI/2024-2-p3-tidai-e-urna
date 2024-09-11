const secoes = [
  {
    id: 1,
    titulo: "Cadastro",
    entradaTexto: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Digite seu nome completo",
      },
      {
        id: 2,
        label: "Sobrenome",
        placeholder: "Digite seu sobrenome",
      },
      {
        id: 3,
        label: "CPF",
        placeholder: "Digite seu CPF",
      },
    ],
    checkbox: [],
  },
  {
    id: 2,
    titulo: "Para finalizar",
    entradaTexto: [
      {
        id: 1,
        label: "Senha",
        placeholder: "Digite uma senha",
      },
      {
        id: 2,
        label: "Confirme a senha",
        placeholder: "Digite a senha novamente",
      },
    ],
    checkbox: [],
  },
  {
    id: 3,
    titulo: "Alguns dados",
    entradaTexto: [
      {
        id: 1,
        label: "Numero Matricula",
        placeholder: "Digite seu numero de matricula",
      },
    ],
    checkbox: [
      {
        id: 1,
        value: "Aluno",
      },
      {
        id: 2,
        value: "Administrador",
      },
    ],
  },
];

export { secoes };