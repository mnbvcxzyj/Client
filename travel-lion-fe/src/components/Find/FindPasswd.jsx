import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';

function FindPasswd() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);

    if (emailInput.trim() === '') {
      setIsValid(false);
      setErrorMessage('이메일을 입력해 주세요.');
    } else if (!validateEmail(emailInput)) {
      setIsValid(false);
      setErrorMessage('이메일 형식으로 입력해 주세요.');
    } else {
      setIsValid(true);
      setErrorMessage('');
    }
  };

  const handleEmailSubmit = async () => {
    if (!isValid) {
      alert('유효한 이메일 주소를 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post(
        'http://13.125.174.198/password_reset/',
        {
          email: email,
        },
      );

      if (response.status === 200) {
        alert('비밀번호 재설정 링크가 이메일로 발송되었습니다.');
      }
    } catch (error) {
      console.error('비밀번호 재설정 이메일 발송 중 오류 발생:', error);
      alert('이메일 발송에 실패했습니다. 나중에 다시 시도해주세요.');
    }
  };

  return (
    <Container>
      <Logo src={`/images/logo.png`} />
      <Text1>비밀번호 찾기</Text1>
      <Text2>
        가입하신 이메일 주소를 입력해 주세요.
        <br />
        해당 계정으로 비밀번호 재설정 링크가 포함된 이메일이 발송됩니다.
      </Text2>
      <Text3>이메일</Text3>
      <InputEmail
        isValid={isValid}
        value={email}
        onChange={handleEmailChange}
      />
      <ErrorMessage isVisible={!isValid}>{errorMessage}</ErrorMessage>
      <Btn onClick={handleEmailSubmit}>이메일 발송</Btn>
    </Container>
  );
}

export default FindPasswd;

const Container = styled.div`
  position: relative;
  width: 390px;
  //   height: 844px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   text-align: center;
  margin: auto;
`;

const Logo = styled.img`
  position: absolute;
  width: 118.561px;
  height: 119.111px;
  top: 80px;
  left: 136px;
`;

const Text1 = styled.div`
  position: relative;
  width: 145px;
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  top: 15.63rem;
  left: 27px;
`;

const Text2 = styled.div`
  position: relative;
  width: 343px;
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  top: 17rem;
  left: 27px;
`;

const Text3 = styled.div`
  position: relative;
  width: 268px;
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  top: 19rem;
  left: 27px;
`;

const InputEmail = styled.input`
  position: relative;
  width: 340px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  outline: none; /* 포커스 테두리를 없앰 */
  border: 1.5px solid
    ${(props) => (props.isValid ? 'var(--Gray, #adb6bd)' : 'red')};
  top: 20rem;
  left: 25px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  position: relative;
  top: 20.5rem;
  left: 25px;
  height: 20px; // 고정 높이를 설정하여 공간을 유지
  visibility: ${(props) =>
    props.isVisible
      ? 'visible'
      : 'hidden'}; // 오류 메시지가 있을 때만 보이게 설정
`;

const Btn = styled.button`
  position: relative;
  width: 340px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #00bc6d;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  top: 22rem;
  left: 25px;
`;
