import { Text, VStack } from "native-base";
import BoxCampForm from "../BoxCampForm/BoxCampForm";
import { Titulo } from "../Titulo/Titulo";
interface RelatorioProps {
  dataFinalizada: string;
  pleito: string
  candidatos: {
    nomeCandidato: string;
    votos: number;
  }[];
  votoNulo: number;
}

interface Pleito {
  relatorio: RelatorioProps
}

export default function Relatorio({ relatorio }: Pleito) {
  return (
    <VStack>
      <Titulo>Relatório</Titulo>
      <BoxCampForm>
        <Text>{relatorio.pleito}</Text>
        <Text>Data de finalização: {relatorio.dataFinalizada}</Text>
        {relatorio.candidatos && relatorio.candidatos.map(candidato => (
          <>
            <Text>Candidato:{candidato.nomeCandidato}</Text>
            <Text>Votos:{candidato.votos}</Text>
          </>
        ))}
      </BoxCampForm>
    </VStack>
  )
}