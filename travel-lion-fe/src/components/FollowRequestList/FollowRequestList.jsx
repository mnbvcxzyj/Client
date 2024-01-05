import React from 'react';
import styled from 'styled-components';
import UserImg1 from '../../images/BillList/userImg.png';

const FollowRequestList = () => {
  return (
    <>
      <Container>
        <UserItems>
          <UserImg src={UserImg1}></UserImg>
          <UserName>김세영</UserName>
          <BtnStyleDiv>
            <UserDelBtn>거절</UserDelBtn>
            <UserEditBtn>수락</UserEditBtn>
          </BtnStyleDiv>
          <hr />
          <UserImg src={UserImg1}></UserImg>
          <UserName>주연진</UserName>
          <BtnStyleDiv>
            <UserDelBtn>거절</UserDelBtn>
            <UserEditBtn>수락</UserEditBtn>
          </BtnStyleDiv>
          <hr />
          <UserImg src={UserImg1}></UserImg>
          <UserName>박신형</UserName>
          <BtnStyleDiv>
            <UserDelBtn>거절</UserDelBtn>
            <UserEditBtn>수락</UserEditBtn>
          </BtnStyleDiv>
          <hr />
          <UserImg src={UserImg1}></UserImg>
          <UserName>장윤경</UserName>
          <BtnStyleDiv>
            <UserDelBtn>거절</UserDelBtn>
            <UserEditBtn>수락</UserEditBtn>
          </BtnStyleDiv>
        </UserItems>
      </Container>
    </>
  );
};

export default FollowRequestList;

const Container = styled.div`
  width: 390px;

  margin: 0 auto;
`;

const UserItems = styled.div`
  margin: 36px;
`;

const UserImg = styled.img`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  margin: 5px;
  vertical-align: middle;
  margin: 10px;
`;

const UserName = styled.span`
  color: #525252;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 2px;
`;

const BtnStyleDiv = styled.div`
  float: right;
  margin-top: 15px;
`;

const UserDelBtn = styled.button`
  display: inline-flex;
  padding: 3.75px 5.75px 3.75px 5.25px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #ff5a50;
  color: #ff5a50;
  background-color: white;
  font-size: 7.5px;
  border-radius: 2.25px;
  align: right;
  margin: 4px;
  vertical-align: middle;
`;

const UserEditBtn = styled.button`
  display: inline-flex;
  padding: 3.75px 5.75px 3.75px 5.25px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #00bc78;
  color: #00bc78;
  background-color: white;
  font-size: 7.5px;
  border-radius: 2.25px;
  align: right;
  margin: 4px;
  vertical-align: middle;
`;
