import clsx from "clsx";
import React, { useState } from "react";
import NavList from "./NavList";

interface Props {
  isVisible: boolean;
}

function Sidebar({ isVisible }: Props) {
  return (
    <div
      className={clsx(
        "bg-red-300 fixed top-0 left-0 h-screen",
        isVisible ? "block" : "hidden"
      )}
    >
      <NavList className="text-white p-3" />
    </div>
  );
}

export default Sidebar;
