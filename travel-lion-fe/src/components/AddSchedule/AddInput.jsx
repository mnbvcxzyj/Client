import React, { useState } from 'react';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import { countryData } from '../../data/CountryData';
import arrow from '../../images/TravelAccount/arrow.svg';
import Calendar from 'react-calendar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddInput = () => {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const [title, setTitle] = useState('');
  const [nation, setNation] = useState('미국');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState(0);
  const navigate = useNavigate();

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0',
    )}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const toggleDateModal = () => {
    setIsDateModalOpen(!isDateModalOpen);
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
    setIsDateModalOpen(!isDateModalOpen);
  };

  const formatSelectedDateRange = (range) => {
    const startDateString = formatDate(range[0]);
    const endDateString = formatDate(range[1]);
    return `${startDateString} ~ ${endDateString}`;
  };

  const handleSubmit = async () => {
    const formData = {
      title,
      nation,
      location,
      startDate: formatDate(dateRange[0]),
      endDate: formatDate(dateRange[1]),
      budget,
    };

    try {
      const response = await axios.post('http://3.36.156.17/group', formData, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxMTY1ODUyLCJpYXQiOjE3MDExNjQwNTIsImp0aSI6IjhkZTgwNzZiZDZmNjQzMDdhMzJjMmU1YjZhY2QzYjMwIiwidXNlcklkIjoiOGEwMjhhYWItZTc0Yy00NmM2LWE3ZDItNTgwN2Y1Y2QzYWFmIn0._DE2RWg7wCXT5QKwts7ciwZmTEBW0HOhIWtoUb-gxYI`,
        },
      });
      console.log(response.data);
      navigate('/travelaccountbook');
    } catch (error) {
      console.error('에러가 발생했습니다 ⚠', error);
      alert('에러가 발생했습니다! ⚠');
    }
  };

  return (
    <Container>
      <Wrapper>
        <Text>플랜명을 입력해주세요.</Text>
        <InputWrapper>
          <Input
            type="text"
            placeholder="ex) 자유여행"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputWrapper>
      </Wrapper>

      <Wrapper>
        <Text>방문 국가를 선택해주세요.</Text>
        <InputWrapper>
          <CountryDropdown
            value={nation}
            onChange={(e) => setNation(e.target.value)}
          >
            {countryData.countries.map((country) => (
              <CountryOption key={country.code} value={country.name}>
                {country.flag}&nbsp;{country.name}
              </CountryOption>
            ))}
          </CountryDropdown>
        </InputWrapper>
      </Wrapper>

      <Wrapper>
        <Text>방문 지역을 입력해주세요.</Text>
        <InputWrapper>
          <Input
            type="text"
            placeholder="ex) 시드니"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </InputWrapper>
      </Wrapper>

      <Wrapper>
        <Text>여행 기간을 선택해주세요.</Text>
        <InputWrapper>
          <Input
            type="text"
            value={formatSelectedDateRange(dateRange)}
            placeholder="날짜 선택"
            readOnly
          />
          <img src={arrow} alt="⬇️" onClick={toggleDateModal} />
        </InputWrapper>
        {isDateModalOpen && (
          <DateModal>
            <Calendar
              onChange={handleDateChange}
              value={dateRange}
              selectRange={true}
              formatDay={(locale, date) => date.getDate()}
              prevLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M11.3437 15.8248L5.02499 9.5248C4.94999 9.4498 4.89674 9.36856 4.86524 9.28105C4.83374 9.19355 4.81824 9.0998 4.81874 8.9998C4.81874 8.89981 4.83424 8.80606 4.86524 8.71855C4.89624 8.63105 4.94949 8.5498 5.02499 8.4748L11.3437 2.15605C11.5187 1.98105 11.7375 1.89355 12 1.89355C12.2625 1.89355 12.4875 1.9873 12.675 2.1748C12.8625 2.3623 12.9562 2.58105 12.9562 2.83105C12.9562 3.08105 12.8625 3.2998 12.675 3.4873L7.16249 8.9998L12.675 14.5123C12.85 14.6873 12.9375 14.9031 12.9375 15.1596C12.9375 15.4161 12.8437 15.6378 12.6562 15.8248C12.4687 16.0123 12.25 16.1061 12 16.1061C11.75 16.1061 11.5312 16.0123 11.3437 15.8248Z"
                    fill="#353A40"
                  />
                </svg>
              }
              nextLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.65625 15.8248L12.975 9.5248C13.05 9.4498 13.1032 9.36856 13.1347 9.28105C13.1662 9.19355 13.1817 9.0998 13.1812 8.9998C13.1812 8.89981 13.1657 8.80606 13.1347 8.71855C13.1037 8.63105 13.0505 8.5498 12.975 8.4748L6.65625 2.15605C6.48125 1.98105 6.2625 1.89355 6 1.89355C5.7375 1.89355 5.5125 1.9873 5.325 2.1748C5.1375 2.3623 5.04375 2.58105 5.04375 2.83105C5.04375 3.08105 5.1375 3.2998 5.325 3.4873L10.8375 8.9998L5.325 14.5123C5.15 14.6873 5.0625 14.9031 5.0625 15.1596C5.0625 15.4161 5.15625 15.6378 5.34375 15.8248C5.53125 16.0123 5.75 16.1061 6 16.1061C6.25 16.1061 6.46875 16.0123 6.65625 15.8248Z"
                    fill="#353A40"
                  />
                </svg>
              }
              next2Label={null}
              prev2Label={null}
              showNeighboringMonth={false}
              calendarType="US"
            />
          </DateModal>
        )}
      </Wrapper>

      <Wrapper>
        <Text>예상 경비를 작성해주세요.</Text>
        <InputWrapper>
          <Input
            type="number"
            placeholder="숫자만 입력 가능합니다"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </InputWrapper>
      </Wrapper>
      <AddButton to="/addSchedule" onClick={handleSubmit}>
        확인
      </AddButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 390px;
  margin: 0 auto;
  margin-top: 46px;
  gap: 26px;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 10px;
`;

const InputWrapper = styled.div`
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

const Text = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Input = styled.input`
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

const CountryDropdown = styled.select`
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

const CountryOption = styled.option`
  background-color: #fff;
  color: #000;
  outline: none;
  border: none;
  -webkit-appearance: none;
  appearance: none;
`;

const DateModal = styled.div`
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

const AddButton = styled.div`
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

export default AddInput;
