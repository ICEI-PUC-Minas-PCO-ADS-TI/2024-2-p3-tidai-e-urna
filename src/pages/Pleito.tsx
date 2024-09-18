import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { VStack } from "native-base";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../router/TypesRoutes";
import { pleitos } from "../utils/Eleicoes";
import { CardEleicao } from "../Componentes/CardaoEleição/CardaoEleicao";
import { CardCandidatos } from "../Componentes/CardaCandidato/CardCandidato";

type PleitoRouteProp = RouteProp<RootStackParamList, "Pleito">;

export default function Pleito() {
  const route = useRoute<PleitoRouteProp>();
  const { id } = route.params;

  const pleito = pleitos.filter((pleito) => pleito.id == id);

  return (
    <ImagemFundo>
      <Titulo w={"100%"} bg={"teal.800"} textAlign={"center"} fontSize={30}>
        Candidatos
      </Titulo>
      {pleito.map((candidatos) =>
        candidatos.candidatos.map((candidato) => (
          <CardCandidatos
            id={candidato.id}
            nome={candidato.nome}
            curso={candidato.curso}
          ></CardCandidatos>
        ))
      )}
    </ImagemFundo>
  );
}
