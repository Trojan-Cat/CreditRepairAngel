import React from "react";

// The form on the main page was getting too long, and with a bit of logic
// placed inside it, it just started to look messy
// This Letters component was made to keep it cleaner
const Letters = props => {
  const { handleChange, handleCheckBox, values } = props;
  return (
    <div>
      <div>
        <input onChange={handleChange} name="l1Date" value={values.l1Date} />
        <label htmlFor="l1Amount">
          What was the debt listed on that latter?
        </label>
        <input
          onChange={handleChange}
          name="l1Amount"
          value={values.l1Amount}
        />
        <input
          type="checkbox"
          checked={values.l2Recived}
          onChange={handleCheckBox}
          name="l2Recived"
        />
      </div>

      <div>
        <input onChange={handleChange} name="l2Date" value={values.l2Date} />
        <label htmlFor="l2Amount">
          What was the debt listed on that latter?
        </label>
        <input
          onChange={handleChange}
          name="l2Amount"
          value={values.l2Amount}
        />
        <input
          type="checkbox"
          checked={values.l3Recived}
          onChange={handleCheckBox}
          name="l3Recived"
        />
      </div>
      <div>
        <input onChange={handleChange} name="l3Date" value={values.l3Date} />
        <label htmlFor="l3Amount">
          What was the debt listed on that latter?
        </label>
        <input
          onChange={handleChange}
          name="l3Amount"
          value={values.l3Amount}
        />
      </div>
    </div>
  );
};
export default Letters;
