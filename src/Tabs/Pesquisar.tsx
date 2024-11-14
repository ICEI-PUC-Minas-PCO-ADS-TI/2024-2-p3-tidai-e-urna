import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { Box, Button, ScrollView, VStack } from "native-base";
import { StyleSheet } from "react-native";
import ApiGrafico from "../Componentes/APIGraficos/APIGraficos";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { pleitos } from "../utils/Eleicoes";

export default function Pesquisar() {
  return (
    <ScrollView>
      <ImagemFundo >
        <VStack>
          <Titulo textAlign={"center"} >Eleições</Titulo>
          <EntradaDeTexto label="" placeholder="Procurar eleição" width="100%" ></EntradaDeTexto>
          <Box mt={2} flexDir={"row"} w={"100%"} justifyContent={"center"}><Button _text={{ color: "black" }} bg={"amber.300"} w={"50%"}>Pesquisar</Button></Box>
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
