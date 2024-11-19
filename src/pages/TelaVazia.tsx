import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { useNavigation } from "expo-router";
import MenssagemSucesso from "../Componentes/MensagemSucesso/MenssagemSucesso";

export default function TelaVazia({ mensagem }: { mensagem: string }) {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate("Perfil")
  }, 5000);
  return (
    <ImagemFundo>
      <MenssagemSucesso menssagem={"Sucesso!"}></MenssagemSucesso>
    </ImagemFundo>
  )
}