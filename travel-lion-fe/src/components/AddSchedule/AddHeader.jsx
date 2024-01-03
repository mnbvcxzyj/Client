import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '../../images/TravelAccount/backarrow.svg';

const AddHeader = () => {
  return (
    <>
      <BackDiv to="/travelaccountbook">
        <img src={arrow} alt="뒤로" />
      </BackDiv>
    </>
  );
};

const BackDiv = styled(Link)`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 360px;
  margin-top: 52px;
`;

export default AddHeader;
