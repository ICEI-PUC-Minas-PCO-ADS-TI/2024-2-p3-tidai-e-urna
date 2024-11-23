import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import {
  ScrollView
} from "native-base";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import AvatarPerfil from "../Componentes/Avatar/AvatarPerfil";
import Dropdown1 from "../Componentes/Dropdowns/Dropdown1";
import { RootState } from "../redux/store";

const itemsMenuAluno = [
  {
    nome: "Editar perfil ",
    navigation: "EditarPerfil",
  },
  {
    nome: "Sair do App",
    navigation: "Login"
  }
];
const itemsMenuAdmin = [
  {
    nome: "Editar perfil ",
    navigation: "EditarPerfil",
  },
  {
    nome: "Criar Pleito",
    navigation: "CriarPleito",
  },
  {
    nome: "Cadastrar candidatos em um pleito",
    navigation: "CadastroCandidato",
  },
  {
    nome: "Editar Pleito",
    navigation: "EditarPleito"
  },
  ,
  {
    nome: "Sair do App",
    navigation: "Login"
  }
]

export default function Perfil() {
  const user = useSelector((state: RootState) => state.user.tipoUsuarioEnum)
  const usuario = useSelector((state: RootState) => state.user)
  console.log("USUARIO", usuario)

  return (
    <ImagemFundo>
      <ScrollView flex={1}>
        <AvatarPerfil nome={usuario.nomeUsuario} curso={usuario.curso ? usuario.curso : "ADMINISTRADOR"}></AvatarPerfil>
        <Dropdown1 nomeBotao="Menu" opcoesInputs={user === "ADMIN" ? itemsMenuAdmin : itemsMenuAluno}></Dropdown1>
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
