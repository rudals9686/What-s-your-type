import React from "react";
import { useNavigate } from "react-router-dom";

const TestPage1 = () => {
  const navigate = useNavigate();
  const goToNext = () => {
    navigate("/result"); // '/next-path'를 원하는 경로로 변경하세요.
  };
  return (
    <>
      <div>test1</div>
      <button style={{ marginTop: "30px" }} type="button" onClick={goToNext}>
        GO
      </button>
    </>
  );
};
export default TestPage1;