import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import modalplus from '../../images/TravelAccount/modalplus.svg';
import check from '../../images/TravelAccount/check.svg';
import ModalExtend from './ModalExtend';
function BottomModal({ selectedCurrency, onCurrencyChange }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalExtendOpen, setIsModalExtendOpen] = useState(false);

  const bottomSheetRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        bottomSheetRef.current &&
        !bottomSheetRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCurrencyClick = (currencyCode) => {
    onCurrencyChange(currencyCode); // 상위 컴포넌트의 상태 업데이트
    setIsOpen(false);
  };

  const openModalExtend = () => {
    setIsModalExtendOpen(true);
    setIsOpen(false); // BottomModal을 닫고 ModalExtend를 엽니다
  };

  const previewcountries = [
    { name: '대한민국', code: 'KRW', unit: '원' },
    { name: '일본', code: 'JPY', unit: '엔' },
    { name: '미국', code: 'USD', unit: '달러' },
  ];

  return (
    <>
      <BottomSheetOverlay isOpen={isOpen} />
      {isOpen && (
        <BottomSheetWrapper isOpen={isOpen} ref={bottomSheetRef}>
          <BottomSheetContent>
            <TextDiv>
              통화 단위 선택
              <ModalPlusBtn onClick={openModalExtend}>
                <img src={modalplus} alt="+" />
              </ModalPlusBtn>
            </TextDiv>

            {previewcountries.map((country) => (
              <UnitWrapper
                key={country.code}
                selected={selectedCurrency === country.code}
                onClick={() => handleCurrencyClick(country.code)}
              >
                {country.name} - {country.code}({country.unit})
                <img src={check} alt="✅" />
              </UnitWrapper>
            ))}
          </BottomSheetContent>
        </BottomSheetWrapper>
      )}
      {isModalExtendOpen && <ModalExtend onCurrencySelect={onCurrencyChange} />}
    </>
  );
}

export default BottomModal;

const open = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 290px;
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
  height: ${({ isOpen }) => (isOpen ? '290px' : '0')};
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  background: #fff;
  animation: ${open} 0.35s ease-in-out;
  z-index: 2;
  overflow: hidden;
`;

const BottomSheetContent = styled.div`
  padding: 34px 35px 0 35px;
`;

const ModalPlusBtn = styled.div``;

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
  align-items: center;
  justify-content: space-between;

  color: #525252;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 42px;
  gap: 28px;
  color: ${({ selected }) => (selected ? '#05b70c' : '#525252')};

  img {
    display: ${({ selected }) => (selected ? 'inline-block' : 'none')};
  }
  cursor: pointer;
`;
