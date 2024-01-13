import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 390px;
  margin: 0 auto;
`;

export const BackDiv = styled(Link)`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 390px;
  margin-top: 50px;
  margin-bottom: 55px;

  :nth-child(1) {
    margin-left: 25px;
  }
`;

export const Text = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 76px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin: 0 30px 10px;
`;

export const DropdownHeader = styled.div`
  cursor: pointer;

  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  background: white;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ListWrap = styled.div`
  margin: 0 auto;
`;

export const ListBox = styled.div`
  display: flex;
  align-items: center;

  width: 360px;
  height: 107px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #f3f3f3;
  margin-bottom: 10px;
  padding: 0 30px;
`;

export const Flag = styled.div`
  width: 10%;
  font-size: 25px;
`;

export const Title = styled.div`
  width: 60%;
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 17px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DateText = styled.div`
  color: #525252;
  width: 30%;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 20px;
`;
