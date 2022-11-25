import {
  Flex,
  Button,
  Collapse,
  useDisclosure,
  Text,
  useBreakpointValue,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import LayoutMob from "../components/Layouts/layoutMobile";
import LayoutDesk from "../components/Layouts/layoutDesktop";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsPencilSquare, BsStack } from "react-icons/bs";
import { TfiStatsDown, TfiStatsUp, TfiClipboard } from "react-icons/tfi";
// import navStyles from "../components/mainNavBar/navBar.module.css";

export default function Home() {
  const { isOpen: isOpenIncome, onToggle: onToggleIncome } = useDisclosure();
  const { isOpen: isOpenExpense, onToggle: onToggleExpense } = useDisclosure();
  const { isOpen: isOpenTotal, onToggle: onToggleTotal } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  const Income = [
    {
      Nome: "Murilo",
      Tipo: "Salario",
      Valor: "R$ 1200,00",
    },
    {
      Nome: "Murilo",
      Tipo: "Salario",
      Valor: "R$ 1200,00",
    },
    {
      Nome: "Murilo",
      Tipo: "Salario",
      Valor: "R$ 1200,00",
    },
  ];

  return (
    <>
      {isWideVersion ? (
        <LayoutMob>
          <Flex direction="column" p="1rem" w="full" h="full">
            <Text
              align="center"
              fontSize="16px"
              fontWeight="bold"
              color="white"
              mb="1rem"
            >
              CARTEIRA 1
            </Text>
            {/* AQUI É OS GASTOS */}
            <Button
              alignItems="center"
              size="lg"
              borderRadius="6px"
              w="100%"
              h="40px"
              colorScheme="white"
              bgColor="#24293D"
              onClick={onToggleIncome}
              leftIcon={<TfiStatsUp />}
              rightIcon={
                isOpenExpense === true ? <IoIosArrowUp /> : <IoIosArrowDown />
              }
              mb="5px"
            >
              <Text fontWeight="medium" w="full" fontSize="16px">
                Rendas
              </Text>
            </Button>
            <Collapse in={isOpenIncome} animateOpacity>
              <Flex
                ml="0.5rem"
                w="95%"
                justify="space-between"
                fontSize="14px"
                color="white"
                p="4px"
                bgColor="#24293D"
                borderTopRadius="10px"
                borderBottomWidth="1px"
                borderColor="gray"
              >
                <Text>Nome</Text>
                <Text>Tipo</Text>
                <Text>Valor</Text>
                <Text>Ações</Text>
              </Flex>
              <Flex ml="0.5rem" w="95%" direction="column" bgColor="#24293D">
                {Income.map((value: any, index: any) => (
                  <>
                    <Flex
                      h="45px"
                      key={index}
                      align="center"
                      justify="space-between"
                      color="white"
                      // borderBottomWidth="0.5px"
                      w="full"
                      p="5px"
                      fontSize="12px"
                      borderBottomWidth="1px"
                      borderColor="gray"
                    >
                      <Flex>{value.Nome}</Flex>
                      <Flex>{value.Tipo}</Flex>
                      <Flex>{value.Valor}</Flex>
                      <Flex>
                        <BsPencilSquare size="20px" />
                      </Flex>
                    </Flex>
                  </>
                ))}
              </Flex>

              {/* <TableContainer>
                   <Table variant="unstyled" size="xsm">
                     <Thead>
                       <Tr>
                         <Th>
                           <Text
                             align="center"
                             fontSize="14px"
                             fontWeight="medium"
                           >
                             Nome
                           </Text>
                         </Th>
                         <Th>
                           <Text
                             align="center"
                             fontWeight="medium"
                             fontSize="14px"
                           >
                             Parcela
                           </Text>
                         </Th>
                         <Th>
                           <Text
                             align="center"
                             fontWeight="medium"
                             fontSize="14px"
                           >
                             Valor
                           </Text>
                         </Th>
                       </Tr>
                     </Thead>
                     <Tbody>
                       <Tr>
                         <Td>
                           <Text
                             fontWeight="bold"
                             align="center"
                             bgColor="#D9D9D9"
                             borderRadius="10px"
                             fontSize="14px"
                             p="2px"
                             color="#24293D"
                           >
                             Salário
                           </Text>
                         </Td>
                         <Td>
                           <Text
                             fontWeight="bold"
                             align="center"
                             bgColor="#D9D9D9"
                             p="2px"
                             borderRadius="10px"
                             color="#24293D"
                             fontSize="14px"
                           >
                             vazio
                           </Text>
                         </Td>
                         <Td>
                           <Text
                             fontWeight="bold"
                             align="center"
                             bgColor="#D9D9D9"
                             p="2px"
                             borderRadius="10px"
                             color="#24293D"
                             fontSize="14px"
                           >
                             R$ 1.200,00
                           </Text>
                         </Td>
                       </Tr>
                     </Tbody>
                   </Table>
                 </TableContainer> */}
            </Collapse>
            {/* AQUI É AS DESPESAS */}
            <Button
              mt="1rem"
              alignItems="center"
              size="lg"
              borderRadius="6px"
              w="100%"
              h="40px"
              colorScheme="white"
              bgColor="#24293D"
              onClick={onToggleExpense}
              mb="1rem"
              leftIcon={<TfiStatsDown />}
              rightIcon={
                isOpenExpense === true ? <IoIosArrowUp /> : <IoIosArrowDown />
              }
            >
              <Text
                mr="full"
                ml="full"
                fontWeight="medium"
                w="full"
                fontSize="16px"
              >
                Despesas
              </Text>
            </Button>
            <Collapse in={isOpenExpense} animateOpacity>
              <Flex
                direction="column"
                color="white"
                bgColor="#24293D"
                borderRadius="6px"
                mb="1rem"
                w="full"
                p="1rem"
              >
                <TableContainer>
                  <Table variant="unstyled" size="xsm">
                    <Thead>
                      <Tr>
                        <Th>
                          <Text
                            align="center"
                            fontSize="14px"
                            fontWeight="medium"
                          >
                            Nome
                          </Text>
                        </Th>
                        <Th>
                          <Text
                            align="center"
                            fontWeight="medium"
                            fontSize="14px"
                          >
                            Parcela
                          </Text>
                        </Th>
                        <Th>
                          <Text
                            align="center"
                            fontWeight="medium"
                            fontSize="14px"
                          >
                            Valor
                          </Text>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            borderRadius="10px"
                            fontSize="14px"
                            p="2px"
                            color="#24293D"
                          >
                            Conta de água
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            p="2px"
                            borderRadius="10px"
                            color="#24293D"
                            fontSize="14px"
                          >
                            1/12
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            p="2px"
                            borderRadius="10px"
                            color="#24293D"
                            fontSize="14px"
                          >
                            R$ 800,00
                          </Text>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Flex>
            </Collapse>
            {/* AQUI É OS TOTAIS */}
            <Button
              alignItems="center"
              size="lg"
              borderRadius="6px"
              w="100%"
              h="40px"
              colorScheme="white"
              bgColor="#24293D"
              onClick={onToggleTotal}
              mt="1rem"
              leftIcon={<TfiClipboard />}
              rightIcon={
                isOpenTotal === true ? <IoIosArrowUp /> : <IoIosArrowDown />
              }
            >
              <Text fontWeight="medium" w="full" fontSize="16px">
                Totais
              </Text>
            </Button>
            <Collapse in={isOpenTotal} animateOpacity>
              <Flex
                direction="column"
                color="white"
                bgColor="#24293D"
                borderRadius="6px"
                mb="1rem"
                w="full"
                p="1rem"
              >
                <TableContainer>
                  <Table variant="unstyled" size="xsm">
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                      <Tr>
                        <Th>
                          <Text
                            align="center"
                            fontSize="14px"
                            fontWeight="medium"
                          >
                            Nome
                          </Text>
                        </Th>
                        <Th>
                          <Text
                            align="center"
                            fontWeight="medium"
                            fontSize="14px"
                          >
                            Parcela
                          </Text>
                        </Th>
                        <Th>
                          <Text
                            align="center"
                            fontWeight="medium"
                            fontSize="14px"
                          >
                            Valor
                          </Text>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            borderRadius="10px"
                            fontSize="14px"
                            p="2px"
                            color="#24293D"
                          >
                            Conta de água
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            p="2px"
                            borderRadius="10px"
                            color="#24293D"
                            fontSize="14px"
                          >
                            1/12
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight="bold"
                            align="center"
                            bgColor="#D9D9D9"
                            p="2px"
                            borderRadius="10px"
                            color="#24293D"
                            fontSize="14px"
                          >
                            R$ 800,00
                          </Text>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Flex>
            </Collapse>
          </Flex>
        </LayoutMob>
      ) : (
        <LayoutDesk>
          AQUI SERÁ O DESKTOP
          {/* <Flex direction="column">
            <Button w="100%" mb="2rem" color="red" onClick={onToggle}>
              DESPESAS VARIAVEIS
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Flex mb="1rem" justify="space-between" w="100%">
                <Text mr="1rem">Conta de luz</Text>
                <Text>R$ 150,00</Text>
              </Flex>
              <Flex mb="1rem" justify="space-between" w="100%">
                <Text mr="1rem">Conta de agua</Text>
                <Text>R$ 80,00</Text>
              </Flex>
            </Collapse>
            <Button w="100%" color="green">
              DESPESAS FIXAS
            </Button>
          </Flex> */}
        </LayoutDesk>
      )}
    </>
  );
}
