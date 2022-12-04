import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

import { COLORS } from "../../config/colors";
import StyledText from "../atoms/StyledText";
import TechDivider from "../atoms/TechDivider";

type InfoProps = {
  title: string;
  description: string;
};

type TextResponsive = {
  titleSize: `${number}px`;
  textSize: `${number}px`;
  titleAlign: "center" | "left";
  lineHeigh?: `${number}px`;
};

const Info = ({ description, title }: InfoProps) => {
  const { titleSize, textSize, titleAlign, lineHeigh } = useBreakpointValue({
    base: {
      titleSize: "28px",
      textSize: "18px",
      titleAlign: "center",
      lineHeigh: "35px",
    },
    md: { titleSize: "40px", textSize: "18px", titleAlign: "center" },
    lg: { titleSize: "45px", textSize: "18px", titleAlign: "left" },
  }) as TextResponsive;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      gap="70px"
      height={titleAlign === "center" ? "auto" : "calc(100vh - 160px)"}
      zIndex={10}
      position="relative"
      flexDirection={["column-reverse", "column-reverse", "row"]}
    >
      <Flex
        flexDir="column"
        flex={titleAlign === "center" ? undefined : 1}
        gap="20px"
        justifyContent="left"
        pos="relative"
      >
        <StyledText
          text={title}
          boldColor={COLORS.PRIMARY}
          regularColor={COLORS.TEXT}
          size={titleSize}
          textAlign={titleAlign}
          key={"title"}
          lineHeight={lineHeigh}
        />
        <StyledText
          text={description}
          boldColor={COLORS.TEXT}
          regularColor={COLORS.TEXT}
          size={textSize}
          lineHeight="30px"
          textAlign={titleAlign}
          key={"description"}
        />
        <Flex pos="absolute" left={0} bottom={-30}>
          <TechDivider />
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        flex={titleAlign === "center" ? undefined : 1}
      >
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
