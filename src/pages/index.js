import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import styled from "styled-components";

import hands from "../images/hands.jpg";

const SplitContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100vh;
  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

const ContentDisp = styled.div`
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
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
  background-size: fit;
  background-size: cover;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const Index = props => {
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
    </Layout>
  );
};

export default Index;
