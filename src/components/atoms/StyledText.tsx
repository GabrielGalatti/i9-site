import { Text, TextProps, Flex } from "@chakra-ui/react";
import { COLORS } from "../../config/colors";
import { poppins } from "../../config/fonts";

type StyledTextProps = {
  text: string;
  boldColor: COLORS;
  regularColor: COLORS;
  size: `${number}px`;
  lineHeight?: `${number}px`;
};

const StyledText = ({
  text,
  boldColor,
  regularColor,
  size,
  lineHeight = "64px",
}: StyledTextProps) => {
  const titleSplitted = text.split("*");
  const COMMON_TEXT_PROPS: TextProps = {
    fontFamily: poppins.style.fontFamily,
    fontSize: size,
    display: "inline-block",
    lineHeight,
  };

  const wordStyles: { [key: string]: TextProps } = {
    bold: {
      as: "span",
      fontWeight: "bold",
      color: boldColor,
      ...COMMON_TEXT_PROPS,
    },
    regular: {
      fontWeight: 400,
      color: regularColor,
      ...COMMON_TEXT_PROPS,
    },
  };

  const getWordFormatted = (word: string) => {
    if (word.includes("<b>"))
      return (
        <Text key={word} {...wordStyles.bold}>
          {removeWordStyles(word)}
        </Text>
      );
    else if (word.includes("<br>")) {
      return <br />;
    } else return removeWordStyles(word);
  };

  const removeWordStyles = (word: string) => {
    return word
      .replaceAll("*", "")
      .replaceAll(" (br) ", "<br>")
      .replaceAll("<b>", "");
  };

  return (
    <Text flex={1} {...wordStyles.regular}>
      {titleSplitted.map((word) => (
        <>{getWordFormatted(word)}</>
      ))}
    </Text>
  );
};

export default StyledText;
