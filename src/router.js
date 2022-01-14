import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp/SignUp";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="about" element={<div>Secondhome</div>} />
    </Routes>
  );
};
