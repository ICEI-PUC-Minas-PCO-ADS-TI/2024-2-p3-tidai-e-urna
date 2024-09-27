import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { ScrollView, VStack } from "native-base";
import { StyleSheet } from "react-native";
import ApiGrafico from "../Componentes/APIGraficos/APIGraficos";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { pleitos } from "../utils/Eleicoes";

export default function Pesquisar() {
  return (
    <ScrollView>
      <ImagemFundo >
        <VStack>
          <Titulo textAlign={"center"} >Eleições</Titulo>
          {pleitos.map((pleito) => {
            return <ApiGrafico periodoCurso={`${pleito.periodoCurso} periodo ${pleito.nomeCurso}`} candidatos={pleito.candidatos}></ApiGrafico>
          })}
        </VStack>
      </ImagemFundo>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
