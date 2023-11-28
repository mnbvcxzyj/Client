import styled from 'styled-components';
import arrow from '../../images/TravelAccount/arrow.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 390px;
  margin: 0 auto;
  margin-top: 46px;
  gap: 26px;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 339px;
  height: 55px;
  flex-shrink: 0;

  border-radius: 6px;
  border: 0.8px solid var(--Gray, #adb6bd);

  img {
    cursor: pointer;
    width: 18px;
    height: 18px;
  }
`;

export const Text = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Input = styled.input`
  width: 339px;
  height: 55px;
  flex-shrink: 1;
  border: none;
  outline: none;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 16px;
  border-radius: 6px;
  border: 0.8px solid var(--Gray, #adb6bd);
`;

export const CountryDropdown = styled.select`
  width: 339px;
  height: 55px;

  flex-shrink: 0;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 10px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  appearance: none;

  background: url(${arrow}) no-repeat 98% 50%/18px auto;
`;

export const CountryOption = styled.option`
  background-color: #fff;
  color: #000;
  outline: none;
  border: none;
  -webkit-appearance: none;
  appearance: none;
`;

export const DateModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  // 달력 커스텀
  .react-calendar {
    // 흰 창
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 350px;
    height: 350px;
    max-width: 100%;
    background-color: #fff;
    border-radius: 8px;
    font-family: Pretendard;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
  .react-calendar__navigation__label {
    margin-top: 23px;
  }

  .react-calendar__navigation__arrow,
  .react-calendar__navigation__next-button {
    margin-top: 23px;
  }

  .react-calendar__tile--now {
    // 오늘 날짜
    background: none;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background-color: #00bc78;
    /* border-radius: 30px; */
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #00bc78;
    /* border-radius: 30px; */

    color: white;
  }

  // 년,월 글자
  .react-calendar__navigation__label > span {
    color: var(--Darkgray, #353a40);
    text-align: center;
    margin: 0 75px 0 75px;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  // 요일
  .react-calendar__month-view__weekdays {
    margin-top: 19px;
    abbr {
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0.36px;
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  // 한 칸
  .react-calendar__tile {
    display: flex;
    height: 42px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 157.143% */
  }

  // 기간 설정하면 배경
  .react-calendar__tile--active {
    background: #dff3dd;
    color: black;
  }

  // 시작 날짜, 끝 날짜
  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd {
    background-color: #00bc78;
    /* border-radius: 30px; */
    color: white;
  }

  // 기간 선택하면 그 사이 배경
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #dff3dd;
    /* border-radius: 30px; */
  }
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 120px;
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #00bc78;
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
`;

export const erText = styled.div`
  color: #626262;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
