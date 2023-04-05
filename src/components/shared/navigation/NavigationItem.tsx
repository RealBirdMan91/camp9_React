import clsx from "clsx";
import React from "react";

interface Props {
  children: string;
  to: string;
}

function NavigationItem({ children, to }: Props) {
  return (
    <li className="cursor-pointer hover:text-slate-500">
      <a href={to}>{children}</a>
    </li>
  );
}

export default NavigationItem;
