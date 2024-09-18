import { StyleSheet, ImageBackground, Linking } from "react-native";
import { VStack, Text, ScrollView } from "native-base";
import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { CardEleicao } from "../Componentes/CardaoEleição/CardaoEleicao";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { pleitos } from "../utils/Eleicoes";

export default function Principal() {
  return (
    <ScrollView>
      <ImagemFundo>
        <VStack w={"100%"} alignItems={"center"}>
          <Titulo
            w={"100%"}
            textAlign={"center"}
            bg={"indigo.400"}
            fontSize={30}
          >
            Eleições
          </Titulo>
          {pleitos &&
            pleitos.map((pleito) => (
              <CardEleicao
                id={pleito.id}
                nomeCurso={pleito.nomeCurso}
                periodoCurso={pleito.periodoCurso}
              ></CardEleicao>
            ))}
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
