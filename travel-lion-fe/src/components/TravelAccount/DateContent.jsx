import React, { useState, useEffect, useContext, useMemo } from 'react';
import * as D from './DateContentStyle';
import { categoryData } from '../../data/CategoryData';
import arrow from '../../images/TravelAccount/arrow.svg';
import BottomModal from './BottomModal';
import { Link, useParams } from 'react-router-dom';
import { AuthContext, useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';

const DateContent = ({ groupId }) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('KRW');

  const { user } = useContext(AuthContext);
  const [travelDatas, setTravelDatas] = useState([]);
  const { refreshAccessToken } = useAuth();

  const axiosInstance = useMemo(
    () => createAxiosInstance(refreshAccessToken),
    [refreshAccessToken],
  );

  useEffect(() => {
    if (user) {
      axiosInstance
        .get(`/${user.userId}/grouplist/${groupId}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((response) => {
          setTravelDatas(response.data);
        })
        .catch((error) => {
          console.error('API 요청 중 오류 발생:', error);
        });
    }
  }, [axiosInstance, user, groupId]);

  const toggleBottomSheet = () => {
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  const handleCurrencyChange = (currencyCode) => {
    setSelectedCurrency(currencyCode);
    setIsBottomSheetOpen(false); // 통화 선택 후 BottomSheet 닫기
  };

  console.log(travelDatas);

  return (
    <>
      <D.Container>
        <D.TopWrapper>
          <D.AmountDiv>
            <D.Text>여행 경비 총합</D.Text>
            <D.TravelExpense>
              {Number(travelDatas.spentMoney).toLocaleString()}원 /
            </D.TravelExpense>
          </D.AmountDiv>
          &nbsp;
          <D.AmountDiv>
            <D.Text>예산</D.Text>
            <D.Budget>{Number(travelDatas.budget).toLocaleString()}원</D.Budget>
          </D.AmountDiv>
          <D.ExchangeRate onClick={toggleBottomSheet}>
            {selectedCurrency}
            <img src={arrow} alt=">" />
          </D.ExchangeRate>
        </D.TopWrapper>
        <D.DayWrapper>
          <D.DayText>
            <div>1일차</div>
            <div>08/14(월)</div>
          </D.DayText>

          <D.CategoryWrapper>
            <D.CategoryIcon>{categoryData[0].icon}</D.CategoryIcon>
            <D.CategoryText>식비</D.CategoryText>
            <D.Amount>30,000원</D.Amount>
          </D.CategoryWrapper>

          <Link to="/newbill">
            <D.InputBtn>사용 금액 입력</D.InputBtn>
          </Link>
        </D.DayWrapper>
      </D.Container>
      {isBottomSheetOpen && (
        <BottomModal
          selectedCurrency={selectedCurrency}
          onCurrencyChange={handleCurrencyChange}
        />
      )}
    </>
  );
};

export default DateContent;
