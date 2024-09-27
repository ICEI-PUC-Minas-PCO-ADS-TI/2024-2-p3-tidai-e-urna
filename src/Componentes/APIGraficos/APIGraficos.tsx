import { Box, ScrollView, Text } from "native-base";
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
interface Candidato {
  id: number;
  nome: string;
  curso: string;
  votos: number;
}
interface ApiGraficoProps {
  candidatos: Candidato[];
  periodoCurso: string


}
export default function ApiGrafico({ candidatos, periodoCurso }: ApiGraficoProps) {

  const data = [


  ];


  for (let i = 0; i < candidatos.length; i++) {
    let pleitoData = {
      name: candidatos[i].nome,
      population: candidatos[i].votos,
      color: ColorsApi[i],
      legendFontColor: "#000000",
      legendFontSize: 15
    }
    data.push(pleitoData)


  }
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView>
      <Box borderRadius={25} alignItems={"center"} mt={10} marginRight={9} w={"100%"} bg={"rgba(0,0,0,0.3)"}>
        <Text color={"white"} fontSize={25}>{periodoCurso}</Text>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"-10"}
          center={[10, 20]}
          absolute
        />
      </Box>
    </ScrollView>

  );
}
