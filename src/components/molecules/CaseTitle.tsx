import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";

import { COLORS } from "../../config/colors";

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
  return (
    <Flex flexDir="column" gap="30px" alignItems="center" justifyItems="center">
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
