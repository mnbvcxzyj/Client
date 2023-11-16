//경로: /mainpage
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MyPageMain = () => {
  const navigate = useNavigate();

  const handlePageNavigation = () => {
    navigate('/mypage/account');
  };

  return (
    <>
      <Container>
        <Header>마이페이지</Header>
        <GoInfo onClick={handlePageNavigation}>
          <ProfileImg src="/images/google.png"></ProfileImg>
          <Name>닉네임</Name>
          <GoBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.875 21.0999L17.3 12.6999C17.4 12.5999 17.471 12.4916 17.513 12.3749C17.555 12.2582 17.5757 12.1332 17.575 11.9999C17.575 11.8666 17.5543 11.7416 17.513 11.6249C17.4717 11.5082 17.4007 11.3999 17.3 11.2999L8.875 2.8749C8.64167 2.64157 8.35 2.5249 8 2.5249C7.65 2.5249 7.35 2.6499 7.1 2.8999C6.85 3.1499 6.725 3.44157 6.725 3.7749C6.725 4.10824 6.85 4.3999 7.1 4.6499L14.45 11.9999L7.1 19.3499C6.86667 19.5832 6.75 19.8709 6.75 20.2129C6.75 20.5549 6.875 20.8506 7.125 21.0999C7.375 21.3499 7.66667 21.4749 8 21.4749C8.33333 21.4749 8.625 21.3499 8.875 21.0999Z"
                fill="#353A40"
              />
            </svg>
          </GoBtn>
        </GoInfo>
        <GreenBtn>
          <GreenText>여행리스트 관리</GreenText>
          <GreenGoBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.875 21.0999L17.3 12.6999C17.4 12.5999 17.471 12.4916 17.513 12.3749C17.555 12.2582 17.5757 12.1332 17.575 11.9999C17.575 11.8666 17.5543 11.7416 17.513 11.6249C17.4717 11.5082 17.4007 11.3999 17.3 11.2999L8.875 2.8749C8.64167 2.64157 8.35 2.5249 8 2.5249C7.65 2.5249 7.35 2.6499 7.1 2.8999C6.85 3.1499 6.725 3.44157 6.725 3.7749C6.725 4.10824 6.85 4.3999 7.1 4.6499L14.45 11.9999L7.1 19.3499C6.86667 19.5832 6.75 19.8709 6.75 20.2129C6.75 20.5549 6.875 20.8506 7.125 21.0999C7.375 21.3499 7.66667 21.4749 8 21.4749C8.33333 21.4749 8.625 21.3499 8.875 21.0999Z"
                fill="white"
              />
            </svg>
          </GreenGoBtn>
        </GreenBtn>
      </Container>
    </>
  );
};

export default MyPageMain;

const Container = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  font-family: Pretendard;
  margin: 0 auto;
  max-width: 390px;
  width: 100%;
  padding: 0 17px;
`;

const Header = styled.div`
  margin: 0 auto;
  margin-top: 47px;
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const GoInfo = styled.div`
  /* position: absolute; */
  /* top: 106px; */

  display: flex;
  align-items: center;
  width: 390px;
  height: 109px;
  margin-top: 33px;
  flex-shrink: 0;
  padding: 0 20px;
`;

const ProfileImg = styled.img`
  /* position: absolute;
  top: 28px;
  left: 38px;
  bottom: 21px; */

  display: flex;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
`;

const Name = styled.div`
  /* position: absolute;
  top: 46px;
  left: 115px; */

  margin-left: 17px;
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const GoBtn = styled.div`
  /* position: absolute;
  top: 46px;
  right: 35px; */
  width: 24px;
  height: 24px;
  margin-left: 166px;
  flex-shrink: 0;
`;

const GreenBtn = styled.div`
  /* position: absolute;
  top: 223px;
  display: flex;
  align-content: center;
  font-family: Pretendard;
  width: 355px;
  margin: auto;
  border-radius: 15px;
  background: #00bc78;
  height: 109px; */

  display: flex;
  height: 93px;
  padding: 0px 18px 0px 35px;
  align-items: center;
  gap: 152px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #00bc78;
`;

const GreenText = styled.div`
  /* position: absolute;
  top: 40px;
  left: 35px; */
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const GreenGoBtn = styled.div`
  width: 24px;
  height: 24px;
`;
