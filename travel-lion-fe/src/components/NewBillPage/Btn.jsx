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
      <Emoji onClickEmoji={setSelectedEmoji} />
      <Who setValue={setWhoValue} />
      <Category onClickCategory={onClickCategory} />
      <Bill setValue={handleBillValueChange} />
      <Memo setValue={setMemoValue} />
      <NavList to="/billlist">
        <NewBtn onClick={handleSaveToStorage}>확인</NewBtn>
      </NavList>
    </>
  );
}

const NavList = styled(NavLink)`
  width: 87%;
  height: 60px;
  border-radius: 10px;
  background-color: #05b70c;
  color: #ffffff;

  //배치
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  cursor: pointer;
`;

const NewBtn = styled.button`
  //형태
  width: 87%;
  height: 60px;
  border-radius: 10px;
  background-color: #05b70c;
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
