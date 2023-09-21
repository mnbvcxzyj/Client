import React from 'react';
import styled from 'styled-components';
import backarrow from '../../images/MyPage/backarrow.svg';
const MyPageHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <BackArrow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M13.8646 19.3415L6.14167 11.6415C6.05 11.5499 5.98492 11.4506 5.94642 11.3436C5.90792 11.2367 5.88898 11.1221 5.88959 10.9999C5.88959 10.8776 5.90853 10.7631 5.94642 10.6561C5.98431 10.5492 6.04939 10.4499 6.14167 10.3582L13.8646 2.63529C14.0785 2.4214 14.3458 2.31445 14.6667 2.31445C14.9875 2.31445 15.2625 2.42904 15.4917 2.6582C15.7208 2.88737 15.8354 3.15473 15.8354 3.46029C15.8354 3.76584 15.7208 4.0332 15.4917 4.26237L8.75417 10.9999L15.4917 17.7374C15.7056 17.9513 15.8125 18.215 15.8125 18.5285C15.8125 18.842 15.6979 19.113 15.4688 19.3415C15.2396 19.5707 14.9722 19.6853 14.6667 19.6853C14.3611 19.6853 14.0938 19.5707 13.8646 19.3415Z"
              fill="#868686"
            />
          </svg>
        </BackArrow>
        <Text>계정 정보</Text>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-content: center;
  font-family: Pretendard;
  justify-content: center;
  width: 390px;
  margin: auto;
  margin-top: 52px;
`;

const BackArrow = styled.div`
  display: flex;
  position: relative;
  text-align: left; /* 이 부분은 텍스트 정렬에 영향을 미칩니다. */
  justify-content: flex-start; /* 왼쪽 정렬을 위해 추가 */
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-right: 103px;
  margin-left: 25px;
`;

const Text = styled.div`
  color: var(--Darkgray, #353a40);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default MyPageHeader;
