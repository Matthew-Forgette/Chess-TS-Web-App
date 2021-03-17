import React from "react";
import { Link } from "react-router-dom";

interface SingleNavLinkProps {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  name: string;
  path: string;
  image?: string;
  alt?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

export const SingleNavLink = (
  props: React.PropsWithChildren<SingleNavLinkProps>
) => {
  const { name, index, path, image, alt, icon, active, setActive } = props;

  const handleActive = (index: number) => {
    const newActive: number = index;
    setActive(newActive);
  };

  return (
    <Link
      to={path}
      onClick={() => handleActive(index)}
      className={active === index ? "nav-active" : ""}
    >
      {/* ternary that renders the react-icon unless an svg is needed instead */}
      {image ? <img src={image} alt={alt} /> : icon}
    </Link>
  );
};
