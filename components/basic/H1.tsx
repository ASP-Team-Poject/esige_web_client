import React from "react";

const H1 = ({ title, className }: { title: string; className?: string }) => {
  return (
    <h1
      className={`text-center text-2xl text-primary_color ${
        className && className
      }`}
    >
      {title}
    </h1>
  );
};

export default H1;
