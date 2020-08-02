import React, { useState } from "react";

const Calculator = initialState => {
  const [values, setValues] = useState(initialState);

  const handleCheckBox = e => {
    const name = e.target.name;
    const check = e.currentTarget.checked;
    if (check) {
      setValues(prevState => ({
        ...prevState,
        [name]: true
      }));
    } else {
      setValues(prevState => ({
        ...prevState,
        [name]: false
      }));
    }
  };

  const handleChange = e => {
    console.log(e.target);
    /*
    setValues({
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

  return { handleChange, handleCheckBox, values };
};

export default Calculator;
