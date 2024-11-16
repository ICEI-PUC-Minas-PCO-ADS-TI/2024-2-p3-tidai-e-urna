import { TEMAS } from "@/src/estilos/temas";
import { store } from "@/src/redux/store";
import Rotas from "@/src/router/Rotas";
import { NativeBaseProvider, StatusBar } from "native-base";
import { Provider } from "react-redux";

export default function HomeScreen() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={TEMAS}>
        <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
        <Rotas />
      </NativeBaseProvider>
    </Provider>
  );
}
