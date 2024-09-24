import { Text, VStack } from "native-base";
import { Pressable } from "react-native";
import { Titulo } from "../Titulo/Titulo";

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

        flexDir={"row"}
        w="100%"
        alignItems={"center"}
        bg="white"
        justifyContent={"space-around"}
        p={2}
        borderBottomRadius="lg"
        borderBottomLeftRadius={40}
        borderBottomRightRadius={40}
        shadow={2}
      >
        <Titulo fontSize={25}>{nome}</Titulo>
        <Text fontSize={20} fontWeight={"bold"} color={"gold"}>
          {curso}
        </Text>
      </VStack>
    </Pressable>
  );
}
