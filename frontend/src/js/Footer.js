import React from 'react';

function Footer() {
  return (
    <div id="footer">
      <div className="footer_wrap">
        <div className="logo">
          <img src="/images/roommate_logo.png" alt="" />
          <span>(주)룸메이트</span>
        </div>
        <div>
          <span>배너광고 문의 │</span>
          <span> 이용약관 │</span>
          <span> 개인정보처리방침 │</span>
          <span> 고객문의</span>
        </div>
        <div className="footer_text">
          <span>[대표: 장윤주] </span>
          <span>[부대표: 최희수] </span>
          <span>[이사: 조대준]</span>
          <br />
          <p>회사 주소: 서울 중랑구 용마산로90길 28 서일대학교</p>
          <p>전화번호: 02-490-7300</p>
          <span>[청소부: 한대희]</span>
        </div>
      </div>
    </div>
  );
}
export default Footer;