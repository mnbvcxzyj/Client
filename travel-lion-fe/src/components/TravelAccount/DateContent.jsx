import React, { useState } from 'react';
import styled from 'styled-components';
import { categoryData } from '../../data/CategoryData';
import arrow from '../../images/TravelAccount/arrow.svg';
import BottomModal from './BottomModal';
import ModalExtend from './ModalExtend';

const DateContent = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('KRW');

  const toggleBottomSheet = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  const handleCurrencyChange = (currencyCode) => {
    setSelectedCurrency(currencyCode);
  };

  return (
    <>
      <Container>
        <TopWrapper>
          <AmountDiv>
            <Text>여행 경비 총합</Text>
            <TravelExpense>1,800,000원 /</TravelExpense>
          </AmountDiv>
          &nbsp;
          <AmountDiv>
            <Text>예산</Text>
            <Budget>1,700,000원</Budget>
          </AmountDiv>
          <ExchangeRate onClick={toggleBottomSheet}>
            {selectedCurrency}
            <img src={arrow} alt=">" />
          </ExchangeRate>
        </TopWrapper>
        <DayWrapper>
          <DayText>
            <div>1일차</div>
            <div>08/14(월)</div>
          </DayText>

          <CategoryWrapper>
            <CategoryIcon>{categoryData[0].icon}</CategoryIcon>
            <CategoryText>식비</CategoryText>
            <Amount>30,000원</Amount>
          </CategoryWrapper>

          <InputBtn>사용 금액 입력</InputBtn>
        </DayWrapper>
      </Container>
      {isBottomSheetOpen && (
        <BottomModal onCurrencyChange={handleCurrencyChange} />
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-top: 33px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-gary, #616161);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AmountDiv = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-items: center;
`;

const TravelExpense = styled.div`
  color: #000;
`;

const Budget = styled.div`
  color: #05b70c;
`;

const ExchangeRate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 10px;

  width: 49px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #f3f3f3;
  color: #616161;

  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  cursor: pointer;
`;
const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px auto;
  width: 90%;
  flex-shrink: 0;
  border-radius: 15px;
  background: #f3f3f3;
`;

const DayText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;
  gap: 13px;

  :nth-child(1) {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    margin-left: 24px;
  }

  :nth-child(2) {
    color: var(--Darkgray, #353a40);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const InputBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 30px;
  margin: 15px auto 13px;

  border-radius: 6px;
  border: 0.6px solid var(--Gray, #adb6bd);
  background: var(--White, #fff);
  color: var(--Darkgray, #353a40);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 18px auto;
  width: 90%;
  height: 35px;
  border-radius: 6px;
  border: 0.6px solid var(--Gray, #adb6bd);
  background: var(--White, #fff);
`;

const CategoryIcon = styled.div`
  margin-left: 14px;
`;

const CategoryText = styled.div`
  margin-left: 8px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Amount = styled.div`
  color: #05b70c;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default DateContent;
