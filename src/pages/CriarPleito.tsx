import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import axios, { AxiosResponse } from "axios";
import { useNavigation } from "expo-router";
import { Formik } from "formik";
import {
  Actionsheet,
  Box,
  Button,
  CheckIcon,
  FormControl,
  Select,
  useDisclose,
  VStack
} from "native-base";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Botao } from "../Componentes/Botao/Botao";
import BoxCampForm from "../Componentes/BoxCampForm/BoxCampForm";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { periodosCursos } from "../utils/Periodos";



interface ICadastroPleitoVo {
  nomePleito: string,
  data_termino: string,
  data_inicio: string,
}

export default function CriarPleito() {
  const navigation = useNavigation();
  const [service, setService] = useState(""); //Estado do componente Periodo

  // Cuida dos campos de data com o modal
  const [isVisible, setIsVisible] = useState(false);
  const [activeModal, setActiveModal] = useState<"start" | "end" | null>(null);
  const [dateTermino, setDateTermino] = useState<Date | undefined>();

  const showDatePicker = (modalType: "start" | "end") => {
    setActiveModal(modalType);
    setIsVisible(true);
  };

  const hideDatePicker = () => {
    setIsVisible(false);
    setActiveModal(null);
  };
  const handleConfirmTermino = (selectedDate: Date) => {
    setDateTermino(selectedDate);
    hideDatePicker();
  };
  //
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclose();

  const toggleItemSelection = (item: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((i) => i !== item)
        : [...prevSelectedItems, item]
    );
  };

  const cancelarCadastroPleito = () => {
    console.log("CANCELADO CADASTRO")
    navigation.navigate("Perfil")

  }

  const cadastrarPleito = async (nomePleito: string, periodo: string, data_termino: string) => {
    const url = "https://e-urna-back.onrender.com/pleito/cadastro";

    const dataTerminoFormatada = new Date(data_termino).toISOString(); // ISO format
    const dataInicioFormatada = new Date().toISOString();


    const resquestBody: ICadastroPleitoVo = {
      nomePleito: nomePleito + " " + periodo,
      data_termino: dataTerminoFormatada,
      data_inicio: dataInicioFormatada
    }

    console.log("RESQUEST", resquestBody)

    try {
      const response: AxiosResponse<ICadastroPleitoVo> = await axios.post(url, resquestBody, { timeout: 5000 }); // Tempo limite de 5 segundos
      console.log('Cadastro bem-sucedido:', response.data);
      navigation.navigate("TelaVazia")
      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Erro de Axios:', error.message);
        if (error.response) {
          console.error('Status:', error.response.status);
          console.error('Dados:', error.response.data);
        } else if (error.request) {
          console.error('Erro de requisição:', error.request);
        }
      } else {
        console.error('Erro não relacionado ao Axios:', error);
      }
    }

  }

  return (
    <ImagemFundo>
      <VStack alignItems={"center"}>
        <DateTimePickerModal
          isVisible={isVisible && activeModal === "end"}
          mode="date"
          onConfirm={handleConfirmTermino}
          onCancel={hideDatePicker}
        />
        <Titulo>Criar Pleito</Titulo>
        <BoxCampForm>
          <Formik
            initialValues={{
              nomePleito: "",
              periodo: "",
              data_termino: "",
            }}
            onSubmit={(values) => {
              values.data_termino = dateTermino?.toString()
              cadastrarPleito(values.nomePleito, values.periodo, values.data_termino);

            }}
          >
            {({ handleSubmit, setFieldValue, values, errors, touched }) => (
              <>
                <EntradaDeTexto
                  label="Curso"
                  onChangeText={(value) => {
                    console.log("nomePleito", value)
                    setFieldValue("nomePleito", value)
                  }}
                  placeholder="Digite o nome do curso"
                ></EntradaDeTexto>
                <Box maxW="120" mt={3}>
                  <FormControl.Label _text={{ color: "black" }}>
                    Periodo
                  </FormControl.Label>
                  <Select
                    selectedValue={values.periodo}
                    minWidth="100"
                    bg={"white"}
                    accessibilityLabel="Choose Service"
                    placeholder="Periodo"
                    _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setFieldValue("periodo", itemValue)}
                  >
                    {periodosCursos && periodosCursos.map(periodo => (
                      <Select.Item label={periodo.periodo} value={`${periodo.periodo}`}></Select.Item>
                    ))}

                  </Select>
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
                    onBlur={(valor) => setFieldValue("data_termino", valor)}
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
                <Actionsheet isOpen={isOpen} onClose={onClose}>
                  <Actionsheet.Content >
                    <Button bg={"green.500"} onPress={onClose} mt={4}>
                      Enviar
                    </Button>
                  </Actionsheet.Content>
                </Actionsheet>
                <Box w={"100%"} flexWrap={"wrap"} flexDir={"row"}>
                  <Botao w={"100%"} mt={4} bg="green.500" borderRadius={40} onPress={handleSubmit}>
                    Confirmar
                  </Botao>
                  <Botao w={"100%"} mt={4} bg="red.500" borderRadius={40} onPress={cancelarCadastroPleito}>
                    Cancelar
                  </Botao>
                </Box>
              </>
            )}
          </Formik>
        </BoxCampForm>
      </VStack>
    </ImagemFundo>
  );
}
