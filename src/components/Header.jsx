import React, { useState } from 'react'
import { Link } from 'react-router'

const Header = () => {
    const [ idArticle, setArticle ] = useState(12)
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Todo">To-do List</Link>
        </nav>
    </header>
  )
}

export default Header