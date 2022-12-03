import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

import ProcessItem, { ProcessItemProps } from "../molecules/ProcessItem";

export type ProcessFlowProps = {
  processItems: Omit<ProcessItemProps, "imgPosition">[];
};

const ProcessFlow = ({ processItems }: ProcessFlowProps) => (
  <Flex width="100%" flexDirection="column" gap={30}>
    {processItems.map((item, index) => (
      <Flex
        key={`process-item-${index}`}
        flexDir="column"
        alignItems="center"
        pos="relative"
      >
        <ProcessItem
          {...item}
          imgPosition={index % 2 === 0 ? "left" : "right"}
        />
        {index !== processItems.length - 1 && (
          <Flex
            w="100%"
            pos="absolute"
            bottom={-180}
            left={0}
            justifyContent="center"
          >
            <Image
              src={
                index % 2 === 0 ? "/images/lt-conn.svg" : "/images/rg-conn.svg"
              }
              alt="Connect"
              unoptimized
              width={200}
              height={300}
              priority
            />
          </Flex>
        )}
      </Flex>
    ))}
  </Flex>
);

export default ProcessFlow;
