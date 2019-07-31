
import React, {useState} from 'react';

const NumberButton = (props) => {
  const {numbers} = props;
  
  let [display,newDisplay] = useState(0);
  
  // If this is the zero button assign a classname of zeroB
  if((numbers === "0") ) {

  return (
    <>
      <button className="zeroB" data-num={numbers} onClick={alert()}>{numbers}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
 } else { // If this is not the zero button, assign numberB as the classname

  return (
    <>
      <button className="numberB" data-num={numbers} onClick={()=>newDisplay({display})}>{numbers}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );



 }
};

export default NumberButton;