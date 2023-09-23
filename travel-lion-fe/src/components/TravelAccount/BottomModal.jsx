import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import modalplus from '../../images/TravelAccount/modalplus.svg';
import check from '../../images/TravelAccount/check.svg';
import { useNavigate } from 'react-router-dom';

function BottomModal({ onCurrencyChange }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const bottomSheetRef = useRef(null);
  const navigate = useNavigate();

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

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    onCurrencyChange(country);
  };

  const previewcountries = [
    { name: '대한민국', code: 'KRW', unit: '원' },
    { name: '일본', code: 'JPY', unit: '엔' },
    { name: '미국', code: 'USD', unit: '달러' },
  ];
  const handleModalPlusClick = () => {
    navigate('/selectUnit', { state: { selectedCountry } });
  };

  return (
    <>
      <BottomSheetOverlay isOpen={isOpen} />
      {isOpen && (
        <BottomSheetWrapper isOpen={isOpen} ref={bottomSheetRef}>
          <BottomSheetContent>
            <TextDiv>
              통화 단위 선택
              <ModalPlusBtn onClick={handleModalPlusClick}>
                <img src={modalplus} alt="+" />
              </ModalPlusBtn>
            </TextDiv>

            {previewcountries.map((country) => (
              <UnitWrapper
                key={country.code}
                selected={selectedCountry === country.code}
                onClick={() => handleCountrySelect(country.code)}
              >
                {country.name} - {country.code}({country.unit})
                <img src={check} alt="✅" />
              </UnitWrapper>
            ))}
          </BottomSheetContent>
        </BottomSheetWrapper>
      )}
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
