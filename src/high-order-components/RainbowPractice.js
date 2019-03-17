import React from "react";

const RainbowPractice = WrappedComponent => {
   const colors = ["pink", "green", "cyan", "amber", "blue", "purple", "yellow", "orange", "black", "grey"];
   const randomColor = colors[Math.floor(Math.random() * colors.length)];
   const className = randomColor + "-text";

   return props => {
      return (
         <div className={className}>
            <WrappedComponent {...props} />
         </div>
      );
   };
};

export default RainbowPractice;
