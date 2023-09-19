import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const BigDiv = styled.div`
  width: 340px;
  margin-left: auto;
  margin-right: auto;
`;

const Join = styled.div`
  position: relative;
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: auto;
  margin-right: auto;
  margin-top: 74px;
  margin-bottom: 75px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
  width: 340px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid
    ${(props) => (props.isEmail ? '#05B70C' : 'var(--Gray, #adb6bd)')};
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;

  span {
    display: inline-block;
  }
`;

const WarningMessage = styled.span`
  position: relative;
  display: flex;
  color: #ff2e3b;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 6px;
`;

const SendBtn = styled.div`
  display: inline-flex;
  padding: 5px 7px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #05b70c;
  cursor: pointer;
`;

const SentText = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CountDown = styled.span`
  color: #f00;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const EmailInput = styled.input`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const PasswdInput = styled.input`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CheckPasswdInput = styled.input`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CheckNumInput = styled.input`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

//유효성 검사 코드
function NormalJoin() {
  //이메일
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [boxes, setBoxes] = useState([]); // Box 요소를 관리하는 배열
  const [countdown, setCountdown] = useState(0); // 카운트 다운 상태 변수 추가
  const [isCounting, setIsCounting] = useState(false); // 카운트 다운 중 여부

  //어쩌구@저쩌구.co 까지만 해도 true 됨
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    console.log(emailCurrent); //나중에 없앨것

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식으로 입력해주세요.');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  }, []);

  useEffect(() => {
    let timer;

    if (isCounting && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000); // 1초마다 1씩 감소
    } else if (countdown === 0) {
      setIsCounting(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isCounting, countdown]);

  const onSendBtnClick = useCallback(() => {
    if (isEmail) {
      // 현재 이메일이 올바를 때만 Box 추가

      const isBoxAlreadyAdded = boxes.length > 0;

      const newBox = (
        <Box key={boxes.length + 1}>
          <CheckNumInput type="text" placeholder="인증번호"></CheckNumInput>
          <CountDown>
            {Math.floor(countdown / 60)}:{countdown % 60}
          </CountDown>
        </Box>
      );

      // 이미 추가된 상태라면 카운트 다운만 업데이트
      if (isBoxAlreadyAdded) {
        setCountdown(300);
        setIsCounting(true);
      } else {
        // 처음 추가될 때만 Box 추가 및 카운트 다운 시작
        setCountdown(300);
        setIsCounting(true);
        setBoxes([newBox]);
      }
    }
  }, [isEmail, boxes]);

  //비밀번호
  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);

  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,20}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        '영어, 숫자, 특수문자를 포함한 8~20 자리를 입력해 주세요',
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('초록색으로 바뀌게 하기');
      setIsPassword(true);
    }
  }, []);

  //비밀번호 확인
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('초록색으로 바뀌게 하기');
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
        setIsPasswordConfirm(false);
      }
    },
    [password],
  );

  return (
    <BigDiv>
      <Join>회원가입</Join>
      <Box isEmail={isEmail}>
        <EmailInput
          type="text"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일"
        ></EmailInput>
        <SendBtn onClick={onSendBtnClick}>
          <SentText>인증</SentText>
        </SendBtn>
      </Box>
      <WarningMessage>{emailMessage}</WarningMessage>

      {boxes}

      <Box>
        <PasswdInput
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호"
        ></PasswdInput>
      </Box>
      <div>{passwordMessage}</div>

      <Box>
        <CheckPasswdInput
          type="password"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
          placeholder="비밀번호 확인"
        ></CheckPasswdInput>
      </Box>
      <div>{passwordConfirmMessage}</div>
    </BigDiv>
  );
}

export default NormalJoin;
