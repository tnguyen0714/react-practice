import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
     <header>
        <div className='left_nav_bar'>
            <img className='logo_container' src='https://smiski.com/e/wp-content/uploads/2016/03/top_logo.png' alt='Smiskis Homepage
            '/>
        </div>
        <div className='right_nav_bar'>
            <NavLink to='/news'>
              News
            </NavLink>
            <NavLink to='/SmiskisBottomHeader'>
              Smiskis
            </NavLink>
            <NavLink to='/products'>
              Products
            </NavLink>
            <NavLink to='/where'>
              Where To Buy
            </NavLink>
        </div>
     </header>
  )
}

export default NavBar
