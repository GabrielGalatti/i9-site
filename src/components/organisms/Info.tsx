import { Flex } from "@chakra-ui/react";
import Image from "next/image";

import { COLORS } from "../../config/colors";
import StyledText from "../atoms/StyledText";
import TechDivider from "../atoms/TechDivider";

type InfoProps = {
  title: string;
  description: string;
};

const Info = ({ description, title }: InfoProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      gap="70px"
      height={"calc(100vh - 160px)"}
      zIndex={10}
      position="relative"
    >
      <Flex
        flexDir="column"
        flex={1}
        gap="20px"
        justifyContent="left"
        pos="relative"
      >
        <StyledText
          text={title}
          boldColor={COLORS.PRIMARY}
          regularColor={COLORS.TEXT}
          size="45px"
          key={"title"}
        />
        <StyledText
          text={description}
          boldColor={COLORS.TEXT}
          regularColor={COLORS.TEXT}
          size="18px"
          lineHeight="30px"
          key={"description"}
        />
        <Flex pos="absolute" left={0} bottom={-30}>
          <TechDivider />
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="center" flex={1}>
        <Image
          src="/images/rocket.svg"
          alt="Construa seu produto e faça ele decolar!"
          unoptimized
          width={450}
          height={450}
          priority
        />
      </Flex>
    </Flex>
  );
};

export default Info;
