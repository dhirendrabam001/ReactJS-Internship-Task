import "./App.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <input className={styles.display} type="text" />
      <div className={styles.buttonContainer}>
        <button className={styles.buttons}>C</button>
        <button className={styles.buttons}>1</button>
        <button className={styles.buttons}>2</button>
        <button className={styles.buttons}>+</button>
      </div>
    </div>
  );
}

export default App;
