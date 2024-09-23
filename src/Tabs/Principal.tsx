import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { ScrollView, VStack } from "native-base";
import { StyleSheet } from "react-native";
import { Example } from "../Componentes/CardaoEleição/CardaoEleicao";
import { pleitos } from "../utils/Eleicoes";


export default function Principal() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImagemFundo>
        <VStack flex={1} w={"100%"}>
          {pleitos &&
            pleitos.map((pleito) => (
              <Example
                key={pleito.id}
                id={pleito.id}
                dataVencimento={pleito.dataVencimento}
                nomeCurso={pleito.nomeCurso}
                periodoCurso={pleito.periodoCurso}
                quantidade={pleito.candidatos.length}
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
