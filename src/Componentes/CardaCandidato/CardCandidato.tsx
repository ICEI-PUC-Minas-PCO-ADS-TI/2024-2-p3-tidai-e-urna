import { Text, Avatar, VStack, Center, Box, Stack } from "native-base";
import { Titulo } from "../Titulo/Titulo";
import { useState } from "react";
import { Pressable } from "react-native";
import { Props, TabsScreenNavigationProp } from "@/src/router/TypesRoutes";
import { useNavigation } from "@react-navigation/native";

interface CardCandidatoProps {
  nome?: string;
  curso?: string;
  id: number;
}

const imagemPathPuc = require("../../assets/puc.jpg");
export function CardCandidatos({ nome, curso, id }: CardCandidatoProps) {
  return (
    <Pressable>
      <VStack
        marginTop={5}
        flexDir={"row"}
        w="100%"
        h={70}
        alignItems={"center"}
        bg="contrastThreshold"
        justifyContent={"space-around"}
        p={2}
        borderBottomRadius="lg"
        borderBottomLeftRadius={40}
        borderBottomRightRadius={40}
        shadow={2}
      >
        <Titulo fontSize={25}>{nome}</Titulo>
        <Text fontSize={20} fontWeight={"bold"} color={"white"}>
          {curso}
        </Text>
      </VStack>
    </Pressable>
  );
}
