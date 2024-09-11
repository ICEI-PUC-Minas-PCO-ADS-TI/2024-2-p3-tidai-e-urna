import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Principal from "./Principal";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="home" />,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="calendar" />,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
