import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import axios, { AxiosResponse } from "axios";
import { useNavigation } from "expo-router";
import { Formik } from "formik";
import { Box, CheckIcon, FormControl, ScrollView, Select } from "native-base";
import { useState } from "react";
import { GestureHandlerRootView, PanGestureHandler } from "react-native-gesture-handler";
import { Botao } from "../Componentes/Botao/Botao";
import BoxCampForm from "../Componentes/BoxCampForm/BoxCampForm";
import IconLoading from "../Componentes/IconLoading/IconLoading";
import MenssagemExclusao from "../Componentes/MenssagemExclusao/MenssagemExclusao";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { IPleito } from "../Tabs/Principal";


export default function EditarPleito() {
  const navigation = useNavigation();
  const onGestureEvent = (event) => {
    console.log('Gesture event:', event.nativeEvent);
  };
  const [pleitos, setPleitos] = useState<IPleito[]>()
  const [menssagem, setMenssagem] = useState<Boolean>(false);

  const [pleitoSelect, setPleitoSelect] = useState("")
  const [pleitoStatus, setPleitoStatus] = useState("")
  const [showLoading, setShowLoading] = useState<boolean>(false)
  const [menssagemLoading, setMenssagemLoading] = useState<string>("")




  const fetchPleito = async () => {
    const url = "https://e-urna-back.onrender.com/pleito/pleitoAll";
    try {
      const response: AxiosResponse<IPleito[]> = await axios.get(url);
      console.log('Requisição feita com sucesso PleitoAll:');
      setPleitos(response.data)
    } catch (error) {
      console.error('Erro em fetchPleito:', error);
    }
  };

  const setSucessExclusao = () => {
    setMenssagem(true)
    setTimeout(() => {
      setShowLoading(false)
      setMenssagem(false)
      navigation.navigate("Perfil")
      setPleitoSelect("")
    }, 4000);
  }

  const setSucessEdicao = () => {
    setTimeout(() => {
      setShowLoading(false)
      navigation.navigate("TelaVazia")
    }, 8000);
  }

  const excluirPleito = async (id: number) => {
    const url = `https://e-urna-back.onrender.com/pleito/removerPleito/${id}`;
    setMenssagemLoading("Excluindo pleito....")

    try {
      const response: AxiosResponse = await axios.put(url, null, { timeout: 5000 }); // Tempo limite de 5 segundos
      console.log('Exclusão bem-sucedido:', response.data);
      setShowLoading(true)
      setTimeout(() => {
        setSucessExclusao()
      }, 5000);
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

    // setMenssagem(true)
  }

  const editarPleito = async (id: number) => {
    const url = `https://e-urna-back.onrender.com/pleito/atualizarPleito/${id}`;
    setMenssagemLoading("Processando edição....")
    try {
      const response: AxiosResponse = await axios.put(url, null, { timeout: 5000 }); // Tempo limite de 5 segundos
      console.log('Modificação bem-sucedido:', response.data);
      setShowLoading(true)
      setSucessEdicao()
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

  const cancelarEdicacao = () => {
    navigation.navigate("Perfil")
  }

  return (
    <ImagemFundo>
      <ScrollView  >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Box style={{ flex: 1 }} alignItems={"center"}> {/* Envolva todos os elementos em um Box */}
              <Titulo>Editar Pleito</Titulo>
              <BoxCampForm>
                <FormControl.Label _text={{ color: "black" }}>Buscar pleitos</FormControl.Label>
                <Formik
                  initialValues={{
                    id: ""
                  }}
                  onSubmit={(values) => {
                    console.log("VALUES", pleitoSelect)
                    excluirPleito(Number(pleitoSelect))
                  }}
                >
                  {({ handleSubmit, setFieldValue, values, errors, touched }) => (
                    <>
                      <Select
                        selectedValue={pleitoSelect}
                        minWidth="100"
                        bg={"white"}
                        accessibilityLabel="Choose Service"
                        onOpen={fetchPleito}
                        placeholder="Pleitos"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(pleito) => {
                          setPleitoSelect(pleito)
                          setFieldValue("id", pleito)
                        }}
                      >
                        <Select.Item label="" value=""></Select.Item>
                        {pleitos &&
                          pleitos.map((pleito) => (
                            <Select.Item label={pleito.nomePleito} value={`${pleito.id}`} />
                          ))
                        }
                      </Select>
                      {pleitoSelect != "" && pleitoSelect != null &&
                        <Box mt={5} w={"100%"}>
                          <Box w={"100%"} flexWrap={"wrap"} flexDir={"row"}>
                            <Select
                              selectedValue={pleitoStatus}
                              minWidth="200"
                              bg={"white"}
                              accessibilityLabel="Choose Service"
                              placeholder="STATUS"
                              _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />,
                              }}
                              mt={1}
                              onValueChange={(pleito) => {
                                setPleitoStatus(pleito)
                                setFieldValue("id", pleito)
                              }}
                            >
                              <Select.Item label={""} value={""} ></Select.Item>
                              <Select.Item label={"ENCERRAR"} value={"ENCERRAR"} ></Select.Item>
                            </Select>
                            <Box mt={5} w={"100%"}>{showLoading && <IconLoading menssagem={menssagemLoading}></IconLoading>}</Box>
                            <Botao w={"100%"} mt={4} bg="red.500" borderRadius={40} onPress={handleSubmit}>
                              Excluir pleito
                            </Botao>
                            <Botao w={"100%"} mt={4} bg="green.500" borderRadius={40} onPress={() => editarPleito(Number(pleitoSelect))}>
                              Editar Status
                            </Botao>
                          </Box>
                        </Box>
                      }
                    </>
                  )}
                </Formik>
                <Botao w={"100%"} mt={4} bg="yellow.500" borderRadius={40} onPress={() => cancelarEdicacao()}>
                  Cancelar
                </Botao>
              </BoxCampForm>
              {menssagem ? <MenssagemExclusao></MenssagemExclusao> : ""}
            </Box>

          </PanGestureHandler>
        </GestureHandlerRootView>
      </ScrollView>
    </ImagemFundo>

  )
}