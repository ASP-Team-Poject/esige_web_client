import React from "react";

const H2 = ({ title, className }: { title: string; className?: string }) => {
  return (
    <h1 className={`text-center text-xl ${className && className}`}>{title}</h1>
  );
};

export default H2;
