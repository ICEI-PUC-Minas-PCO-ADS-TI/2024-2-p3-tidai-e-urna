import { Text, VStack } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";

export default function Perfil() {
  return (
    <ImageBackground
      source={require("../assets/backGround.png")}
      style={styles.backgroundImage}
    >
      <VStack>
        <Text>Pagina Perfil</Text>
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
