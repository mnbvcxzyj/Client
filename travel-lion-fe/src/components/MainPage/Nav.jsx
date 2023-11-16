import React from 'react';
import { styled, css } from 'styled-components';
import { NavLink, useMatch, useLocation } from 'react-router-dom';
import HomeGreen from '../../images/MainPage/HomeGreen.svg';
import HomeGray from '../../images/MainPage/HomeGray.svg';
import MypageGreen from '../../images/MainPage/MypageGreen.svg';
import MypageGray from '../../images/MainPage/MypageGray.svg';

export default function Nav() {
  const homeMatch = useMatch('/');
  const mypageMatch = useLocation().pathname.startsWith('/mypage');

  return (
    <NavContainer>
      <NavBtn>
        <NavStyle to="/" isActive={homeMatch}>
          <img src={homeMatch ? HomeGreen : HomeGray} alt="home" />
        </NavStyle>

        <NavStyle to="/mypage" isActive={mypageMatch}>
          <img src={mypageMatch ? MypageGreen : MypageGray} alt="mypage" />
        </NavStyle>
      </NavBtn>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 80px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1);
`;

const NavStyle = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  flex-shrink: 0;

  ${(props) =>
    props.isActive &&
    css`
      background: #ddf6c3;
    `}
`;
