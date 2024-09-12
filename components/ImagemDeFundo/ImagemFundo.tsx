import { Image, VStack } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import Logo from "../../src/assets/calendar-dates 1 (1).png";

export interface ImagemFundoProps {
  children: React.ReactNode;
}
export default function ImagemFundo({ children }: ImagemFundoProps) {
  return (
    <ImageBackground
      source={require("../../src/assets/backGround.png")}
      style={styles.backgroundImage}
    >
      <VStack flex={1} alignItems={""} p={1}>
        <Image style={styles.logoImage} source={Logo} alt="Logo E-Urna" />
        {children}
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
  logoImage: {
    width: 130,
    height: 100,
  },
});
