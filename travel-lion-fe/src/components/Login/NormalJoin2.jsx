import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

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
  border: 1.5px solid
    ${(props) => (props.error ? 'red' : 'var(--Gray, #adb6bd)')};
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;

  &:first-child {
    margin-top: 146px;
  }
`;

const TextInput = styled.input`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CompleteBtn = styled.div`
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${(props) => (props.error ? '#e2e2e2' : '#05B70C')};
  margin-left: auto;
  margin-right: auto;
  margin-top: 418px;
  margin-bottom: 50px;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
`;

const CompleteText = styled.div`
  color: ${(props) => (props.error ? '#979797;' : '#FFFFFF')};
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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

function NormalJoin2() {
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');
  const [nicknameError, setNicknameError] = useState(true);
  const [ageError, setAgeError] = useState(true);

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setNickname(value);

    if (value.length > 7 || value === '') {
      setNicknameError(true); // 7글자 초과 시 에러 표시
    } else {
      setNicknameError(false); // 7글자 이하이고 비어있지 않은 경우 에러 해제
    }
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;

    if (/^\d{0,3}$/.test(value)) {
      setAge(value);
      setAgeError(false); // 올바른 형식이면 에러 해제
    } else {
      setAgeError(true); // 형식이 올바르지 않으면 에러 표시
    }

    // setAge(value);
    // setAgeError(value === ''); // 입력이 비어있으면 에러
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
            {age.length === 0 && isNaN(age)
              ? '필수 입력사항입니다'
              : '3자리 이하의 숫자만 입력해주세요.'}
          </WarningText>
        ) : null}
      </WarningDiv>

      {!ageError && !nicknameError ? (
        <CompleteBtn>
          <CompleteText>확인</CompleteText>
        </CompleteBtn>
      ) : (
        <CompleteBtn error>
          <CompleteText error>완료</CompleteText>
        </CompleteBtn>
      )}
    </BigDiv>
  );
}

export default NormalJoin2;
