import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: Pretendard;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-top: 33px;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-gary, #616161);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AmountDiv = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-items: center;
`;

export const TravelExpense = styled.div`
  color: #000;
`;

export const Budget = styled.div`
  color: #00bc78;
`;

export const ExchangeRate = styled.div`
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

export const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px auto;
  width: 350px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #f3f3f3;
`;

export const DayText = styled.div`
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

export const InputBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 176px;
  height: 29px;
  margin: 15px auto 13px;

  color: var(--White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;

  border-radius: 6px;
  background: #00bc78;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 18px auto;
  width: 304px;
  height: 35px;
  border-radius: 6px;
  border: 0.6px solid var(--Gray, #adb6bd);
  background: var(--White, #fff);
`;

export const CategoryIcon = styled.div`
  margin-left: 14px;
`;

export const CategoryText = styled.div`
  margin-left: 8px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Amount = styled.div`
  margin-left: 170px;
  color: #00bc78;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
