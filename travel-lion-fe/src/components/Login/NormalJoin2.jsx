import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

function NormalJoin2() {
  // const signUp = async (username, password, email, age) => {
  //   try {
  //     const response = await axios.post('http://3.36.156.17/signup/', {
  //       username: username,
  //       password: password,
  //       email: email,
  //       age: age,
  //     });
  //     console.log(response.data); // 회원가입이 성공했을 때의 처리
  //   } catch (error) {
  //     console.error('Signup error:', error.response);
  //   }
  // };

  const location = useLocation();
  const navigate = useNavigate();
  // 이전 컴포넌트에서 전달받은 state를 사용합니다.
  const { email, password } = location.state || {}; // location.state가 없는 경우를 대비하여 기본값 설정

  useEffect(() => {
    // 이메일 또는 패스워드가 없다면 이전 페이지로 리다이렉트
    if (!email || !password) {
      navigate('/join/normal');
    }
  }, [email, password, navigate]);

  const handleComplete = async () => {
    //회원가입 요청
    if (!nicknameError && !ageError && nickname && age && email && password) {
      try {
        const response = await axios.post('http://13.125.174.198/signup/', {
          email: email,
          nickname: nickname,
          password: password,
          repassword: password,
          age: age,
        });
        console.log('회원가입 성공:', response.data);
        navigate('/login'); // 회원가입 성공 후 로그인 페이지로 이동
      } catch (error) {
        console.error('Signup error:', error.response);
      }
    } else {
      console.log('필수 정보를 모두 입력해주세요.');
    }
  };

  //이전에 있던 코드
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');
  const [nicknameError, setNicknameError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setNickname(value);

    //7자 이상 & 비어있는 경우를 에러 처리
    if (value.length > 7 || value === '') {
      setNickname(value);
      setNicknameError(true);
    } else {
      setNicknameError(false);
    }
  };

  //10자리가 넘어가면 에러 처리
  const handleAgeChange = (e) => {
    const value = e.target.value;

    if (/^\d{0,11}$/.test(value)) {
      setAge(value);
      setAgeError(false); // 올바른 형식이면 에러 해제
    } else {
      setAgeError(true); // 형식이 올바르지 않으면 에러 표시
    }
  };

  return (
    <BigDiv>
      <Box error={nicknameError}>
        <TextInput
          placeholder="닉네임"
          value={nickname}
          onChange={handleNicknameChange}
        ></TextInput>
      </Box>
      <WarningDiv>
        {nicknameError ? (
          <WarningText>
            {nickname.length == 0
              ? '필수사항입니다'
              : '최대 7자까지 입력 가능합니다.'}
          </WarningText>
        ) : null}
      </WarningDiv>
      <Box error={ageError}>
        <TextInput
          placeholder="나이"
          value={age}
          onChange={handleAgeChange}
        ></TextInput>
      </Box>

      <WarningDiv>
        {ageError ? (
          <WarningText>
            {age.length == 0
              ? '필수 사항입니다'
              : '10자리 이하의 숫자만 입력해주세요.'}
          </WarningText>
        ) : null}
      </WarningDiv>

      {/* {!ageError && !nicknameError ? (
        <CompleteBtn>
          <CompleteText>확인</CompleteText>
        </CompleteBtn> 
      ) : (
        <CompleteBtn error>
          <CompleteText error>완료</CompleteText>
        </CompleteBtn>
      )} */}
      <CompleteBtn onClick={handleComplete}>
        <CompleteText>확인</CompleteText>
      </CompleteBtn>
    </BigDiv>
  );
}

export default NormalJoin2;

const BigDiv = styled.div`
  width: 340px;
  margin-left: auto;
  margin-right: auto;
`;

const Box = styled.div`
  position: relative;
  width: 340px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */

  &:first-child {
    margin-top: 146px;
  }

  border: 1.5px solid ${(props) => (props.error ? 'red' : 'gray')}; // 에러가 있으면 빨간색, 없으면 연두색으로 설정
`;

const TextInput = styled.input`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none; /* 테두리를 없앱니다. */
  outline: none; /* 포커스 테두리를 없앱니다. */
  position: relative;
  left: 25px;
`;

const CompleteBtn = styled.div`
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) => (props.error ? '#00BC78' : '#00BC78')};
  margin-left: auto;
  margin-right: auto;
  margin-top: 418px;
  margin-bottom: 50px;
  display: flex; /* Flexbox를 사fuwefw용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
  cursor: pointer;
`;

const CompleteText = styled.div`
  color: ${(props) => (props.error ? '#979797;' : '#FFFFFF')};
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const WarningText = styled.div`
  display: flex;
  width: 302px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #f00;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const WarningDiv = styled.div`
  height: 26px;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  margin-left: 6px;
`;
