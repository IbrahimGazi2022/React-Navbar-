import React, { useState } from "react";
import MobileNav from "./components/MobileNav/MobileNav";

const App = () => {
  const [showMenu, setshowMenu] = useState(false);

  const clickHandler = () => {
    setshowMenu(!showMenu);
  };

  return (
    <>
      <section>
        <MobileNav isOpen={showMenu} />
        <button onClick={clickHandler}>
          <span
            class={"material-symbols-outlined"}
            style={{ fontSize: "1.8rem" }}
          >
            {showMenu ? "close" : "menu"}
          </span>
        </button>
      </section>
    </>
  );
};

export default App;
