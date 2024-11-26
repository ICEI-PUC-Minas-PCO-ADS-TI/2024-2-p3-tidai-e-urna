import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { useNavigation } from "@react-navigation/native";
import axios, { AxiosResponse } from "axios";
import { Formik } from "formik";
import {
  Box,
  CheckIcon,
  FormControl,
  Select,
  VStack
} from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Botao } from "../Componentes/Botao/Botao";
import BoxCampForm from "../Componentes/BoxCampForm/BoxCampForm";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import IconLoading from "../Componentes/IconLoading/IconLoading";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { IPleito } from "../Tabs/Principal";
import { yupCadastroCandidato } from "../utils/Yups";

export interface IUsuarioVoAll {
  nomeUsuario: string,
  id: number,
  curso: string,
  setEmail: string,
  setTipoUsuarioEnum: string
}
interface IPLeito_Id_Candidato {
  id: number
}

interface ICadastroPleito {
  nomeCandidato: string,
  cursoCandidato: string,
  numeroCandidato: number,
  pleito_Id_Candidato: IPLeito_Id_Candidato
}

interface IPleito {
  id: number,
  nomePleito: string
}


export default function CadastroCandidato() {
  const [usuarios, setUsuarios] = useState<IUsuarioVoAll[]>();
  const [pleitos, setPleitos] = useState<IPleito[]>();
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(false);
  const [showLoading, setShowLoading] = useState<boolean>(false)




  useEffect(() => {
    const fetchUsuarios = async () => {
      const url = "https://e-urna-back.onrender.com/usuario/usuarioAll";
      try {
        const response: AxiosResponse<IUsuarioVoAll[]> = await axios.get(url);
        console.log('Requisição feita com sucesso UsuarioAll:');
        receiveData(response.data, "usuario");
      } catch (error) {
        console.error('Erro em fetchUsuarios:', error);
      }
    };

    console.log('useEffect fetchUsuarios iniciado');
    fetchUsuarios();
  }, [refresh]);
  const forceRefresh = () => setRefresh(!refresh);

  const setSucessCadastroCandidato = () => {
    setTimeout(() => {
      setShowLoading(false)
      navigation.navigate("TelaVazia")
    }, 8000);
  }
  const fetchPleito = async () => {
    const url = "https://e-urna-back.onrender.com/pleito/pleitoAll";
    try {
      const response: AxiosResponse<IPleito[]> = await axios.get(url);
      console.log('Requisição feita com sucesso PleitoAll:');
      receiveData(response.data, "pleito");
    } catch (error) {
      console.error('Erro em fetchPleito:', error);
    }
  };


  const cadastrarCandidato = async (nomeCandidato: string, cursoCandidato: string, numeroCandidato: string) => {
    const url = "https://e-urna-back.onrender.com/candidato/cadastro";
    const [nomePleito, id] = cursoCandidato.split("-")

    const resquestBody: ICadastroPleito = {
      nomeCandidato: nomeCandidato,
      cursoCandidato: nomePleito,
      numeroCandidato: Number(numeroCandidato),
      pleito_Id_Candidato: {
        id: Number(id)
      }
    }

    try {
      const response: AxiosResponse<ICadastroPleito> = await axios.post(url, resquestBody, { timeout: 5000 }); // Tempo limite de 5 segundos
      console.log('Cadastro bem-sucedido:', response.data);
      setShowLoading(true)
      setSucessCadastroCandidato()
      forceRefresh()
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


  const receiveData = (data, entity: string) => {
    if (data != null) {
      switch (entity) {
        case "pleito":
          setPleitos(data)
          break;
        case "usuario":
          setUsuarios(data);
          fetchPleito()
          break;
        default:
          console.log("Não foi encontrando a variavel adequada")
          break;
      }
    }
  }

  const cancelarCadastro = () => {
    navigation.navigate("Perfil")
  }

  return (
    <ImagemFundo>
      <VStack alignItems={"center"}>
        <Titulo>Cadastrar candidato</Titulo>
        <BoxCampForm>
          <Formik
            initialValues={{
              nomeCandidato: "",
              cursoPleito: "",
              numeroCandidato: "",
            }}
            validationSchema={yupCadastroCandidato}
            onSubmit={(values, { resetForm }) => {
              const nomeCandidato: string = values.nomeCandidato
              cadastrarCandidato(
                nomeCandidato,
                values.cursoPleito,
                values.numeroCandidato,
              );

              resetForm()


            }}
          >
            {({ handleSubmit, setFieldValue, values, errors, touched }) => (
              <>
                <FormControl >
                  <FormControl.Label _text={{ color: "black" }}>
                    Candidatos
                  </FormControl.Label>
                  <Select
                    minWidth="100"
                    bg={"white"}
                    accessibilityLabel="Choose Service"
                    placeholder="Selecione um candidato "
                    selectedValue={values.nomeCandidato}
                    _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setFieldValue("nomeCandidato", itemValue)}
                  >
                    <Select.Item label="" value={""}></Select.Item>
                    {usuarios && usuarios.map(usuario => (
                      <Select.Item key={usuario.id} label={usuario.nomeUsuario} value={`${usuario.nomeUsuario}`}></Select.Item>
                    ))}

                  </Select>
                  <Box maxW="300" mt={3}>
                    <FormControl.Label _text={{ color: "black" }}>
                      Pleito
                    </FormControl.Label>
                    <Select
                      selectedValue={values.cursoPleito}
                      minWidth="200"
                      bg={"white"}
                      accessibilityLabel="Choose Service"
                      placeholder="Pleito"
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={1}
                      onValueChange={(itemValue) => {
                        setFieldValue("cursoPleito", itemValue);
                      }}
                    >
                      {pleitos && pleitos.map(pleito => (
                        <Select.Item key={pleito.id} label={pleito.nomePleito} value={`${pleito.nomePleito}-${pleito.id}`} ></Select.Item>
                      ))}
                    </Select>
                    <EntradaDeTexto
                      label="Nº do Candidato"
                      placeholder="Numero do candidato"
                      value={values.numeroCandidato}
                      onChangeText={(text) => {
                        setFieldValue("numeroCandidato", Number(text))
                      }}

                    />
                  </Box>
                  <Box alignItems={"center"} mt={5} w={"100%"}>
                    <Box mt={5} mb={5} w={"100%"}>{showLoading && <IconLoading menssagem="Cadastrando candidato..."></IconLoading>}</Box>

                    <Botao
                      onPress={handleSubmit}
                      w={"70%"}
                      bg="green.500"
                      _text={{ fontSize: 20 }}
                      borderRadius={40}
                    >
                      Confirmar
                    </Botao>
                    <Botao
                      onPress={() => cancelarCadastro()}
                      mt={3}
                      width={"70%"}
                      bg="#CD5C5C"
                      _text={{ fontSize: 20 }}
                      borderRadius={40}
                    >
                      Cancelar
                    </Botao>
                  </Box>
                </FormControl>
              </>
            )}
          </Formik>
        </BoxCampForm>
      </VStack>
    </ImagemFundo>
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
