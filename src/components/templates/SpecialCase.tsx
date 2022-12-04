import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

import { COLORS } from "../../config/colors";

import ImageCard from "../molecules/ImageCard";
import CaseTitle from "../molecules/CaseTitle";
import useI9Animation from "../../hooks/useI9Animation";
import { motion, Variants } from "framer-motion";

type SpecialCaseProps = {
  title: string;
  subtitle: string;
  callToActionLabel: string;
  description: string;
  imagePath: string;
  casePath: `/${string}`;
};

const SpecialCase = ({
  callToActionLabel,
  description,
  imagePath,
  subtitle,
  title,
  casePath,
}: SpecialCaseProps) => {
  const value = useBreakpointValue({
    base: -200,
    md: -200,
    lg: 200,
  });

  const { control, ref } = useI9Animation({
    initialState: "hidden",
    finalState: "visible",
  });

  const variants: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "linear" },
    },
    hidden: { opacity: 0, x: value },
  };

  return (
    <Box>
      <Box
        px="10%"
        bgColor={COLORS.PRIMARY}
        justifyContent="space-between"
        alignItems="center"
        display="flex"
        py={100}
        flexDirection={["column", "column", "row"]}
      >
        <Flex flex={1}>
          <CaseTitle
            callToActionLabel={callToActionLabel}
            casePath={casePath}
            title={title}
            subtitle={subtitle}
          />
        </Flex>
        <Flex
          flex={1}
          as={motion.div}
          animate={control}
          ref={ref}
          variants={variants}
          initial="hidden"
        >
          <ImageCard imagePath={imagePath} description={description} />
        </Flex>
      </Box>
    </Box>
  );
};

export default SpecialCase;
