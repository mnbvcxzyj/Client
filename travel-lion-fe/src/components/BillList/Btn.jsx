import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NewBillBtn() {
  return (
    <>
      <NewBtn>
        <NavList to={`/newbill/${groupId}/${planId}`}>
          <Plus>+</Plus>
        </NavList>
      </NewBtn>
    </>
  );
}

const NavList = styled(NavLink)``;

const NewBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 41px;
  height: 41px;
  flex-shrink: 0;
  background-color: #00bc78;
  color: white;
  border-radius: 30px;
  stroke-width: 0.3px;
  stroke: var(--Skyblue, #95bfff);
`;

const Plus = styled.span`
  vertical-align: middle;

  color: white;
  border-radius: 30px;
  stroke-width: 0.3px;
  stroke: var(--Skyblue, #95bfff);

  //글꼴
  font-family: SUIT;
  font-size: 35px;
  font-weight: 350;
`;
