import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import {
  Box,
  CheckIcon,
  FormControl,
  ScrollView,
  Select,
  VStack,
} from "native-base";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { StyleSheet } from "react-native";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { useState } from "react";
import { Botao } from "../Componentes/Botao/Botao";
import BoxCampForm from "../Componentes/BoxCampForm/BoxCampForm";

export default function CadastroCandidato() {
  const [service, setService] = useState("");

  return (
    <ScrollView>
      <ImagemFundo>
        <VStack alignItems={"center"}>
          <Titulo>Cadastrar candidato</Titulo>
          <BoxCampForm>
            <EntradaDeTexto
              label="Nome"
              placeholder="Digite o nome"
            ></EntradaDeTexto>
            <EntradaDeTexto
              label="Nome"
              placeholder="Digite o nome"
            ></EntradaDeTexto>
            <Box maxW="300" mt={3}>
              <FormControl.Label _text={{ color: "black" }}>
                Curso
              </FormControl.Label>

              <Select
                selectedValue={service}
                minWidth="200"
                bg={"white"}
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
              <EntradaDeTexto
                label="Matricula"
                placeholder="Digite o numero da matricula"
              ></EntradaDeTexto>
              <EntradaDeTexto
                label="Nº do Candidato"
                placeholder="Numero do candidato"
              ></EntradaDeTexto>
            </Box>
            <Box alignItems={"center"} mt={5} w={"100%"}>
              <Botao
                w={"70%"}
                bg="green.500"
                _text={{ fontSize: 20 }}
                borderRadius={40}
              >
                Confirmar
              </Botao>
              <Botao
                mt={3}
                width={"70%"}
                bg="#CD5C5C"
                _text={{ fontSize: 20 }}
                borderRadius={40}
              >
                Cancelar
              </Botao>
            </Box>
          </BoxCampForm>
        </VStack>
      </ImagemFundo>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 350,
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 4,
  },
});
