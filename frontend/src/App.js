// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';  // 로그인 페이지 컴포넌트

function App() {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />  {/* 로그인 페이지 라우팅 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
