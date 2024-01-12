import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrow from '../../images/TravelAccount/backarrow.svg';
import { AuthContext } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';
import { getFlagEmoji } from '../../utils/flagEmoji';

const TravelList = () => {
  const { user, refreshAccessToken } = useContext(AuthContext);
  const [travelList, setTravelList] = useState([]);
  const axiosInstance = createAxiosInstance(refreshAccessToken);
  useEffect(() => {
    if (user && user.userId) {
      axiosInstance
        .get(`/${user.userId}/grouplist`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((response) => {
          setTravelList(response.data);
        })
        .catch((error) => {
          console.error(
            '여행 리스트를 가져오는 중 오류가 발생했습니다:',
            error,
          );
        });
    }
  }, [user, axiosInstance]);

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return `${month}/${day}`;
  };

  return (
    <>
      <Container>
        <BackDiv to="/mypage">
          <img src={arrow} alt="<" />
          <Text>여행 리스트 관리</Text>
        </BackDiv>
        <ListWrap>
          {travelList.map((travel) => (
            <ListBox key={travel.groupId}>
              <Flag>{getFlagEmoji(travel.nation)}</Flag>
              <Title title={travel.title}>{travel.title}</Title>
              <Date>
                {formatDate(travel.startDate)} - {formatDate(travel.endDate)}
              </Date>
            </ListBox>
          ))}
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
  margin-bottom: 10px;
  padding: 0 30px;
`;

const Flag = styled.div`
  width: 10%;
  font-size: 25px;
`;

const Title = styled.div`
  width: 60%;
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 17px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  color: #525252;
  width: 30%;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 20px;
`;
export default TravelList;
