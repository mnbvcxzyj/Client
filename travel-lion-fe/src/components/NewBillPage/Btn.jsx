import React, { useState } from 'react';
import Emoji from './Emoji';
import Who from './Who';
import Category from './Category';
import Bill from './Bill';
import Memo from './Memo';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NewBillBtn() {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [whoValue, setWhoValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [billValue, setBillValue] = useState('');
  const [memoValue, setMemoValue] = useState('');

  const handleBillValueChange = (value) => {
    setBillValue(value);
  };

  const onClickCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  //저장하는 부분
  const handleSaveToStorage = () => {
    const storedList = JSON.parse(sessionStorage.getItem('billList')) || [];

    const newItem = {
      selectedEmoji,
      whoValue,
      selectedCategory,
      billValue,
      memoValue,
    };
    storedList.push(newItem);

    sessionStorage.setItem('billList', JSON.stringify(storedList));

    console.log('Saved Bill List:', storedList);
  };

  return (
    <>
      <Content>
        <Emoji onClickEmoji={setSelectedEmoji} />
        <Who setValue={setWhoValue} />
        <Category onClickCategory={onClickCategory} />
        <Bill setValue={handleBillValueChange} />
        <Memo setValue={setMemoValue} />
        <NavList to="/billlist">
          <NewBtn onClick={handleSaveToStorage}>확인</NewBtn>
        </NavList>
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
