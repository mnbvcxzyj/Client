import React, { useState, useEffect, useContext } from 'react';
import shareLogoWhite from '../../images/MainPage/share_white.svg';
import shareLogoGreen from '../../images/MainPage/share_green.svg';
import * as M from './MainPageStyle';
import { Link } from 'react-router-dom';
import { AuthContext, useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';
import { getFlagEmoji } from '../../utils/flagEmoji';

const TravelItem = ({ travelData, isMinRemainingTime }) => {
  const isExpired = parseDday(travelData.dday) < 0;

  return (
    <Link to={`/travelaccountbook/${travelData.groupId}`}>
      <M.TravelItem
        key={travelData.title}
        isExpired={isExpired}
        isMinRemainingTime={isMinRemainingTime}
      >
        <M.TopDiv>
          <M.DdayText>{travelData.dday.replace('일', '')}</M.DdayText>
          <M.ShareLogo>
            <img
              src={isExpired ? shareLogoWhite : shareLogoGreen}
              alt="sharelogo"
            />
          </M.ShareLogo>
        </M.TopDiv>

        <M.TravelContainer>
          <M.FlagEmoji>{getFlagEmoji(travelData.nation)}</M.FlagEmoji>
          <M.TravelInfo>
            <M.TravelTitle>{travelData.title}</M.TravelTitle>
            <M.TravelInfo2>
              <div>
                {travelData.nation} - {travelData.location}
              </div>
              <div>
                {formatDate(travelData.startDate)} -{' '}
                {formatDate(travelData.endDate)}
              </div>
            </M.TravelInfo2>
          </M.TravelInfo>
        </M.TravelContainer>

        <M.TravelDetail>
          <M.Participants>사진사진사진</M.Participants>
          <M.AmountText>{travelData.budget.toLocaleString()}원</M.AmountText>
        </M.TravelDetail>
      </M.TravelItem>
    </Link>
  );
};

// 날짜 형식 변환
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
};

// D-day 파싱
const parseDday = (ddayString) => {
  if (ddayString === 'D-Day') {
    return 0;
  }
  if (ddayString.startsWith('D+')) {
    return -1;
  }
  const numberString = ddayString.replace('D-', '').replace('일', '').trim();
  return parseInt(numberString);
};

export default function ListBlock() {
  const [travelDatas, setTravelDatas] = useState([]);
  const { user } = useContext(AuthContext);
  const { refreshAccessToken } = useAuth();
  const axiosInstance = createAxiosInstance(refreshAccessToken);

  useEffect(() => {
    if (user) {
      axiosInstance
        .get(`/${user.userId}/grouplist`, {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        })
        .then((response) => {
          const sortedData = response.data.sort(
            (a, b) => parseDday(a.dday) - parseDday(b.dday),
          );
          setTravelDatas(sortedData);
        })
        .catch((error) => {
          console.error(
            '백엔드에서 데이터를 가져오는 중 오류가 발생했습니다.',
            error,
          );
        });
    }
  }, [user, axiosInstance]);

  return (
    <M.ListContainer>
      <M.Content>
        <M.ListText>여행 리스트</M.ListText>
        {travelDatas.map((travelData) => {
          const isMinRemainingTime =
            parseDday(travelData.dday) === parseDday(travelDatas[0].dday);
          return (
            <TravelItem
              travelData={travelData}
              isMinRemainingTime={isMinRemainingTime}
            />
          );
        })}
      </M.Content>
    </M.ListContainer>
  );
}
