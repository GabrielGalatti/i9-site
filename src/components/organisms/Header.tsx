import { Flex } from "@chakra-ui/react";
import Logo from "../atoms/Logo";
import Menu from "../molecules/Menu";

const Header = () => {
  return (
    <Flex
      py="40px"
      justifyContent="space-between"
      alignItems="center"
      zIndex={100}
      pos="relative"
    >
      <Logo />
      <Menu itens={["HOME", "PORTFÓLIO", "PROCESSOS", "BLOG"]} />
    </Flex>
  );
};

export default Header;
