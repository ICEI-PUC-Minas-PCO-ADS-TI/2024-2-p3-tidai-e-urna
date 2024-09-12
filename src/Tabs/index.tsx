import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Principal from "./Principal";
import Perfil from "./Perfil";
import Pesquisar from "./Pesquisar";
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851",
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#ff",
};
const tabs = [
  {
    name: "Principal",
    component: Principal,
    icon: "home",
  },
  {
    name: "Perfil",
    component: Perfil,
    icon: "calendar",
  },
  {
    name: "Pesquisar",
    component: Pesquisar,
    icon: "search",
  },
];
export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
