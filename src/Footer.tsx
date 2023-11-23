import React from 'react'
import "./css/Footer.css"

export default function Footer() {
  return (
    <div className='Footer-Container'>
      <div className='have-3sec'>
        <div className='first-sec'>
          로고
        </div>
        <div className='second-sec'>
          <strong>고객센터 010-2534-1382</strong> (평일 9:00 ~ 18:00/ 주말 및 공휴일 휴무)  <br />
          <strong>주소 : 경기도 성남시 판교 어쩌구 107동 302호</strong>  <br />
          비트코스(주) | 대표 : 최재혁 | 사업자등록번호 : 010-253-41382 <br />
          <strong>가상자산은 고위험 상품으로써 투자금의 전부 또는 일부 손실을 초래할 수 있습니다.</strong>  <br /><br />
          Copyright ⓒ 2023 - Bitcourse Inc All right reserved.
        </div>
        <div className='third-sec'>
          <div className='third-one' style={{textAlign:"start"}}>
            <strong><h6>회사</h6></strong>
            <ul>
              <li>팀소개</li>
              <li>공지사항</li>
              <li>이용약관</li>
              <li><strong>개인정보처리방침</strong></li>
            </ul>
          </div>
          <div className='third-two' style={{textAlign:"start"}}>
            <strong><h6>고객지원</h6></strong>
            <ul>
              <li>1:1문의하기</li>
              <li>카카오톡 문의</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}