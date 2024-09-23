import { pleitos } from "@/src/utils/Eleicoes";

interface Candidato {
  id: number;
  nome: string;
  curso: string;
}
export const PleitoId = (id: number) => {
  let candidatos = pleitos.filter(pleito => (
    pleito.id == id
  ))

  let atribuirArray: string[] = []

  candidatos.forEach(candidato => {
    atribuirArray.push(...candidato.candidatos.map(c => c.nome))
  })

  return atribuirArray
}