import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { Actionsheet, Box, Button, CheckIcon, FlatList, FormControl, ScrollView, Select, Text, useDisclose } from "native-base";
import { useState } from "react";
import { GestureHandlerRootView, PanGestureHandler, TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Botao } from "../Componentes/Botao/Botao";
import BoxCampForm from "../Componentes/BoxCampForm/BoxCampForm";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { PleitoId } from "../service/PleitoService/PleitoService";
import { pleitos } from "../utils/Eleicoes";


export default function EditarPleito() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeModal, setActiveModal] = useState<"start" | "end" | null>(null);
  const [dateInicio, setdateInicio] = useState<Date>(new Date());
  const [dateTermino, setDateTermino] = useState<Date | undefined>();


  const onGestureEvent = (event) => {
    console.log('Gesture event:', event.nativeEvent);
  };


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
  const [pleitoSelect, setPleitoSelect] = useState("")
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Box style={{ flex: 1 }}> {/* Envolva todos os elementos em um Box */}
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
            <ImagemFundo>
              <Titulo>EditarPerfil</Titulo>
              <BoxCampForm>
                <FormControl.Label _text={{ color: "black" }}>Buscar pleitos</FormControl.Label>
                <Select
                  selectedValue={pleitoSelect}
                  minWidth="100"
                  bg={"white"}
                  accessibilityLabel="Choose Service"
                  placeholder="Periodo"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(pleito) => setPleitoSelect(pleito)}
                >
                  <Select.Item label="" value=""></Select.Item>
                  {pleitos &&
                    pleitos.map((pleito) => (
                      <Select.Item label={pleito.nomeCurso + " " + pleito.periodoCurso + " Período"} value={`${pleito.id}`} />
                    ))
                  }
                </Select>
                {pleitoSelect != "" && pleitoSelect != null &&
                  <Box >
                    <Box flexDir={"column"} justifyContent={"center"} alignItems={"center"} w={"100%"}>
                      <EntradaDeTexto
                        width="100%"
                        disabled={true}
                        label="Data inicio"
                        placeholder="Escolha a data"
                        value={dateInicio.toLocaleDateString("pt-BR")}
                      />
                      <Botao
                        _text={{ fontSize: 15 }}
                        marginLeft={5}
                        w={"100%"}
                        h={10}
                        mt={2}
                        marginRight={5}
                        bg="#000"
                        onPress={() => showDatePicker("start")}
                        borderRadius={10}
                      >
                        Selecionar data
                      </Botao>
                      <EntradaDeTexto
                        width="100%"
                        disabled={true}
                        label="Data termino"
                        placeholder="Escolha a data"
                        value={
                          dateTermino ? dateTermino.toLocaleDateString("pt-BR") : " "
                        }
                      />
                      <Botao
                        _text={{ fontSize: 15 }}
                        marginLeft={5}
                        w={"100%"}
                        h={10}
                        mt={2}
                        marginRight={5}
                        bg="#000"
                        onPress={() => showDatePicker("end")}
                        borderRadius={10}
                      >
                        Selecionar data
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
                            : "Selecionas candidatos"}
                        </Text>
                      </Box>
                    </TouchableOpacity>
                    <Actionsheet isOpen={isOpen} onClose={onClose}>
                      <Actionsheet.Content>
                        <FlatList
                          data={PleitoId(Number(pleitoSelect))}
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
                        <Button onPress={onClose} mt={4}>
                          Teste
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
                  </Box>
                }
              </BoxCampForm>
            </ImagemFundo>
          </Box>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </ScrollView>

  )
}