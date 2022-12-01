import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { ReactSVG } from "react-svg";

import { COLORS } from "../../config/colors";
import StyledText from "../atoms/StyledText";

const Info = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      gap="70px"
      height={"calc(100vh - 160px)"}
    >
      <Flex flexDir="column" flex={1} gap="20px" justifyContent="left">
        <StyledText
          text="Transformamos a sua *<br>* *<b>ideia<b>* em *<b>negócio<b>*"
          boldColor={COLORS.PRIMARY}
          regularColor={COLORS.TEXT}
          size="45px"
        />
        <StyledText
          text="A I9 ajuda você a *<b>construir o seu produto<b>* e *<br>* coloca-lo no mercado, para  *<b>começar a faturar o<b>* *<br>* *<b>mais rápido possível.<b>*"
          boldColor={COLORS.TEXT}
          regularColor={COLORS.TEXT}
          size="18px"
          lineHeight="30px"
        />
      </Flex>
      <Flex alignItems="center" justifyContent="center" flex={1}>
        <Image
          src="/images/rocket.gif"
          alt="Construa seu produto e faça ele decolar!"
          unoptimized
          width={450}
          height={450}
        />
      </Flex>
    </Flex>
  );
};

export default Info;
