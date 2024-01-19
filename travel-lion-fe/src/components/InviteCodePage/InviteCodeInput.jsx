import React, { useState, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext, useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';

const InviteCodeInput = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const { user } = useContext(AuthContext);
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const { refreshAccessToken } = useAuth();

  const axiosInstance = useMemo(
    () => createAxiosInstance(refreshAccessToken),
    [refreshAccessToken],
  );

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async () => {
    if (!code.trim()) {
      alert('코드를 입력해주세요.');
      setIsValid(false);
      return;
    }

    try {
      await axiosInstance.post(
        '/join/',
        {
          entered_invite_code: code,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        },
      );
      setIsValid(true);
      navigate('/main');
    } catch (error) {
      if (error.response) {
        setMessage('등록되지 않은 코드입니다.');
        setIsValid(false);
      } else {
        setMessage('오류가 발생했습니다. 다시 시도해주세요.');
        setIsValid(true);
      }
    }
  };
  return (
    <Container>
      <Text>초대코드 입력</Text>
      <Input
        placeholder="코드를 입력해주세요."
        value={code}
        onChange={handleCodeChange}
        isValid={isValid}
      />
      {!isValid && <ErrorMessage>{message}</ErrorMessage>}
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
  border: 0.8px solid
    ${(props) => (props.isValid ? 'var(--Gray, #adb6bd)' : 'red')};

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
  color: #f00;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 17px;
`;

export default InviteCodeInput;
