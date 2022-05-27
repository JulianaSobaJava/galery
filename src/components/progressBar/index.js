import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useStorage } from "../../hooks/useStorage";

export function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className={styles.progress} styles={{ width: progress + "%" }}></div>
  );
}
