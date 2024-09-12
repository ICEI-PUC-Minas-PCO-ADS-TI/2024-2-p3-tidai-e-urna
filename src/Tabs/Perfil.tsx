import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { Text, VStack, Avatar, ScrollView } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { Titulo } from "../Componentes/Titulo/Titulo";

export default function Perfil() {
  return (
    <ImagemFundo>
      <ScrollView flex={1}>
        <VStack flex={1} alignItems={"center"} p={5}>
          <Titulo color="blue.500">Meu perfil</Titulo>
          <Avatar source={{ uri: "https://github.com/andreocunha.png" }} />
        </VStack>
      </ScrollView>
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
