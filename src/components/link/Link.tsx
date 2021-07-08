import React, { ReactElement } from "react";
import "./link.scss";

interface Props {
  text?: string;
  url: string;
  children: React.ReactChild;
}

export default function Link({ url, children }: Props): ReactElement {
  return (
    <a className="link-wrapper" target="_blank" rel="noreferrer" href={url}>
      <div className="link-layout">{children}</div>
    </a>
  );
}
