import React, { useState } from "react";

const Toggle = ({ render }) => {
  const [isOpen, setIsOpen] = useState(false);

  //true ke false bananor fnc
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return <div>{render({ isOpen, toggle })}</div>;
};

export default Toggle;
