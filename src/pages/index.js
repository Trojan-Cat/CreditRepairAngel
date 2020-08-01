import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import styled from "styled-components";

import Calculator from "../components/Calculator/Calculator";
import hands from "../images/hands.jpg";

//Initial state for the debt form, passed to the calculate to do all the
//validation
const INITIAL_FORM_STATE = {
  debtType: "",
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
  height: 60vh;
  @media only screen and (max-width: 600px) {
    height: 50vh;
  }
  justify-content: flex-end;
`;
//Using the justify-content to keep the image taking up all its space on the
//right, once we hit the ultrawide monitors

const ContentDisp = styled.div`
  width: 50%;
  padding: 2rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 2000px) {
    width: 30%;
    padding-right: 5rem;
  }
`;

const Image = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.26) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${hands});
  background-size: cover;
  background-position: 50% 50%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 2000px) {
    width: 50%;
  }
`;
const Index = props => {
  const { handleChange, values } = Calculator(INITIAL_FORM_STATE);

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
            fringilla quam ac odio porttitor, a maximus magna tincidunt.
            Praesent finibus dui vulputate luctus viverra. Curabitur lectus
            libero, dictum eget sollicitudin nec, faucibus hendrerit quam. In
            suscipit scelerisque vehicula. Aliquam elementum ac dui dictum
            viverra. Sed in massa posuere, condimentum lectus non, ullamcorper
            dui. Phasellus arcu dui, elementum et ligula a, vestibulum euismod
            dui. Fusce congue quam id metus feugiat efficitur. Ut in nisl et
            sapien rutrum fringilla id id tellus. Suspendisse et feugiat purus.
            Aliquam laoreet ornare mauris, a molestie sem lobortis quis. Ut
            massa tortor, euismod quis porttitor cursus.
          </p>
          <div>Link to calculator</div>
        </ContentDisp>
        <Image />
      </SplitContent>
      <div>Calculator</div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="debtType"
          value={values.debtType}
        />
        <input
          onChange={handleChange}
          name="debtAmount"
          value={values.debtAmount}
        />
        <input
          onChange={handleChange}
          name="recivedLetters"
          value={values.recivedLetters}
        />
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
            onChange={handleChange}
            name="l2Recived"
            value={values.l2Recived}
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
            onChange={handleChange}
            name="l3Recived"
            value={values.l3Recived}
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
      </form>
    </Layout>
  );
};

export default Index;
