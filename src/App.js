import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (btn) => {
    if (btn === "C") {
      setDisplayValue("0"); 
    } else if (btn === "=") {
      try {
        setDisplayValue(eval(displayValue.replace("X", "*")));
      } catch {
        setDisplayValue("Error");
      }
    } else if (btn === "+-" && displayValue !== "0") {
      setDisplayValue((prev) => (parseFloat(prev) * -1).toString());
    } else {
      setDisplayValue((prev) => (prev === "0" ? btn.toString() : prev + btn.toString()));
    }
  };

  return (
    <Wrapper>
      <Screen value={displayValue} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => handleButtonClick(btn)}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
