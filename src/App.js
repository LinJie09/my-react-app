// import './App.css';
import { Routes, Route } from "react-router-dom";
import SliderWork from "./Slider/SliderWork";
import LoginWork from "./Login/LoginWork";
import TodoWork from "./TodoList/TodoWork";
import CalcWork from "./Calc/CalcWork";
import ApiTest from "./Api/ApiTest";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/ApiTest" element={<ApiTest />} />
      <Route path="/SliderWork" element={<SliderWork />} />
      <Route path="/LoginWork" element={<LoginWork />} />
      <Route path="/TodoWork" element={<TodoWork />} />
      <Route path="/CalcWork" element={<CalcWork />} />
    </Routes>
  );
}
export default App;
