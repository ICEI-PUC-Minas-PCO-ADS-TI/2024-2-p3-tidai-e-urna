import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { useNavigation } from "expo-router";
import { ScrollView, Text } from "native-base";
import { StyleSheet } from "react-native";
import AvatarPerfil from "../Componentes/Avatar/AvatarPerfil";
import Dropdown1 from "../Componentes/Dropdowns/Dropdown1";

const itemsMenu = [
  {
    nome: "Criar Pleito",
    navigation: "CriarPleito",
  },
  {
    nome: "Editar perfil ",
    navigation: "EditarPerfil",
  },
  {
    nome: "Cadastrar candidatos em um pleito",
    navigation: "CadastroCandidato",
  },
];

export default function Perfil() {
  const navigation = useNavigation();

  const trocarTela = () => {
    navigation.navigate("ApiGrafico");
  };
  return (
    <ImagemFundo>
      <ScrollView flex={1}>
        <AvatarPerfil></AvatarPerfil>
        <Dropdown1 nomeBotao="Menu" opcoesInputs={itemsMenu}></Dropdown1>
        <Text onPress={trocarTela}>Acompanhar eleições ativas</Text>
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
