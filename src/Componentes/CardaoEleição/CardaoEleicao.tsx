import { Text, Avatar, VStack, Center, Box, Stack } from "native-base";
import { Titulo } from "../Titulo/Titulo";

export function CardEleicao() {
  return (
    <VStack w="100%" bg="blueGray.500" p={2} borderBottomRadius="lg" shadow={6}>
      <Stack alignItems={"center"} textAlign={"center"} flexDir={"row"}>
        <Titulo fontSize={20}>Curso:</Titulo>
        <Text>ADS</Text>
      </Stack>
      <Stack
        space={10}
        alignItems={"center"}
        textAlign={"center"}
        bg={"white"}
        flexDir={"row"}
      >
        <Titulo fontSize={20}>Periodo:</Titulo>
        <Text marginLeft={1} fontSize={20}>
          3
        </Text>
      </Stack>

      <Text></Text>
    </VStack>
  );
}
