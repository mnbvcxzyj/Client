import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function NoAccount() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <Title>계정이 없는 사용자 입니다.</Title>
      <Btn onClick={goToLogin}>
        <BtnText>회원가입</BtnText>
      </Btn>
    </div>
  );
}

export default NoAccount;

const Title = styled.div`
  position: relative;
  color: var(--Darkgray, #353a40);
  text-align: center;
  font-family: Pretendard;
  font-size: 23.302px;
  font-style: normal;
  font-weight: 700;
  line-height: norma;
  top: 321px;
`;

const Btn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 283.868px;
  height: 45.31px;
  flex-shrink: 0;
  border-radius: 7.767px;
  background: #00bc78;
  margin: auto;
  top: 376px;
  cursor: pointer;
`;

const BtnText = styled.div`
  width: 60.632px;
  height: 16.829px;
  flex-shrink: 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 15.535px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
