import { Heading, HStack, Spinner } from "native-base";



export default function IconLoading({ menssagem }: { menssagem: string }) {
  return <HStack justifyContent="center" w={"100%"}>
    <Spinner accessibilityLabel="Loading posts" />
    <Heading color="primary.500" fontSize="2xl">
      {menssagem}
    </Heading>
  </HStack>;
}