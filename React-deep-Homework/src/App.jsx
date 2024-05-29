import GlobalStyle from "./Components/Money/GlobalStyled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Detail from "./Pages/Detail ";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// path : 브라우저에 접속하기 위한 주소
// element : 작업장소로 가기 위한 그냥 함수명
