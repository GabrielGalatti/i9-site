import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo, useCallback } from "react";
import MenuItem from "../atoms/MenuItem";

type MenuProps = {
  itens: string[];
};

const Menu = ({ itens }: MenuProps) => {
  const router = useRouter();

  const activePath = useMemo(() => {
    return router.pathname;
  }, [router]);

  const isRouteSelected = useCallback(
    (item: string) => {
      if (activePath === "/" && item === "HOME") return true;
      else return activePath === item;
    },
    [activePath]
  );

  return (
    <Flex gap={40}>
      {itens.map((item) => (
        <MenuItem
          link={item}
          name={item}
          key={item}
          selected={isRouteSelected(item)}
        />
      ))}
    </Flex>
  );
};

export default Menu;
