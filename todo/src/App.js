import logo from './logo.svg';
import './App.css';
import Test from './pages/homePage';
import Test2 from './pages/formPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Test />} />
        <Route path="test" element={<Test2 />} />
      </Routes>
      
        
    </div>
  );
}

export default App;
