import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import { AiFillFire } from "react-icons/ai";
import { COLORS } from "../../config/colors";
import { poppins } from "../../config/fonts";

import BgEllipse from "../atoms/BgEllipse";
import CommonButton from "../atoms/CommonButton";
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
      <CommonButton
        label={callToActionLabel}
        onClick={() => {}}
        hoverColor={COLORS.PRIMARY}
        icon={AiFillFire}
        iconPosition="left"
      />
    </Flex>
  </Box>
);

export default HomeTemplate;
