import { Flex } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";

import { COLORS } from "../../config/colors";
import useI9Animation from "../../hooks/useI9Animation";

import CommonButton from "../atoms/CommonButton";
import StyledText from "../atoms/StyledText";

type CaseTitleProps = {
  title: string;
  subtitle: string;
  callToActionLabel: string;
  casePath: `/${string}`;
};

const CaseTitle = ({
  title,
  callToActionLabel,
  casePath,
  subtitle,
}: CaseTitleProps) => {
  const router = useRouter();
  const { ref, control } = useI9Animation({
    initialState: "hidden",
    finalState: "visible",
    customOptions: {
      delay: 500,
    },
  });

  const variants: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "linear" },
    },
    hidden: { opacity: 0, x: -200 },
  };

  return (
    <Flex
      as={motion.div}
      animate={control}
      variants={variants}
      initial="hidden"
      ref={ref}
      flexDir="column"
      gap="30px"
      alignItems="center"
      justifyItems="center"
    >
      <Flex flexDir="column">
        <StyledText
          text={title}
          boldColor={COLORS.SECONDARY}
          regularColor={COLORS.WHITE}
          size="45px"
          textAlign="center"
        />
        <StyledText
          text={subtitle}
          boldColor={COLORS.WHITE}
          regularColor={COLORS.WHITE}
          size="45px"
          textAlign="center"
        />
      </Flex>
      <CommonButton
        label={callToActionLabel}
        iconPosition="right"
        onClick={() => router.push(casePath)}
        icon={BsArrowRight}
        hoverColor={COLORS.SECONDARY}
      />
    </Flex>
  );
};

export default CaseTitle;
