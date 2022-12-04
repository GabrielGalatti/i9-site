import { VStack } from "@chakra-ui/react";
import ControlledInput, {
  ControlledInputProps,
} from "../atoms/ControlledInput";

type FormProps = {
  formFields: ControlledInputProps[];
};

const Form = ({ formFields }: FormProps) => {
  return (
    <VStack w="100%" spacing={25}>
      {formFields.map((field) => (
        <ControlledInput {...field} key={field.name} />
      ))}
    </VStack>
  );
};

export default Form;
