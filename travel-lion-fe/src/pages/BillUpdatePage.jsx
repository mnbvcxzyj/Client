import React from 'react';
import Header from '../components/NewBillPage/header';
import BillMemo from '../components/NewBillPage/BillMemo';
import Btn from '../components/BillUpdate/Btn';
import Who from '../components/NewBillPage/Who.jsx';
import Emoji from '../components/NewBillPage/Emoji';
import Category from '../components/NewBillPage/Category';

export default function BillUpdatePage() {
  function onClickEmoji(selectedEmoji) {
    console.log('선택한 이모지:', selectedEmoji);
  }

  const onClickWho = (selectedValue) => {
    console.log(`선택한 작성자: ${selectedValue}`);
  };

  function handleCategorySelection(selectedCategory) {
    console.log('선택한 카테고리:', selectedCategory);
  }

  return (
    <>
      <Header />
      <Emoji onClickEmoji={onClickEmoji} />
      <Who onClickWho={onClickWho} />
      <Category onClickCategory={handleCategorySelection} />
      <BillMemo />
      <Btn />
    </>
  );
}
