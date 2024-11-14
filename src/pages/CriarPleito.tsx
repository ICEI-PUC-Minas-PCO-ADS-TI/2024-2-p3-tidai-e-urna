import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import {
  Actionsheet,
  Box,
  Button,
  CheckIcon,
  FlatList,
  FormControl,
  ScrollView,
  Select,
  Text,
  useDisclose,
  VStack
} from "native-base";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BoxCampForm from "../Componentes/BoxCampForm/BoxCampForm";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";

import { TouchableOpacity } from "react-native";
import { Botao } from "../Componentes/Botao/Botao";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { periodosCursos } from "../utils/Periodos";

export default function CriarPleito() {
  const [service, setService] = useState(""); //Estado do componente Periodo

  // Cuida dos campos de data com o modal
  const [isVisible, setIsVisible] = useState(false);
  const [activeModal, setActiveModal] = useState<"start" | "end" | null>(null);
  const [dateInicio, setdateInicio] = useState<Date>(new Date());
  const [dateTermino, setDateTermino] = useState<Date | undefined>();

  const showDatePicker = (modalType: "start" | "end") => {
    setActiveModal(modalType);
    setIsVisible(true);
  };
  const handleConfirmInicio = (selectedDate: Date) => {
    setdateInicio(selectedDate);
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setIsVisible(false);
    setActiveModal(null);
  };
  const handleConfirmTermino = (selectedDate: Date) => {
    if (selectedDate <= dateInicio) {
      const newTerminoDate = new Date(dateInicio);
      newTerminoDate.setDate(newTerminoDate.getDate() + 1);
      setDateTermino(newTerminoDate);
    }
    setDateTermino(selectedDate);
    hideDatePicker();
  };
  //
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [availableItems] = useState([
    "Gabriel Araujo",
    "Jose",
    "Maria",
    "Ana",
    "Pietro",
    "Marcos",
    "Fabio",
    "Miguel",
    "Carlos",
    "Nora",
    "Alysson",
    "Leandro",
    "Yasmin",
    "Karol",
    "Nubia",
    "Matis",
    "Lucio",
  ]);
  const { isOpen, onOpen, onClose } = useDisclose();

  const toggleItemSelection = (item: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((i) => i !== item)
        : [...prevSelectedItems, item]
    );
  };

  return (
    <ScrollView>
      <ImagemFundo>
        <VStack alignItems={"center"}>
          <DateTimePickerModal
            isVisible={isVisible && activeModal === "start"}
            mode="date"
            onConfirm={handleConfirmInicio}
            onCancel={hideDatePicker}
          />
          <DateTimePickerModal
            isVisible={isVisible && activeModal === "end"}
            mode="date"
            onConfirm={handleConfirmTermino}
            onCancel={hideDatePicker}
          />
          <Titulo>Criar Pleito</Titulo>
          <BoxCampForm>
            <EntradaDeTexto
              label="Curso"
              placeholder="Digite o nome do curso"
            ></EntradaDeTexto>
            <Box maxW="120" mt={3}>
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
                {periodosCursos && periodosCursos.map(periodo => (
                  <Select.Item label={periodo.periodo} value={`${periodo.valor}`}></Select.Item>
                ))}

              </Select>
            </Box>
            <Box w={"150"} alignItems={"center"} flexDir={"row"}>
              <EntradaDeTexto
                width="100%"
                disabled={true}
                label="Data inicio"
                placeholder="Escolha a data"
                value={dateInicio.toLocaleDateString("pt-BR")}
              ></EntradaDeTexto>
              <Botao
                _text={{ fontSize: 15 }}
                marginLeft={5}
                w={"100%"}
                h={10}
                mt={10}
                bg="#000"
                onPress={() => showDatePicker("start")}
                borderRadius={10}
              >
                Selectionar data
              </Botao>
            </Box>
            <Box w={"150"} alignItems={"center"} flexDir={"row"}>
              <EntradaDeTexto
                width="100%"
                disabled={true}
                label="Data termino"
                placeholder="Escolha a data"
                value={
                  dateTermino ? dateTermino.toLocaleDateString("pt-BR") : " "
                }
              ></EntradaDeTexto>
              <Botao
                _text={{ fontSize: 15 }}
                marginLeft={5}
                w={"100%"}
                h={10}
                mt={10}
                bg="#000"
                onPress={() => showDatePicker("end")}
                borderRadius={10}
              >
                Selectionar data
              </Botao>
            </Box>
            <FormControl.Label mt={3} _text={{ color: "black" }}>
              Candidatos
            </FormControl.Label>
            <TouchableOpacity onPress={onOpen}>
              <Box
                borderWidth={1}
                borderColor="gray.300"
                padding={3}
                bg={"white"}
                borderRadius={5}
                width="100%"
              >
                <Text>
                  {selectedItems.length > 0
                    ? selectedItems.join(", ")
                    : "Selecionar Candidatos"}
                </Text>
              </Box>
            </TouchableOpacity>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content >
                <FlatList

                  data={availableItems}
                  renderItem={({ item }) => (
                    <Button
                      bg={"dark.300"}
                      variant={selectedItems.includes(item) ? "solid" : "outline"}
                      onPress={() => toggleItemSelection(item)}
                      mb={2}
                    >
                      {item}
                    </Button>
                  )}
                  keyExtractor={(item) => item}
                />
                <Button bg={"green.500"} onPress={onClose} mt={4}>
                  Enviar
                </Button>
              </Actionsheet.Content>
            </Actionsheet>
            <Box w={"100%"} flexWrap={"wrap"} flexDir={"row"}>
              <Botao w={"100%"} mt={4} bg="green.500" borderRadius={40}>
                Confirmar
              </Botao>
              <Botao w={"100%"} mt={4} bg="red.500" borderRadius={40}>
                Cancelar
              </Botao>
            </Box>
          </BoxCampForm>
        </VStack>
      </ImagemFundo>
    </ScrollView>
  );
}
