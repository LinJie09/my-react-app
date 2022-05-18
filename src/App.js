import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import SliderWork from "./Container/Slider/SliderWork";
import LoginWork from "./Container/Login/LoginWork";
import TodoWork from "./Container/TodoList/TodoWork";
import CalcWork from "./Container/Calc/CalcWork";
import ApiTest from "./Container/Api/ApiTest";
import SignUpApi from "./Container/SignUpApi/SignUpApi";

import apiPicture from "./Container/picture/apiPicture.jpg";
import sliderPc from "./Container/picture/sliderPc.jpg";
import calcPc from "./Container/picture/calc.jpg";
import loginPc from "./Container/picture/loginPc.jpg";
import todoWork from "./Container/picture/TodoPicture.jpg";
import Item from "./Item";

function App() {
  const [click, setClick] = useState(0);
  const [btn, setBtn] = useState("Show");
  const test = () => {
    setClick(click + 1);
    setBtn("Remove");
    if (click % 2 !== 0) {
      setBtn("Show");
    }
    console.log(click);
  };
  return (
    <main>
      <div className="container">
        <div className="container-link">
          <div className="container-btn">
            <button className="btn-in-chose" onClick={test}>
              {btn} Append the picture
            </button>
            <Link to="/">
              <button className="home">Home</button>
            </Link>
          </div>
          <Link to="/ApiTest">
            <Item test={test} click={click} value={apiPicture} />
          </Link>
          <Link to="/CalcWork">
            <Item test={test} click={click} value={calcPc} />
          </Link>
          <Link to="/SliderWork">
            <Item test={test} click={click} value={sliderPc} />
          </Link>
          <Link to="/LoginWork">
            <Item test={test} click={click} value={loginPc} />
          </Link>
          <Link to="/TodoWork">
            <Item test={test} click={click} value={todoWork} />
          </Link>
        </div>

        <Routes>
          <Route path="/" />
          <Route path="/ApiTest" element={<ApiTest />} />
          <Route path="/TodoWork" element={<TodoWork />} />
          <Route path="/CalcWork" element={<CalcWork />} />
          <Route path="/SliderWork" element={<SliderWork />} />
          <Route path="/LoginWork" element={<LoginWork />} />
          <Route path="/SignUpApi" element={<SignUpApi />} />
        </Routes>
      </div>
    </main>
  );
}
export default App;
