import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from './pages/MainPage'
import MyPage from './pages/MyPage'
export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/mypage' element={<MyPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
