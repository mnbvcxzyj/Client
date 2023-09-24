import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
export default function PlanPlusBtn() {
  return (
    <>
      <Link to="/addschedule">
        <PlusBtn>플랜 추가하기</PlusBtn>
      </Link>
    </>
  );
}

const PlusBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  // 버튼
  width: 360px;
  height: 55px;
  font-family: Pretendard;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.8px solid #05b70c;
  background: #fff;
  cursor: pointer;

  color: #05b70c;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
