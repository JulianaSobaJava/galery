import React from "react";
import styles from "./styles.module.css";
import { useFireStore } from "../../hooks/useFirestore";

export function ImageGrid() {
  const { docs } = useFireStore("images");

  return (
    <div className={styles.imagegrid}>
      {docs &&
        docs.map((doc) => (
          <div className={styles.images} key={doc.id}>
            <img src={doc.url} alt="uploaded images" />
          </div>
        ))}
    </div>
  );
}
