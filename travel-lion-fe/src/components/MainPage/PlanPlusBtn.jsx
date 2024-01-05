import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

export default function PlanPlusBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const linkAddSchedule = () => {
    closeModal();
    navigate('/addschedule');
  };

  const linkInviteCode = () => {
    closeModal();
    navigate('/invitecode');
  };

  return (
    <>
      <PlusBtn onClick={toggleModal}>+</PlusBtn>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <Btn onClick={linkInviteCode}>초대코드 입력</Btn>
        <Btn onClick={linkAddSchedule}>리스트 추가</Btn>
      </Modal>
    </>
  );
}

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    borderRadius: '16px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const PlusBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 30px auto;

  // 버튼
  width: 360px;
  height: 55px;
  font-family: Pretendard;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.8px solid #00bc78;
  background: #fff;
  cursor: pointer;
  color: #00bc78;

  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Btn = styled.button`
  width: 283px;
  height: 61px;
  flex-shrink: 0;

  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  border-radius: 11px;
  border: 1px solid #00bc78;

  background: #fff;
  color: #00bc78;

  &:hover {
    background: #00bc78;
    color: #fff;
  }
`;
