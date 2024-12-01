import { Alert, Box, Button, Center, Modal, Text, VStack } from "native-base";
import { useState } from "react";


export default function MenssagemVoto({ titulo, subtitulo, modal }: { titulo: string, subtitulo: string, modal: boolean }) {
  const [showModal, setShowModal] = useState<boolean>(modal)
  return <Center>
    <VStack space={5} maxW="400">
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
            Deseja confirmar seu voto no candidato
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button bg={"red.700"} _text={{ color: "white" }} variant="ghost" colorScheme="blueGray" onPress={() => {
                (false);
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
    </VStack>
  </Center>;
}