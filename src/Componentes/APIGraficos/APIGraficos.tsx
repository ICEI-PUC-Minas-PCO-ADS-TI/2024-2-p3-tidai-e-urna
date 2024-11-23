import { Candidato } from "@/src/pages/Pleito";
import axios, { AxiosResponse } from "axios";
import { Box, Text } from "native-base";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { ColorsApi } from "../../utils/Colors";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

interface ApiGraficoProps {
  periodoCurso: string,
  id: number
}

interface IVotosVO {
  numero_candidato: number,
  total_votos: number
}
export default function ApiGrafico({ periodoCurso, id }: ApiGraficoProps) {
  const [candidatos, setCandidatos] = useState<Candidato[]>([]);
  const [votosCadidatos, setVotosCandidatos] = useState<IVotosVO[]>([])
  const screenWidth = Dimensions.get("window").width;

  const dataValues = [
  ];

  function getTotalVotos(porNumeroCandidato: IVotosVO[], numeroCandidato: number): number | null {
    const resultado = porNumeroCandidato.find(
      (item) => item.numero_candidato === numeroCandidato
    );
    return resultado ? resultado.total_votos : null;
  }


  useEffect(() => {
    const fetchCandidatos = async () => {
      const url = `https://e-urna-back.onrender.com/pleito/buscarCadidato/${id}`;

      try {
        const response: AxiosResponse<Candidato[]> = await axios.post(url, { timeout: 5000 });
        console.log('Requisição feita com sucesso');
        fetchAllVotosCandidatos(id)
        setCandidatos(response.data)
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

    const fetchAllVotosCandidatos = async (id: number) => {
      const url = `https://e-urna-back.onrender.com/voto/allVotosCandidate/${id}`;

      try {
        const response: AxiosResponse<IVotosVO[]> = await axios.post(url, { timeout: 5000 });
        console.log('Requisição feita com sucesso Votos');
        return setVotosCandidatos(response.data)
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

    fetchCandidatos();
    const intervalId = setInterval(fetchCandidatos, 60000); // Atualiza a cada 1 minuto (60.000 ms)
    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, [id]);


  for (let i = 0; i < candidatos.length; i++) {
    let votos = getTotalVotos(votosCadidatos, candidatos[i].numeroCandidato)
    let pleitoData = {
      name: candidatos[i].nomeCandidato,
      population: votos != null ? votos : 0,
      color: ColorsApi[i],
      legendFontColor: "#000000",
      legendFontSize: 15
    }
    dataValues.push(pleitoData)
  }

  return (

    <Box borderRadius={25} alignItems={"center"} mt={10} marginRight={9} w={"100%"} bg={"rgba(0,0,0,0.3)"}>
      <Text color={"white"} w={"100%"} textAlign={"center"} fontSize={25}>{periodoCurso}</Text>
      {dataValues.length > 0 ? <PieChart
        data={dataValues}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"-10"}
        center={[10, 20]}
        absolute
      /> : <Text>Pleito sem candidato</Text>}
    </Box>

  );
}
