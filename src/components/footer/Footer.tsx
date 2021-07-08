import React, { ReactElement } from "react";
import "./footer.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiMailLine, RiMailOpenLine, RiReactjsFill } from "react-icons/ri";
import { SiSass, SiTypescript } from "react-icons/si";
import Link from "components/link/Link";
import { useState } from "react";
import Tool from "components/tool/Tool";

interface Props {
  offsetY: number;
}

export default function Footer({ offsetY }: Props): ReactElement {
  const CONTACTICONSIZE: string = "3rem";
  const TOOLICONSIZE: string = "1.25rem";
  const [showingEmail, setShowingEmail] = useState<boolean>(false);

  let email = showingEmail ? (
    <Link url="mailto:sascha.saegesser@bluewin.ch">
      <div className="email-wrapper">
        <RiMailOpenLine size={CONTACTICONSIZE} />
        <h4 className="email">sascha.saegesser@bluewin.ch</h4>
      </div>
    </Link>
  ) : (
    <RiMailLine size={CONTACTICONSIZE} onClick={() => setShowingEmail(true)} />
  );

  return (
    <footer
      className="footer-wrapper"
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <h2>Kontakt</h2>
      <div className="footer-icons">
        <Link url="https://www.linkedin.com/in/sascha-saegesser/">
          <AiFillLinkedin size={CONTACTICONSIZE} />
        </Link>
        {email}
        <Link url="https://github.com/SaegesserSascha">
          <AiFillGithub size={CONTACTICONSIZE} />
        </Link>
      </div>
      <div className="tools-wrapper">
        <div className="tools-made-with">
          <p>Made with</p>
        </div>
        <div className="tools">
          <Tool text="React.js" url="https://reactjs.org/">
            <RiReactjsFill size={TOOLICONSIZE} />
          </Tool>
          <Tool text="TypeScript" url="https://www.typescriptlang.org/">
            <SiTypescript size={TOOLICONSIZE} />
          </Tool>
          <Tool text="Sass" url="https://sass-lang.com/">
            <SiSass size={TOOLICONSIZE} />
          </Tool>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
