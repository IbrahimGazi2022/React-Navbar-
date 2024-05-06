import { useState } from "react";
import "./App.css";

const App = () => {
  const [bar, setBar] = useState(false);

  const showBar = () => {
    setBar(!bar);
  };
  const barBg = {
    backgroundColor: !bar ? "#fff" : "",
  };
  return (
    <div className="container">
      <div className={`bars ${bar ? "active" : ""}`} onClick={showBar}>
        <div className="bar" style={barBg}></div>
      </div>
    </div>
  );
};

export default App;
