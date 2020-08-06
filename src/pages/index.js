import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import styled from "styled-components";

import Calculator from "../components/Calculator/Calculator";
import hands from "../images/hands.jpg";
import Letters from "../components/Letters/Letters";

//Initial state for the debt form, passed to the calculate to do all the
//validation
const INITIAL_FORM_STATE = {
  debtType: [
    { type: "Telephone_bill", selected: false },
    { type: "Energy_bill", selected: false },
    { type: "Bank_related", selected: false },
    { type: "Other", selected: false }
  ],
  debtAmount: 0,
  recivedLetters: false,
  l1Date: "", // Date or Uknown date option
  l1Amount: 0,
  l2Recived: false,
  l2Date: "",
  l2Amount: 0,
  l3Recived: false,
  l3Date: "",
  l3Amount: 0,
  movedSinceDebt: false,
  attemptToPay: false,
  tellCompany: false,
  paymentPlan: false
};

const SplitContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
`;
//Using the justify-content to keep the image taking up all its space on the
//right, once we hit the ultrawide monitors

const ContentDisp = styled.div`
  width: 50%;
  padding: 2rem;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (min-width: 2000px) {
    width: 30%;
    padding-right: 5rem;
  }
`;

const Image = styled.div`
  width: 50%;
  height: 65vh;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.26) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${hands});
  background-size: cover;
  background-position: 50% 50%;
  @media only screen and (max-width: 900px) {
    display: none;
  }
  @media only screen and (min-width: 2000px) {
    width: 50%;
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 2rem;
`;
const Index = props => {
  const { handleChange, handleCheckBox, handleDebtType, values } = Calculator(
    INITIAL_FORM_STATE
  );

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Autenticated", values.debtType);
  };

  return (
    <Layout>
      <SplitContent>
        <ContentDisp>
          <h1>Credit Repair Angles</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            tincidunt lorem. Nunc luctus pharetra ipsum quis ultrices. Duis
            vehicula hendrerit facilisis. Aliquam ac mattis eros. Suspendisse
            sapien rutrum fringilla id id tellus. Suspendisse et feugiat purus.
            Aliquam laoreet ornare mauris, a molestie sem lobortis quis. Ut
            massa tortor, euismod quis porttitor cursus.
          </p>
        </ContentDisp>
        <Image />
      </SplitContent>
      <FormStyled onSubmit={handleSubmit}>
        <label htmlFor="debtType">What type of debt do you have?</label>
        {values.debtType.map((id, idx) => {
          return (
            <input
              key={idx}
              id={idx}
              type="checkBox"
              name={id.type}
              // value={id.selected}
              checked={idx.selected}
              onChange={handleDebtType}
            />
          );
        })}
        <label htmlFor="debtAmount">How much is the debt?</label>
        <input
          onChange={handleChange}
          name="debtAmount"
          value={values.debtAmount}
        />
        <div>
          <label htmlFor="recivedLetters">
            Have you recived any letters about your debt?
          </label>
          <input
            type="checkbox"
            checked={values.recivedLetters}
            onChange={handleCheckBox}
            name="recivedLetters"
          />
        </div>

        {values.recivedLetters ? (
          <Letters
            handleChange={handleChange}
            handleCheckBox={handleCheckBox}
            values={values}
          />
        ) : null}
      </FormStyled>
    </Layout>
  );
};

export default Index;
