import { As, Icon, Button } from "@chakra-ui/react";

import { COLORS } from "../../config/colors";
import { poppins } from "../../config/fonts";

type CommonButtonProps = {
  label: string;
  icon?: As<any>;
  onClick: () => void;
  iconPosition?: "left" | "right";
  hoverColor?: COLORS;
};

const CommonButton = ({
  label,
  onClick,
  icon,
  iconPosition,
  hoverColor = COLORS.PRIMARY,
}: CommonButtonProps) => {
  const getIconProps = () => {
    if (!icon) return {};
    else if (iconPosition === "right")
      return { rightIcon: <Icon as={icon} color="currentcolor" /> };
    else return { leftIcon: <Icon as={icon} color="currentcolor" /> };
  };

  return (
    <Button
      {...getIconProps()}
      fontFamily={poppins.style.fontFamily}
      color={COLORS.PRIMARY}
      bgColor={COLORS.SECONDARY}
      border="none"
      py="15px"
      px="30px"
      fontWeight={600}
      borderRadius={10}
      boxShadow="2xl"
      _hover={{
        bgColor: hoverColor,
        color: hoverColor == COLORS.PRIMARY ? COLORS.SECONDARY : COLORS.PRIMARY,
      }}
      cursor="pointer"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CommonButton;
