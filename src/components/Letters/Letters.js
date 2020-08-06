import React from "react";
import styled from "styled-components";
// The form on the main page was getting too long, and with a bit of logic
// placed inside it, it just started to look messy
// This Letters component was made to keep it cleaner
//

const LettersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLetter = styled.div``;

const Letters = props => {
  const { handleChange, handleCheckBox, handle, values } = props;
  return (
    <LettersContainer>
      <StyledLetter>
        <input onChange={handleChange} name="l1Date" value={values.l1Date} />
        <label htmlFor="l1Amount">
          1st What was the debt listed on that latter?
        </label>
        <input
          onChange={handleChange}
          name="l1Amount"
          value={values.l1Amount}
        />
        <label htmlFor="l2Recived">Did you recive a second letter?</label>
        <input
          type="checkbox"
          checked={values.l2Recived}
          onChange={handleCheckBox}
          name="l2Recived"
        />
      </StyledLetter>
      {values.l2Recived ? (
        <StyledLetter>
          <input onChange={handleChange} name="l2Date" value={values.l2Date} />
          <label htmlFor="l2Amount">
            What was the debt listed on that latter?
          </label>
          <input
            onChange={handleChange}
            name="l2Amount"
            value={values.l2Amount}
          />
          <label htmlFor="l3Recived">Did you recive a third letter?</label>
          <input
            type="checkbox"
            checked={values.l3Recived}
            onChange={handleCheckBox}
            name="l3Recived"
          />
        </StyledLetter>
      ) : null}
      {values.l3Recived ? (
        <StyledLetter>
          <input onChange={handleChange} name="l3Date" value={values.l3Date} />
          <label htmlFor="l3Amount">
            What was the debt listed on that latter?
          </label>
          <input
            onChange={handleChange}
            name="l3Amount"
            value={values.l3Amount}
          />
        </StyledLetter>
      ) : null}
    </LettersContainer>
  );
};
export default Letters;
