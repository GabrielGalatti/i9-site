import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { COLORS } from "../../config/colors";
import { FormField } from "../../types/FormField";
import { ControlledInputProps } from "../atoms/ControlledInput";
import { useForm } from "react-hook-form";
import StyledText from "../atoms/StyledText";
import Form from "../molecules/Form";
import CommonButton from "../atoms/CommonButton";

type FormCardProps = {
  title: string;
  description: string;
  formFields: FormField[];
  submitLabel: string;
  submit: (data: any) => void;
};

const FormCard = ({
  title,
  description,
  formFields,
  submitLabel,
  submit,
}: FormCardProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { titleSize, textSize } = useBreakpointValue({
    base: { titleSize: "14px", textSize: "14px" },
    md: { titleSize: "16px", textSize: "14px" },
    lg: { titleSize: "20px", textSize: "16px" },
  }) as { titleSize: `${number}px`; textSize: `${number}px` };

  const fields: ControlledInputProps[] = useMemo(() => {
    return formFields.map((f) => ({
      ...f,
      registerProps: register(f.name, { required: f.required || false }),
      errorMessage: (errors[f.name]?.message as string) || undefined,
    }));
  }, [formFields, register, errors]);

  return (
    <Card
      borderRadius="20px"
      py={["20px", "40px", "60px"]}
      px={["10px", "20px", "40px"]}
      bgColor={COLORS.WHITE}
      boxShadow="0px 0px 12px rgba(0, 0, 0, 0.1)"
      w="100%"
    >
      <CardBody flexDirection="column" display="flex" gap="20px">
        <StyledText
          boldColor={COLORS.PRIMARY}
          regularColor={COLORS.PRIMARY}
          size={titleSize}
          regularWeight={500}
          text={title}
          textAlign="center"
          lineHeight={textSize !== "20px" ? "25px" : "35px"}
        />
        <StyledText
          boldColor={COLORS.TEXT}
          regularColor={COLORS.TEXT}
          size={textSize}
          regularWeight={500}
          text={description}
          textAlign="center"
          lineHeight={textSize !== "18px" ? "25px" : undefined}
        />
        <Form formFields={fields} />
        <Flex>
          <CommonButton
            label={submitLabel}
            onClick={handleSubmit(submit)}
            hoverColor={COLORS.PRIMARY}
            fullwidth
          />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default FormCard;
