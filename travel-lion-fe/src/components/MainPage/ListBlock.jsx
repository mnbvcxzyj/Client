import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import shareLogoWhite from '../../images/share_white.svg';
import shareLogoBlue from '../../images/share_blue.svg';

export default function ListBlock() {
  const travelData = [
    {
      title: '일본 여행',
      firstDate: new Date('2023-12-25'),
      lastDate: new Date('2023-12-31'),
      country: '일본',
      city: '후쿠오카',
      countryCode: 'JP',
      participants: [
        {
          name: '박신형',
          profileImg: '../../images/person.svg',
        },
        { name: '김예지', profileImg: '../../images/person.svg' },
        { name: '한현서', profileImg: '../../images/person.svg' },
        { name: '장윤경', profileImg: '../../images/person.svg' },
      ],
      amount: 1800000,
    },
    {
      title: '졸업 여행',
      firstDate: new Date('2023-08-24'),
      lastDate: new Date('2023-09-01'),
      country: '호주',
      city: '시드니',
      countryCode: 'AU',
      participants: [
        { name: '박신형', profileImg: '../../images/person.svg' },
        { name: '김예지', profileImg: '../../images/person.svg' },
        { name: '한현서', profileImg: '../../images/person.svg' },
        { name: '장윤경', profileImg: '../../images/person.svg' },
      ],
      amount: 1800000,
    },
    {
      title: '멋사 쫑파티 여행',
      firstDate: new Date('2023-12-31'),
      lastDate: new Date('2024-01-01'),
      country: '한국',
      city: '서울',
      countryCode: 'KR',
      participants: [
        { name: '박신형', profileImg: '../../images/person.svg' },
        { name: '김예지', profileImg: '../../images/person.svg' },
        { name: '한현서', profileImg: '../../images/person.svg' },
        { name: '장윤경', profileImg: '../../images/person.svg' },
      ],
      amount: 1800000,
    },
    // 임시 데이터 추가
  ];

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
      .sort((a, b) => a.firstDate - b.firstDate);
    setTravelDatas(sortedDdays);
  }, []);

  return (
    <>
      <ListContainer>
        <ListText>리스트</ListText>
        <ul>
          {travelDatas.map((travelDatas) => (
            <TravelItem
              key={travelDatas.title}
              isExpired={calculateDday(travelDatas.firstDate) <= 0}
            >
              <DdayText>
                {getDdayText(calculateDday(travelDatas.firstDate))}
              </DdayText>
              <ShareLogo
                src={
                  calculateDday(travelDatas.firstDate) <= 0
                    ? shareLogoWhite
                    : shareLogoBlue
                }
              ></ShareLogo>
              <br />
              <TravelContainer>
                <FlagEmoji>{getFlagEmoji(travelDatas.countryCode)}</FlagEmoji>
                <TravelInfo>
                  <TravelTitle> {travelDatas.title}</TravelTitle>
                  <TravelInfo2>
                    <TravelRegion>
                      {travelDatas.country} - {travelDatas.city} &nbsp;|
                    </TravelRegion>
                    <TravelPeriod>
                      {travelDatas.firstDate.toLocaleDateString('en-US', {
                        month: '2-digit',
                        day: '2-digit',
                      })}
                      &nbsp;-&nbsp;
                      {travelDatas.lastDate.toLocaleDateString('en-US', {
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </TravelPeriod>
                  </TravelInfo2>
                </TravelInfo>
              </TravelContainer>
              <TravelDetail>
                <Participants>사진사진사진</Participants>
                <AmountText>{travelDatas.amount.toLocaleString()}</AmountText>
              </TravelDetail>
            </TravelItem>
          ))}
        </ul>
      </ListContainer>
    </>
  );
}

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 3rem;
`;

const ListText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: -18rem;
`;

const TravelItem = styled.li`
  width: 360px;
  height: 189px;
  flex-shrink: 0;
  border-radius: 30px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
  font-family: Pretendard;

  // d-day 변화에 따른 css
  color: ${(props) => (props.isExpired ? '#FFF;' : 'black')};
  background-color: ${(props) => (props.isExpired ? '#3369FF;' : 'white')};
`;

const DdayText = styled.span`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 24px;
`;

const ShareLogo = styled.img`
  margin-left: 16rem;
  margin-top: 1rem;
`;

const TravelRegion = styled.span`
  margin-right: 10px;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TravelTitle = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

const TravelPeriod = styled.span`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TravelContainer = styled.div`
  display: flex;
`;

const FlagEmoji = styled.div`
  font-size: 2rem;
  margin-left: 23px;
`;

const TravelInfo = styled.div`
  margin-top: 12px;
  margin-left: 12px;
`;

const TravelInfo2 = styled.div``;

const TravelDetail = styled.div`
  display: flex;
  margin-top: 29px;
  margin-left: 22px;
`;

const Participants = styled.span``;

const AmountText = styled.span`
  margin-left: 127px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
