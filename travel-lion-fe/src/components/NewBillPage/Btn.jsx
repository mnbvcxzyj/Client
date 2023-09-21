import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NewBillBtn() {
  return (
    <>
      <NewBtn>
        <NavList to="/billlist">확인</NavList>
      </NewBtn>
    </>
  );
}

const NavList = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const NewBtn = styled.button`
  //형태
  width: 87%;
  height: 60px;
  border-radius: 10px;
  background-color: #05b70c;
  color: #ffffff;

  //배치
  margin-top: 30px;
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
