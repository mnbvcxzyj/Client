import React, { useState } from 'react';
import styled from 'styled-components';

function SendEmailComplete() {
  return (
    <Container>
      <Logo src={`/images/logo.png`} alt="로고 이미지" />
      <Text1>이메일 전송 완료</Text1>
      <Text2>
        입력하신 이메일 주소로 비밀번호 재설정 URL이 포함된 메일을 전송했습니다.
        <br />
        만약, 메일을 못받으셨다면 하단의 ‘비밀번호 재설정 메일 재전송’을 클릭해
        주세요.
      </Text2>
      <ResendLink href="#">비밀번호 재설정 메일 재전송</ResendLink>
      <Btn>로그인 페이지로 이동</Btn>
    </Container>
  );
}

export default SendEmailComplete;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 390px;
  margin: auto;
  text-align: center;
`;

const Logo = styled.img`
  width: 118.561px;
  height: 119.111px;
  margin-top: 80px;
`;

const Text1 = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  margin-top: 50.89px;
`;

const Text2 = styled.div`
  width: 390px;
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 25px;
`;

const ResendLink = styled.a`
  color: #00bc6d;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  margin-top: 25px; // Text2와의 간격
  cursor: pointer;
`;

const Btn = styled.button`
  width: 340px;
  height: 50px;
  border-radius: 10px;
  background: #00bc6d;
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  margin-top: 122px;
`;
