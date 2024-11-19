import { Avatar, Box, Divider, Heading, VStack } from "native-base";

const ImagemUsuario = require("../../assets/male_man_people_person_avatar_white_tone_icon_159363.png");
export default function AvatarPerfil({ nome, curso }: { nome: string, curso?: string }) {
  return (
    <VStack alignItems={"center"} w={"100%"}>
      <Avatar w={20} h={20} source={ImagemUsuario}></Avatar>
      <CardUsuario nome={nome} curso={curso}></CardUsuario>
    </VStack>
  );
}

const CardUsuario = ({ nome, curso }: { nome: string, curso?: string }) => {
  return <Box mb={5} mt={5} alignItems="center">
    <Box w="240">
      <Heading mx="3" alignItems="center" flexDirection="row">
        {nome}
      </Heading>
      <Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />
      <Heading mx="3" alignItems="center" flexDirection="row">
        {curso}
      </Heading>
    </Box>
  </Box>;
};
