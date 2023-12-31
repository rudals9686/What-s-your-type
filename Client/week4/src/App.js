import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TestPage1 from "./pages/TestPage1";
import TestPage2 from "./pages/TestPage2";
import TestPage3 from "./pages/TestPage3";
import ResultPage2 from "./pages/ResultPage2";
import ResultPage3 from "./pages/ResultPage3";
import ResultPage from "./pages/ResultPage";
import CoupangPage from "./pages/Coupang";
import CoupangPage2 from "./pages/Coupang2";
import CoupangPage3 from "./pages/Coupang3";
import CoupangPage4 from "./pages/Coupang4";
import TestPage4 from "./pages/TestPage4";
import ResultPage4 from "./pages/ResultPage4";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test1" element={<TestPage1 />} />
        <Route path="/test2" element={<TestPage2 />} />
        <Route path="/test3" element={<TestPage3 />} />
        <Route path="/test4" element={<TestPage4 />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/result2" element={<ResultPage2 />} />
        <Route path="/result3" element={<ResultPage3 />} />
        <Route path="/result4" element={<ResultPage4 />} />
        <Route path="/coupang" element={<CoupangPage />} />
        <Route path="/coupang2" element={<CoupangPage2 />} />
        <Route path="/coupang3" element={<CoupangPage3 />} />
        <Route path="/coupang4" element={<CoupangPage4 />} />
      </Routes>
    </Router>
  );
}

export default App;
