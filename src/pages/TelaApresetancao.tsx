import { useNavigation } from "expo-router";
import { Box, VStack } from "native-base";
import React, { useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Text as SvgText } from "react-native-svg";





export default function TelaApresetacao() {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate("Login")
  }, 3000);
  return (
    <VStack w={"100%"} justifyContent={"center"} alignContent={"center"} background={"dark.300"} height={"100%"}>
      <Box w={"100%"} alignItems={"center"}>
        <App></App>
      </Box>
    </VStack>
  );
};




const App = () => {
  // Usando Animated.Value diretamente
  const translateX = new Animated.Value(-400); // Inicialmente fora da tela

  useEffect(() => {
    // Inicia a animação para mover para o centro
    Animated.timing(translateX, {
      toValue: 0, // Vai para o centro da tela
      duration: 2000, // Duração da animação
      useNativeDriver: true, // Usar o driver nativo para performance
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Aplicando a animação na propriedade transform */}
      <Animated.View style={[styles.box, { transform: [{ translateX }] }]}>
        <>
          <Svg height="100" width="300">
            <Defs>
              <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="30%" stopColor="#1E1E1E" stopOpacity="1" />
                <Stop offset="50%" stopColor="#85CDC2" stopOpacity="1" />
                <Stop offset="100%" stopColor="#85CDC2" stopOpacity="1" />
              </LinearGradient>
            </Defs>
            <SvgText
              fill="url(#grad)" // Usa o gradiente definido
              fontSize="60"
              fontWeight="bold"
              x="150"
              y="50"
              textAnchor="middle"
            >
              E-Urna
            </SvgText>
          </Svg>
        </>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  box: {
    position: 'absolute',
    right: -150, // Inicialmente fora da tela
    top: '50%',
  },
});




