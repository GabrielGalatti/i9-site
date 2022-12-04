import { Box, Flex, Icon } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { COLORS } from "../../config/colors";
import Logo from "../atoms/Logo";
import StyledText from "../atoms/StyledText";

type FooterProps = {
  footerText: string;
  instagramLink: string;
};

const Footer = ({ footerText, instagramLink }: FooterProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px="5%"
      py="20px"
      bgColor={COLORS.PRIMARY}
    >
      <Flex h="50px">
        <Logo color={COLORS.WHITE} />
      </Flex>
      <StyledText
        regularColor={COLORS.WHITE}
        text={footerText}
        size="16px"
        textAlign="center"
        lineHeight="16px"
      />
      <a href={instagramLink}>
        <Icon as={BsInstagram} color={COLORS.WHITE} boxSize={20} />
      </a>
    </Box>
  );
};

export default Footer;
