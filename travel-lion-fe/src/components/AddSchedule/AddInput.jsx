import React, { useState } from 'react';
import styled from 'styled-components';
import { countryData } from '../../data/CountryData';
import arrow from '../../images/TravelAccount/arrow.svg';
import Calendar from 'react-calendar';

const AddInput = () => {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const toggleDateModal = () => {
    setIsDateModalOpen(!isDateModalOpen);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsDateModalOpen(!isDateModalOpen);
  };

  return (
    <Container>
      <Wrapper>
        <Text>플랜명을 입력해주세요.</Text>
        <InputWrapper>
          <Input type="text" placeholder="ex) 자유여행" />
        </InputWrapper>
      </Wrapper>

      <Wrapper>
        <Text>방문 국가를 선택해주세요.</Text>
        <InputWrapper>
          <CountryDropdown>
            {countryData.countries.map((country) => (
              <CountryOption key={country.code}>
                {country.flag}&nbsp;
                {country.name}
              </CountryOption>
            ))}
          </CountryDropdown>
        </InputWrapper>
      </Wrapper>

      <Wrapper>
        <Text>방문 지역을 입력해주세요.</Text>
        <InputWrapper>
          <Input type="text" placeholder="ex) 시드니" />
        </InputWrapper>
      </Wrapper>

      <Wrapper>
        <Text>여행 기간을 선택해주세요.</Text>
        <InputWrapper>
          <Input
            type="text"
            value={selectedDate.toDateString()}
            placeholder="날짜 선택"
            readOnly
          />
          <img src={arrow} alt="⬇️" onClick={toggleDateModal} />
        </InputWrapper>
        {isDateModalOpen && (
          <DateModal>
            <Calendar
              onChange={handleDateSelect}
              value={selectedDate}
              selectRange={true}
            />
          </DateModal>
        )}
      </Wrapper>

      <Wrapper>
        <Text>예상 경비를 작성해주세요.</Text>
        <InputWrapper>
          <Input type="number" placeholder="숫자만 입력 가능합니다" />
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 46px;
  gap: 26px;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
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
  width: 90%;
  border: none;
  outline: none;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 16px;
`;

const CountryDropdown = styled.select`
  width: 100%;
  padding: 10px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  outline: none;
  border: none;
  -webkit-appearance: none;
  appearance: none;

  background: url(${arrow}) no-repeat 98% 50%/18px auto;
`;

const CountryOption = styled.option`
  background-color: #fff;
  color: #000;
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

  .react-calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 350px;
    height: 350px;
    max-width: 100%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }

  .react-calendar__navigation__label > span {
    color: var(--Darkgray, #353a40);
    text-align: center;

    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export default AddInput;
