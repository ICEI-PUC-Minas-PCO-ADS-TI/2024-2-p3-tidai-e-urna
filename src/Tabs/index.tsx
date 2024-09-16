import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Principal from "./Principal";
import Perfil from "./Perfil";
import Pesquisar from "./Pesquisar";
import CadastroCandidato from "../pages/CadastroCandidato";
import EditarPerfil from "../pages/EditarPerfil";
import CriarPleito from "../pages/CriarPleito";

export type TabParamList = {
  Principal: undefined;
  Perfil: undefined;
  Pesquisar: undefined;
  CadastroCandidato: undefined;
  EditarPerfil: undefined;
  CriarPleito: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851",
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#ff",
};
const tabs = [
  {
    identificador: "Principal",
    name: "Principal",
    component: Principal,
    icon: "home",
  },
  {
    identificador: "Perfil",
    name: "Perfil",
    component: Perfil,
    icon: "calendar",
  },
  {
    identificador: "Pesquisar",
    name: "Pesquisar",
    component: Pesquisar,
    icon: "search",
  },
  {
    identificador: "CadastroCandidato",
    name: "null",
    component: CadastroCandidato,
  },
  {
    identificador: "EditarPerfil",
    name: "null",
    component: EditarPerfil,
  },
  {
    identificador: "CriarPleito",
    name: "null",
    component: CriarPleito,
  },
];

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.identificador}
          name={tab.identificador as keyof TabParamList}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarButton: tab.name === "null" ? () => null : undefined,
            tabBarIcon: tab.icon
              ? ({ color, size }) => (
                  <Ionicons name={tab.icon} color={color} size={size} />
                )
              : undefined,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
