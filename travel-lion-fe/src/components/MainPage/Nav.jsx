import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <NavContainer>
        <NavBtn>
          <NavStyle to="/">홈</NavStyle>
          <NavStyle to="/mypage">마페</NavStyle>
        </NavBtn>
      </NavContainer>
    </>
  );
}
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const NavBtn = styled.div`
  padding: 1.3rem;
  overflow: hidden;
  margin-top: 1rem;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1);
`;

const NavStyle = styled(NavLink)`
  padding: 1rem;
`;
