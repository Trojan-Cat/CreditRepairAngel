import React, { useState } from "react";

const Calculator = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //Onsubmit to test out the data being submitted

  return { handleChange, values };
};

export default Calculator;
