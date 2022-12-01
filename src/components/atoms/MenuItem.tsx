import Link from "next/link";
import { COLORS } from "../../config/colors";
import { poppins } from "../../config/fonts";

type MenuItemProps = {
  name: string;
  link: string;
  selected?: boolean;
};

const MenuItem = ({ link, name, selected }: MenuItemProps) => {
  return (
    <Link
      href={link}
      passHref
      style={{
        fontWeight: selected ? "700" : "500",
        fontFamily: poppins.style.fontFamily,
        color: selected ? COLORS.PRIMARY : COLORS.TEXT,
        textDecoration: "none",
      }}
    >
      {name}
    </Link>
  );
};

export default MenuItem;
