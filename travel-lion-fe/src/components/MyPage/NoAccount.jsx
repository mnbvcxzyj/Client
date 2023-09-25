import React from 'react';
import styled from 'styled-components';

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
  background: #05b70c;
  margin: auto;
  top: 376px;
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

function NoAccount() {
  return (
    <div>
      <Title>계정이 없는 사용자 입니다.</Title>
      <Btn>
        <BtnText>회원가입</BtnText>
      </Btn>
    </div>
  );
}

export default NoAccount;
