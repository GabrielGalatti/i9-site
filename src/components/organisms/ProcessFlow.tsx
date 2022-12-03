import { Flex } from "@chakra-ui/react";
import ProcessItem, { ProcessItemProps } from "../molecules/ProcessItem";

export type ProcessFlowProps = {
  processItems: Omit<ProcessItemProps, "imgPosition">[];
};

const ProcessFlow = ({ processItems }: ProcessFlowProps) => (
  <Flex width="100%" flexDirection="column">
    {processItems.map((item, index) => (
      <ProcessItem
        {...item}
        imgPosition={index % 2 === 0 ? "left" : "right"}
        key={`process-item-${index}`}
      />
    ))}
  </Flex>
);

export default ProcessFlow;
