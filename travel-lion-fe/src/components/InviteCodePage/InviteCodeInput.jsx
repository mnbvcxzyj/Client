import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../api/auth/AuthContext';
import axios from 'axios';
const InviteCodeInput = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const { user } = useContext(AuthContext);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async () => {
    if (code) {
      try {
        const response = await axios.post(
          `http://13.125.174.198/join/0000/`,
          {
            entered_invite_code: code,
          },

          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          },
        );

        setMessage('일정이 성공적으로 등록되었습니다!');
      } catch (error) {
        setMessage('등록되지 않은 코드입니다!');
      }
    } else {
      setMessage('코드를 입력해주세요!');
    }
  };

  return (
    <Container>
      <Text>초대코드 입력</Text>
      <Input
        placeholder="코드를 입력해주세요."
        value={code}
        onChange={handleCodeChange}
      ></Input>
      {message && <ErrorMessage>{message}</ErrorMessage>}{' '}
      <CheckBtn onClick={handleSubmit}>확인</CheckBtn>
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

const ErrorMessage = styled.div`
  color: red; // 빨간색으로 에러 메시지 표시
  // 필요한 스타일 추가
`;

export default InviteCodeInput;
