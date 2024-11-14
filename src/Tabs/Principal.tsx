import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import axios, { AxiosResponse } from "axios";
import { ScrollView, VStack } from "native-base";
import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { Example } from "../Componentes/CardaoEleição/CardaoEleicao";



interface Candidato {
  id: number;
  nome: string;
  curso: string;
  numeroCandidato: number;
  pleito?: Pleito;
}
interface Pleito {
  id: number;
  nomePleito: string;
  status: string;
  dataInicio: string;
  dataTermino: string;
  votosTotais: number;
  candidatos: Candidato[];
}

export default function Principal() {
  const [pleitos, setPleitos] = useState<Pleito[]>([]);

  useEffect(() => {
    const fetchPleitos = async () => {
      const url = "https://e-urna-back.onrender.com/pleito/pleitoAll";

      try {
        const response: AxiosResponse<Pleito[]> = await axios.get(url);
        console.log('Requisição feita com sucesso');
        setPleitos(response.data)
        if (Array.isArray(response.data)) {
          setPleitos(response.data)
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
  }, []);
  const converterData = (data: any) => {
    const dataVencimento = new Date(data);
    const dataFormatada = dataVencimento.toLocaleDateString('pt-BR');
    return dataFormatada;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImagemFundo>
        <VStack flex={1} w={"100%"}>
          {Array.isArray(pleitos) && pleitos.map((pleito) => (

            <Example
              key={pleito.id}
              id={pleito.id}
              dataVencimento={converterData(pleito.dataTermino)}
              nomeCurso={pleito.nomePleito}
              periodoCurso={pleito.nomePleito}
              quantidade={pleito.candidatos.length}
              status={pleito.status}
            />
          ))}
        </VStack>
      </ImagemFundo>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Permite que o ScrollView ocupe todo o espaço disponível
  },
});
