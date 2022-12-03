import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { COLORS } from "../../config/colors";
import StyledText from "../atoms/StyledText";

export type ProcessItemProps = {
  title: string;
  description: string;
  imgPath: string;
  imgAlt: string;
  imgPosition: "left" | "right";
};

const ProcessItem = ({
  description,
  imgAlt,
  imgPath,
  imgPosition,
  title,
}: ProcessItemProps) => (
  <Flex
    w="100%"
    justifyContent="space-between"
    flexDir={imgPosition == "left" ? "row" : "row-reverse"}
    alignItems="center"
  >
    <Flex alignItems="center" justifyContent="center" flex={1}>
      <Image
        src={imgPath}
        alt={imgAlt}
        unoptimized
        width={400}
        height={400}
        priority
      />
    </Flex>
    <Flex
      flex={1}
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      gap={30}
    >
      <StyledText
        text={title}
        boldColor={COLORS.PRIMARY}
        regularColor={COLORS.TEXT}
        size="30px"
        lineHeight="30px"
        key={"title"}
        textAlign="center"
      />
      <StyledText
        text={description}
        boldColor={COLORS.PRIMARY}
        regularColor={COLORS.TEXT}
        size="22px"
        lineHeight="30px"
        key={"description"}
        textAlign="center"
      />
    </Flex>
  </Flex>
);

export default ProcessItem;
