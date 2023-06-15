import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Current Time</h2>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>{currentTime}</div>
    </div>
  );
};

export default Clock;
