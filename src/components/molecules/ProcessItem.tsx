import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

import { COLORS } from "../../config/colors";

import StyledText from "../atoms/StyledText";
import useI9Animation from "../../hooks/useI9Animation";

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
}: ProcessItemProps) => {
  const { control, ref } = useI9Animation({
    initialState: "hidden",
    finalState: "visible",
    customOptions: {
      rootMargin: "100px 0px",
    },
  });

  const variants: Variants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
    hidden: { opacity: 0, scale: 0, y: 200 },
  };

  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      flexDir={imgPosition == "left" ? "row" : "row-reverse"}
      alignItems="center"
      as={motion.div}
      initial="hidden"
      variants={variants}
      ref={ref}
      animate={control}
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
          size="20px"
          lineHeight="30px"
          key={"description"}
          textAlign="center"
        />
      </Flex>
    </Flex>
  );
};

export default ProcessItem;
