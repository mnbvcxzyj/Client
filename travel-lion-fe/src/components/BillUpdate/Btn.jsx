import React, { useState, useEffect, useContext, useMemo } from 'react';
import Emoji from '../NewBillPage/Emoji';
// import Who from './Who';
import Who from '../NewBillPage/Who';
import Category from './Category';
import Bill from './bill';
import Memo from './Memo';
import { styled } from 'styled-components';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { AuthContext, useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';
import { UserContext } from '../../contexts/UserContext';
import axios from 'axios';

export default function BillUpdateBtn({ groupId, planId, categoryId }) {
  const navigate = useNavigate();
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [whoValue, setWhoValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [billValue, setBillValue] = useState('');
  const [memoValue, setMemoValue] = useState('');
  const [showBillAlert, setShowBillAlert] = useState(false);

  const [categoryData, setCategoryData] = useState({});

  const index = '';
  const handleBillValueChange = (value) => {
    setBillValue(value);
  };

  const onClickCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const { user } = useContext(UserContext);
  const { refreshAccessToken } = useAuth();

  const axiosInstance = useMemo(
    () => createAxiosInstance(refreshAccessToken),
    [refreshAccessToken],
  );

  // 지출내용불러오기
  useEffect(() => {
    const getCotegory = async () => {
      try {
        const response = await axiosInstance.get(
          `/${user.userId}/grouplist/${groupId}/plan/${planId}/category/${categoryId}`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          },
        );
        setCategoryData(response.data);
        console.log(response.data);
        setSelectedEmoji(response.data.emoji);
        setWhoValue(response.data.writer);
        setSelectedCategory(response.data.categoryTitle);
        setBillValue(response.data.cost);
        setMemoValue(response.data.memo);
      } catch (error) {
        console.error('수정하려는 Category 데이터 요청 중 오류 발생:', error);
      }
    };
    getCotegory();
  }, [axiosInstance, user, groupId, planId, categoryId]);

  //수정 기능 구현
  const handleUpdateStorage = async () => {
    if (billValue === '') {
      setShowBillAlert(true);
      return;
    }

    try {
      const response = await axiosInstance.put(
        `/${user.userId}/grouplist/${groupId}/plan/${planId}/category/${categoryId}`,
        {
          group: groupId,
          plan: planId,
          categoryTitle: selectedCategory,
          memo: memoValue,
          emoji: selectedEmoji,
          cost: billValue,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        },
      );

      console.log('수정 성공:', response.data);
      navigate(`/billlist/${groupId}/${planId}`);
    } catch (error) {
      console.error('수정 중 오류 발생:', error);
    }
  };

  //삭제기능 구현
  const handleDeleteStorage = async () => {
    try {
      const response = await axiosInstance.delete(
        `/${user.userId}/grouplist/${groupId}/plan/${planId}/category/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        },
      );
      console.log('삭제 성공:', response.data);
      navigate(`/billlist/${groupId}/${planId}`);
    } catch (error) {
      console.error('삭제 중 오류 발생:', error);
    }
  };

  return (
    <>
      <Content>
        <Emoji value={categoryData.emoji} onClickEmoji={setSelectedEmoji} />
        <Who value={categoryData.writer} onClickWho={setWhoValue} />
        <Category value={selectedCategory} onClickCategory={onClickCategory} />
        <Bill
          value={categoryData.cost}
          setValue={handleBillValueChange}
          showAlert={showBillAlert}
          setShowAlert={setShowBillAlert}
        />
        <Memo value={categoryData.memo} setValue={setMemoValue} />
        <ButtonContainer>
          <NavListUpdate onClick={handleUpdateStorage}>
            <UpdateBtn onClick={handleUpdateStorage}>수정</UpdateBtn>
          </NavListUpdate>
          <NavListDel onClick={handleDeleteStorage}>
            <DelBtn onClick={handleDeleteStorage}>삭제</DelBtn>
          </NavListDel>
        </ButtonContainer>
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

const NavListUpdate = styled.div`
  // 형태
  width: 42%;
  height: 60px;
  border-radius: 10px;
  background-color: #00bc78;
  color: #ffffff;
  // 배치
  margin: 0 10px;
  text-align: center;

  cursor: pointer;

  // 글꼴
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
`;

const NavListDel = styled(NavLink)`
  // 형태
  width: 42%;
  height: 60px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #00bc78;
  border: solid #00bc78 1px;

  // 배치
  margin: 0 10px;
  text-align: center;

  cursor: pointer;

  // 글꼴
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const UpdateBtn = styled.button`
  //형태
  height: 60px;
  border-radius: 10px;
  background-color: #00bc78;
  color: #ffffff;

  //배치
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  cursor: pointer;

  //글꼴
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const DelBtn = styled.button`
  //형태
  height: 58px;
  border-radius: 10px;
  color: #00bc78;
  background-color: #ffffff;

  //배치
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  cursor: pointer;

  //글꼴
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
