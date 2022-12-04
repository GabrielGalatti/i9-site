import { Box, Flex } from "@chakra-ui/react";
import { COLORS } from "../../config/colors";
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
  return (
    <Box w="100%" bgImage={bgPath} bgRepeat="repeat-y" bgSize="100%">
      <Flex
        px="10%"
        py="5%"
        justifyContent="space-between"
        alignItems="center"
        gap={50}
      >
        <Flex flex={1}>
          <Box bgColor={COLORS.PRIMARY} px={40} py={80} borderRadius={20}>
            <StyledText
              boldColor={COLORS.SECONDARY}
              regularColor={COLORS.WHITE}
              size="40px"
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
