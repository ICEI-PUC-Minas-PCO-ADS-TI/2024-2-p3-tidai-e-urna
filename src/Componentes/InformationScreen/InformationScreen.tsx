import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { Text, VStack } from "native-base";

interface IMenssagem {
  texto: string
}

export default function InformationScreen({ texto }: IMenssagem) {
  return (
    <ImagemFundo>
      <VStack>
        <Text>{texto}</Text>
      </VStack>
    </ImagemFundo>
  )
}