import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

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

  //만 14세 이상 체크
  const [checkAge, setCheckAge] = useState(false);
  const handleCheckAge = () => {
    const newValue = !checkAge;
    setCheckAge(newValue);
  };

  //서비스약관 체크
  const [checkService, setCheckService] = useState(false);
  const handleCheckService = () => {
    const newValue = !checkService;
    setCheckService(newValue);
  };

  //개인정보 수집 체크
  const [checkInfo, setCheckInfo] = useState(false);
  const handleCheckInfo = () => {
    const newValue = !checkInfo;
    setCheckInfo(newValue);
  };

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

      <CheckDiv>
        <CheckBtn onClick={handleCheckAge}>
          {checkAge ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_799_6547)">
                <mask
                  id="mask0_799_6547"
                  maskType="luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 18.3332C11.0946 18.3346 12.1786 18.1197 13.1899 17.7008C14.2011 17.2819 15.1196 16.6673 15.8925 15.8923C16.6675 15.1194 17.2821 14.2009 17.701 13.1897C18.1199 12.1784 18.3348 11.0944 18.3334 9.99984C18.3348 8.90529 18.1198 7.82125 17.701 6.81002C17.2821 5.79879 16.6675 4.88031 15.8925 4.10734C15.1196 3.33236 14.2011 2.71776 13.1899 2.29888C12.1786 1.88 11.0946 1.66509 10 1.66651C8.90548 1.66512 7.82144 1.88003 6.81021 2.29891C5.79897 2.71779 4.88049 3.33237 4.10753 4.10734C3.33256 4.88031 2.71797 5.79879 2.29909 6.81002C1.88022 7.82125 1.6653 8.90529 1.66669 9.99984C1.66528 11.0944 1.88018 12.1784 2.29906 13.1897C2.71794 14.2009 3.33254 15.1194 4.10753 15.8923C4.88049 16.6673 5.79897 17.2819 6.81021 17.7008C7.82144 18.1197 8.90548 18.3346 10 18.3332Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66669 10L9.16669 12.5L14.1667 7.5"
                    stroke="black"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_799_6547)">
                  <path d="M0 0H20V20H0V0Z" fill="#05B70C" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_799_6547">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_808_7968)">
                <path
                  d="M10 18.3332C11.0946 18.3346 12.1786 18.1197 13.1898 17.7008C14.2011 17.2819 15.1195 16.6673 15.8925 15.8923C16.6675 15.1194 17.2821 14.2009 17.701 13.1897C18.1198 12.1784 18.3347 11.0944 18.3333 9.99984C18.3347 8.90529 18.1198 7.82125 17.7009 6.81002C17.2821 5.79879 16.6675 4.88031 15.8925 4.10734C15.1195 3.33236 14.2011 2.71776 13.1898 2.29888C12.1786 1.88 11.0946 1.66509 10 1.66651C8.90544 1.66512 7.82141 1.88003 6.81018 2.29891C5.79894 2.71779 4.88046 3.33237 4.1075 4.10734C3.33253 4.88031 2.71794 5.79879 2.29906 6.81002C1.88019 7.82125 1.66527 8.90529 1.66666 9.99984C1.66525 11.0944 1.88015 12.1784 2.29903 13.1897C2.71791 14.2009 3.33251 15.1194 4.1075 15.8923C4.88046 16.6673 5.79894 17.2819 6.81018 17.7008C7.82141 18.1197 8.90544 18.3346 10 18.3332Z"
                  stroke="#ADB6BD"
                  stroke-width="1.66667"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66666 10L9.16666 12.5L14.1667 7.5"
                  stroke="#ADB6BD"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_808_7968">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </CheckBtn>
        <CheckText>만 14세 이상입니다.</CheckText>
      </CheckDiv>

      <CheckDiv>
        <CheckBtn onClick={handleCheckService}>
          {checkService ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_799_6547)">
                <mask
                  id="mask0_799_6547"
                  maskType="luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 18.3332C11.0946 18.3346 12.1786 18.1197 13.1899 17.7008C14.2011 17.2819 15.1196 16.6673 15.8925 15.8923C16.6675 15.1194 17.2821 14.2009 17.701 13.1897C18.1199 12.1784 18.3348 11.0944 18.3334 9.99984C18.3348 8.90529 18.1198 7.82125 17.701 6.81002C17.2821 5.79879 16.6675 4.88031 15.8925 4.10734C15.1196 3.33236 14.2011 2.71776 13.1899 2.29888C12.1786 1.88 11.0946 1.66509 10 1.66651C8.90548 1.66512 7.82144 1.88003 6.81021 2.29891C5.79897 2.71779 4.88049 3.33237 4.10753 4.10734C3.33256 4.88031 2.71797 5.79879 2.29909 6.81002C1.88022 7.82125 1.6653 8.90529 1.66669 9.99984C1.66528 11.0944 1.88018 12.1784 2.29906 13.1897C2.71794 14.2009 3.33254 15.1194 4.10753 15.8923C4.88049 16.6673 5.79897 17.2819 6.81021 17.7008C7.82144 18.1197 8.90548 18.3346 10 18.3332Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66669 10L9.16669 12.5L14.1667 7.5"
                    stroke="black"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_799_6547)">
                  <path d="M0 0H20V20H0V0Z" fill="#05B70C" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_799_6547">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_808_7968)">
                <path
                  d="M10 18.3332C11.0946 18.3346 12.1786 18.1197 13.1898 17.7008C14.2011 17.2819 15.1195 16.6673 15.8925 15.8923C16.6675 15.1194 17.2821 14.2009 17.701 13.1897C18.1198 12.1784 18.3347 11.0944 18.3333 9.99984C18.3347 8.90529 18.1198 7.82125 17.7009 6.81002C17.2821 5.79879 16.6675 4.88031 15.8925 4.10734C15.1195 3.33236 14.2011 2.71776 13.1898 2.29888C12.1786 1.88 11.0946 1.66509 10 1.66651C8.90544 1.66512 7.82141 1.88003 6.81018 2.29891C5.79894 2.71779 4.88046 3.33237 4.1075 4.10734C3.33253 4.88031 2.71794 5.79879 2.29906 6.81002C1.88019 7.82125 1.66527 8.90529 1.66666 9.99984C1.66525 11.0944 1.88015 12.1784 2.29903 13.1897C2.71791 14.2009 3.33251 15.1194 4.1075 15.8923C4.88046 16.6673 5.79894 17.2819 6.81018 17.7008C7.82141 18.1197 8.90544 18.3346 10 18.3332Z"
                  stroke="#ADB6BD"
                  stroke-width="1.66667"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66666 10L9.16666 12.5L14.1667 7.5"
                  stroke="#ADB6BD"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_808_7968">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </CheckBtn>
        <CheckText>서비스 약관에 동의합니다.</CheckText>
      </CheckDiv>

      <CheckDiv>
        <CheckBtn onClick={handleCheckInfo}>
          {checkInfo ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_799_6547)">
                <mask
                  id="mask0_799_6547"
                  maskType="luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <path
                    d="M10 18.3332C11.0946 18.3346 12.1786 18.1197 13.1899 17.7008C14.2011 17.2819 15.1196 16.6673 15.8925 15.8923C16.6675 15.1194 17.2821 14.2009 17.701 13.1897C18.1199 12.1784 18.3348 11.0944 18.3334 9.99984C18.3348 8.90529 18.1198 7.82125 17.701 6.81002C17.2821 5.79879 16.6675 4.88031 15.8925 4.10734C15.1196 3.33236 14.2011 2.71776 13.1899 2.29888C12.1786 1.88 11.0946 1.66509 10 1.66651C8.90548 1.66512 7.82144 1.88003 6.81021 2.29891C5.79897 2.71779 4.88049 3.33237 4.10753 4.10734C3.33256 4.88031 2.71797 5.79879 2.29909 6.81002C1.88022 7.82125 1.6653 8.90529 1.66669 9.99984C1.66528 11.0944 1.88018 12.1784 2.29906 13.1897C2.71794 14.2009 3.33254 15.1194 4.10753 15.8923C4.88049 16.6673 5.79897 17.2819 6.81021 17.7008C7.82144 18.1197 8.90548 18.3346 10 18.3332Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66669 10L9.16669 12.5L14.1667 7.5"
                    stroke="black"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_799_6547)">
                  <path d="M0 0H20V20H0V0Z" fill="#05B70C" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_799_6547">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_808_7968)">
                <path
                  d="M10 18.3332C11.0946 18.3346 12.1786 18.1197 13.1898 17.7008C14.2011 17.2819 15.1195 16.6673 15.8925 15.8923C16.6675 15.1194 17.2821 14.2009 17.701 13.1897C18.1198 12.1784 18.3347 11.0944 18.3333 9.99984C18.3347 8.90529 18.1198 7.82125 17.7009 6.81002C17.2821 5.79879 16.6675 4.88031 15.8925 4.10734C15.1195 3.33236 14.2011 2.71776 13.1898 2.29888C12.1786 1.88 11.0946 1.66509 10 1.66651C8.90544 1.66512 7.82141 1.88003 6.81018 2.29891C5.79894 2.71779 4.88046 3.33237 4.1075 4.10734C3.33253 4.88031 2.71794 5.79879 2.29906 6.81002C1.88019 7.82125 1.66527 8.90529 1.66666 9.99984C1.66525 11.0944 1.88015 12.1784 2.29903 13.1897C2.71791 14.2009 3.33251 15.1194 4.1075 15.8923C4.88046 16.6673 5.79894 17.2819 6.81018 17.7008C7.82141 18.1197 8.90544 18.3346 10 18.3332Z"
                  stroke="#ADB6BD"
                  stroke-width="1.66667"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66666 10L9.16666 12.5L14.1667 7.5"
                  stroke="#ADB6BD"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_808_7968">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </CheckBtn>
        <CheckText>개인정보 수집 및 이용에 동의합니다.</CheckText>
      </CheckDiv>

      <Btn>
        <BtnText>다음</BtnText>
      </Btn>
    </BigDiv>
  );
}

export default NormalJoin;

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
  position: absolute;
  margin-left: 291px;
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
  border: none; /* 테두리를 없앱니다. */
  outline: none; /* 포커스 테두리를 없앱니다. */
  position: relative;
  left: 25px;
`;

const PasswdInput = styled.input`
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

const CheckPasswdInput = styled.input`
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

const CheckNumInput = styled.input`
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

const CheckText = styled.span`
  position: relative;
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CheckBtn = styled.span`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CheckDiv = styled.div`
  position: relative;
  margin-bottom: 32px;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
`;

const Btn = styled.div`
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #e2e2e2;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
`;

const BtnText = styled.div`
  color: #979797;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
