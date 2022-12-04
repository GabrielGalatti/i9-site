import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputProps,
  Stack,
} from "@chakra-ui/react";

import { COLORS } from "../../config/colors";
import { poppins } from "../../config/fonts";

export type ControlledInputProps = {
  label: string;
  name: string;
  placeholder: string;
  errorMessage?: string;
  registerProps: InputProps;
  inputType?: React.HTMLInputTypeAttribute;
  LeftIcon?: (props: any) => JSX.Element;
};

const ControlledInput = ({
  label,
  name,
  placeholder,
  errorMessage,
  registerProps,
  inputType,
  LeftIcon,
}: ControlledInputProps) => {
  return (
    <FormControl isInvalid={!!errorMessage} w="100%">
      <FormLabel htmlFor={name} fontFamily={poppins.style.fontFamily} mb="10px">
        {label}
      </FormLabel>
      <Stack direction="row" spacing="10px" alignItems="center">
        {LeftIcon && <LeftIcon />}
        <Input
          id={name}
          // variant="flushed"
          px="20px"
          py="10px"
          flex={1}
          placeholder={placeholder}
          borderColor={"rgba(0, 52, 21, 0.5)"}
          fontFamily={poppins.style.fontFamily}
          type={inputType}
          borderRadius="10px"
          {...registerProps}
        />
      </Stack>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
export default ControlledInput;
