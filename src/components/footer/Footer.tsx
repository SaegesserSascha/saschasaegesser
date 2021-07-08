import React, { ReactElement } from "react";
import "./footer.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiMailLine, RiMailOpenLine } from "react-icons/ri";
import Link from "components/link/Link";
import { useState } from "react";

interface Props {
  offsetY: number;
}

export default function Footer({ offsetY }: Props): ReactElement {
  const ICONSIZE: string = "3rem";
  const [showingEmail, setShowingEmail] = useState<boolean>(false);

  let email = showingEmail ? (
    <Link url="mailto:sascha.saegesser@bluewin.ch">
      <div className="email-wrapper">
        <RiMailOpenLine size={ICONSIZE} />
        <p className="email">sascha.saegesser@bluewin.ch</p>
      </div>
    </Link>
  ) : (
    <RiMailLine size={ICONSIZE} onClick={() => setShowingEmail(true)} />
  );

  return (
    <footer
      className="footer-wrapper"
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <h1>Kontakt</h1>
      <div className="footer-icons">
        <Link url="https://www.linkedin.com/in/sascha-saegesser/">
          <AiFillLinkedin size={ICONSIZE} />
        </Link>
        {email}
        <Link url="https://github.com/SaegesserSascha">
          <AiFillGithub size={ICONSIZE} />
        </Link>
      </div>
      <div></div>
    </footer>
  );
}
