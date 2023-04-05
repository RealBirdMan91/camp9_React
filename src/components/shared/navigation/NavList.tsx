import React from "react";
import NavigationItem from "./NavigationItem";

interface Props {
  className: string;
}

function NavList({ className }: Props) {
  const items = [
    { to: "/", name: "Home" },
    { to: "/shop", name: "Shop" },
    { to: "/blog", name: "Blog" },
    { to: "/about-us", name: "About US" },
    { to: "/login", name: "Login" },
  ];

  return (
    <ul className={className}>
      {items.map((item) => (
        <NavigationItem to={item.to}>{item.name}</NavigationItem>
      ))}
    </ul>
  );
}

export default NavList;
