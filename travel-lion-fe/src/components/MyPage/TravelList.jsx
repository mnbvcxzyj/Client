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
  const [sortOption, setSortOption] = useState('newest');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          const sortedList = sortTravelList(sortOption, response.data);
          setTravelList(sortedList);
        })
        .catch((error) => {
          console.error(
            '여행 리스트를 가져오는 중 오류가 발생했습니다:',
            error,
          );
        });
    }
  }, [user, axiosInstance, sortOption]);

  const sortTravelList = (option, list) => {
    switch (option) {
      case 'newest':
        return list.sort(
          (a, b) => new Date(a.startDate) - new Date(b.startDate),
        );
      case 'oldest':
        return list.sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate),
        );
      case 'alphabetical':
        return list.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return list;
    }
  };

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return `${month}/${day}`;
  };

  const onSelectSortOption = (option) => {
    setSortOption(option);
    setTravelList(sortTravelList(option, [...travelList]));
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Container>
        <BackDiv to="/mypage">
          <img src={arrow} alt="<" />
          <Text>여행 리스트 관리</Text>
        </BackDiv>

        <DropdownContainer>
          <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {sortOption === 'newest' && '최신순'}
            {sortOption === 'oldest' && '오래된순'}
            {sortOption === 'alphabetical' && '가나다순'}&nbsp;▼
          </DropdownHeader>
          {isDropdownOpen && (
            <DropdownList>
              <DropdownItem onClick={() => onSelectSortOption('newest')}>
                최신순
              </DropdownItem>
              <DropdownItem onClick={() => onSelectSortOption('oldest')}>
                오래된순
              </DropdownItem>
              <DropdownItem onClick={() => onSelectSortOption('alphabetical')}>
                가나다순
              </DropdownItem>
            </DropdownList>
          )}
        </DropdownContainer>

        <ListWrap>
          {travelList.map((travel) => (
            <ListBox key={travel.groupId}>
              <Flag>{getFlagEmoji(travel.nation)}</Flag>
              <Title title={travel.title}>{travel.title}</Title>
              <DateText>
                {formatDate(travel.startDate)} - {formatDate(travel.endDate)}
              </DateText>
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

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: 0 30px 10px;
`;

const DropdownHeader = styled.div`
  cursor: pointer;

  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  background: white;
  overflow: hidden;
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    background-color: #f0f0f0;
  }
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

const DateText = styled.div`
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
