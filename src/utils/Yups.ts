import * as Yup from "yup";

export const  yupCadastroCandidato = Yup.object().shape({
  numeroCandidato: Yup.string().required('Escolha um pleito'),
  nomeCandidato: Yup.string().required('Escolha um pleito')
});

export const yupCadastroPleito = Yup.object().shape({
  nomePleito:Yup.string().required("Campo obrigado"),
  periodo: Yup.string().required("Campo obrigatorio"),
  data_termino: Yup.string().required("Campo obrigatorio")
})