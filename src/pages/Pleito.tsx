import ImagemFundo from "@/components/ImagemDeFundo/ImagemFundo";
import { RouteProp, useRoute } from "@react-navigation/native";
import axios, { AxiosResponse } from "axios";
import { Box, Button, Center, Modal, Progress, Text } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Titulo } from "../Componentes/Titulo/Titulo";
import { RootState } from "../redux/store";
import { RootStackParamList } from "../router/TypesRoutes";

type PleitoRouteProp = RouteProp<RootStackParamList, "Pleito">;

interface IVencedor {
  nomePleito: string;
  candidatoNome: string;
  totalVotos: string;
  votosPleito: string;
}

export interface Candidato {
  id: number,
  nomeCandidato: string,
  numeroCandidato: number
}

export interface IPleitoVo {
  id: number,
  nomePleito: string,
  status: string,
  data_termino: string,
  data_inicio: string
}

export default function Pleito() {
  const usuario = useSelector((state: RootState) => state.user)
  const route = useRoute<PleitoRouteProp>();
  const [selectCandidato, setSelectCandidato] = useState<number | null>(null)
  const [candidato, setCandidato] = useState<Candidato>()
  const [candidatos, setCandidatos] = useState<Candidato[]>([]);
  const { id } = route.params;
  const isSelected = setSelectCandidato === id;
  const [showModal, setShowModal] = useState(false);
  const [confirmarVoto, setConfirmarVoto] = useState<boolean>(false)
  const [pleitoVO, setPleitoVo] = useState<IPleitoVo | null>()
  const [vencedor, setVencedor] = useState<IVencedor>()

  const selecionadoCandidato = (candidato: Candidato) => {
    setShowModal(true)
    setCandidato(candidato)
    setSelectCandidato(candidato.numeroCandidato === selectCandidato ? null : candidato.numeroCandidato)
  }


  useEffect(() => {
    const fetchPleito = async () => {
      const url = `https://e-urna-back.onrender.com/pleito/buscarPleitoId/${id}`

      try {
        const response: AxiosResponse<IPleitoVo> = await axios.post(url, { timeout: 500 });
        console.log("Requisição feita com sucesso, PleitoID")
        setPleitoVo(response.data)
        if (response.data.status === "ENCERRADO") {
          buscarGanhadorPleito()
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
    }
    fetchPleito()
  }, [id])

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

  const buscarGanhadorPleito = async () => {
    const url = `https://e-urna-back.onrender.com/pleito/ganhadorPleito/${id}`

    try {
      const response: AxiosResponse<IVencedor> = await axios.get(url)
      console.log("Requisição feita com sucesso, Vencedor")
      setVencedor(response.data)

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
      setConfirmarVoto(true)

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

  const alterarValorConfirmVoto = () => {
    setConfirmarVoto(false)
  }


  return (
    <ImagemFundo>
      {pleitoVO?.status === "ATIVO" ?
        <>
          <Titulo underline w={"100%"} borderTopColor={"gold"} borderWidth={5} bg={"#4169E1"} textAlign={"center"} fontSize={30}>
            Candidatos
          </Titulo>
          <Text fontSize={20}>Selecione o candidato para votar</Text>
        </> : ""}
      {pleitoVO?.status === "ENCERRADO" ?
        <Box width={"100%"} p={5} borderRadius={25} alignItems={"center"} mt={10} w={"100%"} bg={"rgba(0,0,0,0.3)"}>
          <Titulo underline w={"100%"} borderTopColor={"gold"} borderWidth={5} bg={"#4169E1"} color={"white"} textAlign={"center"} fontSize={30}>
            Pleito Encerrado
          </Titulo>
          <Text color={"yellow.400"} fontWeight={"bold"} fontSize={30}>{vencedor?.candidatoNome ? "Vencedor" : "Nenhum registro de candidato"}</Text>
          <Titulo p={2} color={"black"} fontSize={30}>{vencedor?.candidatoNome}</Titulo>
          <Text fontWeight={"bold"} color={"black"} fontSize={30}>{vencedor?.totalVotos ? `Votos ${vencedor.totalVotos}` : ""}</Text>
        </Box> : candidatos.map((candidato) =>
          <>
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
          </>
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
        <ProgressoVotoModal modal={confirmarVoto} alterarModal={alterarValorConfirmVoto} />
      </Center>
    </ImagemFundo>
  );
}

interface IProgressoVotoModalProps {
  modal: boolean;
  alterarModal: () => void
}


function ProgressoVotoModal({ modal, alterarModal }: IProgressoVotoModalProps) {
  const [cotador, setContador] = useState<number>(0);
  const [showModal, setShowModal] = useState(modal)



  useEffect(() => {
    setShowModal(modal)

    const carregarContador = () => {
      setContador((prev) => prev + 10)

    };

    carregarContador(); // Executa a função ao montar o componente
    if (modal) {
      const intervalId = setInterval(carregarContador, 2000); // Atualiza a cada 1 segundo (3000 ms)
      return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    } else {
      setContador(0)
    }
  }, [modal]);


  return (
    <Modal isOpen={modal} _backdrop={{
      _dark: {
        bg: "coolGray.800"
      },
      bg: "warmGray.50"
    }}>
      <Modal.Content maxWidth="350" maxH="212">
        <Modal.CloseButton />
        <Modal.Header>
          {cotador <= 100 ? <Text color={"green.900"} fontSize={20}>Processando voto....</Text> : <Text color={"green.900"} fontSize={20}>Voto computado!</Text>}
        </Modal.Header>
        <Modal.Body alignItems={"center"}>
          <Progress height={5} width={200} bg="coolGray.900" _filledTrack={{
            bg: "green.700"
          }} value={cotador} mx="4" />
          {cotador >= 100 ? <Button mt={5} onPress={alterarModal}>Fechar</Button> : ""}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
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
