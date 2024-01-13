import React, { useState, useEffect, useContext, useMemo } from 'react';
import Emoji from './Emoji';
import Who from './Who';
import Category from './Category';
import Bill from './Bill';
import Memo from './Memo';
import { styled } from 'styled-components';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { AuthContext, useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';
import axios from 'axios';

export default function NewBillBtn({ groupId, planId }) {
  const navigate = useNavigate();
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [whoValue, setWhoValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [billValue, setBillValue] = useState('');
  const [memoValue, setMemoValue] = useState('');
  const [showCategoryAlert, setShowCategoryAlert] = useState(false);
  const [showBillAlert, setShowBillAlert] = useState(false);

  const handleBillValueChange = (value) => {
    setBillValue(value);
  };

  const onClickCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const { user } = useContext(AuthContext);
  const [travelDatas, setTravelDatas] = useState([]);
  const { refreshAccessToken } = useAuth();

  const axiosInstance = useMemo(
    () => createAxiosInstance(refreshAccessToken),
    [refreshAccessToken],
  );

  //저장하는 부분
  const handleSaveToStorage = async () => {
    if (selectedCategory === '' || billValue === '') {
      if (selectedCategory === '') setShowCategoryAlert(true);
      if (billValue === '') setShowBillAlert(true);
      return;
    }
    setShowCategoryAlert(false);
    setShowBillAlert(false);

    //const storedList = JSON.parse(sessionStorage.getItem('billList')) || [];

    const newItem = {
      group: groupId,
      plan: planId,
      categoryTitle: selectedCategory,
      memo: memoValue,
      emoji: selectedEmoji,
      cost: billValue,
    };

    //storedList.push(newItem);
    //sessionStorage.setItem('billList', JSON.stringify(storedList));

    try {
      const response = await axiosInstance.post(
        `/${user.userId}/grouplist/${groupId}/plan/${planId}/category`,
        newItem,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        },
      );
      navigate(`/billlist/${groupId}/${planId}`);
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  };

  return (
    <>
      <Content>
        <Emoji onClickEmoji={setSelectedEmoji} />
        <Who setValue={setWhoValue} />
        <Category
          onClickCategory={onClickCategory}
          showAlert={showCategoryAlert}
          setShowAlert={setShowCategoryAlert}
          groupId={groupId}
          planId={planId}
        />
        <Bill
          setValue={handleBillValueChange}
          showAlert={showBillAlert}
          setShowAlert={setShowBillAlert}
        />
        <Memo setValue={setMemoValue} />
        <NewBtn onClick={handleSaveToStorage}>확인</NewBtn>
      </Content>
    </>
  );
}

const Content = styled.section`
  max-width: 390px;
  margin: 0 auto;
  padding: 0 20px;
  margin-bottom: 32px;
`;

const NavList = styled(NavLink)`
  //배치
  display: flex;
  align-items: center;
  margin: 0 auto;

  cursor: pointer;
`;

const NewBtn = styled.button`
  //형태
  border-radius: 10px;
  background-color: #00bc78;
  color: #ffffff;

  //배치
  /* margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; */
  width: 340px;
  height: 60px;
  flex-shrink: 0;

  border-radius: 10px;
  background-color: #00bc78;
  color: #ffffff;
  cursor: pointer;

  //글꼴
  color: #fff;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
