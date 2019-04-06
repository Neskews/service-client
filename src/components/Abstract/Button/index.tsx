import React, { ReactElement, MouseEvent } from "react";
import './style.scss';

export default ({
  label,
  onClick
}: {
  label: string;
  onClick: (event: MouseEvent) => void;
}): ReactElement => <button onClick={onClick}>{label}</button>;
