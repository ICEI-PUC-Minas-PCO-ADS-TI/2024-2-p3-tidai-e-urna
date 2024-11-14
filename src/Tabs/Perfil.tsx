import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import {
  ScrollView
} from "native-base";
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
  {
    nome: "Editar Pleito",
    navigation: "EditarPleito"
  },
  {
    nome: "Visualizar relatórios",
    navigation: "BuscarRelatorio"
  }
];

export default function Perfil() {
  return (
    <ImagemFundo>
      <ScrollView flex={1}>
        <AvatarPerfil></AvatarPerfil>
        <Dropdown1 nomeBotao="Menu" opcoesInputs={itemsMenu}></Dropdown1>
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
