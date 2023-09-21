import React, { useState, useEffect } from 'react';
import shareLogoWhite from '../../images/MainPage/share_white.svg';
import shareLogoGreen from '../../images/MainPage/share_green.svg';
import * as M from './MainPageStyle';
import { travelData } from '../../data/TravelData';

export default function ListBlock() {
  // 국기 이모지
  const getFlagEmoji = (c) =>
    String.fromCodePoint(
      ...[...c.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt()),
    );

  const [travelDatas, setTravelDatas] = useState(travelData);

  const calculateDday = (date) => {
    const today = new Date();
    const timeDiff = date - today;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
  };

  const getDdayText = (daysDiff) => {
    if (daysDiff < 0) {
      return `D + ${Math.abs(daysDiff)}`;
    } else {
      return `D - ${daysDiff}`;
    }
  };

  useEffect(() => {
    const sortedDdays = travelDatas
      .slice()
      .sort((a, b) => calculateDday(a.firstDate) - calculateDday(b.firstDate));
    setTravelDatas(sortedDdays);
  }, []);

  const sortedTravelDatas = travelDatas
    .slice()
    .sort((a, b) => calculateDday(a.firstDate) - calculateDday(b.firstDate));

  const minRemainingTime = calculateDday(sortedTravelDatas[0].firstDate);

  return (
    <>
      <M.ListContainer>
        <M.ListText>리스트</M.ListText>
        {travelDatas.map((travelData) => {
          const remainingTime = calculateDday(travelData.firstDate);
          const isExpired = remainingTime <= 0;
          const isMinRemainingTime = remainingTime === minRemainingTime;

          return (
            !isExpired && (
              <M.TravelItem
                key={travelData.title}
                isExpired={isExpired}
                isMinRemainingTime={isMinRemainingTime}
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
                    {getFlagEmoji(travelData.countryCode)}
                  </M.FlagEmoji>

                  <M.TravelInfo>
                    <M.TravelTitle>{travelData.title}</M.TravelTitle>
                    <M.TravelInfo2>
                      <div>
                        {travelData.country} - {travelData.city}
                      </div>
                      |
                      <div>
                        {travelData.firstDate.toLocaleDateString('en-US', {
                          month: '2-digit',
                          day: '2-digit',
                        })}
                        &nbsp;-&nbsp;
                        {travelData.lastDate.toLocaleDateString('en-US', {
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
                    {travelData.amount.toLocaleString()}원
                  </M.AmountText>
                </M.TravelDetail>
              </M.TravelItem>
            )
          );
        })}
      </M.ListContainer>
    </>
  );
}
