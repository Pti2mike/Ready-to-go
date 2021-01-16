import React, { useState } from "react";
import Header from "./components/Header";
import Switch from "./components/Switch";
import Footer from "./components/Footer";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";
library.add(faSpaceShuttle);

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div>
          <Switch switch={switch1} setSwitch={setSwitch1} />
          <Switch switch={switch2} setSwitch={setSwitch2} />
          <Switch switch={switch3} setSwitch={setSwitch3} />
        </div>

        <div
          className={`result ${switch1 && switch2 & switch3 ? "go" : "no-way"}`}
        >
          {switch1 && switch2 & switch3 ? "Go!" : "No way!"}
        </div>
        <div
          className={switch1 && switch2 && switch3 && "reset"}
          onClick={() => {
            setSwitch1(false);
            setSwitch2(false);
            setSwitch3(false);
          }}
        >
          {switch1 && switch2 && switch3 && "Reset"}
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default App;
