import { NativeBaseProvider, StatusBar } from "native-base";
import { TEMAS } from "@/src/estilos/temas";
import { Cadastro } from "@/src/pages/Cadastro";

export default function HomeScreen() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Cadastro />
    </NativeBaseProvider>
  );
}
