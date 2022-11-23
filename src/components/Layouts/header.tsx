import {
  Flex,
  Button,
  Text,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Avatar,
  Wrap,
  WrapItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import SideBar from "../SidebarNav";

export default function Header() {
  setTimeout(() => {
    Aos.init({ duration: 1200 });
  }, 1500);

  const {
    isOpen: isOpenSideBar,
    onOpen: onOpenSideBar,
    onClose: onCloseSideBar,
  } = useDisclosure();
  return (
    <Flex
      h="auto"
      w="auto"
      data-aos="fade-right"
      align="center"
      justify="space-between"
    >
      <Wrap align="center">
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="/Image/murilo.jpg" />
        </WrapItem>
        <Text color="white" fontWeight="bold" fontSize="18px">
          Bem-vindo, Murilo
        </Text>
      </Wrap>
      <Flex
        onClick={onOpenSideBar}
        variant="unstyled"
        as={Button}
        h="25px"
        justify="space-evenly"
        color="white"
        fontWeight="bold"
        fontSize="18px"
        direction="column"
        data-aos="fade-left"
        mr="0.8rem"
      >
        <Flex w="30px" color="red" borderWidth="2px" data-aos="fade-left" />
        <Flex w="30px" color="red" borderWidth="2px" data-aos="fade-left" />
        <Flex w="30px" color="red" borderWidth="2px" data-aos="fade-left" />
        <SideBar
          isOpenSideBar={isOpenSideBar}
          onCloseSideBar={onCloseSideBar}
        />
      </Flex>
    </Flex>
  );
}
