import React, { useState, useContext } from 'react';
import 'react-calendar/dist/Calendar.css';
import { countryData } from '../../data/CountryData';
import arrow from '../../images/TravelAccount/arrow.svg';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import * as F from './AddInputStyle';
import { AuthContext } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';
import { getFlagEmoji } from '../../utils/flagEmoji';

const AddInput = () => {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const [title, setTitle] = useState('');
  const [nation, setNation] = useState('미국');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState(0);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const { user, refreshAccessToken } = useContext(AuthContext);
  const axiosInstance = createAxiosInstance(refreshAccessToken);

  const numberCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleBudgetChange = (e) => {
    const value = e.target.value.replace(/,/g, '');

    if (!isNaN(value)) {
      setBudget(numberCommas(value));
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCountrySelect = (countryName) => {
    setNation(countryName);
    setShowDropdown(false);
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0',
    )}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const toggleDateModal = () => {
    setIsDateModalOpen(!isDateModalOpen);
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
    setIsDateModalOpen(!isDateModalOpen);
  };

  const formatSelectedDateRange = (range) => {
    const startDateString = formatDate(range[0]);
    const endDateString = formatDate(range[1]);
    return `${startDateString} ~ ${endDateString}`;
  };

  const handleSubmit = async () => {
    const formData = {
      title,
      nation,
      location,
      startDate: formatDate(dateRange[0]),
      endDate: formatDate(dateRange[1]),
      budget: parseInt(budget.replace(/,/g, '')),
    };

    try {
      const response = await axiosInstance.post('/group', formData, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      console.log(response.data);
      const groupId = response.data.groupId;
      navigate(`/travelaccountbook/${groupId}`);
    } catch (error) {
      console.error('에러가 발생했습니다 ⚠', error);
      alert('에러가 발생했습니다! ⚠');
    }
  };

  return (
    <F.Container>
      <F.Wrapper>
        <F.Text>플랜명을 입력해주세요.</F.Text>
        <F.InputWrapper>
          <F.Input
            type="text"
            placeholder="ex) 자유여행"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </F.InputWrapper>
      </F.Wrapper>

      <F.Wrapper>
        <F.Text>방문 국가를 선택해주세요.</F.Text>
        <F.InputWrapper onClick={toggleDropdown}>
          <F.TextDrop>
            <span className={getFlagEmoji(nation)}></span>
            <F.NationText> {nation}</F.NationText>

            <img src={arrow} alt="⬇️" />
          </F.TextDrop>
        </F.InputWrapper>
        {showDropdown && (
          <F.CountryDropdown>
            {countryData.countries.map((country) => (
              <F.CountryOption
                key={country.code}
                onClick={() => handleCountrySelect(country.name)}
              >
                <span className={getFlagEmoji(country.name)}></span>
                &nbsp;{country.name}
              </F.CountryOption>
            ))}
          </F.CountryDropdown>
        )}
      </F.Wrapper>

      <F.Wrapper>
        <F.Text>방문 지역을 입력해주세요.</F.Text>
        <F.InputWrapper>
          <F.Input
            type="text"
            placeholder="ex) 시드니"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </F.InputWrapper>
        <F.erText>20자 이내로 입력해주세요.</F.erText>
      </F.Wrapper>

      <F.Wrapper>
        <F.Text>여행 기간을 선택해주세요.</F.Text>
        <F.InputWrapper>
          <F.Input
            type="text"
            value={formatSelectedDateRange(dateRange)}
            placeholder="날짜 선택"
            readOnly
          />
          <img src={arrow} alt="⬇️" onClick={toggleDateModal} />
        </F.InputWrapper>
        {isDateModalOpen && (
          <F.DateModal>
            <Calendar
              onChange={handleDateChange}
              value={dateRange}
              selectRange={true}
              formatDay={(locale, date) => date.getDate()}
              prevLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M11.3437 15.8248L5.02499 9.5248C4.94999 9.4498 4.89674 9.36856 4.86524 9.28105C4.83374 9.19355 4.81824 9.0998 4.81874 8.9998C4.81874 8.89981 4.83424 8.80606 4.86524 8.71855C4.89624 8.63105 4.94949 8.5498 5.02499 8.4748L11.3437 2.15605C11.5187 1.98105 11.7375 1.89355 12 1.89355C12.2625 1.89355 12.4875 1.9873 12.675 2.1748C12.8625 2.3623 12.9562 2.58105 12.9562 2.83105C12.9562 3.08105 12.8625 3.2998 12.675 3.4873L7.16249 8.9998L12.675 14.5123C12.85 14.6873 12.9375 14.9031 12.9375 15.1596C12.9375 15.4161 12.8437 15.6378 12.6562 15.8248C12.4687 16.0123 12.25 16.1061 12 16.1061C11.75 16.1061 11.5312 16.0123 11.3437 15.8248Z"
                    fill="#353A40"
                  />
                </svg>
              }
              nextLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.65625 15.8248L12.975 9.5248C13.05 9.4498 13.1032 9.36856 13.1347 9.28105C13.1662 9.19355 13.1817 9.0998 13.1812 8.9998C13.1812 8.89981 13.1657 8.80606 13.1347 8.71855C13.1037 8.63105 13.0505 8.5498 12.975 8.4748L6.65625 2.15605C6.48125 1.98105 6.2625 1.89355 6 1.89355C5.7375 1.89355 5.5125 1.9873 5.325 2.1748C5.1375 2.3623 5.04375 2.58105 5.04375 2.83105C5.04375 3.08105 5.1375 3.2998 5.325 3.4873L10.8375 8.9998L5.325 14.5123C5.15 14.6873 5.0625 14.9031 5.0625 15.1596C5.0625 15.4161 5.15625 15.6378 5.34375 15.8248C5.53125 16.0123 5.75 16.1061 6 16.1061C6.25 16.1061 6.46875 16.0123 6.65625 15.8248Z"
                    fill="#353A40"
                  />
                </svg>
              }
              next2Label={null}
              prev2Label={null}
              showNeighboringMonth={false}
              calendarType="US"
            />
          </F.DateModal>
        )}
      </F.Wrapper>

      <F.Wrapper>
        <F.Text>예상 경비를 작성해주세요.</F.Text>
        <F.InputWrapper>
          <F.Input
            type="text"
            placeholder="숫자만 입력 가능합니다"
            value={budget}
            onChange={handleBudgetChange}
          />
        </F.InputWrapper>
      </F.Wrapper>
      <F.AddButton to="/main" onClick={handleSubmit}>
        확인
      </F.AddButton>
    </F.Container>
  );
};

export default AddInput;
