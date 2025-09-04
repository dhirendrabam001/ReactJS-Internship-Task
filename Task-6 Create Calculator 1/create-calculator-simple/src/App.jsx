import "./App.css";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  return (
    <div className={styles.container}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
