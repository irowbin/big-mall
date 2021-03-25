import './menu-item.component.scss'
import React from 'react'
import {Link} from 'react-router-dom'
const MenuItem = ({title, navLink}) => {
    return (
        <div className="card-img-overlay text-center text-white d-flex flex-column justify-content-center">
            <div className="card-title item-desc h2">{title}</div>
            <Link className="card-subtitle mb-2 menu-button" to={`${navLink}`}>Shop Now</Link>
        </div>
    )
}
export default MenuItem
