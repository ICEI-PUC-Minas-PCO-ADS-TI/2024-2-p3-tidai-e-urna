import { Avatar, VStack } from "native-base";
import { Titulo } from "../Titulo/Titulo";

const ImagemUsuario = require("../../assets/male_man_people_person_avatar_white_tone_icon_159363.png");
export default function AvatarPerfil() {
  return (
    <VStack alignItems={"center"} w={"100%"}>
      <Avatar w={20} h={20} source={ImagemUsuario}></Avatar>
      <Titulo>Nome usuário</Titulo>
    </VStack>
  );
}
