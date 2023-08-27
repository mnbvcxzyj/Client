import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NewBillBtn() {
  return (
    <>
      <NewBtn>확인</NewBtn>
    </>
  );
}

const NewBtn = styled.button`
  //형태
  width: 90%;
  height: 60px;
  border-radius: 10px;
  background-color: #3369ff;
  color: #ffffff;

  //배치
  margin-top: 20px;
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
