import "./App.css";
import HomePage from "./conponents/s/HomePage";
import LoginPage from "./conponents/authorization/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
