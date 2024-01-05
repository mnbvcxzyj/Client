import React from 'react';
import styled from 'styled-components';

const AllowUser = () => {
  return (
    <div>
      <BackgroundStyle>
        <AlertStyleDiv>
          <Content>허가된 사용자가 아닙니다.</Content>
          <ReBtn>권한 요청하기</ReBtn>
        </AlertStyleDiv>
      </BackgroundStyle>
    </div>
  );
};

export default AllowUser;

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
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 20px;
`;

const ReBtn = styled.button`
  width: 215px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #00bc78;
  text-align: center;
  margin-left: 32.5px;

  color: #fff;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
