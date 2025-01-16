import React from 'react';
import '../css/reset.css';
import '../css/common.css';
import '../css/room_home.css';
import '../css/header.css';
import Header from './header.js';
import Footer from './Footer.js';

function RoomHome() {
  const roomItems = [
    {
      type: '복층',
      price: '월세 500/30',
      details: '2층,15평,관리비:10만원',
      description: '독산역에서 가까움, 저렴한 월세',
      imgSrc: '/images/room_img.jpg'
    },
    {
      type: '투룸',
      price: '월세 5000/40',
      details: '4층,21평,관리비:15',
      description: '큰방2개/화장실1개, 가산역이랑 가까움',
      imgSrc: '/images/room_img2.jpg'
    },
    {
      type: '투룸',
      price: '월세 1600/10',
      details: '반지하,12평,관리비:0만원',
      description: '관리비 없는 저렴한 반지하',
      imgSrc: '/images/room_img3.png'
    }
  ];

  return (
    <div className="room_home">
      <div className="main_section">
        <div className="banner">
          <img src="/images/banner_img01.jpg" alt="배너 이미지" />
        </div>
        <div className="search_wrap">
          <input type="text" placeholder="지역을 검색해 주세요" />
          <button>검색</button>
        </div>
        <div className="menu_list">
          {['공지사항', '자주묻는질문', '게시글 작성', '찜목록', '꿀팁'].map((menu) => (
            <div className="menu" key={menu}>
              <img src={`/images/${menu}.png`} alt={`${menu} 아이콘`} />
              <span>{menu}</span>
            </div>
          ))}
        </div>
        <RoomSection title="독산동 근처 매물" rooms={roomItems} />
        <RoomSection title="최근본 매물" rooms={roomItems} />
        <RoomSection title="내가본 비슷한 매물" rooms={roomItems} />
      </div>
    </div>
  );
}

function RoomSection({ title, rooms }) {
  return (
    <div className="room_section">
      <p className="room_title">{title}</p>
      <div className="room_list">
        {rooms.map((room) => (
          <div key={room.type} className="room_menu">
            <img src={room.imgSrc} alt={`${room.type} 이미지`} />
            <div>
              <p>{room.type}</p>
              <p>{room.price}</p>
              <p>{room.details}</p>
              <p>{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <RoomHome />
      <Footer />
    </>
  );
}

export default App;