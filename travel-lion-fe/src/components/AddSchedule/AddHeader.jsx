import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '../../images/TravelAccount/backarrow.svg';

const AddHeader = () => {
  return (
    <>
      <BackDiv to="/main">
        <img src={arrow} alt="뒤로" />
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

export default AddHeader;
