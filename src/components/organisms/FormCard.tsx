import { Card, CardBody, CardHeader, Flex } from "@chakra-ui/react";
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
      py="60px"
      px="40px"
      bgColor={COLORS.WHITE}
      boxShadow="0px 0px 12px rgba(0, 0, 0, 0.1)"
      w="100%"
    >
      <CardBody flexDirection="column" display="flex">
        <StyledText
          boldColor={COLORS.PRIMARY}
          regularColor={COLORS.PRIMARY}
          size="20px"
          regularWeight={500}
          text={title}
          textAlign="center"
          lineHeight="35px"
        />
        <StyledText
          boldColor={COLORS.TEXT}
          regularColor={COLORS.TEXT}
          size="16px"
          regularWeight={500}
          text={description}
          textAlign="center"
        />
        <Form formFields={fields} />
        <Flex pt={25}>
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
