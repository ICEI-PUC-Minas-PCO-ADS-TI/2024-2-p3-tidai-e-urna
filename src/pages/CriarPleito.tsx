import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import {
  Box,
  CheckIcon,
  FormControl,
  Input,
  Select,
  Text,
  VStack,
} from "native-base";
import BoxCampForm from "../Componentes/BoxCampForm/BoxCampForm";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from "react-native";
import { Botao } from "../Componentes/Botao/Botao";

export default function CriarPleito() {
  const [service, setService] = useState("");

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

  return (
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
        <Text>CriarPleito</Text>
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
              <Select.Item label="1º" value="ux" />
              <Select.Item label="2º" value="web" />
              <Select.Item label="3º" value="cross" />
              <Select.Item label="4º" value="ui" />
              <Select.Item label="5º" value="backend" />
              <Select.Item label="6º" value="backend" />
              <Select.Item label="7º" value="backend" />
              <Select.Item label="8º" value="backend" />
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
        </BoxCampForm>
      </VStack>
    </ImagemFundo>
  );
}
