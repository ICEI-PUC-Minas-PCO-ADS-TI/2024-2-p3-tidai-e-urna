import { StyleSheet, ImageBackground, Linking } from "react-native";
import { VStack, Text } from "native-base";
import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
export default function Pesquisar() {
  return (
    <ImagemFundo>
      <Text>Pagina de Pesquisar</Text>
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
