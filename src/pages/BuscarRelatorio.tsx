import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { Box, VStack } from "native-base";
import { useState } from "react";
import { Botao } from "../Componentes/Botao/Botao";
import { EntradaDeTexto } from "../Componentes/EntradaDeTexto/EntradaDeTexto";
import Relatorio from "../Componentes/Relatorio/Relatorio";
import { relatorioPleito } from "../utils/RelatorioPleitos";


export default function BuscarRelatorio() {
  const [visualizarRelatorio, setVisualizarRelatorio] = useState(false);
  const buscarRelatorio = () => {
    setVisualizarRelatorio(true)
  }

  return (
    <ImagemFundo>
      <VStack>
        <EntradaDeTexto placeholder="Buscar relatório" label="" width="100%" ></EntradaDeTexto>
        <Box mt={4} w={"sm"} alignItems={"center"}><Botao onPress={buscarRelatorio} _text={{ fontSize: 15 }} borderRadius={20} bg="amber.300" w={"50%"} >Pesquisar</Botao></Box>
        {visualizarRelatorio && <Relatorio relatorio={relatorioPleito[0].relatorio}></Relatorio>}
      </VStack>
    </ImagemFundo>
  )
}