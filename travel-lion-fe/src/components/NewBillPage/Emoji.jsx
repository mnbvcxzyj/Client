import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const emojiDataset = [
  {
    id: 1,
    name: '미소짓는 눈으로 살짝 웃는 얼굴',
    image: '😊',
  },
  {
    id: 2,
    name: '파티하는 얼굴',
    image: '🥳',
  },
  {
    id: 3,
    name: '후광이 비치는 웃는 얼굴',
    image: '😇',
  },
  {
    id: 4,
    name: '눈썹을 치켜올린 얼굴',
    image: '🤨',
  },
  {
    id: 5,
    name: '실망했지만 안도하는 얼굴',
    image: '😥',
  },
  {
    id: 6,
    name: '우는 얼굴',
    image: '😢',
  },
  {
    id: 7,
    name: '욕하는 얼굴',
    image: '🤬',
  },
  {
    id: 8,
    name: '똥',
    image: '💩',
  },
  {
    id: 9,
    name: '비둘기',
    image: '🕊️',
  },
  {
    id: 10,
    name: '옆돌기 하는 사람',
    image: '🤸',
  },
  {
    id: 11,
    name: '블링블링',
    image: '✨',
  },
  {
    id: 12,
    name: '낚싯대',
    image: '🎣',
  },
  {
    id: 13,
    name: '묘비',
    image: '🪦',
  },
  {
    id: 14,
    name: '미소 짓는 얼굴',
    image: '😄',
  },
  {
    id: 15,
    name: '큰 미소 짓는 얼굴',
    image: '😁',
  },
  {
    id: 16,
    name: '눈 감고 큰 미소 짓는 얼굴',
    image: '😆',
  },
  {
    id: 17,
    name: '눈 감고 큰 미소 짓는 얼굴2',
    image: '😅',
  },
  {
    id: 18,
    name: '히하히하 하는 얼굴',
    image: '🤣',
  },
  {
    id: 19,
    name: '히히히 하는 얼굴',
    image: '😂',
  },
  {
    id: 20,
    name: '사랑에 빠진 얼굴',
    image: '🥰',
  },
  {
    id: 21,
    name: '하트 눈 얼굴',
    image: '😍',
  },
  {
    id: 22,
    name: '눈부신 미소 얼굴',
    image: '🤩',
  },
  {
    id: 23,
    name: '뽀뽀하는 얼굴',
    image: '😘',
  },
  {
    id: 24,
    name: '손하트',
    image: '🫶',
  },
  {
    id: 25,
    name: '볼을 붉히며 입술을 내민 얼굴',
    image: '😚',
  },
  {
    id: 26,
    name: '입술을 내민 얼굴',
    image: '😙',
  },
  {
    id: 27,
    name: '혓바닥을 내민 얼굴',
    image: '😋',
  },
  {
    id: 28,
    name: '입벌린 얼굴',
    image: '😛',
  },
  {
    id: 29,
    name: '윙크하는 얼굴',
    image: '😜',
  },
  {
    id: 30,
    name: '정신을 놓은 얼굴',
    image: '🤪',
  },
  {
    id: 31,
    name: '환호성을 지르는 얼굴',
    image: '😝',
  },
  {
    id: 32,
    name: '돈에 미친 얼굴',
    image: '🤑',
  },
  {
    id: 33,
    name: '손바닥을 보이며 웃는 얼굴',
    image: '🤗',
  },
  {
    id: 34,
    name: '입을 가리고 웃는 얼굴',
    image: '🤭',
  },
  {
    id: 35,
    name: '조용한 얼굴',
    image: '🤫',
  },
  {
    id: 36,
    name: '비틀린 얼굴',
    image: '🥴',
  },
  {
    id: 37,
    name: '피곤한 얼굴',
    image: '😴',
  },
  {
    id: 38,
    name: '마스크 쓴 얼굴',
    image: '😷',
  },
  {
    id: 39,
    name: '체온계를 문 얼굴',
    image: '🤒',
  },
  {
    id: 40,
    name: '아픈 얼굴',
    image: '🤕',
  },
];

export default function Emoji({ value, onClickEmoji }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  useEffect(() => {
    setSelectedEmoji(value);
  }, [value]);
  const onClickOption = (e) => {
    onClickEmoji(e.target.value);
    setSelectedEmoji(e.target.value);
    setIsDropDown(false);
  };

  const onClickSelect = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <Component>
      <SelectButton type="button" onClick={onClickSelect}>
        {selectedEmoji ? <EmojiIcon>{selectedEmoji}</EmojiIcon> : ''}
      </SelectButton>
      {isDropDown && (
        <DropDown>
          {emojiDataset.map((emoji) => (
            <Option value={emoji.image} key={emoji.id} onClick={onClickOption}>
              {emoji.image}
            </Option>
          ))}
        </DropDown>
      )}
    </Component>
  );
}

const Component = styled.div`
  width: 100%;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const SelectButton = styled.button`
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;

  background-color: #f3f3f3;
  border-radius: 50%;
  cursor: pointer;
`;

const DropDown = styled.div`
  position: absolute;
  left: 20%;
  right: 20%;
  background-color: #ffffff;
  border-radius: 3%;
  border: 0.3px solid #f3f3f3;
`;

const Option = styled.button`
  background-color: #ffffff;
  font-size: 150%;
  height: 4rem;
  border-radius: 5%;

  &:hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }
`;

const EmojiIcon = styled.span`
  margin: auto;
  font-size: 200%;
`;
