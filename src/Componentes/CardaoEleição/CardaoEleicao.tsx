import { useNavigation } from "@react-navigation/native";
import { Avatar, Box, Text, VStack } from "native-base";
import { Pressable } from "react-native";
import { Titulo } from "../Titulo/Titulo";

interface CardaoEleicaoProps {
  nomeCurso?: string;
  periodoCurso?: string;
  id: number;
  quantidade: number;
  dataVencimento: string;
  status: string;
  disabled: boolean;
  vencedor: string
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
export function Example({
  nomeCurso,
  periodoCurso,
  id,
  quantidade,
  dataVencimento,
  status,
  disabled,
  vencedor
}: CardaoEleicaoProps) {
  const navigation = useNavigation();

  function goToPleito(id: string) {
    navigation.navigate("Pleito", { id });
  }
  return (
    <Pressable disabled={disabled} onPress={() => goToPleito(id)}>
      <Box borderBottomLeftRadius={40} bg={"blue.400"} p={3} flexDir={"row"} w={"100%"} mt={2}>
        <Box w={"70%"} >
          <Text fontSize={20} color={"white"}>{nomeCurso}</Text>
          <Text>{periodoCurso}</Text>
          {!disabled ? <Text>{"Numero de candidatos candidatos " + " " + quantidade}</Text> : <Text>{"Vencedor: " + vencedor}</Text>}
          <Text>{"Data vencimento:" + " " + dataVencimento}</Text>
          <Text>{"Situação" + " " + status}</Text>
        </Box>
        <Box w={"30%"} alignItems={"flex-end"}>< Avatar w={20} h={20} source={imagemPathPuc}></Avatar></Box>
      </Box>


    </Pressable >
  )
}