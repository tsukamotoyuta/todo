import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const SigninAPI = async (email, password, nav) => {
  await fetch('http://localhost:8080/login', {
    method: 'POST',
    mode: 'cors',
    // credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"email": email, "password": password}),
  }) 
  .then(async response => {
    // 成功
    if (response.status === 200) {nav('home')
      }

    } else if(response.status === 401) {
      console.log('失敗 : ' + response.status)
    }
  })
}

const LoginPage = () => {
  const[email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const nav = useNavigate()
  const handleSigninSubmit = async() => {
    console.log(email);
    console.log(password);
    await SigninAPI(email, password);
  };

  return (
    <div>
      <input
            placeholder="メールアドレス"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
     <input
            placeholder="パスワード"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button
                type="button"
                className="LoginButton"
                onClick={handleSigninSubmit}
              >ログイン
            </button>

    </div>
  );
}

export default LoginPage;

