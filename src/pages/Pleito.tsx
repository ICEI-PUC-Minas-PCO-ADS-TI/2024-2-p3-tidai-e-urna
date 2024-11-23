import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { RouteProp, useRoute } from "@react-navigation/native";
import axios, { AxiosResponse } from "axios";
import { useNavigation } from "expo-router";
import { Box, Button, Center, Modal, Text } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { RootState } from "../redux/store";
import { RootStackParamList } from "../router/TypesRoutes";

type PleitoRouteProp = RouteProp<RootStackParamList, "Pleito">;

export interface Candidato {
  id: number,
  nomeCandidato: string,
  numeroCandidato: number
}

export default function Pleito() {
  const usuario = useSelector((state: RootState) => state.user)
  const navigation = useNavigation();
  const route = useRoute<PleitoRouteProp>();
  const [selectCandidato, setSelectCandidato] = useState<number | null>(null)
  const [candidato, setCandidato] = useState<Candidato>()
  const [candidatos, setCandidatos] = useState<Candidato[]>([]);
  const { id } = route.params;
  const isSelected = setSelectCandidato === id;
  const [showModal, setShowModal] = useState(false);
  const [podeVotar, setPodeVotar] = useState<boolean>(true)
  const [idCandidato, setIdCandidato] = useState<Number>();


  const selecionadoCandidato = (candidato: Candidato) => {
    setShowModal(true)
    setCandidato(candidato)
    setSelectCandidato(candidato.numeroCandidato === selectCandidato ? null : candidato.numeroCandidato)
  }



  useEffect(() => {
    const fetchCandidatoPleito = async () => {
      const url = `https://e-urna-back.onrender.com/pleito/buscarCadidato/${id}`;

      try {
        const response: AxiosResponse<Candidato[]> = await axios.post(url, { timeout: 5000 });
        console.log('Requisição feita com sucesso, Tela PLEITO  ');
        if (Array.isArray(response.data)) {
          setCandidatos(response.data)
        } else {
          console.error("A resposta da API não é um array:", response.data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Erro de Axios:', error.message);
          if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Dados:', error.response.data);
          } else if (error.request) {
            console.error('Erro de requisição:', error.request);
          }
        } else {
          console.error('Erro não relacionado ao Axios:', error);
        }
      }
    };

    fetchCandidatoPleito();
    const intervalId = setInterval(fetchCandidatoPleito, 8000); // Atualiza a cada 5 segundos
    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, [id]);

  const cadastrarVoto = async (idUsuario: number, idPleito: number, idCandidato: number,) => {
    const url = `https://e-urna-back.onrender.com/voto/cadastro`;

    const request = {
      usuarioId: idUsuario,
      pleitoId: idPleito,
      candidatoId: idCandidato

    }

    try {
      const response: AxiosResponse = await axios.post(url, request, { timeout: 5000 });
      console.log('Cadastro VOTO feito com sucesso');
      navigation.navigate("TelaVazia")

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Erro de Axios:', error.message);
        if (error.response) {
          console.error('Status:', error.response.status);
          console.error('Dados:', error.response.data);
        } else if (error.request) {
          console.error('Erro de requisição:', error.request);
        }
      } else {
        console.error('Erro não relacionado ao Axios:', error);
      }
    }
  }

  return (
    <ImagemFundo>
      <Titulo underline w={"100%"} borderTopColor={"gold"} borderWidth={5} bg={"#4169E1"} textAlign={"center"} fontSize={30}>
        Candidatos
      </Titulo>
      <Text fontSize={20}>Selecione o candidato para votar</Text>
      {candidatos.map((candidato) =>
        <TouchableOpacity onPress={() => selecionadoCandidato(candidato)} style={[styles.card, isSelected && styles.selectedCard]}>

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
            {candidato.numeroCandidato}
            <Text>
              {candidato.nomeCandidato}
            </Text>
            <Text>
              {candidato.numeroCandidato}
            </Text>
          </Box>
        </TouchableOpacity>
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
              Deseja confirmar seu voto no candidato {candidato?.nomeCandidato}{candidato?.numeroCandidato}
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button bg={"red.700"} _text={{ color: "white" }} variant="ghost" colorScheme="blueGray" onPress={() => {
                  setShowModal(false);
                }}>
                  Cancelar
                </Button>
                <Button bg={"green.500"} onPress={() => {
                  cadastrarVoto(Number(usuario.id), id, Number(selectCandidato))
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
