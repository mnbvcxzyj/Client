import React, { useState, useEffect } from 'react';
import Emoji from '../NewBillPage/Emoji';
import Who from './Who';
import Category from './Category';
import Bill from './bill';
import Memo from './Memo';
import { styled } from 'styled-components';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default function BillUpdateBtn() {
  const navigate = useNavigate();
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [whoValue, setWhoValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [billValue, setBillValue] = useState('');
  const [memoValue, setMemoValue] = useState('');
  const [showBillAlert, setShowBillAlert] = useState(false);

  const handleBillValueChange = (value) => {
    setBillValue(value);
  };

  const onClickCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const { index } = useParams();

  useEffect(() => {
    const storedList = JSON.parse(sessionStorage.getItem('billList')) || [];
    const itemToUpdate = storedList[index];
    console.log(itemToUpdate);

    if (itemToUpdate) {
      setSelectedEmoji(itemToUpdate.selectedEmoji);
      setWhoValue(itemToUpdate.whoValue);
      setSelectedCategory(itemToUpdate.selectedCategory);
      setBillValue(itemToUpdate.billValue);
      setMemoValue(itemToUpdate.memoValue);
    }
  }, [index]);

  //수정 기능 구현
  const handleUpdateStorage = () => {
    if (billValue === '') {
      setShowBillAlert(true);
      return;
    }
    const storedList = JSON.parse(sessionStorage.getItem('billList')) || [];

    sessionStorage.setItem('billList', JSON.stringify(storedList));

    const itemToUpdate = storedList[index];
    itemToUpdate.selectedEmoji = selectedEmoji;
    itemToUpdate.whoValue = whoValue;
    itemToUpdate.selectedCategory = selectedCategory;
    itemToUpdate.billValue = billValue;
    itemToUpdate.memoValue = memoValue;

    storedList[index] = itemToUpdate;

    sessionStorage.setItem('billList', JSON.stringify(storedList));

    console.log('이 인덱스의 배열의 값은:', storedList[index]);
    console.log('Updated Bill List:', storedList);
    navigate('/billlist');
  };

  //삭제기능 구현
  const handleDeleteStorage = () => {
    const storedList = JSON.parse(sessionStorage.getItem('billList')) || [];

    if (storedList && storedList[index]) {
      storedList.splice(index, 1);
      sessionStorage.setItem('billList', JSON.stringify(storedList));
    }
    console.log('Delete Bill List:', storedList);
  };

  return (
    <>
      <Content>
        <Emoji value={selectedEmoji} onClickEmoji={setSelectedEmoji} />
        <Who value={whoValue} onClickWho={setWhoValue} />
        <Category value={selectedCategory} onClickCategory={onClickCategory} />
        <Bill
          value={billValue}
          setValue={handleBillValueChange}
          showAlert={showBillAlert}
          setShowAlert={setShowBillAlert}
        />
        <Memo value={memoValue} setValue={setMemoValue} />
        <ButtonContainer>
          <NavListUpdate>
            <UpdateBtn onClick={handleUpdateStorage}>수정</UpdateBtn>
          </NavListUpdate>
          <NavListDel to="/billlist">
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
