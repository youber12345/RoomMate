// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RoomHome from './room_home';  // RoomHome 컴포넌트 이름 수정

function App() {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          <Route path="/" element={<RoomHome />} /> {/* 기본 경로에 RoomHome 연결 */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
