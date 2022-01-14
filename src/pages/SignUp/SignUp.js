/**
 * espaço do botao
 * espaço do email
 * espaço da senha
 * espaço do confirmar senha
 */

import { useState } from "react";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const clickButton = () => {
    console.log(email, password, confirmPassword);
  };

  return (
    <div>
      <input placeholder="email" value={email} onChange={handleChangeEmail} />
      <input
        placeholder="Password"
        value={password}
        onChange={handleChangePassword}
      />
      <input
        placeholder="ConfirmPassword"
        value={confirmPassword}
        onChange={handleChangeConfirmPassword}
      />
      <button onClick={clickButton}>SignUp</button>
    </div>
  );
};
