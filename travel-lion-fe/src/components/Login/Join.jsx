import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  top: 324px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 340px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 0.8px solid var(--Gray, #adb6bd);
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
`;

const Text = styled.div`
  color: var(--Black, #000);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Image = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  left: 10px;
`;

function Join() {
  return (
    <div>
      <Box>
        <Text>회원가입</Text>
      </Box>
      <Box>
        <Image src={`/images/kakao.png`} alt="Kakao"></Image>
        <Text>카카오톡으로 시작</Text>
      </Box>
      <Box>
        <Image src={`/images/google.png`} alt="Google"></Image>
        <Text>구글로 시작</Text>
      </Box>
    </div>
  );
}

export default Join;
