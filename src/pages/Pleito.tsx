import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Box, Button, Center, Modal, Text } from "native-base";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { RootStackParamList } from "../router/TypesRoutes";
import { pleitos } from "../utils/Eleicoes";

type PleitoRouteProp = RouteProp<RootStackParamList, "Pleito">;

export default function Pleito() {
  const route = useRoute<PleitoRouteProp>();
  const [selectCandidato, setSelectCandidato] = useState<number | null>(null)
  const [candidato, setCandidato] = useState("")
  const { id } = route.params;
  const isSelected = setSelectCandidato === id;

  const pleito = pleitos.filter((pleito) => pleito.id == id);
  const [showModal, setShowModal] = useState(false);


  const selecionadoCandidato = (candidatoId: number, nomeCandidato: string) => {
    setShowModal(true)
    setCandidato(nomeCandidato)
    setSelectCandidato(candidatoId === selectCandidato ? null : candidatoId)
  }

  return (
    <ImagemFundo>
      <Titulo underline w={"100%"} borderTopColor={"gold"} borderWidth={5} bg={"#4169E1"} textAlign={"center"} fontSize={30}>
        Candidatos
      </Titulo>
      <Text fontSize={20}>Selecione o candidato para votar</Text>
      {pleito.map((candidatos) =>
        candidatos.candidatos.map((candidato) => (
          <TouchableOpacity onPress={() => selecionadoCandidato(candidato.id, candidato.nome)} style={[styles.card, isSelected && styles.selectedCard]}>

            <Box flexDir={"row"}
              borderTopColor={"gold"}
              borderTopWidth={7}
              w="100%"
              alignItems={"center"}
              bg="white"
              justifyContent={"space-around"}
              p={2}
              borderBottomRadius="lg"
              borderBottomLeftRadius={40}
              borderBottomRightRadius={40}
              shadow={2}>
              {candidato.id}
              <Text>
                {candidato.nome}
              </Text>
              <Text>
                {candidato.curso}
              </Text>
            </Box>
          </TouchableOpacity>
        ))
      )}



      <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
          _dark: {
            bg: "coolGray.800"
          },
          bg: "warmGray.50"
        }}>
          <Modal.Content maxWidth="350" maxH="212">
            <Modal.CloseButton />
            <Modal.Header>Confirme seu voto</Modal.Header>
            <Modal.Body>
              Deseja confirmar seu voto no candidato {candidato}
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button bg={"red.700"} _text={{ color: "white" }} variant="ghost" colorScheme="blueGray" onPress={() => {
                  setShowModal(false);
                }}>
                  Cancelar
                </Button>
                <Button bg={"green.500"} onPress={() => {
                  setShowModal(false);
                }}>
                  Confirmar
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </ImagemFundo>
  );
}




const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4169E1',
    padding: 20,
    marginVertical: 10,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedCard: {
    backgroundColor: '#cce5ff',
    borderColor: '#000000',
    borderWidth: 5,
  },
})
