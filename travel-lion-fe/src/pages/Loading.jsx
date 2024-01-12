import React from 'react';
import Spinner from '../images/Spinner.gif';
import styled from 'styled-components';
const Loading = () => {
  return (
    <Container>
      <SpinImg src={Spinner} alt="로딩 중" />
      <Text>로딩 중...</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SpinImg = styled.img``;

const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  font-family: Pretendard;
  text-align: center;
  margin-top: 20px;
`;
export default Loading;
