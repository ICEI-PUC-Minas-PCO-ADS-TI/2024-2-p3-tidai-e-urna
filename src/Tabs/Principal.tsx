import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import axios, { AxiosResponse } from "axios";
import { Box, Button, ScrollView, VStack } from "native-base";
import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { Example } from "../Componentes/CardaoEleição/CardaoEleicao";



interface Candidato {
  id: number;
  nome: string;
  curso: string;
  numeroCandidato: number;
  pleito?: IPleito;
}
export interface IPleito {
  id: number;
  nomePleito: string;
  status: string;
  data_inicio: string;
  data_termino: string;
  votoTotais: number;
  candidatos: Candidato[];
}

export default function Principal() {
  const [pleitos, setPleitos] = useState<IPleito[]>([]);
  const [pleitosFiltrados, setPleitoFiltrado] = useState<IPleito[]>([])
  const [colorPleito, setColorPleito] = useState<string>("")

  useEffect(() => {
    const fetchPleitos = async () => {
      const url = "https://e-urna-back.onrender.com/pleito/pleitoAll";

      try {
        const response: AxiosResponse<IPleito[]> = await axios.get(url);
        console.log('Requisição feita com sucesso, tela PRINCIPAL');
        if (Array.isArray(response.data)) {
          setPleitos(response.data);
        } else {
          console.error("A resposta da API não é um array:", response.data);
        }
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
    };

    fetchPleitos();

    const intervalId = setInterval(fetchPleitos, 60000); // Atualiza a cada 1 minuto (60.000 ms)
    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);

  const converterData = (data: any) => {
    const dataVencimento = new Date(data);
    const dataFormatada = dataVencimento.toLocaleDateString('pt-BR');
    return dataFormatada;
  }

  const filtrarPleitos = ({ status, color }: { status: string, color: string }) => {
    if (status !== "TODOS") {
      const resultado = pleitos.filter((pleito) => pleito.status.includes(status))
      setPleitoFiltrado(resultado)
      setColorPleito(color)
      console.log("Entrei", pleitosFiltrados)
    } else {
      setPleitoFiltrado([])
      setColorPleito(color)
    }
  }


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImagemFundo>
        <VStack flex={1} w={"100%"}>
          <Box w={"100%"} justifyContent={"space-between"} flexDir={"row"}>
            <Button onPress={() => filtrarPleitos({ status: "ATIVO", color: "green.400" })} bg={"green.400"} w={"30%"}>ATIVOS</Button>
            <Button onPress={() => filtrarPleitos({ status: "ENCERRADO", color: "red.600" })} bg={"red.600"} w={"30%"}>ENCERRADOS</Button>
            <Button onPress={() => filtrarPleitos({ status: "TODOS", color: "blue.400" })} bg={"blue.400"} w={"30%"}>TODOS</Button>
          </Box>
          {pleitosFiltrados.length > 0 ? pleitosFiltrados.map((pleito, index) => (
            <Example
              key={pleito.id}
              id={pleito.id}
              dataVencimento={converterData(pleito.data_termino)}
              nomeCurso={pleito.nomePleito}
              periodoCurso={pleito.nomePleito}
              status={pleito.status}
              color={colorPleito}
            ></Example>
          )) :
            pleitos.map((pleito, index) => (

              <Example
                key={pleito.id}
                id={pleito.id}
                dataVencimento={converterData(pleito.data_termino)}
                nomeCurso={pleito.nomePleito}
                periodoCurso={pleito.nomePleito}
                status={pleito.status}
                color={colorPleito}
              />
            ))}
        </VStack>
      </ImagemFundo>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Permite que o ScrollView ocupe todo o espaço disponível
  },
});
