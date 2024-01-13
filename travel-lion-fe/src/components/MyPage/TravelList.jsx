import React, { useState, useEffect, useContext } from 'react';
import * as T from './TravelListStyle';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import arrow from '../../images/TravelAccount/backarrow.svg';
import { AuthContext } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';
import { getFlagEmoji } from '../../utils/flagEmoji';
import { useNavigate } from 'react-router-dom';

const TravelList = () => {
  const { user, refreshAccessToken } = useContext(AuthContext);
  const [travelList, setTravelList] = useState([]);
  const [sortOption, setSortOption] = useState('newest');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const goToInvite = (userId, groupId) => {
    navigate('/mypage/travellist/invite/${groupId}', {
      state: { userId, groupId },
    });
  };
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
      <T.Container>
        <T.BackDiv to="/mypage">
          <img src={arrow} alt="<" />
          <T.Text>여행 리스트 관리</T.Text>
        </T.BackDiv>
        <T.DropdownContainer>
          <T.DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {sortOption === 'newest' && '최신순'}
            {sortOption === 'oldest' && '오래된순'}
            {sortOption === 'alphabetical' && '가나다순'}&nbsp;▼
          </T.DropdownHeader>
          {isDropdownOpen && (
            <T.DropdownList>
              <T.DropdownItem onClick={() => onSelectSortOption('newest')}>
                최신순
              </T.DropdownItem>
              <T.DropdownItem onClick={() => onSelectSortOption('oldest')}>
                오래된순
              </T.DropdownItem>
              <T.DropdownItem
                onClick={() => onSelectSortOption('alphabetical')}
              >
                가나다순
              </T.DropdownItem>
            </T.DropdownList>
          )}
        </T.DropdownContainer>
        <T.ListWrap>
          {travelList.map((travel) => (
            <T.ListBox
              key={travel.groupId}
              onClick={() => goToInvite(user.userId, travel.groupId)}
            >
              <p>{travel.groupId}</p>
              <T.Flag>
                <span className={getFlagEmoji(travel.nation)}></span>
              </T.Flag>
              <T.Title title={travel.title}>{travel.title}</T.Title>
              <T.DateText>
                {formatDate(travel.startDate)} - {formatDate(travel.endDate)}
              </T.DateText>
            </T.ListBox>
          ))}
        </T.ListWrap>
      </T.Container>
    </>
  );
};
export default TravelList;
