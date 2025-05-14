import { Routes, Route } from "react-router-dom";
import Three from "./views/three/Three";
import Three2 from "./views/three/Three2";

export default function App() {
  return (
    <Routes>
      <Route path="/three" element={<Three />} />
      <Route path="/three2" element={<Three2 />} />
    </Routes>
  );
}
