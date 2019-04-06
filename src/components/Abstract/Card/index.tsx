import React, { ReactChild, ReactElement } from "react";
import "./style.css";

const Card = ({ children }: { children: ReactChild[] }): ReactElement => {
  return <div className="card">{children}</div>;
};

export default Card;
