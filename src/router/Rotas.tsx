import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Tabs from "../Tabs";
import { Cadastro } from "../pages/Cadastro";
import CadastroSucess from "../pages/CadastroSucess";
import CriarPleito from "../pages/CriarPleito";
import { Login } from "../pages/Login";
import Pleito from "../pages/Pleito";
import TelaApresetacao from "../pages/TelaApresetancao";
import TelaVazia from "../pages/TelaVazia";

const Tab = createNativeStackNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TelaApresetacao"
        component={TelaApresetacao}
        options={{ headerShown: false }}
      />
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
      <Tab.Screen
        name="CriarPleito"
        component={CriarPleito}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TelaVazia"
        component={TelaVazia}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CadastroSucess"
        component={CadastroSucess}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
