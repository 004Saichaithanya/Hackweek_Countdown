import { useState, useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/info.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setInfo(data))
      .catch((err) => {
        console.error("Failed to load info:", err);
        setError("Could not load event information.");
      });
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Hackweek COSC Info</h1>
      <div className={styles.timer}>
        <CountdownTimer />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      {info ? (
        <div>
          <h2 className={styles.subtitle}>{info.title}</h2>
          <p className={styles.paragraph}>{info.description}</p>
        </div>
      ) : !error ? (
        <p className={styles.loading}>Loading info...</p>
      ) : null}
    </main>
  );
}
