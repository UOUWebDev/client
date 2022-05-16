import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LeftSide from "./components/mainPost/LeftSide";
import RightSide from "./components/mainPost/RightSide";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import styled from "styled-components";
import DetailPage from "./pages/DetailPage";
import LoginModal from "./components/LoginModal";

const Wrap = styled.div`
  font-family: Noto Sans KR;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: #EFF4EF;
  box-sizing: border-box;
`

function App() {
  return (
    <BrowserRouter>
      <Wrap>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="post" element={<PostPage />} />
            <Route path="detail" element={<DetailPage/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Wrap>
          {/* <LoginModal></LoginModal> */}
    </BrowserRouter>
  );
}

export default App;
