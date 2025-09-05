import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [calculationVal, setValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setValue("");
    } else if (buttonText === "=") {
      const result = eval(calculationVal);
      setValue(result);
    } else {
      const newDisplayVal = calculationVal + buttonText;
      setValue(newDisplayVal);
      console.log(newDisplayVal);
    }
  };
  return (
    <div className={styles.container}>
      <Display displayName={calculationVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}
export default App;
