import React, { useState, useEffect, useContext } from 'react';
import shareLogoWhite from '../../images/MainPage/share_white.svg';
import shareLogoGreen from '../../images/MainPage/share_green.svg';
import * as M from './MainPageStyle';
import { Link } from 'react-router-dom';
import { AuthContext, useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';
import { useMemo } from 'react';
import { getFlagEmoji } from '../../utils/flagEmoji';

export default function ListBlock(planId) {
  const [travelDatas, setTravelDatas] = useState([]);
  const { user } = useContext(AuthContext);
  const { refreshAccessToken } = useAuth();

  const axiosInstance = useMemo(
    () => createAxiosInstance(refreshAccessToken),
    [refreshAccessToken],
  );

  useEffect(() => {
    if (user) {
      const userId = user.userId;
      const token = user.accessToken;
      console.log(userId, token);

      axiosInstance
        .get(`/${userId}/grouplist`, {
          headers: {
            Authorization: `Bearer ${token}`, // 헤더에 액세스 토큰 설정
          },
        })
        .then((response) => {
          setTravelDatas(response.data);
        })
        .catch((error) => {
          console.error(
            '백엔드에서 데이터를 가져오는 중 오류가 발생했습니다.',
            error,
          );
        });
    }
  }, [user, axiosInstance]);

  const calculateDday = (startDate, endDate) => {
    const today = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (today >= start && today <= end) {
      // 여행이 진행 중
      return Math.ceil((end - today) / (1000 * 60 * 60 * 24));
    } else if (today < start) {
      // 여행 시작 전
      return Math.ceil((start - today) / (1000 * 60 * 60 * 24));
    } else {
      // 여행 종료
      return -1;
    }
  };

  // const getDdayText = (daysDiff, endDate) => {
  //   if (daysDiff > 0) {
  //     // 여행이 시작되지 않았을 때
  //     return `D-${daysDiff}`;
  //   } else if (daysDiff < 0) {
  //     // 여행이 종료된 후
  //     const end = new Date(endDate);
  //     const today = new Date();
  //     const passedDays = Math.ceil((today - end) / (1000 * 60 * 60 * 24));

  //     return `D+${daysDiff}`;
  //   }
  // };

  const getDdayText = (daysDiff, endDate) => {
    if (daysDiff > 0) {
      return `D-${daysDiff}`;
    } else if (daysDiff === 0) {
      return 'D-Day';
    } else {
      const end = new Date(endDate);
      const today = new Date();
      const passedDays = Math.ceil((today - end) / (1000 * 60 * 60 * 24));
      return `D+${passedDays}`;
    }
  };

  // useEffect(() => {
  //   const sortedDdays = travelDatas
  //     .slice()
  //     .sort((a, b) => calculateDday(a.startDate) - calculateDday(b.startDate));
  //   setTravelDatas(sortedDdays);
  // }, []);

  useEffect(() => {
    const sortedTravelDatas = travelDatas.slice().sort((a, b) => {
      const remainingTimeA = calculateDday(a.startDate, a.endDate);
      const remainingTimeB = calculateDday(b.startDate, b.endDate);

      // 먼저 진행 중인 여행을 상단에 배치
      if (remainingTimeA <= 0 && remainingTimeB > 0) return -1;
      if (remainingTimeB <= 0 && remainingTimeA > 0) return 1;

      // 나머지는 여행 시작일 기준으로 오름차순 정렬
      return new Date(a.startDate) - new Date(b.startDate);
    });
    setTravelDatas(sortedTravelDatas);
  }, []);

  const sortedTravelDatas = travelDatas
    .slice()
    .sort(
      (a, b) =>
        calculateDday(a.startDate, a.endDate) -
        calculateDday(b.startDate, b.endDate),
    );

  const minRemainingTime =
    sortedTravelDatas.length > 0
      ? calculateDday(
          sortedTravelDatas[0].startDate,
          sortedTravelDatas[0].endDate,
        )
      : 0;

  return (
    <>
      <M.ListContainer>
        <M.Content>
          <M.ListText>여행 리스트</M.ListText>
          {travelDatas.map((travelData) => {
            // const isMinRemainingTime =
            //   remainingTime === minRemainingTime && !isExpired;

            const startDate = new Date(travelData.startDate);
            const endDate = new Date(travelData.endDate);

            const remainingTime = calculateDday(startDate, endDate);
            const isExpired = remainingTime === -1;
            const isMinRemainingTime = remainingTime <= 0;

            return (
              !isExpired && (
                <Link to={`/travelaccountbook/${travelData.groupId}`}>
                  <M.TravelItem
                    // key={travelData.title}
                    // isExpired={isExpired}
                    // isMinRemainingTime={isMinRemainingTime}
                    // remainingTime={remainingTime}
                    key={travelData.title}
                    isExpired={isExpired}
                    isMinRemainingTime={remainingTime === 0}
                    remainingTime={remainingTime}
                  >
                    <M.TopDiv>
                      <M.DdayText>{getDdayText(remainingTime)}</M.DdayText>
                      <M.ShareLogo>
                        <img
                          src={isExpired ? shareLogoWhite : shareLogoGreen}
                          alt="sharelogo"
                        />
                      </M.ShareLogo>
                    </M.TopDiv>

                    <M.TravelContainer>
                      <M.FlagEmoji>
                        {getFlagEmoji(travelData.nation)}
                      </M.FlagEmoji>

                      <M.TravelInfo>
                        <M.TravelTitle>{travelData.title}</M.TravelTitle>
                        <M.TravelInfo2>
                          <div>
                            {travelData.nation} - {travelData.location}
                          </div>
                          |
                          <div>
                            {startDate.toLocaleDateString('en-US', {
                              month: '2-digit',
                              day: '2-digit',
                            })}
                            &nbsp;-&nbsp;
                            {endDate.toLocaleDateString('en-US', {
                              month: '2-digit',
                              day: '2-digit',
                            })}
                          </div>
                        </M.TravelInfo2>
                      </M.TravelInfo>
                    </M.TravelContainer>

                    <M.TravelDetail>
                      <M.Participants>사진사진사진</M.Participants>
                      <M.AmountText>
                        {travelData.budget.toLocaleString()}원
                      </M.AmountText>
                    </M.TravelDetail>
                  </M.TravelItem>
                </Link>
              )
            );
          })}
        </M.Content>
      </M.ListContainer>
    </>
  );
}
