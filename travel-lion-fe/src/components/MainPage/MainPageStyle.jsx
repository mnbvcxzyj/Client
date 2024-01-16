import { styled } from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 40px;
  padding-top: 60px;
  font-family: Pretendard;
`;

export const Content = styled.section`
  max-width: 390px;
`;

export const ListText = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TravelItem = styled.div`
  width: 360px;
  height: 189px;
  flex-shrink: 0;
  border-radius: 30px;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.05);
  margin-top: 20px;

  // d-day 변화에 따른 css
  color: ${(props) => (props.isMinRemainingTime ? '#FFF;' : 'black')};
  background-color: ${(props) =>
    props.isMinRemainingTime ? '#00BC78;' : 'white'};
`;

export const TopDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  padding-top: 27px;
`;

export const DdayText = styled.div`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ShareLogo = styled.div`
  margin-left: 257px;
`;

export const TravelContainer = styled.div`
  display: flex;
  margin-left: 23px;
  gap: 12px;
`;

export const TravelTitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const TravelInfo2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  gap: 10px;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FlagEmoji = styled.div`
  font-size: 2rem;
`;

export const TravelInfo = styled.div`
  margin-top: 12px;
`;

export const TravelDetail = styled.div`
  display: flex;
  padding: 25px;
`;

export const Participants = styled.div`
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
`;

export const AmountText = styled.div`
  width: 50%;
  text-align: right;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ParticipantImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 2px solid #fff;
  background: ${(props) => (props.src ? 'transparent' : '#D9D9D9')};
  object-fit: cover;
`;
