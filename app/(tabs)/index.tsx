import { NativeBaseProvider, StatusBar } from "native-base";
import { TEMAS } from "@/src/estilos/temas";
import Rotas from "@/src/router/Rotas";

export default function HomeScreen() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}
