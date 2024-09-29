import { Heading, HStack, Spinner } from "native-base";

export default function IconLoading() {
  return <HStack justifyContent="center" w={"100%"}>
    <Spinner accessibilityLabel="Loading posts" />
    <Heading color="primary.500" fontSize="2xl">
      Verificando credenciais
    </Heading>
  </HStack>;
}