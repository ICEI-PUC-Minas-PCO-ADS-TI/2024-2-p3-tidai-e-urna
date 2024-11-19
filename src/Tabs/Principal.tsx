import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import axios, { AxiosResponse } from "axios";
import { ScrollView, VStack } from "native-base";
import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { Example } from "../Componentes/CardaoEleição/CardaoEleicao";


interface IVencedor {
  nomePleito: string;
  candidatoNome: string;
  totalVotos: string;
  votosPleito: string;
}
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
  const [vencedor, setVencedor] = useState<IVencedor[]>([]);

  useEffect(() => {
    const fetchPleitos = async () => {
      const url = "https://e-urna-back.onrender.com/pleito/pleitoAll";

      try {
        const response: AxiosResponse<IPleito[]> = await axios.get(url);
        console.log('Requisição feita com sucesso');
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

    const intervalId = setInterval(fetchPleitos, 80000); // Atualiza a cada 5 segundos
    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, []);


  const fetchVencedorPleito = async (id: number) => {
    const url = `https://e-urna-back.onrender.com/pleito/ganhadorPleito/${id}`

    try {
      const response: AxiosResponse<IVencedor> = await axios.get(url);
      console.log('Requisição feita com sucesso', response.data);
      if (response.data.candidatoNome != null) {
        console.log("Ok")
        setVencedor((prevVencedores) => [...prevVencedores, response.data]);
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

  for (let i = 0; i < pleitos.length; i++) {
    fetchVencedorPleito(Number(pleitos[i].id))
  }
  const converterData = (data: any) => {
    const dataVencimento = new Date(data);
    const dataFormatada = dataVencimento.toLocaleDateString('pt-BR');
    return dataFormatada;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImagemFundo>
        <VStack flex={1} w={"100%"}>
          {Array.isArray(pleitos) && pleitos.map((pleito, index) => (

            <Example
              key={pleito.id}
              id={pleito.id}
              dataVencimento={converterData(pleito.data_termino)}
              nomeCurso={pleito.nomePleito}
              periodoCurso={pleito.nomePleito}
              quantidade={2}
              status={pleito.status}
              vencedor={vencedor && vencedor.length > index && vencedor[index] && vencedor[index].candidatoNome != null ? vencedor[index].candidatoNome : "Não tem candidato"}
              // vencedor="Ok"
              disabled={pleito.status === 'ENCERRADO'} // Define se estará desabilitado ou não
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
