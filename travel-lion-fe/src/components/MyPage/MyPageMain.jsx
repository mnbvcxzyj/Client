import React from 'react';
import styled from 'styled-components';
import blackarrow from '../../images/MyPage/blackarrow.svg';
import whitearrow from '../../images/MyPage/whitearrow.svg';
import { Link } from 'react-router-dom';
const MyPageMain = () => {
  return (
    <>
      <Container>
        <Text>마이페이지</Text>
        <Link to="account">
          <AccountWrapper>
            <ProfileImg></ProfileImg>
            <NickName>닉네임</NickName>
            <Arrow>
              <img src={blackarrow} alt=">" />
            </Arrow>
          </AccountWrapper>
        </Link>

        <Link to="travel">
          <TravelWrapper>
            <Text2>여행리스트 관리</Text2>
            <Arrow>
              <img src={whitearrow} alt=">" />
            </Arrow>
          </TravelWrapper>
        </Link>
      </Container>
    </>
  );
};

export default MyPageMain;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  margin-top: 52px;
`;

const Text = styled.div`
  color: var(--Darkgray, #353a40);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 390px;
  padding: 2rem;
  cursor: pointer;
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  background: url(''), lightgray 50% / cover no-repeat;
`;

const NickName = styled.div`
  color: var(--Darkgray, #353a40);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  // layout
  margin-left: 16px;
  margin-right: 166px;
`;

const Arrow = styled.div`
  align-items: center;
`;

const TravelWrapper = styled.div`
  display: inline-flex;
  height: 93px;
  padding: 0px 18px 0px 35px;
  justify-content: flex-end;
  align-items: center;
  gap: 152px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #05b70c;
  cursor: pointer;
`;

const Text2 = styled.div`
  color: var(--White, #fff);

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
