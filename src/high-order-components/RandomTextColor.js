import React from "react";

const RandomTextColor = (WrappedComponent) => {
  const textColors = [
    "blue",
    "green",
    "red",
    "orange",
    "purple",
    "pink",
    "cyan"
  ];
  const randomTextColors = textColors[Math.floor(Math.random() * 6)];
  const className = randomTextColors + "-text";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default RandomTextColor
