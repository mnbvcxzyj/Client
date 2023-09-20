import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function BillUpdateBtn() {
  return (
    <ButtonContainer>
      <UpdateBtn>
        <NavList to="/billlist">수정</NavList>
      </UpdateBtn>
      <DelBtn>
        <NavList to="/billlist">삭제</NavList>
      </DelBtn>
    </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const UpdateBtn = styled.button`
  // 형태
  width: 40%;
  height: 60px;
  border-radius: 10px;
  background-color: #3369ff;
  color: #ffffff;

  // 배치
  margin: 0 10px;
  text-align: center;

  cursor: pointer;

  // 글꼴
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
`;

const DelBtn = styled.button`
  // 형태
  width: 40%;
  height: 60px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #3369ff;
  border: solid #3369ff 1px;

  // 배치
  margin: 0 10px;
  text-align: center;

  cursor: pointer;

  // 글꼴
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
`;
