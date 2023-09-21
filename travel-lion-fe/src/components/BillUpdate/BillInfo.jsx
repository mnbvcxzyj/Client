import React, { useState } from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const emojiOptions = [
  { text: '😀', alt: '이모티콘 1' },
  { text: '😄', alt: '이모티콘 2' },
  { text: '😊', alt: '이모티콘 3' },
  { text: '😁', alt: '이모티콘 4' },
  { text: '😆', alt: '이모티콘 5' },
  { text: '😂', alt: '이모티콘 6' },
];

const participantsData = [
  { name: '박신형', profileImg: '../../../public/images/Ellipse.png' },
  { name: '김예지', profileImg: '../../../public/images/person.svg' },
  { name: '한현서', profileImg: '../../../public/images/Ellipse.png' },
  { name: '장윤경', profileImg: '../../../public/images/person.svg' },
];

const initialCategories = ['식비', '교통비', '숙소', '기타'];

export default function BillInfo() {
  const [predefinedCategories, setPredefinedCategories] =
    useState(initialCategories);
  const [userCategories, setUserCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setUserCategories([...userCategories, newCategory]);
      setSelectedCategory(newCategory);
      setNewCategory('');
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    if (value === '직접 입력하기') {
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (category) => {
    const updatedUserCategories = userCategories.filter(
      (cat) => cat !== category,
    );
    setUserCategories(updatedUserCategories);
  };

  return (
    <>
      <InputContainer>
        <SelectImg>
          {emojiOptions.map((option, index) => (
            <option key={index} value={option.text}>
              {option.text}
            </option>
          ))}
        </SelectImg>
        <Demand>
          작성자를 선택해주세요<Req>(필수)</Req>
        </Demand>
        <StyleDiv>
          <Select required>
            <option value="" disabled selected>
              선택해주세요
            </option>
            {participantsData.map((participant, index) => (
              <option key={index} value={participant.name}>
                {/*
                <ProfileImage src={participant.profileImg} /> 이모지 넣기 실패~
                */}
                {participant.name}
              </option>
            ))}
          </Select>
        </StyleDiv>
        <Demand>
          카테고리를 선택해주세요<Req>(필수)</Req>
        </Demand>
        <div style={{ alignItems: 'center' }}>
          {selectedCategory === '직접 입력하기' ? (
            <StyleDiv>
              <InputCategory
                type="text"
                placeholder="새로운 카테고리 입력"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <AddCategoryBtn onClick={handleAddCategory}>추가</AddCategoryBtn>
            </StyleDiv>
          ) : (
            <div>
              <StyleDiv>
                <Select
                  required
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option required value="" disabled>
                    선택하세요
                  </option>
                  {predefinedCategories.map((category, index) => (
                    <option required key={index} value={category}>
                      {category}
                    </option>
                  ))}
                  {userCategories.map((category, index) => (
                    <option required key={index} value={category}>
                      {category}
                    </option>
                  ))}
                  <option required value="직접 입력하기">
                    직접 입력하기
                  </option>
                </Select>
              </StyleDiv>
              {userCategories.includes(selectedCategory) &&
                selectedCategory !== '' && (
                  <DelCategoryBtn
                    style={{ marginLeft: '10px' }}
                    onClick={() => handleDeleteCategory(selectedCategory)}
                  >
                    카테고리 삭제
                  </DelCategoryBtn>
                )}
            </div>
          )}
        </div>
        <Demand>
          사용 금액을 입력해주세요<Req>(필수)</Req>
        </Demand>
        <StyleDiv>
          <InputInt required type="number"></InputInt>
        </StyleDiv>
        <Demand>
          메모사항<Req>(선택)</Req>
        </Demand>
        <StyleDiv>
          <InputText></InputText>
        </StyleDiv>
      </InputContainer>
    </>
  );
}

const InputContainer = styled.div`
  width: 87%;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 70px;
`;

const SelectImg = styled.select`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
`;

const Demand = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;

  color: #525252;

  margin-top: 35px;
`;

const Req = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  color: #888888;
`;

const Select = styled.select`
  width: 100%;
  align-item: center;
  background: #f3f3f3;
  border: none;
`;

const AddCategoryBtn = styled.button`
  padding: 5px;
  background: #3369ff;
  color: #ffffff;
  float: right;

  border-radius: 5px;
`;

const DelCategoryBtn = styled.button`
  margin-top: 4px;
  padding: 5px;
  background: #3369ff;
  color: #ffffff;
  float: right;

  border-radius: 5px;
`;

const InputInt = styled.input`
  width: 100%;
  background: #f3f3f3;
  border: none;
`;

const InputCategory = styled.input`
  width: 90%;
  background: #f3f3f3;
  border: none;
`;

const InputText = styled.textarea`
  width: 100%;
  background: #f3f3f3;
  border: none;
`;

const StyleDiv = styled.div`
  width: 100%;
  margin-top: 4px;
  padding: 5px;
  border-radius: 5px;

  background: #f3f3f3;
`;

const ProfileImage = styled.img`
  width: 20px;
  height: 20px; /* 이미지의 높이를 조절합니다. */
  margin-right: 5px; /* 이미지와 텍스트 사이의 여백을 조절합니다. */
`;

// 이미지 드롭다운 스타일을 정의합니다.
const ImageDropdownItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #525252;

  input[type='radio'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 30px; /* 이미지의 크기를 조정하세요. */
      height: 30px; /* 이미지의 크기를 조정하세요. */
      margin-right: 8px;
    }
  }

  input[type='radio']:checked + label {
    background-color: #3369ff;
    color: #fff;
  }
`;
