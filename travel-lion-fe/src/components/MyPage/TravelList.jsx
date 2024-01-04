import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '../../images/TravelAccount/backarrow.svg';

const TravelList = () => {
  return (
    <>
      <Container>
        <BackDiv to="/mypage">
          <img src={arrow} alt="<" />
          <Text>여행 리스트 관리</Text>
        </BackDiv>
        <ListWrap>
          <ListBox>
            <Flag>국기</Flag>
            <Title>자유여행</Title>
            <Date>07/09~08/01</Date>
          </ListBox>
        </ListWrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 390px;
  margin: 0 auto;
`;

const BackDiv = styled(Link)`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 390px;
  margin-top: 50px;
  margin-bottom: 55px;

  :nth-child(1) {
    margin-left: 25px;
  }
`;

const Text = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 76px;
`;

const ListWrap = styled.div`
  margin: 0 auto;
`;

const ListBox = styled.div`
  display: flex;
  align-items: center;

  width: 360px;
  height: 107px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #f3f3f3;
`;

const Flag = styled.div`
  margin-left: 24px;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 17px;
`;

const Date = styled.div`
  color: #525252;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-left: 94px;
`;
export default TravelList;
