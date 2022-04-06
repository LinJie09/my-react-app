// import './App.css';
import { render } from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SliderWork from "./Slider/SliderWork";
import LoginWork from "./Login/LoginWork";
import TodoWork from "./TodoList/TodoWork";
import CalcWork from "./Calc/CalcWork";

// import ApiTest from "./Api/apiTest";

function App() {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/App" element={<SliderWork />}></Route>
        <Route path="/App" element={<LoginWork />}></Route>
        <Route path="/App" element={<TodoWork />}></Route>
        <Route path="/App" element={<CalcWork />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
