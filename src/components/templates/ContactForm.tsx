import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { COLORS } from "../../config/colors";
import useI9Animation from "../../hooks/useI9Animation";
import { FormField } from "../../types/FormField";
import StyledText from "../atoms/StyledText";
import FormCard from "../organisms/FormCard";

type ContactFormProps = {
  bgPath: `/${string}`;
  pageTitle: string;
  formFields: FormField[];
  formTitle: string;
  formDescription: string;
  onSubmit: (data: any) => void;
  submitLabel: string;
};

const ContactForm = ({
  bgPath,
  formFields,
  formDescription,
  formTitle,
  onSubmit,
  pageTitle,
  submitLabel,
}: ContactFormProps) => {
  const { control, ref } = useI9Animation({
    initialState: "hidden",
    finalState: "visible",
  });

  const titleSize = useBreakpointValue({
    base: "20px",
    md: "30px",
    lg: "40px",
  }) as `${number}px`;

  const variants: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "linear" },
    },
    hidden: { opacity: 0, x: "-10%" },
  };
  return (
    <Box w="100%" bgImage={bgPath} bgRepeat="repeat-y" bgSize="100%">
      <Flex
        px="10%"
        py="5%"
        justifyContent="space-between"
        alignItems="center"
        gap={50}
        flexDirection={["column", "column", "row"]}
      >
        <Flex
          flex={1}
          as={motion.div}
          animate={control}
          variants={variants}
          ref={ref}
          initial="hidden"
        >
          <Box bgColor={COLORS.PRIMARY} px={"40px"} py="60px" borderRadius={20}>
            <StyledText
              boldColor={COLORS.SECONDARY}
              regularColor={COLORS.WHITE}
              size={titleSize}
              lineHeight={titleSize !== "40px" ? "30px" : undefined}
              regularWeight={500}
              text={pageTitle}
            />
          </Box>
        </Flex>
        <Flex flex={1}>
          <FormCard
            title={formTitle}
            description={formDescription}
            submitLabel={submitLabel}
            formFields={formFields}
            submit={onSubmit}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactForm;
