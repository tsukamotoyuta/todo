import './App.css';
import MyPage from './pages/myPage';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import CreatePage from './pages/createPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='signup' element={<SignupPage />}/>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
