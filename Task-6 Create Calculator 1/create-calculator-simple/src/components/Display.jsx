import styles from "../components/Display.module.css";
const Display = ({ displayName }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayName}
      readOnly
    />
  );
};

export default Display;
