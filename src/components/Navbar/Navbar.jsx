import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Мои финансы</li>
        <li>
          <Link to='/login'>login</Link>
        </li>
        <li>
          <Link to='/sign-up'>SignUp</Link>
        </li>
        
      </ul>

    </nav>
  )
}
