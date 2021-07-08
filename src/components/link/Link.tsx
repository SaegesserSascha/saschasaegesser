import React, { ReactElement } from "react";

interface Props {
  url: string;
  children: React.ReactChild;
}

export default function Link({ url, children }: Props): ReactElement {
  return (
    <a target="_blank" rel="noreferrer" href={url}>
      {children}
    </a>
  );
}
