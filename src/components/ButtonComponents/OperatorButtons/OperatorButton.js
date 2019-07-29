import React from "react";

const OperatorButton = (props) => {

  const {operators} = props;
  return (
    <>

      <button>{operators}</button>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
