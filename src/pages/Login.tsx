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
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, Linking } from "react-native";
import { background } from "native-base/lib/typescript/theme/styled-system";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Botao } from "../Componentes/Botao/Botao";
export const handlePress = () => {
  Linking.openURL("https://www.twitch.tv/");
};
export function Login() {
  return (
    <ImageBackground
      source={require("../assets/backGround.png")}
      style={styles.backgroundImage}
    >
      <VStack flex={1} justifyContent="start" alignItems={""} p={4}>
        <Image style={styles.logoImage} source={Logo} alt="Logo E-Urna" />
        <VStack
          marginTop={10}
          flex={1}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <Titulo>Login</Titulo>
          <Box padding={2} style={styles.box}>
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
              _text={{ color: "coolGray.700", textDecoration: "none" }}
              marginTop={5}
              justifyContent={"center"}
            >
              Esqueceu sua senha?
            </Link>
            <Box marginTop={3} alignItems={"center"} width={"100%"} padding={2}>
              <Stack space={4} width={"75%"}>
                <Botao
                  borderRadius={40}
                  _text={{ fontSize: "lg" }}
                  bg={"teal.500"}
                >
                  Acessar
                </Botao>
                <Botao
                  borderRadius={40}
                  _text={{ fontSize: "lg" }}
                  bg={"green.500"}
                >
                  Cadastrar
                </Botao>
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
