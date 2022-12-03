import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { AiFillFire } from "react-icons/ai";
import { COLORS } from "../../config/colors";
import { poppins } from "../../config/fonts";

import BgEllipse from "../atoms/BgEllipse";
import Header from "../organisms/Header";
import Info from "../organisms/Info";

type HomeTemplateProps = {
  title: string;
  description: string;
  menuItens: string[];
  callToActionLabel: string;
};

const HomeTemplate = ({
  description,
  title,
  menuItens,
  callToActionLabel,
}: HomeTemplateProps) => (
  <Box px="10%" pos="relative" h="100vh">
    <Box pos="absolute" right="0" top="0" zIndex={0}>
      <BgEllipse />
    </Box>
    <Header menuItens={menuItens} />
    <Info title={title} description={description} />
    <Flex pos="absolute" right="2%" bottom="2%" zIndex={1000}>
      <Button
        leftIcon={<Icon as={AiFillFire} color="currentcolor" />}
        fontFamily={poppins.style.fontFamily}
        color={COLORS.PRIMARY}
        bgColor={COLORS.SECONDARY}
        border="none"
        py="15px"
        px="30px"
        fontWeight={600}
        borderRadius={10}
        boxShadow="2xl"
        _hover={{ bgColor: COLORS.PRIMARY, color: COLORS.SECONDARY }}
        cursor="pointer"
      >
        {callToActionLabel}
      </Button>
    </Flex>
  </Box>
);

export default HomeTemplate;
