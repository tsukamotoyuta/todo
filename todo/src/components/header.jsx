import React, { useState } from "react";
import "./components.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    fetch('http://localhost:8080/logout', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.status === 200) {
        console.log("成功");
        navigate("/");
      } else {
        console.log("失敗");
      }
    })
    .catch(error => {
      console.error("エラー:", error);
    });
  };

  return (
    <div className="header">
      <div className="HeaderList">
        <button onClick={handleButtonClick} className="HeaderListButton">
          <ListIcon className="ListIcon" />
        </button>
        {showDropdown && (
          <ul className="DropdownMenu">
            <li><a href="/" onClick={handleLogout()}>ログアウト　　　　＞＞</a></li>
          </ul>
        )}
      </div>
      <p className="AppTitle">
        <a href="/home">Calendar</a>
      </p>
      <div className="AccountCircleIconBackground">
        <a href="/mypage">
          <AccountCircleIcon className="AccountCircleIcon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
