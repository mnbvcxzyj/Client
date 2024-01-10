import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Complete() {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login');
  };

  return (
    <Div>
      <Logo>
        <svg
          width="119"
          height="120"
          viewBox="0 0 119 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="92.0106"
            height="30"
            rx="15"
            transform="matrix(-0.0120981 -0.999927 -0.999927 0.0120981 96.4214 100.031)"
            fill="#00BC78"
          />
          <rect
            width="92.0107"
            height="30"
            rx="15"
            transform="matrix(-0.866025 0.5 0.5 0.866025 85.8472 2.00977)"
            fill="#00BC78"
          />
          <path
            d="M67 88.0442C64 60.5442 37.8026 64.7607 32.5 67.0442L68.0002 43.5444L69.0002 53.0444L67 88.0442Z"
            fill="#00BC78"
            stroke="#00BC78"
            stroke-linecap="round"
          />
          <circle
            cx="43.0072"
            cy="89.9367"
            r="11.0413"
            transform="rotate(30 43.0072 89.9367)"
            fill="#00BC78"
          />
        </svg>
      </Logo>
      <Text>회원가입이 완료되었습니다.</Text>
      <Btn onClick={goLogin}>
        <BtnText>로그인하러 가기</BtnText>
      </Btn>
    </Div>
  );
}

export default Complete;

const Div = styled.div`
  position: relative;
  width: 340px;
  height: 844px;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.div`
  position: relative;
  width: 93px;
  height: 93.089px;
  flex-shrink: 0;
  top: 202px;
  margin: auto;
`;

const Text = styled.div`
  position: relative;
  top: 250px;
  width: 178px;
  color: #272727;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: auto;
`;

const Btn = styled.div`
  position: absolute;
  top: 734px;
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #00bc78;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
  cursor: pointer;
`;

const BtnText = styled.div`
  color: #ffffff;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
