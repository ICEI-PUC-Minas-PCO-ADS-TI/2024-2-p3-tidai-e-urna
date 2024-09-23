import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { CardCandidatos } from "../Componentes/CardaCandidato/CardCandidato";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { RootStackParamList } from "../router/TypesRoutes";
import { pleitos } from "../utils/Eleicoes";

type PleitoRouteProp = RouteProp<RootStackParamList, "Pleito">;

export default function Pleito() {
  const route = useRoute<PleitoRouteProp>();
  const [selectCandidato, setSelectCandidato] = useState<number | null>(null)
  const { id } = route.params;
  const selecionadoCandidato = (candidatoId: number) => { }
  const pleito = pleitos.filter((pleito) => pleito.id == id);

  return (
    <ImagemFundo>
      <Titulo w={"100%"} bg={"teal.800"} textAlign={"center"} fontSize={30}>
        Candidatos
      </Titulo>
      {pleito.map((candidatos) =>
        candidatos.candidatos.map((candidato) => (
          <TouchableOpacity>
            <CardCandidatos
              id={candidato.id}
              nome={candidato.nome}
              curso={candidato.curso}
            ></CardCandidatos>
          </TouchableOpacity>
        ))
      )}
    </ImagemFundo>
  );
}
