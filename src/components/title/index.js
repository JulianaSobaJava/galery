import React from "react";
import styles from "./styles.module.css";

export default function TitleComponent() {
  return (
    <div className={styles.title}>
      <h1 className={styles.logo}>FireGram</h1>
      <h1 className={styles.mainTitle}>Save Your Picture</h1>
      <p>
        Save your picture to see anywhere, and share with anyone. Just upload
        one and go.
      </p>
    </div>
  );
}
