import React, { ReactElement } from "react";
import "./tool.scss";

interface Props {
  text: string;
  url: string;
  children: React.ReactChild;
}

export default function Tool({ text, url, children }: Props): ReactElement {
  return (
    <a className="tool-wrapper" target="_blank" rel="noreferrer" href={url}>
      <div className="tool-wrapper-layout">
        <p>{text}</p>
        {children}
      </div>
    </a>
  );
}
