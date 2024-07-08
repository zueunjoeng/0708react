import React from 'react';
import NaviLi from '../component/NaviLi';
import NaviLogo from '../component/NaviLogo'; // 파일 이름 수정
import NaviIcon from '../component/NaviIcon'; // 파일 이름 수정
import logo from '../img/logo.svg';
import '../css/hd.css'


function Hd() {
    return (
        <header id="hd" className='d-flex align-items-center pt-2'>
            <NaviLogo src={logo} />
            <ul id="Menu" className='d-flex ms-1'>
                <NaviLi cls="market me-4" href="" atext="마켓컬리" acls="Menu_txt" />
                <NaviLi cls="beauty me-4" href="" atext="뷰티컬리" acls="Menu_txt" />
            </ul>
            <ul id="gnb" className='d-flex ms-auto me-auto'>
                <NaviLi cls="new me-5" href="" atext="신상품" acls="new_txt" />
                <NaviLi cls="sale me-5" href="" atext="알뜰쇼핑" acls="" />
                <NaviLi cls="best me-5" href="" atext="베스트" acls="" />
                <NaviLi cls="event me-5" href="" atext="특가/혜택" acls="" />
            </ul>
            <ul id="icon" className='d-flex ms-auto'>
                <NaviIcon licls="loca me-4" href="" iconcls="bi bi-geo-alt-fill" acls="" />
                <NaviIcon licls="like me-4" href="" iconcls="bi bi-bag" acls="" />
                <NaviIcon licls="login me-4" href="" iconcls="bi bi-person" acls="" />
            </ul>
        </header>
    )
}

export default Hd
