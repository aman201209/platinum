import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header({name}) {
  return (
    <div className='header'>
        <div className='header-name'>{name}</div>
        <div className='header-link'>
            <Link to={"/"} className='header-linkk'>Home /</Link>
        </div>
    </div>
  )
}

export default Header