import { StyleSheet, ImageBackground, Linking } from "react-native";
import { VStack, Text } from "native-base";
export default function Pesquisar() {
  return (
    <ImageBackground
      source={require("../assets/backGround.png")}
      style={styles.backgroundImage}
    >
      <VStack>
        <Text>Pagina de Pesquisar</Text>
      </VStack>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
