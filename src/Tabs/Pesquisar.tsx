import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import axios, { AxiosResponse } from "axios";
import { ScrollView, VStack } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import ApiGrafico from "../Componentes/APIGraficos/APIGraficos";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { IPleito } from "./Principal";

export default function Pesquisar() {
  const [pleitos, setPleitos] = useState<IPleito[]>([]);
  const [inputValue, setInputValue] = useState<string>('')
  const [pleitosFiltrados, setPleitoFiltrados] = useState<IPleito[]>([])
  useEffect(() => {
    const fetchPleito = async () => {
      const url = "https://e-urna-back.onrender.com/pleito/pleitoAll";
      try {
        const response: AxiosResponse<IPleito[]> = await axios.get(url);
        console.log('Requisição feita com sucesso: Pesquisar');
        setPleitos(response.data)

      } catch (error) {
        console.error('Erro em fetchUsuarios:', error);
      }
    };
    ;
    fetchPleito()


  }, [pleitos]);


  return (
    <ImagemFundo>
      <ScrollView w={"100%"} >
        <VStack w={"100%"} justifyContent={"center"} >
          <Titulo textAlign={"center"}  >Eleições</Titulo>
          <EntradaDeTexto label="" placeholder="Procurar eleição" width="100%" onChangeText={(texto) => {
            const filtrados = pleitos.filter((pleito) =>
              pleito.nomePleito.toLowerCase().includes(texto.toLowerCase())
            );
            setPleitoFiltrados(filtrados);
          }} ></EntradaDeTexto>
          {pleitosFiltrados.length > 0 ? pleitosFiltrados.map((pleito) => {
            return <ApiGrafico key={pleito.id} periodoCurso={`${pleito.nomePleito}`} id={pleito.id}></ApiGrafico>
          }) : pleitos.map((pleito) => {
            return <ApiGrafico key={pleito.id} periodoCurso={`${pleito.nomePleito}`} id={pleito.id}></ApiGrafico>
          })}


          {/* {pleitos.map((pleito) => {
            return <ApiGrafico key={pleito.id} periodoCurso={`${pleito.nomePleito}`} id={pleito.id}></ApiGrafico>
          })} */}
        </VStack>
      </ScrollView>
    </ImagemFundo>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
