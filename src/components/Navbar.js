import React from "react"
import logo from '../img/img.svg'

export default function Navbar() {
    return (
        <nav className='nav'>
            <img src={logo} className="nav__logo" />
            <h3 className='nav__title'>my travel journal.</h3>
        </nav>
    )
}