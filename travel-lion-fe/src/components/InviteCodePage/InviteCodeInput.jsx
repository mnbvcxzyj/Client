import React from 'react';
import styled from 'styled-components';

const InviteCodeInput = () => {
  return (
    <Container>
      <Text>초대코드 입력</Text>
      <Input placeholder="코드를 입력해주세요."></Input>
      <CheckBtn>확인</CheckBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 340px;
  margin: 0 auto;
`;

const Text = styled.div`
  color: #333;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-top: 71px;
  margin-bottom: 13px;
`;

const Input = styled.input`
  width: 339px;
  height: 59px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 0.8px solid var(--Gray, #adb6bd);

  text-indent: 19px;
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &::placeholder {
    color: #252525;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:focus {
    outline: none;
  }
`;

const CheckBtn = styled.button`
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

  position: fixed;
  bottom: 0;
  margin-bottom: 50px;
`;

export default InviteCodeInput;
