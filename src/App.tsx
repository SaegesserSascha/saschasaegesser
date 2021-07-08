import Introduction from "components/introduction/Introduction";
import Landing from "components/landing/Landing";
import Footer from "components/footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";

function App() {
  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="App">
      <div className="background section section-1">
        <Landing offsetY={offsetY} />
      </div>
      <div className="foreground section section-2">
        <Introduction />
      </div>
      <div className="background section section-3">
        <Footer offsetY={offsetY} />
      </div>
    </div>
  );
}

export default App;
