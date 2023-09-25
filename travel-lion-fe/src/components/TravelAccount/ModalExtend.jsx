import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { currencyunitdata } from '../../data/CurrencyUnitData';
import search from '../../images/TravelAccount/search.svg';
import backarrow from '../../images/TravelAccount/backarrow.svg';
import { CurrencyContext } from './CurrencyProvider';

function ModalExtend() {
  // 사용자 입력값
  const [searchTerm, setSearchTerm] = useState('');

  const { handleCurrencyChange } = useContext(CurrencyContext);

  const handleCurrencyClick = (country) => {
    handleCurrencyChange(country);
  };

  const searchData = currencyunitdata.filter((country) => {
    const searchString =
      `${country.country} ${country.code} ${country.unit}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  return (
    <ModalWrapper>
      <SearchWrapper>
        <Link to="/travelaccountbook">
          <ImgDiv>
            <img src={backarrow} alt="<" />
          </ImgDiv>
        </Link>
        <SearchInput
          type="text"
          placeholder="국가명 또는 통화 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ImgDiv>
          <img src={search} alt="🔍" />
        </ImgDiv>
      </SearchWrapper>
      <CurrencyList>
        {searchData.map((country) => (
          <CurrencyItem
            key={country.code}
            onClick={() => handleCurrencyClick(country.code)}
          >
            {country.country}
            {country.code} ({country.unit})<SelectBtn>선택</SelectBtn>
          </CurrencyItem>
        ))}
      </CurrencyList>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div``;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #adb6bd;
`;

const ImgDiv = styled.div`
  display: flex;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  margin-left: 20px;
  font-size: 19px;
  outline: none;
  border: 0;
`;

const CurrencyList = styled.ul`
  margin-top: 28px;
  margin-left: 30px;
`;

const CurrencyItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 27px;
`;

const SelectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 30px;

  width: 46px;
  height: 23px;

  border-radius: 5px;
  background: var(--Lightgray, #f5f5f5);

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--Darkgray, #353a40);

  cursor: pointer;
`;

export default ModalExtend;
