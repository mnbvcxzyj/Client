import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const AuthorityButton = styled.button`
  background-color: ${({ active }) => (active ? '#00BC78' : '#CCCCCC')};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? '#008C5E' : '#BBBBBB')};
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 390px;
  margin: auto;
`;

export const Back = styled.div`
  margin-top: 47px;
  margin-left: 25px;
`;

export const Text1 = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 118.336%; /* 28.401px */
  margin-top: 33px;
  margin-left: 37px;
`;

export const Text2 = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 118.336%; /* 16.567px */
  margin-top: 40px;
  margin-left: 31px;
`;

export const InputEmail = styled.input`
  border: none;
  outline: none;
  background: #f3f3f3;
  margin-top: 15px;
  margin-left: 15px;
  width: 200px;
`;

export const DivEmail = styled.div`
  width: 340px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f3f3f3;
  margin-top: 7px;
  margin-left: 25px;
`;

export const BtnInvite = styled.button`
  display: inline-flex;
  padding: 5px 7px;
  margin: 0px 0px 0px 80px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #00bc78;
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DropdownContainer = styled.div`
  width: 340px;
  height: 50px;
  margin-top: 20px;
  margin-left: 26px;
  border-radius: 5px;
  border: none;
  background: #f3f3f3;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #adb6bd;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Dropdown = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  //   -moz-appearance: none;
  //   -webkit-appearance: none;
  //   appearance: none;
  background: transparent;
  padding: 0;
  margin: 0;
  font-family: Pretendard;
  font-size: 16px;
  cursor: pointer;
  position: absolute; // DropdownContainer 안에서 절대 위치
  top: 0;
  left: 0;
  opacity: 0; // 드롭다운 요소를 숨김
`;

export const ArrowIcon = styled.div`
  position: absolute;
  left: 15px; // 왼쪽에서 15px 떨어진 곳에 위치
  top: 50%;
  transform: translateY(-50%);
`;

export const SelectedValue = styled.div`
  position: absolute;
  left: 15px;
  right: 30px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: var(--Darkgray, #353a40);
`;
