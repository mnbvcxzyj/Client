import React, { useState } from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const participantsData = [
  { name: '박신형', profileImg: '../../images/person.svg' },
  { name: '김예지', profileImg: '../../images/person.svg' },
  { name: '한현서', profileImg: '../../images/person.svg' },
  { name: '장윤경', profileImg: '../../images/person.svg' },
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
        <SelectImg></SelectImg>
        <Demand>
          작성자를 선택해주세요<Req>(필수)</Req>
        </Demand>
        <Divforstyle>
          <Select required>
            <option value="" disabled selected>
              선택해주세요
            </option>
            {participantsData.map((participant, index) => (
              <option key={index} value={participant.name}>
                {participant.name}
              </option>
            ))}
          </Select>
        </Divforstyle>
        <Demand>
          카테고리를 선택해주세요<Req>(필수)</Req>
        </Demand>
        <div style={{ alignItems: 'center' }}>
          {selectedCategory === '직접 입력하기' ? (
            <Divforstyle>
              <InputCategory
                type="text"
                placeholder="새로운 카테고리 입력"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <AddCategoryBtn onClick={handleAddCategory}>추가</AddCategoryBtn>
            </Divforstyle>
          ) : (
            <div>
              <Divforstyle>
                <Select
                  required
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="" disabled>
                    선택하세요
                  </option>
                  {predefinedCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                  {userCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                  <option value="직접 입력하기">직접 입력하기</option>
                </Select>
              </Divforstyle>
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
        <Divforstyle>
          <InputInt type="number" required></InputInt>
        </Divforstyle>
        <Demand>
          메모사항<Req>(선택)</Req>
        </Demand>
        <Divforstyle>
          <InputText></InputText>
        </Divforstyle>
      </InputContainer>
    </>
  );
}

const InputContainer = styled.div`
  width: 87%;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
`;

const SelectImg = styled.select`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
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

const Divforstyle = styled.div`
  width: 100%;
  margin-top: 4px;
  padding: 5px;
  border-radius: 5px;

  background: #f3f3f3;
`;
