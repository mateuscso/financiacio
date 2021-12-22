import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="about" element={<div>Secondhome</div>} />
    </Routes>
  );
};
