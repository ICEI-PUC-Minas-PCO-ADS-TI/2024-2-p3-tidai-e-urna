import { useNavigation } from "@react-navigation/native";
import { Avatar, Text, VStack } from "native-base";
import { Pressable } from "react-native";
import { Titulo } from "../Titulo/Titulo";

interface CardaoEleicaoProps {
  nomeCurso?: string;
  periodoCurso?: string;
  id: number;
  quantidadeCandidatos: number;
}

const imagemPathPuc = require("../../assets/puc.jpg");
export function CardEleicao({
  nomeCurso,
  periodoCurso,
  id,
  quantidadeCandidatos,
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
        bg={"#04639e"}
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
        <Text fontSize={20} fontWeight={"bold"} color={"white"}>
          {quantidadeCandidatos}
        </Text>
      </VStack>
    </Pressable>
  );
}
