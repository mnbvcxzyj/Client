import React from 'react';
import styled from 'styled-components';
import plusbtn from '../../images/TravelAccount/plus.svg';
import { Link } from 'react-router-dom';
const PlusBtn = () => {
  return (
    <>
      <Link to="/addschedule">
        <Plus>
          <img src={plusbtn} alt="+" />
        </Plus>
      </Link>
    </>
  );
};

export default PlusBtn;

const Plus = styled.div`
  margin: 0 auto;
  width: 27px;
  height: 27px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #05b70c;
  stroke-width: 0.3px;
  stroke: var(--Skyblue, #95bfff);
`;
