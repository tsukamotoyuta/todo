import React, { useState } from "react";
import Header from '../components/header';
import { useNavigate } from "react-router-dom";

const SigninAPI = async (email, password, nav) => {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      mode: "cors",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.status === 200) {
      nav("home");
    } else if (response.status === 401) {
      alert("メールアドレスまたはパスワードが違います");
      console.log("失敗 : " + response.status);
    }
  } catch (error) {
    console.error("エラー:", error);
  }
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSigninSubmit = () => {
    console.log(email);
    console.log(password);
    SigninAPI(email, password, nav);
  };

  const signup = () => {
    nav("/signup")
  };

  return (
    <><Header />
    
    <div className="login">

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
        ログイン
      </button>
      <a href="/Signup"
        onClick={signup}
        className="SigninHref"
      >新規登録</a>
    </div></>
  );
};

export default LoginPage;
