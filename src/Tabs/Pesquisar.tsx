import { StyleSheet, ImageBackground, Linking } from "react-native";
import { VStack, Text, Input } from "native-base";
import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export default function Pesquisar() {
  return (
    <ImagemFundo>
      <EntradaDeTexto placeholder="Pesquise um Pleito"></EntradaDeTexto>
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
