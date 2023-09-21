import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
  background: #05b70c;
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

function Complete() {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login');
  };

  return (
    <Div>
      <Logo>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="93"
          height="94"
          viewBox="0 0 93 94"
          fill="none"
        >
          <rect
            x="93"
            y="18.811"
            width="104.961"
            height="26.624"
            rx="13.312"
            transform="rotate(134.954 93 18.811)"
            fill="#05B70C"
          />
          <rect
            x="31.7773"
            y="3.88232"
            width="81.3512"
            height="26.624"
            rx="13.312"
            transform="rotate(90 31.7773 3.88232)"
            fill="#05B70C"
          />
          <circle
            cx="73.1928"
            cy="74.8798"
            r="14.7911"
            transform="rotate(-180 73.1928 74.8798)"
            fill="#05B70C"
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
