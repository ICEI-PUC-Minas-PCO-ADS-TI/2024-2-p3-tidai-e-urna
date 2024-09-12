import { StyleSheet, ImageBackground, Linking } from "react-native";
import { VStack, Text } from "native-base";
import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { CardEleicao } from "../Componentes/CardaoEleição/CardaoEleicao";
export default function Principal() {
  return (
    <ImagemFundo>
      <Text>Eleições</Text>
      <CardEleicao></CardEleicao>
    </ImagemFundo>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
