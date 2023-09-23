import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '../../images/TravelAccount/backarrow.svg';
const AddHeader = () => {
  return (
    <>
      <BackDiv to="/travelaccountbook">
        <img src={arrow} alt="＜" />
      </BackDiv>
    </>
  );
};

const BackDiv = styled(Link)`
  display: flex;
  margin-top: 52px;
  margin-left: 24px;
`;

export default AddHeader;
