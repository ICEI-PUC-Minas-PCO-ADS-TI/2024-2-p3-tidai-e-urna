import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import axios, { AxiosResponse } from "axios";
import { useNavigation } from "expo-router";
import { Formik } from "formik";
import { Box, VStack } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Botao } from "../Componentes/Botao/Botao";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import MenssagemSucesso from "../Componentes/MensagemSucesso/MenssagemSucesso";
import MenssagemExclusao from "../Componentes/MenssagemExclusao/MenssagemExclusao";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { login } from "../redux/slices/userSlice";
import { AppDispatch, RootState } from "../redux/store";


interface IUpdateUsuario {
  curso: string,
  senhaUsuario: string,
  email: string
}
export default function EditarPerfil() {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const usuario = useSelector((state: RootState) => state.user)
  const [contaAtiva, setContaAtiva] = useState<boolean>(true)
  const [contaModificada, setContaModificada] = useState<boolean>(false)
  const [mostrarForm, setMostrarForm] = useState<boolean>(true);


  const excluirUsuario = async (id: number) => {
    const url = `https://e-urna-back.onrender.com/usuario/removerUsuario/${id}`;
    console.log(id)

    try {
      const response: AxiosResponse = await axios.put(url, null, { timeout: 5000 }); // Tempo limite de 5 segundos
      console.log('Exclusão bem-sucedido:', response.data);
      setContaAtiva(false)
      setTimeout(() => {
        navigation.navigate("Login")
      }, 4000);
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

  const modificarUsuario = async (email: string, senha: string, curso: string, id: number) => {
    const url = `https://e-urna-back.onrender.com/usuario/updateUsuario/${id}`;
    const usuarioVo: IUpdateUsuario = {
      email: email,
      senhaUsuario: senha,
      curso: curso
    }

    try {
      const response: AxiosResponse = await axios.put(url, usuarioVo, { timeout: 5000 }); // Envia o objeto no corpo da requisição
      console.log('Atualização bem-sucedida:', response.data);
      setContaModificada(true)
      setMostrarForm(false)
      const data = {
        id: response.data.id,
        nomeUsuario: response.data.nome,
        curso: response.data.curso,
        tipoUsuarioEnum: response.data.tipoUsuarioEnum
      }

      dispatch(login(data))
      setTimeout(() => {
        navigation.navigate("Perfil")
        setContaModificada(false)
        setMostrarForm(true)
      }, 2000);
      return true;
    } catch (error) {
      console.error('Erro na atualização:', error);
      // Tratar o erro adequadamente, como mostrar uma mensagem ao usuário
      return false;
    }
  }

  return (
    <ImagemFundo>
      <VStack alignItems={"center"} justifyContent={"center"}>
        <Titulo >Editar dados perfil</Titulo>
        {contaAtiva && mostrarForm && <Box padding={5} style={styles.box}>
          <Formik
            initialValues={{ email: '', password: '', course: '' }}
            onSubmit={(values) => {
              modificarUsuario(values.email, values.password, values.course, Number(usuario.id))
            }}
          >
            {({ handleSubmit, setFieldValue, values, errors, touched }) => (
              <>
                <EntradaDeTexto
                  label="E-mail"
                  placeholder="Digite um novo E-mail"
                  value={values.email}
                  onChangeText={(text) => setFieldValue('email', text)}
                />
                <EntradaDeTexto
                  label="Nova senha"
                  placeholder="Digite uma nova senha"
                  segureTextEntry={true}
                  value={values.password}
                  onChangeText={(text) => setFieldValue('password', text)}
                />
                <EntradaDeTexto
                  label="Modificar Curso"
                  placeholder="Digite um curso"
                  value={values.course}
                  onChangeText={(text) => setFieldValue('course', text)}
                />
                <Box alignItems="center" w="100%">
                  <Botao
                    w="80%"
                    marginTop={10}
                    borderRadius={40}
                    _text={{ fontSize: 20 }}
                    bg="green.500"
                    onPress={handleSubmit}
                  >
                    Modificar
                  </Botao>
                  <Botao
                    w={"85%"}
                    marginTop={5}
                    borderRadius={40}
                    _text={{ fontSize: 20 }}
                    bg={"teal.500"}
                  >
                    Cancelar
                  </Botao>
                  <Botao
                    w={"85%"}
                    marginTop={5}
                    borderRadius={40}
                    _text={{ fontSize: 20 }}
                    bg={"red.500"}
                    onPress={() => excluirUsuario(Number(usuario.id))}
                  >
                    Excluir Conta
                  </Botao>
                </Box>
              </>
            )}
          </Formik>
        </Box>}
        {contaModificada ? <MenssagemSucesso menssagem="Conta Modificada com sucesso"></MenssagemSucesso> : ""}
        {!contaAtiva && <MenssagemExclusao></MenssagemExclusao>}
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
});
