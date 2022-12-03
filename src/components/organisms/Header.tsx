import { Flex } from "@chakra-ui/react";
import Logo from "../atoms/Logo";
import Menu from "../molecules/Menu";

type HeaderProps = {
  menuItens: string[];
};

const Header = ({ menuItens }: HeaderProps) => {
  return (
    <Flex
      py="40px"
      justifyContent="space-between"
      alignItems="center"
      zIndex={100}
      pos="relative"
    >
      <Logo />
      <Menu itens={menuItens} />
    </Flex>
  );
};

export default Header;
