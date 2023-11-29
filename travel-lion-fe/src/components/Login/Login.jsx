import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Cookies } from 'react-cookie';

//아이디 저장에 react-cookie 이용
//npm install react-cookie 에러나서 아래의 명령문 사용
//npm install js-cookie
function Login() {
  const cookies = new Cookies();

  const [saveBtnClicked, setSaveBtnClicked] = useState(
    cookies.get('savedId') === 'true',
  );

  const handleSaveBtnClick = () => {
    const newValue = !saveBtnClicked;
    setSaveBtnClicked(newValue);
    // cookies.set('savedId', newValue, { expires: 365 }); // 쿠키 설정
    const expires = new Date();
    expires.setDate(expires.getDate() + 365); // 현재로부터 365일 후
    cookies.set('savedId', newValue, { expires: expires });
    console.log('cookie');
  };

  return (
    <CenterDiv>
      <IdBox>
        <IdText placeholder="아이디"></IdText>
      </IdBox>
      <PasswdBox>
        <PasswdText type="password" placeholder="비밀번호"></PasswdText>
      </PasswdBox>
      <Check>
        <CheckText>확인</CheckText>
      </Check>
      <SaveDiv onClick={handleSaveBtnClick}>
        <SaveIdBtn>
          {saveBtnClicked ? (
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
              <g clip-path="url(#clip0_799_6524)">
                <path
                  d="M10 18.3332C11.0946 18.3346 12.1786 18.1197 13.1899 17.7008C14.2011 17.2819 15.1196 16.6673 15.8925 15.8923C16.6675 15.1194 17.2821 14.2009 17.701 13.1897C18.1199 12.1784 18.3348 11.0944 18.3334 9.99984C18.3348 8.90529 18.1198 7.82125 17.701 6.81002C17.2821 5.79879 16.6675 4.88031 15.8925 4.10734C15.1196 3.33236 14.2011 2.71776 13.1899 2.29888C12.1786 1.88 11.0946 1.66509 10 1.66651C8.90548 1.66512 7.82144 1.88003 6.81021 2.29891C5.79898 2.71779 4.88049 3.33237 4.10753 4.10734C3.33256 4.88031 2.71797 5.79879 2.29909 6.81002C1.88022 7.82125 1.6653 8.90529 1.66669 9.99984C1.66528 11.0944 1.88018 12.1784 2.29906 13.1897C2.71794 14.2009 3.33254 15.1194 4.10753 15.8923C4.88049 16.6673 5.79898 17.2819 6.81021 17.7008C7.82144 18.1197 8.90548 18.3346 10 18.3332Z"
                  stroke="#ADB6BD"
                  stroke-width="1.66667"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66669 10L9.16669 12.5L14.1667 7.5"
                  stroke="#ADB6BD"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_799_6524">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </SaveIdBtn>
        <SaveIdText>아이디 저장</SaveIdText>
      </SaveDiv>
      <Join>회원가입</Join>
      <Find>ID/PW 찾기</Find>
      <SimpleLogin>
        간편 로그인<br></br>
        <SocialLogin src={`/images/naver.png`} alt="Naver"></SocialLogin>
        <SocialLogin src={`/images/kakao.png`} alt="Kakao"></SocialLogin>
        <GoogleLogin src={`/images/google.png`} alt="Google"></GoogleLogin>
      </SimpleLogin>
    </CenterDiv>
  );
}

export default Login;

const CenterDiv = styled.div`
  position: relative;
  width: 340px;
  margin: auto;
`;

const IdBox = styled.div`
  position: relative;
  top: 230px;
  margin: auto;
  border-radius: 10px;
  border: 1.5px solid var(--Gray, #adb6bd);
  width: 340px;
  height: 45px;
  flex-shrink: 0;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
`;

const IdText = styled.input`
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

const PasswdBox = styled.div`
  position: relative;
  top: 240px;
  margin: auto;
  border-radius: 10px;
  border: 1.5px solid var(--Gray, #adb6bd);
  width: 340px;
  height: 45px;
  flex-shrink: 0;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
`;

const PasswdText = styled.input`
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

const SaveIdBtn = styled.span`
  position: relative;
  width: 23px; /*내가 임의로 조정*/
  top: 0px;
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SaveIdText = styled.span`
  position: relative;
  width: 133px;
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const SaveDiv = styled.div`
  position: relative;
  top: 200px;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  cursor: pointer;
`;

const Check = styled.div`
  position: relative;
  top: 300px;
  margin: auto;
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #00bc6d;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
`;

const CheckText = styled.div`
  color: #fff;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Join = styled.text`
  position: absolute;
  top: 463px;
  width: 130px;
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 15px;
`;

const Find = styled.text`
  position: absolute;
  top: 463px;
  width: 290px;
  color: var(--Gray, #adb6bd);
  text-align: right;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 30px;
`;

const SimpleLogin = styled.div`
  position: relative;
  top: 400px;
  color: var(--Gray, #adb6bd);
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: auto;
`;

const SocialLogin = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50px;
  margin-top: 13px;
  margin-right: 30px;
`;

const GoogleLogin = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50px;
  margin-top: 13px;
  /* Google 이미지에는 오른쪽 마진을 주지 않습니다. */
`;
