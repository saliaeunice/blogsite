import React, { Component } from 'react'
import {Link} from "react-router-dom"

function withLayout(Component) {
function Layout () {


  return (
    <div className='layout'>
    <header className='appbar'>
<span>Logo</span>

<div>
<nav>
<span className='nav-link'><Link to="/"> Home</Link></span>
<span><Link to="/"> About</Link></span>
<span><Link to="/"> Blog</Link></span>
</nav>
</div>
    </header>

    <main className='main-component'>
<Component/>
    </main>
    
    <footer>&copy; 2022 PreMest</footer>
    
    </div>
  )
}
  return Layout
}
export default withLayout