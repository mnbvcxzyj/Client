import * as D from './DateContentStyle';
import arrow from '../../images/TravelAccount/arrow.svg';
import BottomModal from './BottomModal';
import { Link, useParams } from 'react-router-dom';
import { AuthContext, useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';
import React, { useState, useEffect, useContext, useMemo } from 'react';
import { PlanContext } from '../../contexts/PlanContext';
import { CategoryContext } from '../../contexts/CategoryContext';
import { GroupContext } from '../../contexts/GroupContext';

const DateContent = ({ groupId }) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('KRW');
  const { user } = useContext(AuthContext);
  const [travelDatas, setTravelDatas] = useState([]);
  const { refreshAccessToken } = useAuth();

  // 윤경) 컨택스트에 저장하는 부분
  const { plan, handleChangePlan } = useContext(PlanContext);
  const { category, handleChangeCategory } = useContext(CategoryContext);
  const { group, handleChangeGroup } = useContext(GroupContext);

  const axiosInstance = useMemo(
    () => createAxiosInstance(refreshAccessToken),
    [refreshAccessToken],
  );

  // 여행 가져오기
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
          handleChangeGroup(response.data); //컨텍스트에 저장
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

  const [plans, setPlans] = useState([]);
  const [categories, setCategories] = useState({});

  // n일차 plan
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axiosInstance.get(
          `/${user.userId}/grouplist/${groupId}/plan`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          },
        );
        setPlans(response.data);
        handleChangePlan(response.data);
        response.data.forEach((plan) => {
          fetchCategoryDetails(plan.planId); // 카테고리
          handleChangeCategory(plan.planId); //컨텍스트에 저장
        });
      } catch (error) {
        console.error('Plan 데이터 요청 중 오류 발생:', error);
      }
    };
    fetchPlans();
  }, [axiosInstance, user, groupId]);

  // 카테고리 데이터 가져오기
  const fetchCategoryDetails = async (planId) => {
    try {
      const response = await axiosInstance.get(
        `/${user.userId}/grouplist/${groupId}/plan/${planId}/category`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        },
      );
      setCategories((prev) => ({ ...prev, [planId]: response.data }));
      handleChangeCategory((prev) => ({ ...prev, [planId]: response.data })); //컨텍스트에 저장
    } catch (error) {
      console.error('Category 데이터 요청 중 오류 발생:', error);
    }
  };

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

        {plans.map((plan) => (
          <D.DayWrapper key={plan.planId}>
            <D.DayText>
              <div>{plan.nDay}일차</div>
              <div>
                {plan.date}({plan.dayOfWeek})
              </div>
            </D.DayText>

            {categories[plan.planId] &&
              categories[plan.planId].map((category) => (
                <D.CategoryWrapper key={category.categoryId}>
                  <D.CategoryIcon>{category.emoji}</D.CategoryIcon>
                  <D.CategoryText>{category.categoryTitle}</D.CategoryText>
                  <D.Amount>{category.cost.toLocaleString()}원</D.Amount>
                </D.CategoryWrapper>
              ))}

            <Link to={`/newbill/${travelDatas.groupId}/${plan.planId}`}>
              <D.InputBtn>사용 금액 입력</D.InputBtn>
            </Link>
          </D.DayWrapper>
        ))}
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
