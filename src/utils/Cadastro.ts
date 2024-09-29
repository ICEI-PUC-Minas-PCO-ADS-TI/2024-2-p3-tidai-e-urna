const secoes = [
  {
    id: 1,
    titulo: "Cadastro",
    entradaTexto: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Digite seu nome completo",
        nameYup:"nomeUsuario"
      },
      {
        id: 2,
        label: "Sobrenome",
        placeholder: "Digite seu sobrenome",
        nameYup:"sobrenomeUsuario"
      }
    ],
    checkbox: [],
  },
  {
    id: 2,
    titulo: "Alguns dados..",
    entradaTexto: [
      {
        id: 1,
        label: "Senha",
        placeholder: "Digite uma senha",
        nameYup:"senhaUsuario"
      },
      {
        id: 2,
        label: "Confirme a senha",
        placeholder: "Digite a senha novamente",
        nameYup:"confirmarSenhaUsuario"
      },
    ],
    checkbox: [],
  },
  {
    id: 3,
    titulo: "Para finalizar",
    entradaTexto: [
      {
        id: 1,
        label: "Numero Matricula",
        placeholder: "Digite seu numero de matricula",
        nameYup:"numeroMatriculaPessoa"
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

