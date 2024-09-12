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
export type Props = {
  navigation: LoginScreenNavigationProp;
};

type TabsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type Props2 = {
  navigation: TabsScreenNavigationProp;
};
