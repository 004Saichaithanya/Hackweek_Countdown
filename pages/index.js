import { useState, useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("/info.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Hackweek COSC Info</h1>
      <CountdownTimer />
      {info ? (
        <div>
          <h2>{info.title}</h2>
          <p>{info.description}</p>
        </div>
      ) : (
        <p>Loading info...</p>
      )}
    </main>
  );
}
