import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import {
  Box,
  CheckIcon,
  FormControl,
  ScrollView,
  Select,
  VStack,
} from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Botao } from "../Componentes/Botao/Botao";
import BoxCampForm from "../Componentes/BoxCampForm/BoxCampForm";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { cursosPuc } from "../utils/CursoPuc";
import { periodosCursos } from "../utils/Periodos";

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
            <FormControl.Label _text={{ color: "black" }}>
              Periodo
            </FormControl.Label>

            <Select
              selectedValue={service}
              minWidth="100"
              bg={"white"}
              accessibilityLabel="Choose Service"
              placeholder="Periodo"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="" value={""}></Select.Item>
              {periodosCursos && periodosCursos.map(periodo => (
                <Select.Item label={periodo.periodo} value={`${periodo.valor}`}></Select.Item>
              ))}

            </Select>
            <Box maxW="300" mt={3}>
              <FormControl.Label _text={{ color: "black" }}>
                Curso
              </FormControl.Label>

              <Select
                selectedValue={service}
                minWidth="200"
                bg={"white"}
                accessibilityLabel="Choose Service"
                placeholder="Curso"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                {cursosPuc && cursosPuc.map(curso => (
                  <Select.Item label={curso.nome} value={curso.valor}></Select.Item>
                ))}

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
