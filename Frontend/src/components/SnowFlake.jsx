import React from "react";
import "../App.css";

const SnowFlake = () => {
  const snowflakes = Array.from({ length: 50 });

  return (
    <>
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `-${Math.random() * 10}s`,
          }}
        />
      ))}
    </>
  );
};

export default SnowFlake;
