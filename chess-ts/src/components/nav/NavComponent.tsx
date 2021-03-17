import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { navList } from "./NavList";
import { SingleNavLink } from "./SingleNavLink";

// interface for obj being passed to individual navlist components
interface NavListItem {
  name: string;
  path: string;
  image?: string;
  alt?: string;
  icon?: JSX.Element;
}

export const NavComponent = () => {
  const [active, setActive] = useState<number>(-1);
  console.log("overall hello");

  return (
    <div className="nav">
      {/*three class names to avoid style overlaps for components */}

      {navList.map((item: NavListItem, index: number) => {
        return (
          <SingleNavLink
            active={active}
            setActive={setActive}
            key={index}
            index={index}
            {...item}
          />
        );
      })}
    </div>
  );
};
