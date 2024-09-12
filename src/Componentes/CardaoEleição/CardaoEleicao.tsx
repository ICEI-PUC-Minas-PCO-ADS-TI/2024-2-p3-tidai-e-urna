import { Text, Avatar, VStack, Center, Box, Stack } from "native-base";
import { Titulo } from "../Titulo/Titulo";
import LogoPuc from "../../assets/puc.jpg";

const imagemPathPuc = require("../../assets/puc.jpg");
export function CardEleicao() {
  return (
    <VStack
      flexDir={"row"}
      w="100%"
      alignItems={"center"}
      bg="blueGray.500"
      p={2}
      borderBottomRadius="lg"
      shadow={6}
    >
      <Stack bg="white" justifyContent={"center"} alignItems={"center"} w={50}>
        <Avatar source={imagemPathPuc}></Avatar>
      </Stack>
      <Stack marginLeft={2} alignItems={"center"} w={"100%"}>
        <Text fontSize={20} fontWeight={"bold"} color={"white"}>
          Terceiro Periodo
        </Text>
      </Stack>
    </VStack>
  );
}
