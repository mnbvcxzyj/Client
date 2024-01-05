import React from 'react';
import styled from 'styled-components';

const IsMember = () => {
  return (
    <div>
      <BackgroundStyle>
        <AlertStyleDiv>
          <Content>
            로그인을 하면 자유롭게
            <br />
            가계부를 입력할 수 있습니다.
          </Content>
          <LoginBtn>로그인하기</LoginBtn>
        </AlertStyleDiv>
      </BackgroundStyle>
    </div>
  );
};

export default IsMember;

const BackgroundStyle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 390px;
  height: 100%;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const AlertStyleDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 129px;
  margin: auto;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
`;

const Content = styled.div`
  color: var(--Darkgray, #353a40);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 20px;
`;

const LoginBtn = styled.button`
  width: 155px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #00bc78;
  text-align: center;
  margin-left: 61px;

  color: #fff;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
