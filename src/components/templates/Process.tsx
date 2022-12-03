import { Box, Flex } from "@chakra-ui/react";
import { COLORS } from "../../config/colors";
import StyledText from "../atoms/StyledText";
import ProcessFlow, { ProcessFlowProps } from "../organisms/ProcessFlow";

const PROCESS_FLOW: ProcessFlowProps = {
  processItems: [
    {
      title: "*<b>Meeting<b>*",
      description:
        "Uma reunião de 1 hora para conhecermos o *<br>* *<b>inovador e seu produto.<b>*",
      imgAlt: "Meeting",
      imgPath: "/images/meeting.svg",
    },
    {
      title: "*<b>Planning<b>*",
      description:
        "Em conjunto com o inovador, *<b>criamos alternativas<b>* *<br>* *<b>para o lançamento no mercado com menor custo<b>* *<br>* *<b>e no menor tempo.<b>*",
      imgAlt: "Planning",
      imgPath: "/images/planning.svg",
    },
    {
      title: "*<b>Prototyping<b>*",
      description:
        "Preparar, apontar... já! A prototipação do produto *<br>* é iniciada, focando na *<b>melhor experiência de<b>* *<br>* *<b>usuário possível e com uma identidade visual<b>* *<br>* *<b>focada no seu público alvo.<b>*",
      imgAlt: "Prototyping",
      imgPath: "/images/prototyping.svg",
    },
    {
      title: "*<b>Developing<b>*",
      description:
        "Com os *<b>desenvolvedores mais criativos do<b>* *<br>* *<b>mercado<b>*, o produto toma forma, enquanto as *<br>* linhas de código surgem. ",
      imgAlt: "Developing",
      imgPath: "/images/developing.svg",
    },
    {
      title: "*<b>Deploy<b>*",
      description:
        "O lançamento é iniciado!!! Estaremos te *<br>* acompanhando de perto para ajudar a *<b>atrair<b>* *<br>* *<b>novos clientes para seu produto!<b>*",
      imgAlt: "Deploy",
      imgPath: "/images/deploy.svg",
    },
  ],
};

const Process = () => (
  <Box pos="relative" h="100vh" pt="50px">
    <Box
      w="100"
      bgColor={COLORS.PRIMARY}
      py="25px"
      display="flex"
      justifyContent="center"
    >
      <StyledText
        boldColor={COLORS.SECONDARY}
        regularColor={COLORS.WHITE}
        size="35px"
        text="*<b>Seu produto<b>* no mercado em *<b>5 passos<b>*"
        textAlign="center"
      />
    </Box>
    <Box
      w="100%"
      bgImage="/images/circuit-bg.png"
      bgRepeat="repeat-y"
      bgSize="100%"
    >
      <Flex px="10%" pt="5%">
        <ProcessFlow {...PROCESS_FLOW} />
      </Flex>
    </Box>
  </Box>
);

export default Process;
