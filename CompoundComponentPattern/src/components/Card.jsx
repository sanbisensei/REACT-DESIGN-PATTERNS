import React from "react";

const Card = ({ children, Open }) => {
  if (!Open) return null;
  return <div>{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div>{children}</div>;
};
const CardImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-64 rounded-md" />;
};
const CardBody = ({ children }) => {
  return <div>{children}</div>;
};

const CardFooter = ({ children }) => {
  return <div>{children}</div>;
};

Card.Header = CardHeader;
Card.Image = CardImage;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
