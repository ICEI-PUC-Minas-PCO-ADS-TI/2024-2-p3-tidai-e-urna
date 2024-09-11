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
  ScrollView,
} from "native-base";
import Logo from "../assets/calendar-dates 1 (1).png";
import { StyleSheet, ImageBackground, Linking } from "react-native";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { useState } from "react";
import { Botao } from "../Componentes/Botao/Botao";
import { secoes } from "../utils/Cadastro";
import { Props } from "../router/TypesRoutes";

export function Cadastro({ navigation }: Props) {
  const [numSecao, setNumSecao] = useState(0);

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
          <Box alignItems={"center"} justifyContent={"center"} height={"90%"}>
            <Titulo>{secoes[numSecao].titulo}</Titulo>
            <Box padding={5} style={styles.box}>
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
              <Box
                marginTop={3}
                alignItems={"center"}
                width={"100%"}
                padding={2}
              >
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
                      onPress={() => navigation.navigate("Login")}
                    >
                      Login
                    </Button>
                  )}
                </Stack>
              </Box>
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
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 4,
  },
  logoImage: {
    width: 130,
    height: 100,
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
