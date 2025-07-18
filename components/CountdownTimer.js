import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const endDate = new Date("2025-06-28T23:59:59");

    const updateTimer = () => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        setTimeLeft("HackWeek has ended!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer(); // initialize immediately
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return <p>{timeLeft}</p>;
}
