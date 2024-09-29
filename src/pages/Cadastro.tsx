import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { Formik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Stack,
  VStack
} from "native-base";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Botao } from "../Componentes/Botao/Botao";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { Props } from "../router/TypesRoutes";
import { secoes } from "../utils/Cadastro";

export function Cadastro({ navigation }: Props) {
  const [numSecao, setNumSecao] = useState(0);

  function avanacarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSesao() {
    setNumSecao(numSecao - 1);
  }

  const SchemasCadastro = [
    Yup.object().shape({
      nomeUsuario: Yup.string().required("Campo obrigatório"),
      sobrenomeUsuario: Yup.string().required("Campo obrigatório"),
    }),
    Yup.object().shape({
      senhaUsuario: Yup.string().required("Campo obrigatório"),
      confirmarSenhaUsuario: Yup.string().required("Campo obrigatório"),
    }),
    Yup.object().shape({
      numeroMatriculaPessoa: Yup.string().required("Campo obrigatório"),
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
              }}
              validationSchema={SchemasCadastro[numSecao]}
              onSubmit={(values) => {
                console.log("Avançar")
                avanacarSecao()
                console.log(values)
                setTimeout(() => {

                }, 4000)
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
                  <Box marginTop={3} alignItems={"center"} width={"100%"} padding={2}>
                    <Stack space={4} width={"75%"}>
                      <Botao
                        borderRadius={40}
                        _text={{ fontSize: "lg" }}
                        bg={"teal.500"}
                        onPress={handleSubmit}
                      // onPress={() => avanacarSecao()}
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

            {numSecao == 2 &&
              secoes[2].checkbox.map((check) => {
                return (
                  <Checkbox key={check.id} value={check.value}>
                    {check.value}
                  </Checkbox>
                );
              })}
            {/* <Box marginTop={3} alignItems={"center"} width={"100%"} padding={2}>
              <Stack space={4} width={"75%"}>
                <Botao
                  borderRadius={40}
                  _text={{ fontSize: "lg" }}
                  bg={"teal.500"}
                  onPress={() => avanacarSecao()}
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
            </Box> */}
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
