import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login?: undefined; // Defina as telas e parâmetros que você possui no seu stack
  Cadastro?: undefined; // Defina as telas e parâmetros que você possui no seu stack
  Tabs?: undefined;
};
type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login",
  "Cadastro"
>;
type TabsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Tabs"
>;
export type Props = {
  navigation: LoginScreenNavigationProp;
};

export type Props2 = {
  navigation: TabsScreenNavigationProp;
};
