import { Box, Flex } from "@chakra-ui/react";

import { COLORS } from "../../config/colors";

import StyledText from "../atoms/StyledText";
import { ProcessItemProps } from "../molecules/ProcessItem";
import ProcessFlow from "../organisms/ProcessFlow";

type ProcessProps = {
  processItems: Omit<ProcessItemProps, "imgPosition">[];
  title: string;
  bgPath: string;
};

const Process = ({ bgPath, processItems, title }: ProcessProps) => (
  <Box pos="relative" h="100vh" pt="50px">
    <Box
      w="100"
      bgColor={COLORS.PRIMARY}
      py="25px"
      display="flex"
      justifyContent="center"
    >
      <StyledText
        boldColor={COLORS.SECONDARY}
        regularColor={COLORS.WHITE}
        size="35px"
        text={title}
        textAlign="center"
      />
    </Box>
    <Box w="100%" bgImage={bgPath} bgRepeat="repeat-y" bgSize="100%">
      <Flex px="10%" pt="5%">
        <ProcessFlow processItems={processItems} />
      </Flex>
    </Box>
  </Box>
);

export default Process;
