import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import axios, { AxiosResponse } from "axios";
import { Formik } from "formik";
import {
  Box,
  Link,
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
import { Props2 } from "../router/TypesRoutes";


interface LoginRequest {
  matricula: string,
  senha: string
}
interface LoginResponse {
  token: string
}
export function Login({ navigation }: Props2) {

  const [showLoading, setShowLoading] = useState(false)


  const login = async (matriculaParam: number, senhaParam: string): Promise<Boolean | void> => {
    const url = "http://192.168.18.6:8084/api/v1/login";

    const requestBody: LoginRequest = {
      matricula: matriculaParam,
      senha: senhaParam

    };
    console.log(requestBody)



    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(url, requestBody, { timeout: 5000 }); // Tempo limite de 5 segundos
      console.log('Login bem-sucedido:', response.data);

      return true; // Retorna o token ou dados de sucesso
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Se o erro for de Axios, você pode acessar mais informações
        console.error('Erro de Axios:', error.message);
        if (error.response) {
          // A requisição foi feita e o servidor respondeu com um código de status
          console.error('Status:', error.response.status);
          console.error('Dados:', error.response.data);
        } else if (error.request) {
          // A requisição foi feita, mas não houve resposta
          console.error('Erro de requisição:', error.request);
        }
      } else {
        // Para outros erros que não são de Axios
        console.error('Erro não relacionado ao Axios:', error);
      }
    }

  }

  const verificacaoLogin = async (matricula: string, senha: string) => {
    const response = await login(Number(matricula), senha)
    if (response) {
      navigation.navigate('Tabs')
    }
    setShowLoading(false)
  }

  const SchemasLogin = Yup.object().shape({
    numeroPessoa: Yup.string().required("Campo o brigatorio").matches(/^\d+$/, 'O campo deve conter apenas números'),
    numeroSenha: Yup.string().required("Campo obrigatorio")
  })
  return (
    <ImagemFundo>
      <VStack
        marginTop={10}
        flex={1}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <Box alignItems={"center"} justifyContent={"center"} height={"85%"}>
          <Titulo>Login</Titulo>
          <Box padding={5} style={styles.box}>
            <Formik
              initialValues={{
                numeroPessoa: "",
                numeroSenha: "",
              }}
              validationSchema={SchemasLogin}
              onSubmit={(values) => {
                setShowLoading(true)

                setTimeout(() => {
                  verificacaoLogin(values.numeroPessoa, values.numeroSenha)
                }, 4000)
              }}

            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                  <EntradaDeTexto
                    placeholder="Insira seu identificador"
                    label="Matricula/Pessoa"
                    onChangeText={handleChange("numeroPessoa")}
                    onBlur={handleBlur("numeroPessoa")}
                    errorMessage={touched.numeroPessoa && errors.numeroPessoa}
                  />
                  <EntradaDeTexto
                    placeholder="Insira sua senha"
                    segureTextEntry={true}
                    label="Senha"
                    onChangeText={handleChange("numeroSenha")}
                    onBlur={handleBlur("numeroSenha")}
                    errorMessage={touched.numeroSenha && errors.numeroSenha}
                  />
                  <Box mt={5} w={"100%"}>{showLoading && <IconLoading></IconLoading>}</Box>
                  <Link
                    href="https://www.twitch.tv/"
                    _text={{ color: "white", textDecoration: "none" }}
                    mt={2}
                    justifyContent={"center"}
                  >
                    Esqueceu sua senha?
                  </Link>
                  <Box marginTop={3} alignItems={"center"} width={"100%"} padding={2}>
                    <Stack space={4} width={"75%"}>
                      <Botao
                        borderRadius={40}
                        _text={{ fontSize: "lg" }}
                        bg={"teal.500"}
                        onPress={handleSubmit}
                      >
                        Acessar
                      </Botao>
                      <Botao
                        borderRadius={40}
                        _text={{ fontSize: "lg" }}
                        bg={"green.500"}
                        onPress={() => navigation.navigate("Cadastro")}
                      >
                        Cadastrar
                      </Botao>
                    </Stack>
                  </Box>
                </View>
              )}
            </Formik>

          </Box>
        </Box>
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
});
