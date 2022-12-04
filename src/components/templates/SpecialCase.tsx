import { Box, Flex } from "@chakra-ui/react";

import { COLORS } from "../../config/colors";

import ImageCard from "../molecules/ImageCard";
import CaseTitle from "../molecules/CaseTitle";

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
  return (
    <Box>
      <Box
        px="10%"
        bgColor={COLORS.PRIMARY}
        justifyContent="space-between"
        alignItems="center"
        display="flex"
        py={100}
      >
        <Flex flex={1}>
          <CaseTitle
            callToActionLabel={callToActionLabel}
            casePath={casePath}
            title={title}
            subtitle={subtitle}
          />
        </Flex>
        <Flex flex={1}>
          <ImageCard imagePath={imagePath} description={description} />
        </Flex>
      </Box>
    </Box>
  );
};

export default SpecialCase;
