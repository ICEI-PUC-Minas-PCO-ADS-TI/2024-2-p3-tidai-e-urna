import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { useNavigation } from "expo-router";
import MenssagemSucesso from "../Componentes/MensagemSucesso/MenssagemSucesso";

export default function CadastroSucess() {
  const navigation = useNavigation()

  setTimeout(() => {
    navigation.navigate("Login")
  }, 4000);
  return (
    <ImagemFundo>
      <MenssagemSucesso menssagem="Cadastro feito com sucesso"></MenssagemSucesso>
    </ImagemFundo>
  )
}