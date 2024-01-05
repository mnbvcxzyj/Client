import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '../../images/TravelAccount/backarrow.svg';

const Header = () => {
  return (
    <>
      <BackDiv to="/">
        <img src={arrow} alt="<" />
      </BackDiv>
    </>
  );
};

const BackDiv = styled(Link)`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 390px;
  margin-top: 50px;

  :nth-child(1) {
    margin-left: 25px;
  }
`;

export default Header;
