import { logout } from "@/src/redux/slices/userSlice";
import { AppDispatch } from "@/src/redux/store";
import { TabParamList } from "@/src/Tabs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  Actionsheet,
  Box,
  Button,
  Center,
  Text,
  useDisclose,
} from "native-base";
import { useDispatch } from "react-redux";

interface DropdownPros {
  nomeBotao?: string;
  opcoesInputs: { nome: string; navigation: keyof TabParamList }[];
}
export default function Dropdown({ nomeBotao, opcoesInputs }: DropdownPros) {
  const dispatch = useDispatch<AppDispatch>();
  const navigaiton = useNavigation()
  const rotasNavigation = useNavigation<NavigationProp<TabParamList>>();
  const { isOpen, onOpen, onClose } = useDisclose();

  const modificarPage = (router: string) => {
    if (router === "Login") {
      deslogar()
      navigaiton.navigate(router)
    } else {
      rotasNavigation.navigate(router)
    }

  }

  const deslogar = () => {
    dispatch(logout())
  }
  return (
    <Center>
      <Button bg={"darkBlue.800"} onPress={onOpen}>
        {nomeBotao}
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content
          _dragIndicator={{
            bg: "cyan.500",
          }}
        >
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Opções
            </Text>
          </Box>
          {opcoesInputs &&
            opcoesInputs.map((opcao) => (
              <Actionsheet.Item
                onPress={() => modificarPage(opcao.navigation)}
              >
                <Text>{opcao.nome}</Text>
              </Actionsheet.Item>
            ))}
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
