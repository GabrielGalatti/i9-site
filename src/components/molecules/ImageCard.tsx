import { Box } from "@chakra-ui/react";

import { COLORS } from "../../config/colors";
import StyledText from "../atoms/StyledText";

type ImageCardProps = {
  imagePath: string;
  description: string;
};

const ImageCard = ({ description, imagePath }: ImageCardProps) => (
  <Box bgColor={COLORS.WHITE} borderRadius="20px" p="30px">
    <Box
      bgImg={imagePath}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="contain"
      mb="30px"
      w="100%"
      h="200px"
    ></Box>
    <StyledText
      text={description}
      boldColor={COLORS.TEXT}
      regularColor={COLORS.TEXT}
      size="16px"
      lineHeight="30px"
      key={"description"}
    />
  </Box>
);

export default ImageCard;
