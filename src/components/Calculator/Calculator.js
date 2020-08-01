import React, { useState } from "react";

const Calculator = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChange = e => {
    /*  setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    console.log(values);
  };
  */
    console.log(values);
    console.log(e.target.value);
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return { handleChange, values };
};

export default Calculator;
