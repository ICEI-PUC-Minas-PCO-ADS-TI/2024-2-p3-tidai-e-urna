import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import {
  Text,
  VStack,
  Avatar,
  ScrollView,
  Divider,
  Heading,
  Input,
  Icon,
} from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { Titulo } from "../Componentes/Titulo/Titulo";
import Dropdown1 from "../Componentes/Dropdowns/Dropdown1";
import AvatarPerfil from "../Componentes/Avatar/AvatarPerfil";

const itemsMenu = [
  {
    nome: "Criar Pleito",
  },
  {
    nome: "Editar perfil ",
  },
  {
    nome: "Cadastrar candidatos em um pleito",
  },
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
