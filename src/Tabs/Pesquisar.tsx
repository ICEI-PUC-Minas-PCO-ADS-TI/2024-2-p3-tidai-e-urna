import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import axios, { AxiosResponse } from "axios";
import { Box, Button, ScrollView, VStack } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import ApiGrafico from "../Componentes/APIGraficos/APIGraficos";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { IPleito } from "./Principal";

export default function Pesquisar() {
  const [pleitos, setPleitos] = useState<IPleito[]>([]);

  useEffect(() => {
    const fetchPleito = async () => {
      const url = "https://e-urna-back.onrender.com/pleito/pleitoAll";
      try {
        const response: AxiosResponse<IPleito[]> = await axios.get(url);
        console.log('Requisição feita com sucesso:');
        setPleitos(response.data)

      } catch (error) {
        console.error('Erro em fetchUsuarios:', error);
      }
    };
    ;
    fetchPleito()

  }, []);


  return (
    <ScrollView>
      <ImagemFundo >
        <VStack w={"100%"} justifyContent={"center"} >
          <Titulo textAlign={"center"}  >Eleições</Titulo>
          <EntradaDeTexto label="" placeholder="Procurar eleição" width="100%" ></EntradaDeTexto>
          <Box mt={2} flexDir={"row"} w={"100%"} justifyContent={"center"}><Button _text={{ color: "black" }} bg={"amber.300"} w={"50%"}>Pesquisar</Button></Box>
          {pleitos.map((pleito) => {
            return <ApiGrafico key={pleito.id} periodoCurso={`${pleito.nomePleito}`} id={pleito.id}></ApiGrafico>
          })}
        </VStack>
      </ImagemFundo>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
