import React from "react";

const SpecialButton = (props) => {

  const {specials} = props;
  return (
    <> 
    
      <button className="sb" data-spec={specials}>{specials}</button>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
    
    </>
  );
};

export default SpecialButton;
