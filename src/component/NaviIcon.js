import React from 'react'

function NaviIcon(props) {
    return (
        <li className={props.licls}>
            <a href={props.href} className={props.acls}>
                <i className={props.iconcls}></i>
            </a>
        </li>
        
    )
}

export default NaviIcon
