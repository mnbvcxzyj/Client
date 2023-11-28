// import React, { useState, useEffect } from 'react';
// import Emoji from '../NewBillPage/Emoji';
// import Who from './Who';
// import Category from './Category';
// import Bill from './bill';
// import Memo from './Memo';
// import { styled } from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export default function BillUpdateBtn() {
//   const [selectedEmoji, setSelectedEmoji] = useState('');
//   const [whoValue, setWhoValue] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [billValue, setBillValue] = useState('');
//   const [memoValue, setMemoValue] = useState('');

//   // 수정한 내용을 저장하는 부분
//   const savedData = JSON.parse(sessionStorage.getItem('billList')) || [];

//   return (
//     <>
//       <Emoji onClickEmoji={setSelectedEmoji} />
//       <Who onClickWho={setWhoValue} />
//       <Category onClickCategory={onClickCategory} />
//       <Bill setValue={handleBillValueChange} />
//       <Memo setValue={setMemoValue} />
//       <ButtonContainer>
//         <NavListUpdate to="/billlist">
//           <UpdateBtn onClick={handleSaveToStorage}>수정</UpdateBtn>
//         </NavListUpdate>
//         <NavListDel to="/billlist">
//           <DelBtn onClick={handleSaveToStorage}>삭제</DelBtn>
//         </NavListDel>
//       </ButtonContainer>
//     </>
//   );
// }

// const NavListUpdate = styled(NavLink)`
//   // 형태
//   width: 40%;
//   height: 60px;
//   border-radius: 10px;
//   background-color: #3369ff;
//   color: #ffffff;
//   // 배치
//   margin: 0 10px;
//   text-align: center;

//   cursor: pointer;

//   // 글꼴
//   font-family: SUIT;
//   font-size: 16px;
//   font-weight: 700;
//   line-height: 20px;
//   letter-spacing: 0em;
// `;

// const NavListDel = styled(NavLink)`
//   // 형태
//   width: 40%;
//   height: 60px;
//   border-radius: 10px;
//   background-color: #ffffff;
//   color: #3369ff;
//   border: solid #3369ff 1px;

//   // 배치
//   margin: 0 10px;
//   text-align: center;

//   cursor: pointer;

//   // 글꼴
//   font-family: SUIT;
//   font-size: 16px;
//   font-weight: 700;
//   line-height: 20px;
//   letter-spacing: 0em;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 30px;
// `;

// const UpdateBtn = styled.button``;

// const DelBtn = styled.button``;
