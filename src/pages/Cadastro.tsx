import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import axios, { AxiosResponse } from "axios";
import { Formik } from "formik";
import {
  Box,
  Button,
  Stack,
  VStack
} from "native-base";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Botao } from "../Componentes/Botao/Botao";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import IconLoading from "../Componentes/IconLoading/IconLoading";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { Props } from "../router/TypesRoutes";
import { secoes } from "../utils/Cadastro";


interface CadastroRequest {
  nomeUsuario: string,
  sobrenomeUsuario?: string,
  senhaUsuario: string,
  numeroMatriculaPessoa: string,
  email: string,
  curso: string
}

export function Cadastro({ navigation }: Props) {
  const [numSecao, setNumSecao] = useState(0);
  const [showLoading, setShowLoading] = useState(false)


  function avanacarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSesao() {
    setNumSecao(numSecao - 1);
  }
  const cadastroUsuario = async (nomeUsuarioParam: string, sobreNomeParam: string, matriculaParam: number, senhaParam: string, email: string, curso: string): Promise<Boolean | void> => {
    const url = "https://e-urna-back.onrender.com/usuario/cadastro";

    const requestBody: CadastroRequest = {
      nomeUsuario: nomeUsuarioParam + " " + sobreNomeParam,
      senhaUsuario: senhaParam,
      numeroMatriculaPessoa: matriculaParam.toString(),
      email: email,
      curso: curso

    };
    try {
      const response: AxiosResponse<CadastroRequest> = await axios.post(url, requestBody, { timeout: 5000 }); // Tempo limite de 5 segundos
      console.log('Cadastro bem-sucedido:', response.data);

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

  const verificarUsuario = async (newUsuario: string, newSobreNome: string, newMatricula: string, newSenha: string, newEmail: string, curso: string) => {
    setShowLoading(true)
    const response = await cadastroUsuario(newUsuario, newSobreNome, Number(newMatricula), newSenha, newEmail, curso)


    if (response) {
      setShowLoading(false)
      navigation.navigate("Login")
    } else {
      setShowLoading(false)
    }
  }

  const SchemasCadastro = [
    Yup.object().shape({
      nomeUsuario: Yup.string().required("Campo obrigatório"),
      sobrenomeUsuario: Yup.string().required("Campo obrigatório"),
    }),
    Yup.object().shape({
      senhaUsuario: Yup.string()
        .required("Campo obrigatório"),
      confirmarSenhaUsuario: Yup.string()
        .required("Campo obrigatório")
        .oneOf([Yup.ref('senhaUsuario'), null], 'As senhas não coincidem'),
    }),
    Yup.object().shape({
      email: Yup.string().email("Ensira um email valido").required("Campo obrigatório"),
      numeroMatriculaPessoa: Yup.string().min(6, "Minimo 6 numeros").max(7, "Maximo 7 numeros").matches(/^\d+$/, 'O campo deve conter apenas números').required("Campo obrigatório"),
    })
  ];
  return (
    <ImagemFundo>
      <VStack
        marginTop={2}
        flex={1}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <Box alignItems={"center"} justifyContent={"center"} height={"90%"}>
          <Titulo>{secoes[numSecao].titulo}</Titulo>
          <Box padding={5} style={styles.box}>
            <Formik
              initialValues={{
                nomeUsuario: "",
                sobrenomeUsuario: "",
                senhaUsuario: "",
                confirmarSenhaUsuario: "",
                numeroMatriculaPessoa: "",
                email: "",
                curso: ""
              }}
              validationSchema={SchemasCadastro[numSecao]}
              onSubmit={(values) => {
                avanacarSecao()
                if (numSecao == secoes.length - 1) {
                  verificarUsuario(values.nomeUsuario, values.sobrenomeUsuario, values.numeroMatriculaPessoa, values.senhaUsuario, values.email, values.curso)
                }
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                  {secoes[numSecao].entradaTexto.map((entrada) => {
                    return (
                      <EntradaDeTexto
                        label={entrada.label}
                        placeholder={entrada.placeholder}
                        segureTextEntry={entrada.nameYup == "senhaUsuario" || entrada.nameYup == "confirmarSenhaUsuario" ? true : false}
                        onChangeText={handleChange(entrada.nameYup)}
                        onBlur={handleBlur(entrada.nameYup)}
                        key={entrada.id}
                        errorMessage={touched[entrada.nameYup as keyof typeof touched] &&
                          errors[entrada.nameYup as keyof typeof errors]}
                      />
                    );
                  })}
                  <Box mt={5} w={"100%"}>{showLoading && <IconLoading menssgaem="Verificando numero Pessoa/Matricula"></IconLoading>}</Box>
                  <Box marginTop={3} alignItems={"center"} width={"100%"} padding={2}>
                    <Stack space={4} width={"75%"}>
                      <Botao
                        borderRadius={40}
                        _text={{ fontSize: "lg" }}
                        bg={"teal.500"}
                        onPress={handleSubmit}
                      >
                        Próximo
                      </Botao>
                      {numSecao > 0 ? (
                        <Button
                          borderRadius={40}
                          _text={{ fontSize: "lg" }}
                          bg={"green.500"}
                          onPress={() => voltarSesao()}
                        >
                          Voltar
                        </Button>
                      ) : (
                        <Button
                          borderRadius={40}
                          _text={{ fontSize: "lg" }}
                          bg={"green.500"}
                          onPress={() => navigation.navigate("Login")}
                        >
                          Login
                        </Button>
                      )}
                    </Stack>
                  </Box>
                </View>
              )}
            </Formik>
          </Box>
        </Box>
      </VStack>
    </ImagemFundo >
  );
}
const styles = StyleSheet.create({
  box: {
    width: 350,
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 4,
  },
  logoImage: {
    width: 130,
    height: 100,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
});
