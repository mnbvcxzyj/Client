import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import plus from '../../images/BillList/plus.png';

export default function NewBillBtn() {
  return (
    <>
      <NewBtn>
        <NavList to="/newbill">
          <img src={plus} alt="+" />
        </NavList>
      </NewBtn>
    </>
  );
}

const NavList = styled(NavLink)``;

const NewBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  cursor: pointer;

  //글꼴
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
