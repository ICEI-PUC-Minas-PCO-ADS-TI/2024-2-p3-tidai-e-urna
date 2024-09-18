import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { Box, VStack } from "native-base";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { StyleSheet } from "react-native";
import { Botao } from "../Componentes/Botao/Botao";

export default function EditarPerfil() {
  return (
    <ImagemFundo>
      <VStack alignItems={"center"} justifyContent={"center"}>
        <Titulo>Editar dados perfil</Titulo>
        <Box padding={5} style={styles.box}>
          <EntradaDeTexto
            label="E-mail"
            placeholder="Digite um novo E-mail"
          ></EntradaDeTexto>
          <EntradaDeTexto
            label="Nova senha"
            placeholder="Digite uma nova senha"
            segureTextEntry={true}
          ></EntradaDeTexto>
          <Box alignItems={"center"} w={"100%"}>
            <Botao
              w={"80%"}
              marginTop={10}
              borderRadius={40}
              _text={{ fontSize: 20 }}
              bg={"green.500"}
            >
              Enviar
            </Botao>
            <Botao
              w={"85%"}
              marginTop={5}
              borderRadius={40}
              _text={{ fontSize: 20 }}
              bg={"teal.500"}
            >
              Cancelar
            </Botao>
          </Box>
        </Box>
      </VStack>
    </ImagemFundo>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 350,
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 4,
  },
});
