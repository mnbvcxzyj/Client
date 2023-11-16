import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AddBtn = () => {
  return (
    <div>
      <Link to="">
        <AddButton>확인</AddButton>
      </Link>
    </div>
  );
};

export default AddBtn;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 120px;
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #00bc78;
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
