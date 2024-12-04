import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  const bodyText = {
    days: "I think this may have been left on in the background...",
    hours: "At this point, I hope we're already working together",
    minutes:
      "Thanks for giving my portfolio a thorough look-through! Please consider contacting me about working together!",
    seconds: "Check out my projects above and let me know what you think!",
  };

  const days = Math.floor(time / 60 / 60 / 24);
  const hours = Math.floor((time / 60 / 60) % 24);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = time % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const updatedTime = prev + 1;
        updateLocalTimer(updatedTime);
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchLocalTimer = async () => {
    try {
      const localTimer = window.localStorage.getItem("LOCAL_TIMER");

      if (localTimer !== null) {
        const parsedTimer = JSON.parse(localTimer);

        if (typeof parsedTimer === "number") {
          setTime(parsedTimer);
        }
      } else {
        console.log("No local timer found");
        setTime(0);
      }
    } catch (error) {
      console.error("Error loading timer:", error);
    }
  };

  function updateLocalTimer(updatedTime) {
    window.localStorage.setItem("LOCAL_TIMER", JSON.stringify(updatedTime));
  }

  useEffect(() => {
    fetchLocalTimer();
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-[#f6f9ff]">
          You have been looking at my portfolio for:{" "}
        </h3>
        <h3 className="text-[#4091f9]">
          {days >= 1 ? `${days} days,` : ""}{" "}
          {hours >= 1 ? `${hours} hours,` : ""}{" "}
          {minutes >= 1 ? `${minutes} minutes, ` : ""}
          {seconds} seconds
        </h3>
      </div>
      <h3 className="text-[#f6f9ff]">
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
