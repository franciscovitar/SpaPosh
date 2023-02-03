import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <p>
        © 2022, Spa Center, construido y diseñado por{" "}
        <a href="https://genovasite.com/">Genova</a>.
      </p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #888;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 8vh;
  p {
    margin: auto 0;
    color: #fff;
    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      &:hover {
        text-decoration: underline #e9c994;
        transition: 0.2s;
      }
    }
  }

  @media (max-width: 750px) {
    p {
      width: 90%;
      font-size: 0.8rem;
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    p {
      font-size: 0.7rem;
    }
  }
`;
