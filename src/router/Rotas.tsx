import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "../Tabs";
import { Cadastro } from "../pages/Cadastro";
import { Login } from "../pages/Login";
import Pleito from "../pages/Pleito";

const Tab = createNativeStackNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Pleito"
        component={Pleito}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
