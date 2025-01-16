import React, { useState } from 'react';
import '../css/common.css';

function Header() {
  const [email, setEmail] = useState(''); // 이메일 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const [isPopupVisible, setIsPopupVisible] = useState(false); // 팝업 가시성 상태
  const [loginError, setLoginError] = useState(''); // 로그인 에러 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible); // 팝업의 상태를 토글
  };

  const handleLogin = async () => {
    const loginData = { email, password };

    try {
      const response = await fetch('http://localhost:8080/api/login', { // Spring Boot 서버의 로그인 API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // 로그인 성공 시
        const data = await response.json();
        console.log('로그인 성공:', data);
        setIsLoggedIn(true);  // 로그인 상태 업데이트
        setIsPopupVisible(false); // 팝업 닫기
      } else {
        // 로그인 실패 시
        const errorData = await response.json();
        setLoginError(errorData.message || '로그인 실패');
      }
    } catch (error) {
      console.error('로그인 요청 오류:', error);
      setLoginError('서버 연결 오류');
    }
  };

  return (
    <div id="header">
      <div className="header_wrap">
        <div className="rm_logo">
          <img src="/images/roommate_logo.png" alt="" />
        </div>
        <div className="rm_img">
          <div className="chat_wrap">
            <img src="images/chat.png" alt="" />
          </div>
          <div className="alarm_wrap">
            <img src="images/alarm.png" alt="" />
            <div className="alarm">
              <div className="flex">
                <div className="img_wrap">
                  <img src="images/alarm_pop.png" alt="" />
                  <p>알림</p>
                </div>
                <img src="images/settimg02.png" alt="" />
              </div>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="alarm_detail">
                  <div className="post">
                    <img src="images/room_img.jpg" alt="" />
                  </div>
                  <div className="profile_detail">
                    <p className="user_name">한대희</p>
                    <p className="user_message">대충 이러이러한 내용</p>
                    <p className="message_time">1일전</p>
                  </div>
                  <img
                    className="delete_btn"
                    src="images/delete01.png"
                    alt="삭제 버튼"
                    onClick={togglePopup} // delete_btn 클릭 시 팝업 닫기
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mypage_wrap">
            <img src="images/mypage.png" alt="" onClick={togglePopup} />
            {isPopupVisible && ( // 팝업이 보이는 경우에만 렌더링
              <div className="popup_wrap">
                <div className="popup_inner">
                  <img
                    src="images/delete01.png"
                    alt="닫기 버튼"
                    className="close_btn"
                    onClick={togglePopup} // X 버튼 클릭 시 팝업 닫기
                  />
                  <div className="login_wrap">
                    <div className="login_title">
                      <p>로그인하고</p>
                      <p>룸메이트 이용하세요</p>
                    </div>
                    <div className="input_wrap01">
                      <input
                        type="text"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="input_wrap02">
                      <label>
                        <input type="checkbox" id="ck01" />
                        <span>자동 로그인</span>
                      </label>
                      <span>이메일/비밀번호 찾기</span>
                    </div>
                    <div className="login_btn">
                      <button onClick={handleLogin}>로그인</button>
                    </div>
                    {loginError && <p className="error">{loginError}</p>}
                    <div className="sns_login">
                      <span>또는 SNS 계정으로 간편하게 이용하기</span>
                      <div>여기에 sns로그인연동</div>
                    </div>
                    <div className="join_btn">
                      <span>아직 룸메이트 회원이 아니신가요?</span>
                      <button className="main_btn">회원가입</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
