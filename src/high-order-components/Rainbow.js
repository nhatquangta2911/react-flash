import React from "react";

const Rainbow = WrappedComponent => {
   const colors = [
      "red",
      "blue",
      "green",
      "orange",
      "yellow",
      "purple",
      "cyan"
   ];

   const randomColor = colors[Math.floor(Math.random() * 7)];

   const className = randomColor + "-text";

   // return supercharged component (functional component (no state) with props have been passed)

   return props => {
      return (
         <div className={className}>
            <WrappedComponent {...props} />
         </div>
      );
   };
};

export default Rainbow;
