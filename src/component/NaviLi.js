import React from 'react'

//props 다용화 가능 == 재사용이 가능
function NaviLi(props) {
    return (
        <li className={props.cls}>
            <a href={props.href} className={props.acls}>
                {props.atext}
            </a>
        </li>
    )
}

export default NaviLi
