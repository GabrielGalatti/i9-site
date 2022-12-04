import { As } from "@chakra-ui/react";

export type FormField = {
  name: string;
  placeholder: string;
  label: string;
  icon?: As<any>;
  inputType?: React.HTMLInputTypeAttribute;
  required: boolean;
};
