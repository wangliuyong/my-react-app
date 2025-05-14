import "./App.css";
import { Routes, Route } from "react-router-dom";
import Three from "./pages/three/Three";
import Three2 from "./pages/three/Three2";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Three />} />
      <Route path="/three" element={<Three />} />
      <Route path="/three2" element={<Three2 />} />
    </Routes>
  );
}
