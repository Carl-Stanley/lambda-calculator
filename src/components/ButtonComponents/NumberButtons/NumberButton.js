import React from "react";
const NumberButton = (props) => {
  const {numbers} = props;
  return (
    <>
      <button>{numbers}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;