import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(time / 60 / 60 / 24);
  const hours = Math.floor((time / 60 / 60) % 24);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = time % 60;

  return (
    <h1>
      You have been looking at this page for: {days} days, {hours} hours,{" "}
      {minutes} minutes and {seconds} seconds
    </h1>
  );
}
