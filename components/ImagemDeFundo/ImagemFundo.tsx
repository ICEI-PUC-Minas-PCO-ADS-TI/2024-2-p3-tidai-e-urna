import { Image, VStack } from "native-base";
import React, { forwardRef } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Logo from "../../src/assets/calendar-dates 1 (1).png";

export interface ImagemFundoProps {
  children: React.ReactNode;
}

// Utilize forwardRef para permitir que refs sejam passadas
const ImagemFundo = forwardRef<ImageBackground, ImagemFundoProps>(({ children }, ref) => {
  return (
    <ImageBackground
      source={require("../../src/assets/backGround.png")}
      style={
        styles.backgroundImage

      }
      ref={ref} // Adicione a ref aqui
    >
      <VStack flex={1} alignItems={"center"} p={1}>
        <Image style={styles.logoImage} source={Logo} alt="Logo E-Urna" />
        {children}
      </VStack>
    </ImageBackground>
  );
});

// Exportando o componente
export default ImagemFundo;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoImage: {
    width: 130,
    height: 100,
  },
});
