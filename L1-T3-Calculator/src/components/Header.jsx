import React, { useState } from "react";
import Modal from "./Modal";
import PrevCalculation from "./PrevCalculation";
function Header({ prevCal }) {
  const [isModalopen, setisModalopen] = useState(false);
  function closeModal() {
    setisModalopen(false);
  }
  return (
    <header>
      <nav className="navigation-bar">
        <h1 className="head">Calculator</h1>
        <span>Made by - Aman Wadhwani</span>
        <button className="pre"
          onClick={() => {
            setisModalopen(true);
          }}
        >
          {" "}
          Show Previous Calculations
        </button>
      </nav>
      {isModalopen && (
        <Modal closeModal={closeModal}>
          <PrevCalculation prevCal={prevCal} />
        </Modal>
      )}
    </header>
  );
}

export default Header;
