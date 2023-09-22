import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import modalplus from '../../images/TravelAccount/modalplus.svg';
import { currencyunitdata } from '../../data/CurrencyUnitData';

const open = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 260px;
  }
`;

const BottomSheetOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1;
`;

const BottomSheetWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ isOpen }) => (isOpen ? '260px' : '0')};
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  background: #fff;
  animation: ${open} 0.35s ease-in-out;
  z-index: 2;
  overflow: hidden; /* 모달 내용이 넘칠 경우 스크롤 가능하도록 설정 */
`;

const BottomSheetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  border-radius: 10px 10px 0px 0px;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

const BottomSheetContent = styled.div`
  padding: 34px 35px 0 35px;
`;

const ModalPlusBtn = styled(Link)``;

const TextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #868686;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const UnitWrapper = styled.div`
  display: flex;
`;

function ExchangeRate() {
  const [isOpen, setIsOpen] = useState(true);
  const bottomSheetRef = useRef(null);

  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 클릭 이벤트 리스너 등록
    const handleClickOutside = (e) => {
      if (
        bottomSheetRef.current &&
        !bottomSheetRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // 컴포넌트 언마운트 시 클릭 이벤트 리스너 정리
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <BottomSheetOverlay isOpen={isOpen}></BottomSheetOverlay>
      {isOpen && (
        <BottomSheetWrapper isOpen={isOpen} ref={bottomSheetRef}>
          <BottomSheetContent>
            <TextDiv>
              통화 단위 선택
              <ModalPlusBtn to="/modalextend">
                <img src={modalplus} alt="+" />
              </ModalPlusBtn>
            </TextDiv>
            <UnitWrapper></UnitWrapper>
          </BottomSheetContent>
        </BottomSheetWrapper>
      )}
    </>
  );
}

export default ExchangeRate;
