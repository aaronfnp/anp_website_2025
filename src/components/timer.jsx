import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  const bodyText = {
    days: "I think this was just left on in the background...",
    hours: "At this point I hope you've already hired me",
    minutes:
      "Thanks for giving my portfolio a thorough lookthrough! Please consider contacting me about working together!",
    seconds: "Check out my projects above and let me know what you think!",
  };

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
    <div>
      <h3>
        You have been looking my portfolio for:{" "}
        {days >= 1 ? `${days} days,` : ""} {hours >= 1 ? `${hours} hours,` : ""}{" "}
        {minutes >= 1 ? `${minutes} minutes, ` : ""}
        {seconds} seconds
      </h3>
      <h3>
        {days >= 1
          ? bodyText.days
          : hours >= 1
          ? bodyText.hours
          : minutes >= 5
          ? bodyText.minutes
          : bodyText.seconds}
      </h3>
    </div>
  );
}
