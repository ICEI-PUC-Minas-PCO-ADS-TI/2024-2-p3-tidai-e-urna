import { Text, Avatar, VStack, Center, Box, Stack } from "native-base";
import { Titulo } from "../Titulo/Titulo";
import { useState } from "react";
import { Pressable } from "react-native";
import { Props, TabsScreenNavigationProp } from "@/src/router/TypesRoutes";
import { useNavigation } from "@react-navigation/native";

interface CardaoEleicaoProps {
  nomeCurso?: string;
  periodoCurso?: string;
  id: number;
}

const imagemPathPuc = require("../../assets/puc.jpg");
export function CardEleicao({
  nomeCurso,
  periodoCurso,
  id,
}: CardaoEleicaoProps) {
  const navigation = useNavigation();

  function goToPleito(id: string) {
    navigation.navigate("Pleito", { id });
  }

  return (
    <Pressable onPress={() => goToPleito(id)}>
      <VStack
        marginTop={5}
        flexDir={"row"}
        w="100%"
        alignItems={"center"}
        bg={"teal.800"}
        justifyContent={"space-around"}
        p={2}
        borderBottomRadius="lg"
        borderBottomLeftRadius={40}
        shadow={6}
      >
        <Avatar source={imagemPathPuc}></Avatar>
        <Titulo fontSize={25}>{nomeCurso}</Titulo>
        <Text fontSize={20} fontWeight={"bold"} color={"white"}>
          {periodoCurso} Periodo
        </Text>
      </VStack>
    </Pressable>
  );
}
