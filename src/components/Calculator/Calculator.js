import React, { useState, useEffect } from "react";

const Calculator = initialState => {
  const debtArray = initialState.debtType;
  const [values, setValues] = useState(initialState);

  const handleCheckBox = e => {
    const { name, value } = e.target;
    const check = e.currentTarget.checked;
    setValues(prevState => ({
      ...prevState,
      [name]: check
    }));
  };

  // This is to handle the debtTypes, since the id is set on it we don't need
  // to do a for and a if statement, we already know which element to change
  const handleDebtType = e => {
    const check = e.currentTarget.checked;
    let { name, value, id } = e.target;
    let newArr = [...values.debtType];
    newArr[id].selected = !newArr[id].selected;
    setValues(prevState => ({
      ...prevState,
      debtType: [...newArr]
    }));
  };

  const handleChange = e => {
    let { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return { handleChange, handleCheckBox, handleDebtType, values };
};

export default Calculator;
