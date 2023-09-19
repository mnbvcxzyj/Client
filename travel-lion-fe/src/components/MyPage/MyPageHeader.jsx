import React from 'react';
import styled from 'styled-components';
import backarrow from '../../images/MyPage/backarrow.svg';
const MyPageHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <BackArrow>
          <img src={backarrow} alt="<" />
        </BackArrow>
        <Text>계정 정보</Text>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: Pretendard;
`;

const BackArrow = styled.div``;

const Text = styled.div`
  color: var(--Darkgray, #353a40);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default MyPageHeader;
