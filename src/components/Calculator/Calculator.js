import React, { useState, useEffect } from "react";

const Calculator = initialState => {
  const debtArray = initialState.debtType;
  const [values, setValues] = useState(initialState);
  //const [debtType, setDebtType] = useState(initialdebtType);

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
    const check = e.currentTarget.checked;
    let { name, value } = e.target;
    console.log("called");
    // We are searching to see if the name is part of debtType if it is then we
    // will change name to have debt.target.name instead of just target.name
    for (let i = 0; i < debtArray.length; i++) {
      if (debtArray[i].type === name) {
        //const arrIndex = values.debtType[i];
        // const newStatus = { type: values.debtType[i].type, selected: true };
        let newArr = [...values.debtType];
        newArr[i].selected = !newArr[i].selected;
        setValues(prevState => ({
          ...prevState,
          debtType: [...newArr]
          //debtType: [...prevState.debtType, { type: name, selected: true }]
          //  debtType: [...prevState.debtType, debtType[i] = {...prevState.debtType[i].type, debtType[i].selected: true}]
        }));
        break;
      }
    }

    console.log(values.debtType[0].selected),
      setValues(prevState => ({
        ...prevState,
        [name]: value
      }));
    console.log(values);
  };

  return { handleChange, handleCheckBox, values };
};

export default Calculator;
