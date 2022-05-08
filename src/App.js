import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import SliderWork from "./Slider/SliderWork";
import LoginWork from "./Login/LoginWork";
import TodoWork from "./TodoList/TodoWork";
import CalcWork from "./Calc/CalcWork";
import ApiTest from "./Api/ApiTest";
import SignUpApi from "./SignUpApi/SignUpApi";

import apiPicture from "./picture/apiPicture.jpg";
import sliderPc from "./picture/sliderPc.jpg";
import calcPc from "./picture/calc.jpg";
import loginPc from "./picture/loginPc.jpg";
import ContextWork from "./Context/ContextWork";
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
        </div>

        <Routes>
          <Route path="/" />
          <Route path="/ApiTest" element={<ApiTest />} />
          <Route path="/TodoWork" element={<TodoWork />} />
          <Route path="/CalcWork" element={<CalcWork />} />
          <Route path="/SliderWork" element={<SliderWork />} />
          <Route path="/LoginWork" element={<LoginWork />} />
          <Route path="/SignUpApi" element={<SignUpApi />} />
          <Route path="/ContextWork" element={<ContextWork />} />
        </Routes>
      </div>
    </main>
  );
}
export default App;
