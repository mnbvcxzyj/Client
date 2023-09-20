import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  width: 340px;
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

function Complete() {
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
    </Div>
  );
}

export default Complete;
