import { StyleSheet, ImageBackground, Linking } from "react-native";
import { VStack, Text, Input, Icon, Heading } from "native-base";
import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Ionicons } from "@expo/vector-icons";
export default function Pesquisar() {
  return (
    <ImagemFundo>
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Cupertino</Heading>
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          py="1"
          px="2"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="search" />}
            />
          }
        />
      </VStack>
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
