import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

//Basic Menu component that sits at the top of every page when displayed on
//desktop

const MenuFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  border-radius: 0px;
`;

const LinkStyled = styled(props => <Link {...props} />)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3em;
  line-height: 1em;
  letter-spacing: 0.15em;
  color: #000000;
  padding: 0.5rem 1rem;
  text-decoration: none;

  :hover {
    color: blue;
  }
`;

const Menu = props => {
  return (
    <MenuFrame>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/articles">Articles</LinkStyled>
      <LinkStyled to="/Contact">Contact</LinkStyled>
    </MenuFrame>
  );
};

export default Menu;
