import {
  Image,
  VStack,
  Text,
  FormControl,
  Input,
  Box,
  Button,
  Link,
  Stack,
} from "native-base";
import Logo from "../assets/calendar-dates 1 (1).png";
import { StyleSheet, ImageBackground, Linking } from "react-native";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Botao } from "../Componentes/Botao/Botao";
import { Props, Props2 } from "../router/TypesRoutes";

export function Login({ navigation }: Props2) {
  return (
    <ImageBackground
      source={require("../assets/backGround.png")}
      style={styles.backgroundImage}
    >
      <VStack flex={1} alignItems={""} p={1}>
        <Image style={styles.logoImage} source={Logo} alt="Logo E-Urna" />
        <VStack
          marginTop={10}
          flex={1}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Box alignItems={"center"} justifyContent={"center"} height={"85%"}>
            <Titulo>Login</Titulo>
            <Box padding={5} style={styles.box}>
              <EntradaDeTexto
                placeholder="Insira seu identificador"
                label="Matricula/Pessoa"
              />
              <EntradaDeTexto
                placeholder="Insira sua senha"
                segureTextEntry={true}
                label="Senha"
              />
              <Link
                href="https://www.twitch.tv/"
                _text={{ color: "white", textDecoration: "none" }}
                marginTop={5}
                justifyContent={"center"}
              >
                Esqueceu sua senha?
              </Link>
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
                    onPress={() => navigation.navigate("Tabs")}
                  >
                    Acessar
                  </Botao>
                  <Botao
                    borderRadius={40}
                    _text={{ fontSize: "lg" }}
                    bg={"green.500"}
                    onPress={() => navigation.navigate("Cadastro")}
                  >
                    Cadastrar
                  </Botao>
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
