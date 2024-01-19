import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null,
  );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  // 로그인
  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  // 로그아웃
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const setTokens = (accessToken, refreshToken) => {
    const newUser = { ...user, accessToken, refreshToken };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const clearTokens = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const refreshAccessToken = async () => {
    if (!user || !user.refreshToken) {
      console.error('리프레시 토큰이 존재하지 않습니다.');
      // 리프레시 토큰이 없을 때 처리, 로그인 페이지로 리디렉션할 수 있음
      return;
    }
    try {
      const response = await axios.post('http://13.125.174.198/token/refresh', {
        refreshToken: user.refreshToken,
      });

      if (response.data && response.data.accessToken) {
        const newUser = { ...user, accessToken: response.data.accessToken };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        return response.data;
      }
    } catch (error) {
      console.error('액세스 토큰 새로고침 중 오류가 발생했습니다:', error);
      logout();
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        setTokens,
        clearTokens,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
