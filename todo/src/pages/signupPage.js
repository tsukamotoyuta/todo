import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/header';

const SignupAPI = async (username, email, password, nav) => {
  try {
    const response = await fetch("http://localhost:8080/register", {
      method: "POST",
      mode: "cors",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, email: email, password: password }),
    });

    if (response.status === 200) {
      nav("/home");
    } else if (response.status === 401) {
      console.log("失敗 : " + response.status);
    }
  } catch (error) {
    console.error("エラー:", error);
  }
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSigninSubmit = async () => {
    await SignupAPI(username, email, password, nav);
  };

  return (
    <><Header /><div className="login">

      <input
        placeholder="名前"
        type="text"
        value={username}
        className="inputPersonalData"
        onChange={(e) => setUsername(e.target.value)} />
      <input
        placeholder="メールアドレス"
        type="text"
        value={email}
        className="inputPersonalData"
        onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="パスワード"
        type="password"
        value={password}
        className="inputPersonalData"
        onChange={(e) => setPassword(e.target.value)} />
      <button
        type="button"
        className="LoginButton"
        onClick={handleSigninSubmit}
      >
        登録
      </button>

      <a href="/"
        className="SigninHref"
      >ログイン</a>
    </div></>
  );
};

export default LoginPage;
