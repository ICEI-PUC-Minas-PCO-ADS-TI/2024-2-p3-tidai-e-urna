import {
  Image,
  VStack,
  FormControl,
  Input,
  Box,
  Button,
  Link,
  Stack,
  Checkbox,
} from "native-base";
import Logo from "../assets/calendar-dates 1 (1).png";
import { StyleSheet, ImageBackground, Linking } from "react-native";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { useState } from "react";
import { Botao } from "../Componentes/Botao/Botao";
import { handlePress } from "./Login";

export function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);

  const secoes = [
    {
      id: 1,
      titulo: "Cadastro",
      entradaTexto: [
        {
          id: 1,
          label: "Nome",
          placeholder: "Digite seu nome completo",
        },
        {
          id: 2,
          label: "Sobrenome",
          placeholder: "Digite seu sobrenome",
        },
        {
          id: 3,
          label: "CPF",
          placeholder: "Digite seu CPF",
        },
      ],
      checkbox: [],
    },
    {
      id: 2,
      titulo: "Para finalizar",
      entradaTexto: [
        {
          id: 1,
          label: "Senha",
          placeholder: "Digite uma senha",
        },
        {
          id: 2,
          label: "Confirme a senha",
          placeholder: "Digite a senha novamente",
        },
      ],
      checkbox: [],
    },
    {
      id: 3,
      titulo: "Mais alguns dados sobre você",
      entradaTexto: [
        {
          id: 1,
          label: "Numero Matricula",
          placeholder: "Digite seu numero de matricula",
        },
      ],
      checkbox: [
        {
          id: 1,
          value: "Aluno",
        },
        {
          id: 2,
          value: "Administrador",
        },
      ],
    },
  ];

  function avanacarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSesao() {
    setNumSecao(numSecao - 1);
  }

  return (
    <ImageBackground
      source={require("../assets/backGround.png")}
      style={styles.backgroundImage}
    >
      <VStack flex={1} justifyContent="start" alignItems={""} p={4}>
        <Image style={styles.logoImage} source={Logo} alt="Logo E-Urna" />
        <VStack
          marginTop={2}
          flex={1}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Titulo>{secoes[numSecao].titulo}</Titulo>
          <Box padding={2} style={styles.box}>
            {secoes[numSecao].entradaTexto.map((entrada) => {
              return (
                <EntradaDeTexto
                  label={entrada.label}
                  placeholder={entrada.placeholder}
                  key={entrada.id}
                />
              );
            })}
            {numSecao == 2 &&
              secoes[2].checkbox.map((check) => {
                return (
                  <Checkbox key={check.id} value={check.value}>
                    {check.value}
                  </Checkbox>
                );
              })}
            <Box marginTop={3} alignItems={"center"} width={"100%"} padding={2}>
              <Stack space={4} width={"75%"}>
                <Botao
                  borderRadius={40}
                  _text={{ fontSize: "lg" }}
                  bg={"teal.500"}
                  onPress={() => avanacarSecao()}
                >
                  Próximo
                </Botao>
                {numSecao > 0 ? (
                  <Button
                    borderRadius={40}
                    _text={{ fontSize: "lg" }}
                    bg={"green.500"}
                    onPress={() => voltarSesao()}
                  >
                    Voltar
                  </Button>
                ) : (
                  <Button
                    borderRadius={40}
                    _text={{ fontSize: "lg" }}
                    bg={"green.500"}
                  >
                    Login
                  </Button>
                )}
              </Stack>
            </Box>
          </Box>
        </VStack>
      </VStack>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 350,
    borderRadius: 20,
    borderColor: "black", // Define a cor da borda
    borderWidth: 1, // Define a espessura da borda
    borderStyle: "solid", // Define o estilo da borda
    padding: 4,
  },
  logoImage: {
    width: 150,
    height: 50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
});
