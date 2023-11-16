import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
export default function PlanPlusBtn() {
  return (
    <>
      <Link to="/addschedule">
        <PlusBtn>+</PlusBtn>
      </Link>
    </>
  );
}

const PlusBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 30px auto;

  // 버튼
  width: 360px;
  height: 55px;
  font-family: Pretendard;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.8px solid #00bc78;
  background: #fff;
  cursor: pointer;
  color: #00bc78;

  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
